// ===============================================
// 秒估車 - 車款資料庫更新程式
// ===============================================

const fs = require('fs');
const path = require('path');

const CAR_DATA_FILE = path.join(__dirname, '..', 'car-data.js');
const PRICE_DATA_FILE = path.join(__dirname, 'price-data.json');
const BACKUP_DIR = path.join(__dirname, 'backups');

// 確保備份目錄存在
if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

// 日誌函數
function log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
}

// ===============================================
// 更新 car-data.js 檔案
// ===============================================
function updateCarDataFile(carDatabase) {
    try {
        log('📝 開始更新 car-data.js...');

        // 1. 備份原檔案
        const backupFile = path.join(
            BACKUP_DIR,
            `car-data_${new Date().toISOString().split('T')[0]}.js`
        );
        fs.copyFileSync(CAR_DATA_FILE, backupFile);
        log(`✅ 已備份至: ${backupFile}`);

        // 2. 讀取原始檔案
        let carDataContent = fs.readFileSync(CAR_DATA_FILE, 'utf8');

        // 3. 更新檔案頭部的更新日期
        const currentDate = new Date().toLocaleDateString('zh-TW', {
            year: 'numeric',
            month: 'long'
        });

        carDataContent = carDataContent.replace(
            /\/\/ 📅 最後更新：.*$/m,
            `// 📅 最後更新：${currentDate}`
        );

        // 4. 替換 carDatabase 物件
        const carDatabaseString = JSON.stringify(carDatabase, null, 4)
            .replace(/"([^"]+)":/g, '$1:')  // 移除鍵的引號
            .replace(/: "([^"]+)"/g, ': "$1"');  // 保留字串值的引號

        carDataContent = carDataContent.replace(
            /const carDatabase = {[\s\S]*?};/,
            `const carDatabase = ${carDatabaseString};`
        );

        // 5. 寫入檔案
        fs.writeFileSync(CAR_DATA_FILE, carDataContent, 'utf8');

        log('✅ car-data.js 更新完成！');

        return true;

    } catch (error) {
        log(`❌ 更新失敗: ${error.message}`);
        console.error(error);
        return false;
    }
}

// ===============================================
// 主要執行流程
// ===============================================
async function main() {
    log('========================================');
    log('🚀 開始更新車款資料庫');
    log('========================================');

    try {
        // 1. 讀取價格更新結果
        if (!fs.existsSync(PRICE_DATA_FILE)) {
            log('⚠️  找不到 price-data.json，使用原始資料');
            return;
        }

        const priceData = JSON.parse(fs.readFileSync(PRICE_DATA_FILE, 'utf8'));

        log(`📊 載入更新資料:`);
        log(`   更新日期: ${priceData.date}`);
        log(`   總品牌: ${priceData.totalBrands}`);
        log(`   總車款: ${priceData.totalModels}`);
        log(`   已更新: ${priceData.updatedCount} 款`);

        // 2. 載入並更新 carDatabase
        const { loadCarDatabase } = require('./scraper-improved.js');
        const carDatabase = loadCarDatabase();

        // 3. 應用價格更新
        for (const update of priceData.updates) {
            const brand = carDatabase[update.brand];
            if (brand) {
                const model = brand.models.find(m => m.name === update.model);
                if (model) {
                    model.basePrice = update.newPrice;
                }
            }
        }

        // 4. 更新檔案
        const success = updateCarDataFile(carDatabase);

        if (success) {
            log('\n========================================');
            log('✅ 資料庫更新成功！');
            log(`   已更新 ${priceData.updatedCount} 個車款價格`);
            log('========================================');
        } else {
            throw new Error('更新檔案失敗');
        }

    } catch (error) {
        log(`\n❌ 執行失敗: ${error.message}`);
        console.error(error);
        process.exit(1);
    }
}

// 執行
if (require.main === module) {
    main();
}

module.exports = { updateCarDataFile };
