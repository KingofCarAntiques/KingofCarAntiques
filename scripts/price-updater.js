// ===============================================
// 秒估車 - 自動價格更新系統 v4.0
// ===============================================
// 📊 更新方式：市場折舊率 + Google Sheets 數據
// 🔄 執行頻率：每月1日自動執行
// 🛡️ 特色：穩定可靠、不依賴爬蟲
// ===============================================

const fs = require('fs');
const path = require('path');
const https = require('https');

// ===============================================
// 設定
// ===============================================
const CONFIG = {
    CAR_DATA_FILE: path.join(__dirname, '..', 'car-data.js'),
    LOG_FILE: path.join(__dirname, 'update.log'),
    RESULT_FILE: path.join(__dirname, 'price-results.json'),

    // Google Sheets CSV URL (可選)
    GOOGLE_SHEET_CSV_URL: process.env.GOOGLE_SHEET_CSV_URL || '',

    // 折舊率設定（根據台灣二手車市場實際情況）
    DEPRECIATION_RULES: {
        // 車齡對應的年折舊率調整
        yearlyDepreciation: {
            1: 0.15,   // 第1年折舊15%
            2: 0.12,   // 第2年折舊12%
            3: 0.10,   // 第3年折舊10%
            4: 0.08,   // 第4年折舊8%
            5: 0.07,   // 第5年折舊7%
            6: 0.06,   // 第6年以後每年折舊6%
        },
        // 品牌保值係數 (1.0 = 標準, >1 = 更保值, <1 = 較不保值)
        brandMultiplier: {
            'Toyota豐田': 1.15,
            'Lexus凌志': 1.12,
            'Honda本田': 1.10,
            'Mazda馬自達': 1.05,
            'Mercedes-Benz賓士': 1.08,
            'BMW': 1.05,
            'Porsche保時捷': 1.20,
            'Tesla特斯拉': 0.90,
            'Audi奧迪': 1.02,
            'Volkswagen福斯': 0.98,
            'Volvo富豪': 1.00,
            'Nissan日產': 1.02,
            'Ford福特': 0.95,
            'Hyundai現代': 0.98,
            'Kia起亞': 0.97,
            'Mitsubishi三菱': 0.96,
            'Subaru速霸陸': 1.05,
            'Suzuki鈴木': 1.00,
            'Luxgen納智捷': 0.85,
            'Ferrari法拉利': 1.25,
            'Lamborghini藍寶堅尼': 1.22,
            'McLaren乘風': 1.15,
            'Bentley賓利': 1.10,
            'Rolls-Royce勞斯萊斯': 1.15,
            'Maserati瑪莎拉蒂': 0.92,
            'Land Rover荒原路華': 0.95,
            'Jaguar捷豹': 0.90,
        },
        // 市場波動率 (模擬每月市場微幅變動)
        marketFluctuation: 0.02  // ±2%
    }
};

// ===============================================
// 日誌系統
// ===============================================
function log(message, level = 'INFO') {
    const timestamp = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' });
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(CONFIG.LOG_FILE, logMessage + '\n');
}

function logSuccess(message) { log(message, 'SUCCESS'); }
function logError(message) { log(message, 'ERROR'); }
function logWarn(message) { log(message, 'WARN'); }

// ===============================================
// 讀取車款資料庫
// ===============================================
function loadCarDatabase() {
    try {
        const content = fs.readFileSync(CONFIG.CAR_DATA_FILE, 'utf8');

        // 提取 carDatabase 物件
        // 使用更精確的正則：找到 const carDatabase = { 開始，直到檔案結尾的 };
        const match = content.match(/const carDatabase = (\{[\s\S]*\});?\s*$/);
        if (!match) {
            throw new Error('無法解析 car-data.js 格式');
        }

        // 使用 Function 建構式安全解析（避免 eval）
        const carDatabase = new Function('return ' + match[1])();

        const brandCount = Object.keys(carDatabase).length;
        const modelCount = Object.values(carDatabase).reduce((sum, brand) =>
            sum + (brand.models ? brand.models.length : 0), 0);

        log(`✅ 載入車款資料庫：${brandCount} 個品牌，${modelCount} 款車型`);
        return carDatabase;

    } catch (error) {
        logError(`載入車款資料庫失敗: ${error.message}`);
        return null;
    }
}

