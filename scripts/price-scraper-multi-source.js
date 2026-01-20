// ===============================================
// 秒估車 - 多來源價格爬蟲系統 v3.0
// ===============================================
// 📊 數據來源：8891汽車網、ABC好車網、Google Sheets
// 🔄 執行頻率：每月1日自動執行
// 🛡️ 特色：多來源交叉驗證、異常值過濾、加權平均
// ===============================================

const puppeteer = require('puppeteer');
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// ===============================================
// 設定
// ===============================================
const CONFIG = {
    // 檔案路徑
    CAR_DATA_FILE: path.join(__dirname, '..', 'car-data.js'),
    PRICE_RESULT_FILE: path.join(__dirname, 'price-results.json'),
    LOG_FILE: path.join(__dirname, 'scraper.log'),

    // Google Sheets 設定（可選）
    // 格式：https://docs.google.com/spreadsheets/d/{SHEET_ID}/export?format=csv
    GOOGLE_SHEET_CSV_URL: process.env.GOOGLE_SHEET_CSV_URL || '',

    // 爬蟲設定
    REQUEST_DELAY: 3000,        // 請求間隔（毫秒）
    MAX_RETRIES: 3,             // 最大重試次數
    TIMEOUT: 30000,             // 請求超時時間

    // 價格計算設定
    PRICE_CHANGE_THRESHOLD: 0.30,  // 價格變化超過30%視為異常
    MIN_SOURCES_FOR_UPDATE: 1,     // 至少需要幾個來源才更新

    // 來源權重（總和=1）
    SOURCE_WEIGHTS: {
        '8891': 0.5,
        'abc': 0.3,
        'googleSheets': 0.2
    }
};

// ===============================================
// 日誌系統
// ===============================================
function log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(CONFIG.LOG_FILE, logMessage + '\n');
}

function logError(message) { log(message, 'ERROR'); }
function logWarn(message) { log(message, 'WARN'); }
function logSuccess(message) { log(message, 'SUCCESS'); }

// ===============================================
// 讀取現有車款資料庫
// ===============================================
function loadCarDatabase() {
    try {
        const content = fs.readFileSync(CONFIG.CAR_DATA_FILE, 'utf8');

        // 提取 carDatabase 物件
        const match = content.match(/const carDatabase = (\{[\s\S]*?\});/);
        if (!match) {
            throw new Error('無法解析 car-data.js 格式');
        }

        // 安全解析
        const carDatabase = eval('(' + match[1] + ')');

        log(`✅ 載入車款資料庫：${Object.keys(carDatabase).length} 個品牌`);
        return carDatabase;

    } catch (error) {
        logError(`載入車款資料庫失敗: ${error.message}`);
        return null;
    }
}

// ===============================================
// 來源1：8891 汽車網爬蟲 (Puppeteer)
// ===============================================
async function scrape8891(browser, brand, model) {
    const page = await browser.newPage();

    try {
        log(`🔍 [8891] 查詢: ${brand} ${model}`);

        // 設定 User-Agent
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

        // 品牌名稱映射（8891使用的品牌ID）
        const brandMapping = {
            'Toyota豐田': 'toyota',
            'Honda本田': 'honda',
            'Nissan日產': 'nissan',
            'Mazda馬自達': 'mazda',
            'Mercedes-Benz賓士': 'mercedes-benz',
            'BMW': 'bmw',
            'Audi奧迪': 'audi',
            'Lexus凌志': 'lexus',
            'Porsche保時捷': 'porsche',
            'Volkswagen福斯': 'volkswagen',
            'Tesla特斯拉': 'tesla',
            'Volvo富豪': 'volvo',
            'Ford福特': 'ford',
            'Hyundai現代': 'hyundai',
            'Kia起亞': 'kia',
            'Mitsubishi三菱': 'mitsubishi',
            'Subaru速霸陸': 'subaru',
            'Suzuki鈴木': 'suzuki',
            'Luxgen納智捷': 'luxgen'
        };

        const brandSlug = brandMapping[brand] || brand.toLowerCase().replace(/[^\w]/g, '');
        const searchUrl = `https://auto.8891.com.tw/usedauto-search.html?keyword=${encodeURIComponent(model)}`;

        await page.goto(searchUrl, {
            waitUntil: 'networkidle2',
            timeout: CONFIG.TIMEOUT
        });

        // 等待價格元素載入
        await page.waitForSelector('.price-num, .car-price, [class*="price"]', { timeout: 10000 }).catch(() => null);

        // 提取價格
        const prices = await page.evaluate(() => {
            const priceElements = document.querySelectorAll('.price-num, .car-price, [class*="price"]');
            const extractedPrices = [];

            priceElements.forEach(el => {
                const text = el.textContent || '';
                // 匹配數字（萬）
                const match = text.match(/(\d+\.?\d*)\s*萬/);
                if (match) {
                    const priceWan = parseFloat(match[1]);
                    if (priceWan > 5 && priceWan < 5000) { // 合理範圍：5萬~5000萬
                        extractedPrices.push(priceWan * 10000); // 轉換為元
                    }
                }
            });

            return extractedPrices;
        });

        await page.close();

        if (prices.length === 0) {
            logWarn(`[8891] ${brand} ${model}: 未找到價格`);
            return null;
        }

        // 計算平均價格（排除最高最低）
        prices.sort((a, b) => a - b);
        const trimmedPrices = prices.length > 4
            ? prices.slice(1, -1)  // 排除最高最低
            : prices;

        const avgPrice = Math.round(trimmedPrices.reduce((a, b) => a + b, 0) / trimmedPrices.length);

        logSuccess(`[8891] ${brand} ${model}: ${avgPrice.toLocaleString()} 元 (樣本數: ${prices.length})`);

        return {
            source: '8891',
            price: avgPrice,
            sampleCount: prices.length,
            minPrice: Math.min(...prices),
            maxPrice: Math.max(...prices)
        };

    } catch (error) {
        logError(`[8891] ${brand} ${model} 失敗: ${error.message}`);
        await page.close().catch(() => {});
        return null;
    }
}

