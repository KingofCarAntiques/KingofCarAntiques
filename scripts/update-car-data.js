// ===============================================
// 秒估車 - 自動更新 car-data.js 腳本
// ===============================================
// 📝 功能：讀取爬蟲數據並更新車價資料庫
// 🔄 執行時機：在爬蟲完成後執行
// ===============================================

const fs = require('fs');
const path = require('path');

// 檔案路徑
const PRICE_DATA_FILE = path.join(__dirname, 'price-data.json');
const CAR_DATA_FILE = path.join(__dirname, '..', 'car-data.js');
const BACKUP_DIR = path.join(__dirname, 'backups');

// ===============================================
// 讀取現有車款資料庫
// ===============================================
function readCarData() {
    try {
        const content = fs.readFileSync(CAR_DATA_FILE, 'utf8');

        // 移除 JavaScript 語法，只保留 JSON 數據
        const jsonMatch = content.match(/const\s+carDatabase\s*=\s*(\{[\s\S]*?\});/);

        if (!jsonMatch) {
            throw new Error('無法解析 car-data.js');
        }

        // 使用 eval 來解析（注意：生產環境應使用更安全的方法）
        const carDatabase = eval(`(${jsonMatch[1]})`);

        console.log('✅ 成功讀取 car-data.js');
        return carDatabase;

    } catch (error) {
        console.error('❌ 讀取 car-data.js 失敗:', error.message);
        return null;
    }
}

// ===============================================
// 讀取爬蟲結果
// ===============================================
function readPriceData() {
    try {
        if (!fs.existsSync(PRICE_DATA_FILE)) {
            console.log('⚠️ 找不到爬蟲數據檔案，使用現有價格');
            return null;
        }

        const content = fs.readFileSync(PRICE_DATA_FILE, 'utf8');
        const priceData = JSON.parse(content);

        console.log('✅ 成功讀取爬蟲數據');
        return priceData;

    } catch (error) {
        console.error('❌ 讀取爬蟲數據失敗:', error.message);
        return null;
    }
}

// ===============================================
// 更新價格
// ===============================================
function updatePrices(carDatabase, priceData) {
    if (!priceData || !priceData.brands) {
        console.log('⚠️ 無新價格數據，保持現有價格');
        return { carDatabase, updated: false };
    }

    let updateCount = 0;

    // 遍歷爬蟲數據
    for (const [brandName, models] of Object.entries(priceData.brands)) {
        if (!carDatabase[brandName]) {
            console.log(`⚠️ 品牌不存在: ${brandName}`);
            continue;
        }

        // 更新該品牌下的車款價格
        for (const modelData of models) {
            const modelIndex = carDatabase[brandName].models.findIndex(
                m => m.name === modelData.model
            );

            if (modelIndex === -1) {
                console.log(`⚠️ 車款不存在: ${brandName} ${modelData.model}`);
                continue;
            }

            // 計算新價格
            const currentModel = carDatabase[brandName].models[modelIndex];
            const oldPrice = currentModel.basePrice;

            // 這裡可以根據爬蟲數據計算新價格
            // 示範：如果有 8891 數據，則更新
            if (modelData.data8891 && modelData.data8891.avgPrice > 0) {
                const newPrice = modelData.data8891.avgPrice;

                // 價格變化超過 5% 才更新
                const priceChange = Math.abs(newPrice - oldPrice) / oldPrice;

                if (priceChange > 0.05) {
                    carDatabase[brandName].models[modelIndex].basePrice = newPrice;
                    updateCount++;

                    console.log(`🔄 更新 ${brandName} ${modelData.model}: ${oldPrice} → ${newPrice}`);
                }
            }
        }
    }

    console.log(`\n📊 總共更新了 ${updateCount} 個車款價格`);

    return {
        carDatabase,
        updated: updateCount > 0,
        updateCount
    };
}

// ===============================================
// 備份舊檔案
// ===============================================
function backupCarData() {
    try {
        // 建立備份目錄
        if (!fs.existsSync(BACKUP_DIR)) {
            fs.mkdirSync(BACKUP_DIR, { recursive: true });
        }

        // 備份檔案名稱：car-data_2025-12.js
        const date = new Date();
        const backupName = `car-data_${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}.js`;
        const backupPath = path.join(BACKUP_DIR, backupName);

        // 複製檔案
        fs.copyFileSync(CAR_DATA_FILE, backupPath);

        console.log(`💾 已備份至: ${backupPath}`);
        return true;

    } catch (error) {
        console.error('❌ 備份失敗:', error.message);
        return false;
    }
}

// ===============================================
// 寫入更新後的 car-data.js
// ===============================================
function writeCarData(carDatabase) {
    try {
        const now = new Date();
        const updateDate = `${now.getFullYear()}年${now.getMonth() + 1}月`;

        // 生成完整的 JavaScript 檔案內容
        const content = `// ===============================================
// 秒估車 - 車款價格資料庫
// ===============================================
// 📅 最後更新：${updateDate}
// 📊 數據來源：8891汽車網、行將拍賣、市場行情
// 🔄 更新頻率：每月自動更新
// 📝 更新說明：由 GitHub Actions 自動更新
// ===============================================

const carDatabase = ${JSON.stringify(carDatabase, null, 4)};
`;

        // 寫入檔案
        fs.writeFileSync(CAR_DATA_FILE, content, 'utf8');

        console.log('✅ 成功更新 car-data.js');
        return true;

    } catch (error) {
        console.error('❌ 寫入 car-data.js 失敗:', error.message);
        return false;
    }
}

// ===============================================
// 主要執行流程
// ===============================================
async function main() {
    console.log('========================================');
    console.log('🚀 開始更新車價資料庫');
    console.log('========================================\n');

    // 1. 備份現有檔案
    console.log('📦 步驟 1/5: 備份現有資料...');
    backupCarData();

    // 2. 讀取現有車款資料庫
    console.log('\n📖 步驟 2/5: 讀取車款資料庫...');
    const carDatabase = readCarData();

    if (!carDatabase) {
        console.error('❌ 無法繼續，請檢查 car-data.js 格式');
        process.exit(1);
    }

    // 3. 讀取爬蟲結果
    console.log('\n📊 步驟 3/5: 讀取爬蟲數據...');
    const priceData = readPriceData();

    // 4. 更新價格
    console.log('\n🔄 步驟 4/5: 更新價格...');
    const { carDatabase: updatedDatabase, updated, updateCount } = updatePrices(
        carDatabase,
        priceData
    );

    // 5. 寫入檔案
    if (updated) {
        console.log('\n💾 步驟 5/5: 寫入更新...');
        const success = writeCarData(updatedDatabase);

        if (success) {
            console.log('\n========================================');
            console.log(`✅ 更新完成！共更新 ${updateCount} 個車款`);
            console.log('========================================');
        }
    } else {
        console.log('\n========================================');
        console.log('ℹ️ 沒有需要更新的價格');
        console.log('========================================');
    }
}

// ===============================================
// 執行入口
// ===============================================
if (require.main === module) {
    main()
        .then(() => {
            process.exit(0);
        })
        .catch(error => {
            console.error('❌ 執行失敗:', error);
            process.exit(1);
        });
}

module.exports = {
    readCarData,
    updatePrices,
    writeCarData
};