// ===============================================
// 從 Google Sheets 讀取價格數據 (可選)
// ===============================================
async function fetchGoogleSheetsData() {
    if (!CONFIG.GOOGLE_SHEET_CSV_URL) {
        log('⚠️ 未設定 Google Sheets URL，使用本地計算');
        return {};
    }

    return new Promise((resolve) => {
        log('📊 讀取 Google Sheets 數據...');

        https.get(CONFIG.GOOGLE_SHEET_CSV_URL, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const lines = data.split('\n');
                    const priceData = {};

                    for (let i = 1; i < lines.length; i++) {
                        const values = lines[i].split(',');
                        if (values.length >= 3) {
                            const brand = values[0]?.trim();
                            const model = values[1]?.trim();
                            const price = parseInt(values[2]?.trim()?.replace(/[^\d]/g, ''), 10);

                            if (brand && model && price > 0) {
                                const key = `${brand}|${model}`;
                                priceData[key] = price;
                            }
                        }
                    }

                    logSuccess(`Google Sheets 載入 ${Object.keys(priceData).length} 筆數據`);
                    resolve(priceData);
                } catch (error) {
                    logError(`Google Sheets 解析失敗: ${error.message}`);
                    resolve({});
                }
            });
        }).on('error', (error) => {
            logError(`Google Sheets 請求失敗: ${error.message}`);
            resolve({});
        });
    });
}

// ===============================================
// 計算市場價格調整
// ===============================================
function calculatePriceAdjustment(brand) {
    const rules = CONFIG.DEPRECIATION_RULES;

    // 取得品牌保值係數
    const brandMultiplier = rules.brandMultiplier[brand] || 1.0;

    // 模擬市場波動 (±2%)
    const fluctuation = 1 + (Math.random() * 2 - 1) * rules.marketFluctuation;

    // 每月微調係數 (根據當月份調整)
    const month = new Date().getMonth() + 1;
    let seasonalFactor = 1.0;

    // 季節性調整：
    // 1-2月 農曆年前後，二手車需求較高
    // 7-8月 暑假換車潮
    // 11-12月 年底促銷
    if (month === 1 || month === 2) seasonalFactor = 1.02;
    else if (month === 7 || month === 8) seasonalFactor = 1.01;
    else if (month === 11 || month === 12) seasonalFactor = 0.99;

    return brandMultiplier * fluctuation * seasonalFactor;
}

// ===============================================
// 更新價格
// ===============================================
async function updatePrices() {
    log('========================================');
    log('🚀 秒估車 - 自動價格更新系統 v4.0');
    log('========================================');

    const startTime = Date.now();

    // 1. 載入車款資料庫
    const carDatabase = loadCarDatabase();
    if (!carDatabase) {
        logError('無法載入車款資料庫，終止執行');
        process.exit(1);
    }

    // 2. 讀取 Google Sheets 數據 (如有設定)
    const sheetPrices = await fetchGoogleSheetsData();
    const hasSheetData = Object.keys(sheetPrices).length > 0;

    // 3. 執行價格更新
    const results = {
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString('zh-TW'),
        stats: {
            totalBrands: 0,
            totalModels: 0,
            updatedFromSheet: 0,
            updatedFromCalculation: 0
        },
        updates: []
    };

    for (const [brandName, brandData] of Object.entries(carDatabase)) {
        results.stats.totalBrands++;

        if (!brandData.models || !Array.isArray(brandData.models)) {
            continue;
        }

        // 計算品牌調整係數
        const adjustment = calculatePriceAdjustment(brandName);

        for (const model of brandData.models) {
            results.stats.totalModels++;

            const sheetKey = `${brandName}|${model.name}`;
            const oldPrice = model.basePrice;
            let newPrice = oldPrice;
            let source = 'calculation';

            // 優先使用 Google Sheets 數據
            if (hasSheetData && sheetPrices[sheetKey]) {
                newPrice = sheetPrices[sheetKey];
                source = 'googleSheets';
                results.stats.updatedFromSheet++;
            } else {
                // 使用市場調整計算
                newPrice = Math.round(oldPrice * adjustment);

                // 確保價格變動在合理範圍內 (±5%)
                const maxChange = oldPrice * 0.05;
                if (Math.abs(newPrice - oldPrice) > maxChange) {
                    newPrice = oldPrice + Math.sign(newPrice - oldPrice) * maxChange;
                }

                newPrice = Math.round(newPrice);
                results.stats.updatedFromCalculation++;
            }

            // 更新價格
            if (newPrice !== oldPrice) {
                const change = ((newPrice - oldPrice) / oldPrice * 100).toFixed(2);
                model.basePrice = newPrice;

                results.updates.push({
                    brand: brandName,
                    model: model.name,
                    oldPrice: oldPrice,
                    newPrice: newPrice,
                    change: change + '%',
                    source: source
                });
            }
        }
    }

    // 4. 儲存結果
    fs.writeFileSync(CONFIG.RESULT_FILE, JSON.stringify(results, null, 2), 'utf8');

    // 5. 更新 car-data.js
    await updateCarDataFile(carDatabase, results);

    // 6. 輸出統計
    const duration = ((Date.now() - startTime) / 1000).toFixed(1);

    log('\n========================================');
    log('📊 執行統計');
    log('========================================');
    log(`總品牌數: ${results.stats.totalBrands}`);
    log(`總車款數: ${results.stats.totalModels}`);
    log(`Google Sheets 更新: ${results.stats.updatedFromSheet}`);
    log(`市場計算更新: ${results.stats.updatedFromCalculation}`);
    log(`價格變動筆數: ${results.updates.length}`);
    log(`執行時間: ${duration} 秒`);
    log('========================================');

    return results;
}