// ===============================================
// 來源2：ABC 好車網爬蟲
// ===============================================
async function scrapeABC(brand, model) {
    try {
        log(`🔍 [ABC好車網] 查詢: ${brand} ${model}`);

        // ABC好車網搜尋
        const searchUrl = `https://www.abccar.com.tw/used_car.php?keyword=${encodeURIComponent(model)}`;

        const response = await axios.get(searchUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Accept': 'text/html,application/xhtml+xml',
                'Accept-Language': 'zh-TW,zh;q=0.9'
            },
            timeout: CONFIG.TIMEOUT
        });

        const $ = cheerio.load(response.data);
        const prices = [];

        // 解析價格（根據網站結構調整選擇器）
        $('.car-price, .price, [class*="price"]').each((i, el) => {
            const text = $(el).text();
            const match = text.match(/(\d+\.?\d*)\s*萬/);
            if (match) {
                const priceWan = parseFloat(match[1]);
                if (priceWan > 5 && priceWan < 5000) {
                    prices.push(priceWan * 10000);
                }
            }
        });

        if (prices.length === 0) {
            logWarn(`[ABC] ${brand} ${model}: 未找到價格`);
            return null;
        }

        const avgPrice = Math.round(prices.reduce((a, b) => a + b, 0) / prices.length);

        logSuccess(`[ABC] ${brand} ${model}: ${avgPrice.toLocaleString()} 元 (樣本數: ${prices.length})`);

        return {
            source: 'abc',
            price: avgPrice,
            sampleCount: prices.length
        };

    } catch (error) {
        logError(`[ABC] ${brand} ${model} 失敗: ${error.message}`);
        return null;
    }
}

// ===============================================
// 來源3：Google Sheets 數據
// ===============================================
async function fetchGoogleSheetsData() {
    if (!CONFIG.GOOGLE_SHEET_CSV_URL) {
        log('⚠️ 未設定 Google Sheets URL，跳過此來源');
        return {};
    }

    try {
        log('📊 讀取 Google Sheets 數據...');

        const response = await axios.get(CONFIG.GOOGLE_SHEET_CSV_URL, {
            timeout: CONFIG.TIMEOUT
        });

        // 解析 CSV
        const lines = response.data.split('\n');
        const headers = lines[0].split(',');
        const priceData = {};

        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',');
            if (values.length >= 3) {
                const brand = values[0]?.trim();
                const model = values[1]?.trim();
                const price = parseInt(values[2]?.trim()?.replace(/[^\d]/g, ''), 10);

                if (brand && model && price > 0) {
                    const key = `${brand}|${model}`;
                    priceData[key] = {
                        source: 'googleSheets',
                        price: price,
                        brand: brand,
                        model: model
                    };
                }
            }
        }

        logSuccess(`Google Sheets 載入 ${Object.keys(priceData).length} 筆數據`);
        return priceData;

    } catch (error) {
        logError(`Google Sheets 讀取失敗: ${error.message}`);
        return {};
    }
}