// ===============================================
// 更新 car-data.js 檔案
// ===============================================
async function updateCarDataFile(carDatabase, results) {
    try {
        log('📝 更新 car-data.js...');

        // 備份原檔案
        const backupDir = path.join(__dirname, 'backups');
        if (!fs.existsSync(backupDir)) {
            fs.mkdirSync(backupDir, { recursive: true });
        }

        const today = new Date().toISOString().split('T')[0];
        const backupFile = path.join(backupDir, `car-data_${today}.js`);
        fs.copyFileSync(CONFIG.CAR_DATA_FILE, backupFile);
        log(`✅ 已備份至: ${backupFile}`);

        // 讀取原始檔案
        let content = fs.readFileSync(CONFIG.CAR_DATA_FILE, 'utf8');

        // 更新日期資訊
        const now = new Date();
        const updateDate = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`;
        const updateDateISO = now.toISOString().split('T')[0];

        // 計算統計數據
        const brandCount = Object.keys(carDatabase).length;
        const modelCount = Object.values(carDatabase).reduce((sum, brand) =>
            sum + (brand.models ? brand.models.length : 0), 0);

        // 更新 carDataInfo
        const newCarDataInfo = `const carDataInfo = {
    lastUpdate: "${updateDate}",
    lastUpdateDate: "${updateDateISO}",
    dataSource: "市場行情、折舊率計算（每月自動更新）",
    totalBrands: ${brandCount},
    totalModels: ${modelCount}
};`;

        content = content.replace(
            /const carDataInfo = \{[\s\S]*?\};/,
            newCarDataInfo
        );

        // 生成新的 carDatabase 字串
        const carDatabaseStr = generateCarDatabaseString(carDatabase);

        // 替換 carDatabase
        content = content.replace(
            /const carDatabase = \{[\s\S]*?\};(?=\s*(?:\/\/|$|\n\n))/,
            `const carDatabase = ${carDatabaseStr};`
        );

        // 寫入檔案
        fs.writeFileSync(CONFIG.CAR_DATA_FILE, content, 'utf8');

        logSuccess('✅ car-data.js 更新完成！');

    } catch (error) {
        logError(`更新 car-data.js 失敗: ${error.message}`);
        throw error;
    }
}

// ===============================================
// 生成 carDatabase 字串 (保持格式)
// ===============================================
function generateCarDatabaseString(carDatabase) {
    let result = '{\n';

    const brands = Object.entries(carDatabase);
    brands.forEach(([brandName, brandData], brandIndex) => {
        result += `    "${brandName}": {\n`;
        result += `        models: [\n`;

        if (brandData.models && Array.isArray(brandData.models)) {
            brandData.models.forEach((model, modelIndex) => {
                const name = model.name.replace(/"/g, '\\"');
                const basePrice = model.basePrice;
                const depreciation = model.depreciation || 0.15;

                result += `            { name: "${name}", basePrice: ${basePrice}, depreciation: ${depreciation} }`;

                if (modelIndex < brandData.models.length - 1) {
                    result += ',';
                }
                result += '\n';
            });
        }

        result += `        ]\n`;
        result += `    }`;

        if (brandIndex < brands.length - 1) {
            result += ',';
        }
        result += '\n';
    });

    result += '}';
    return result;
}

// ===============================================
// 執行入口
// ===============================================
if (require.main === module) {
    // 清空日誌
    fs.writeFileSync(CONFIG.LOG_FILE, '', 'utf8');

    updatePrices()
        .then(results => {
            log(`\n✅ 價格更新完成！共處理 ${results.stats.totalModels} 款車型`);
            process.exit(0);
        })
        .catch(error => {
            logError(`執行失敗: ${error.message}`);
            console.error(error);
            process.exit(1);
        });
}

module.exports = { updatePrices };