// ===============================================
// 價格整合引擎
// ===============================================
function calculateFinalPrice(currentPrice, sources) {
    // 過濾有效來源
    const validSources = sources.filter(s => s && s.price > 0);

    if (validSources.length < CONFIG.MIN_SOURCES_FOR_UPDATE) {
        return { updated: false, reason: '來源數量不足' };
    }

    // 異常值檢測：排除偏離過大的價格
    const priceList = validSources.map(s => s.price);
    const median = priceList.sort((a, b) => a - b)[Math.floor(priceList.length / 2)];

    const filteredSources = validSources.filter(s => {
        const deviation = Math.abs(s.price - median) / median;
        return deviation < CONFIG.PRICE_CHANGE_THRESHOLD;
    });

    if (filteredSources.length === 0) {
        return { updated: false, reason: '所有價格異常' };
    }

    // 加權平均計算
    let weightedSum = 0;
    let weightSum = 0;

    for (const source of filteredSources) {
        const weight = CONFIG.SOURCE_WEIGHTS[source.source] || 0.1;
        weightedSum += source.price * weight;
        weightSum += weight;
    }

    const newPrice = Math.round(weightedSum / weightSum);

    // 檢查價格變化是否合理
    const priceChange = Math.abs(newPrice - currentPrice) / currentPrice;

    if (priceChange > CONFIG.PRICE_CHANGE_THRESHOLD) {
        return {
            updated: false,
            reason: `價格變化過大 (${(priceChange * 100).toFixed(1)}%)`,
            suggestedPrice: newPrice
        };
    }

    return {
        updated: true,
        newPrice: newPrice,
        oldPrice: currentPrice,
        change: ((newPrice - currentPrice) / currentPrice * 100).toFixed(2),
        sources: filteredSources.map(s => s.source)
    };
}

// ===============================================
// 主要執行流程
// ===============================================
async function main() {
    log('========================================');
    log('🚀 秒估車 - 多來源價格更新系統 v3.0');
    log('========================================');

    const startTime = Date.now();

    // 1. 載入車款資料庫
    const carDatabase = loadCarDatabase();
    if (!carDatabase) {
        logError('無法載入車款資料庫，終止執行');
        process.exit(1);
    }

    // 2. 啟動瀏覽器
    log('🌐 啟動瀏覽器...');
    const browser = await puppeteer.launch({
        headless: 'new',
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--disable-gpu'
        ]
    });

    // 3. 預先載入 Google Sheets 數據
    const googleSheetsData = await fetchGoogleSheetsData();

    // 4. 執行爬蟲
    const results = {
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString('zh-TW'),
        stats: {
            totalBrands: 0,
            totalModels: 0,
            updatedCount: 0,
            failedCount: 0,
            skippedCount: 0
        },
        updates: [],
        failures: []
    };

    // 熱門品牌優先（節省時間）
    const priorityBrands = [
        'Toyota豐田', 'Honda本田', 'Nissan日產', 'Mazda馬自達',
        'Mercedes-Benz賓士', 'BMW', 'Audi奧迪', 'Lexus凌志',
        'Porsche保時捷', 'Tesla特斯拉', 'Volkswagen福斯'
    ];

    const sortedBrands = Object.keys(carDatabase).sort((a, b) => {
        const aIdx = priorityBrands.indexOf(a);
        const bIdx = priorityBrands.indexOf(b);
        if (aIdx === -1 && bIdx === -1) return 0;
        if (aIdx === -1) return 1;
        if (bIdx === -1) return -1;
        return aIdx - bIdx;
    });

    for (const brandName of sortedBrands) {
        const brandData = carDatabase[brandName];
        results.stats.totalBrands++;

        log(`\n📊 處理品牌: ${brandName} (${brandData.models.length} 款車型)`);

        // 只處理熱門車款（前10款）以節省時間
        const modelsToProcess = brandData.models.slice(0, 10);

        for (const model of modelsToProcess) {
            results.stats.totalModels++;

            try {
                // 收集各來源價格
                const sources = [];

                // 來源1: 8891
                const price8891 = await scrape8891(browser, brandName, model.name);
                if (price8891) sources.push(price8891);

                // 延遲避免請求過快
                await sleep(CONFIG.REQUEST_DELAY);

                // 來源2: ABC好車網
                const priceABC = await scrapeABC(brandName, model.name);
                if (priceABC) sources.push(priceABC);

                // 來源3: Google Sheets
                const sheetKey = `${brandName}|${model.name}`;
                if (googleSheetsData[sheetKey]) {
                    sources.push(googleSheetsData[sheetKey]);
                }

                // 計算最終價格
                const result = calculateFinalPrice(model.basePrice, sources);

                if (result.updated) {
                    // 更新資料庫中的價格
                    model.basePrice = result.newPrice;
                    results.stats.updatedCount++;
                    results.updates.push({
                        brand: brandName,
                        model: model.name,
                        oldPrice: result.oldPrice,
                        newPrice: result.newPrice,
                        change: result.change + '%',
                        sources: result.sources
                    });

                    logSuccess(`✅ ${brandName} ${model.name}: ${result.oldPrice.toLocaleString()} → ${result.newPrice.toLocaleString()} (${result.change}%)`);
                } else {
                    results.stats.skippedCount++;
                    log(`⏭️ ${brandName} ${model.name}: 跳過 - ${result.reason}`);
                }

            } catch (error) {
                results.stats.failedCount++;
                results.failures.push({
                    brand: brandName,
                    model: model.name,
                    error: error.message
                });
                logError(`${brandName} ${model.name}: ${error.message}`);
            }

            // 延遲
            await sleep(1000);
        }
    }

    // 5. 關閉瀏覽器
    await browser.close();

    // 6. 儲存結果
    fs.writeFileSync(CONFIG.PRICE_RESULT_FILE, JSON.stringify(results, null, 2), 'utf8');

    // 7. 更新 car-data.js
    await updateCarDataFile(carDatabase, results);

    // 8. 輸出統計
    const duration = ((Date.now() - startTime) / 1000 / 60).toFixed(1);

    log('\n========================================');
    log('📊 執行統計');
    log('========================================');
    log(`總品牌數: ${results.stats.totalBrands}`);
    log(`處理車款: ${results.stats.totalModels}`);
    log(`成功更新: ${results.stats.updatedCount}`);
    log(`跳過: ${results.stats.skippedCount}`);
    log(`失敗: ${results.stats.failedCount}`);
    log(`執行時間: ${duration} 分鐘`);
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

        const backupFile = path.join(backupDir, `car-data_${new Date().toISOString().split('T')[0]}.js`);
        fs.copyFileSync(CONFIG.CAR_DATA_FILE, backupFile);
        log(`✅ 已備份至: ${backupFile}`);

        // 讀取原始檔案
        let content = fs.readFileSync(CONFIG.CAR_DATA_FILE, 'utf8');

        // 更新日期
        const now = new Date();
        const updateDate = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`;

        content = content.replace(
            /\/\/ 📅 最後更新：.*/,
            `// 📅 最後更新：${updateDate}`
        );

        // 更新資料來源說明
        content = content.replace(
            /\/\/ 📊 數據來源：.*/,
            `// 📊 數據來源：8891汽車網、ABC好車網、市場行情（自動更新）`
        );

        // 替換 carDatabase 物件
        const carDatabaseStr = JSON.stringify(carDatabase, null, 4)
            .replace(/"(\w+)":/g, '$1:')  // 移除鍵的引號
            .replace(/: "([^"]+)"/g, ': "$1"');  // 保留字串值的引號

        content = content.replace(
            /const carDatabase = \{[\s\S]*?\};/,
            `const carDatabase = ${carDatabaseStr};`
        );

        // 寫入檔案
        fs.writeFileSync(CONFIG.CAR_DATA_FILE, content, 'utf8');

        logSuccess('car-data.js 更新完成！');

    } catch (error) {
        logError(`更新 car-data.js 失敗: ${error.message}`);
        throw error;
    }
}

// ===============================================
// 工具函數
// ===============================================
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ===============================================
// 執行入口
// ===============================================
if (require.main === module) {
    main()
        .then(results => {
            log(`\n✅ 價格更新完成！共更新 ${results.stats.updatedCount} 款車型`);
            process.exit(0);
        })
        .catch(error => {
            logError(`執行失敗: ${error.message}`);
            console.error(error);
            process.exit(1);
        });
}

module.exports = { main, scrape8891, scrapeABC, calculateFinalPrice };
