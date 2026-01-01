// ===============================================
// 秒估車 - 車款價格資料庫（完整版）
// ===============================================
// 📅 最後更新：2026年1月2日（基於石貳全460期 第25-50頁補充）
// 📊 數據來源：石貳全中古車行情表第460期 完整版
// 🔄 更新頻率：每月更新
// 📋 支援品牌：51個品牌
// 📋 支援車款：630+ 款
//
// 🆕 本次新增品牌（2026年1月1日）：
//    1. Daihatsu 大發
//    2. DFSK 東風
//    3. Ford 福特 ⭐
//    4. Foton 福田
//    5. Hino 日野
//    6. Hyundai 現代 ⭐
//    7. Infiniti 無限 ⭐
//    8. Isuzu 五十鈴
//    9. Kia 起亞 ⭐
//   10. Luxgen 納智捷 ⭐
//
// 🔥 新增品牌（2026年1月2日）：
//   11. Mitsubishi 三菱 ⭐⭐ (20款車型)
//   12. Suzuki 鈴木 ⭐⭐ (12款車型)
//   13. Subaru 速霸陸 ⭐⭐ (14款車型)
//   14. Ssangyong 雙龍 (8款車型)
//   15. MG ⭐ (5款車型)
//   16. Proton 普騰 (3款車型)
//   17. Mahindra 馬亨達 (2款車型)
//   18. CMC 中華汽車 (10款車型，商用車)
// ===============================================

// 車款資料庫
const carDatabase = {
    // ========== 德國品牌 ==========
    "Audi奧迪": {
        models: [
            // A系列
            { name: "A1", basePrice: 1200000, depreciation: 0.18 },
            { name: "A3", basePrice: 1550000, depreciation: 0.17 },
            { name: "A3 Sportback", basePrice: 1650000, depreciation: 0.17 },
            { name: "A4", basePrice: 2200000, depreciation: 0.17 },
            { name: "A4 Avant", basePrice: 2350000, depreciation: 0.17 },
            { name: "A5", basePrice: 2500000, depreciation: 0.17 },
            { name: "A5 Sportback", basePrice: 2650000, depreciation: 0.17 },
            { name: "A6", basePrice: 2800000, depreciation: 0.16 },
            { name: "A6 Avant", basePrice: 2900000, depreciation: 0.16 },
            { name: "A7", basePrice: 3500000, depreciation: 0.16 },
            { name: "A8", basePrice: 4500000, depreciation: 0.15 },

            // Q系列 SUV
            { name: "Q2", basePrice: 1350000, depreciation: 0.17 },
            { name: "Q3", basePrice: 1700000, depreciation: 0.17 },
            { name: "Q3 Sportback", basePrice: 1800000, depreciation: 0.17 },
            { name: "Q5", basePrice: 2700000, depreciation: 0.16 },
            { name: "Q5 Sportback", basePrice: 2850000, depreciation: 0.16 },
            { name: "Q7", basePrice: 3500000, depreciation: 0.16 },
            { name: "Q8", basePrice: 4200000, depreciation: 0.16 },

            // TT系列
            { name: "TT Coupe", basePrice: 2500000, depreciation: 0.17 },
            { name: "TT Roadster", basePrice: 2650000, depreciation: 0.17 },

            // S/RS性能系列
            { name: "S3", basePrice: 2400000, depreciation: 0.17 },
            { name: "S4", basePrice: 3200000, depreciation: 0.17 },
            { name: "S5", basePrice: 3400000, depreciation: 0.17 },
            { name: "RS3", basePrice: 3200000, depreciation: 0.17 },
            { name: "RS4 Avant", basePrice: 4200000, depreciation: 0.16 },
            { name: "RS5", basePrice: 4500000, depreciation: 0.16 },
            { name: "RS6 Avant", basePrice: 6800000, depreciation: 0.16 },
            { name: "RS7", basePrice: 7000000, depreciation: 0.16 },
            { name: "RSQ8", basePrice: 6500000, depreciation: 0.16 },

            // e-tron電動系列
            { name: "e-tron", basePrice: 3300000, depreciation: 0.18 },
            { name: "e-tron GT", basePrice: 5500000, depreciation: 0.17 },
            { name: "e-tron Sportback", basePrice: 3450000, depreciation: 0.18 }
        ]
    },

    "Mercedes-Benz賓士": {
        models: [
            // A-Class系列
            { name: "A180", basePrice: 1600000, depreciation: 0.18 },
            { name: "A200", basePrice: 1800000, depreciation: 0.18 },
            { name: "A250", basePrice: 2000000, depreciation: 0.18 },
            { name: "A35 AMG", basePrice: 2600000, depreciation: 0.17 },
            { name: "A45 AMG", basePrice: 3400000, depreciation: 0.17 },

            // B-Class系列
            { name: "B180", basePrice: 1700000, depreciation: 0.18 },
            { name: "B200", basePrice: 1900000, depreciation: 0.18 },

            // C-Class系列
            { name: "C180", basePrice: 2100000, depreciation: 0.17 },
            { name: "C200", basePrice: 2300000, depreciation: 0.17 },
            { name: "C250", basePrice: 2600000, depreciation: 0.17 },
            { name: "C300", basePrice: 2850000, depreciation: 0.17 },
            { name: "C43 AMG", basePrice: 3800000, depreciation: 0.16 },
            { name: "C63 AMG", basePrice: 5500000, depreciation: 0.16 },

            // E-Class系列
            { name: "E200", basePrice: 2800000, depreciation: 0.16 },
            { name: "E250", basePrice: 3100000, depreciation: 0.16 },
            { name: "E300", basePrice: 3400000, depreciation: 0.16 },
            { name: "E350", basePrice: 3700000, depreciation: 0.16 },
            { name: "E43 AMG", basePrice: 4500000, depreciation: 0.16 },
            { name: "E53 AMG", basePrice: 4900000, depreciation: 0.16 },
            { name: "E63 AMG", basePrice: 7100000, depreciation: 0.15 },

            // S-Class系列
            { name: "S350", basePrice: 5300000, depreciation: 0.15 },
            { name: "S400", basePrice: 5800000, depreciation: 0.15 },
            { name: "S450", basePrice: 6200000, depreciation: 0.15 },
            { name: "S500", basePrice: 6800000, depreciation: 0.15 },
            { name: "S560", basePrice: 7500000, depreciation: 0.15 },
            { name: "S600 Maybach", basePrice: 12800000, depreciation: 0.14 },
            { name: "S650 Maybach", basePrice: 14200000, depreciation: 0.14 },

            // CLA/CLS轎跑系列
            { name: "CLA180", basePrice: 1900000, depreciation: 0.18 },
            { name: "CLA200", basePrice: 2100000, depreciation: 0.18 },
            { name: "CLA250", basePrice: 2400000, depreciation: 0.17 },
            { name: "CLA45 AMG", basePrice: 3300000, depreciation: 0.17 },
            { name: "CLS350", basePrice: 4200000, depreciation: 0.16 },
            { name: "CLS450", basePrice: 4800000, depreciation: 0.16 },
            { name: "CLS53 AMG", basePrice: 5500000, depreciation: 0.16 },

            // GLA/GLB/GLC/GLE/GLS SUV系列
            { name: "GLA180", basePrice: 1800000, depreciation: 0.18 },
            { name: "GLA200", basePrice: 2000000, depreciation: 0.18 },
            { name: "GLA250", basePrice: 2300000, depreciation: 0.17 },
            { name: "GLB180", basePrice: 2000000, depreciation: 0.18 },
            { name: "GLB200", basePrice: 2200000, depreciation: 0.17 },
            { name: "GLB250", basePrice: 2500000, depreciation: 0.17 },
            { name: "GLC200", basePrice: 2500000, depreciation: 0.17 },
            { name: "GLC250", basePrice: 2800000, depreciation: 0.17 },
            { name: "GLC300", basePrice: 3100000, depreciation: 0.17 },
            { name: "GLC43 AMG", basePrice: 4000000, depreciation: 0.16 },
            { name: "GLC63 AMG", basePrice: 5600000, depreciation: 0.16 },
            { name: "GLE300", basePrice: 3500000, depreciation: 0.16 },
            { name: "GLE350", basePrice: 3900000, depreciation: 0.16 },
            { name: "GLE450", basePrice: 4500000, depreciation: 0.16 },
            { name: "GLE53 AMG", basePrice: 5300000, depreciation: 0.16 },
            { name: "GLE63 AMG", basePrice: 7500000, depreciation: 0.15 },
            { name: "GLS350", basePrice: 4200000, depreciation: 0.16 },
            { name: "GLS450", basePrice: 4800000, depreciation: 0.16 },
            { name: "GLS580", basePrice: 6200000, depreciation: 0.15 },
            { name: "GLS600 Maybach", basePrice: 9700000, depreciation: 0.15 },

            // V-Class/Vito商務車
            { name: "V220d", basePrice: 2500000, depreciation: 0.16 },
            { name: "V250d", basePrice: 2800000, depreciation: 0.16 },
            { name: "Vito Tourer", basePrice: 2200000, depreciation: 0.16 },

            // AMG GT跑車系列
            { name: "AMG GT", basePrice: 6500000, depreciation: 0.16 },
            { name: "AMG GT C", basePrice: 7900000, depreciation: 0.16 },
            { name: "AMG GT R", basePrice: 10800000, depreciation: 0.15 },
            { name: "AMG GT 4-Door", basePrice: 5500000, depreciation: 0.16 },

            // EQ電動車系列
            { name: "EQA", basePrice: 2200000, depreciation: 0.18 },
            { name: "EQB", basePrice: 2500000, depreciation: 0.18 },
            { name: "EQC", basePrice: 3200000, depreciation: 0.17 },
            { name: "EQE", basePrice: 3500000, depreciation: 0.17 },
            { name: "EQS", basePrice: 5500000, depreciation: 0.16 }
        ]
    },

    "BMW": {
        models: [
            // 1系列
            { name: "118i", basePrice: 1600000, depreciation: 0.18 },
            { name: "120i", basePrice: 1800000, depreciation: 0.18 },
            { name: "M135i", basePrice: 2500000, depreciation: 0.17 },

            // 2系列
            { name: "218i", basePrice: 1700000, depreciation: 0.18 },
            { name: "220i", basePrice: 1900000, depreciation: 0.18 },
            { name: "230i", basePrice: 2100000, depreciation: 0.17 },
            { name: "M240i", basePrice: 2800000, depreciation: 0.17 },

            // 3系列
            { name: "318i", basePrice: 2000000, depreciation: 0.17 },
            { name: "320i", basePrice: 2300000, depreciation: 0.17 },
            { name: "330i", basePrice: 2700000, depreciation: 0.17 },
            { name: "M340i", basePrice: 3500000, depreciation: 0.16 },
            { name: "M3", basePrice: 5200000, depreciation: 0.16 },

            // 4系列
            { name: "420i", basePrice: 2500000, depreciation: 0.17 },
            { name: "430i", basePrice: 2900000, depreciation: 0.17 },
            { name: "M440i", basePrice: 3800000, depreciation: 0.16 },
            { name: "M4", basePrice: 5500000, depreciation: 0.16 },

            // 5系列
            { name: "520i", basePrice: 2800000, depreciation: 0.16 },
            { name: "530i", basePrice: 3200000, depreciation: 0.16 },
            { name: "540i", basePrice: 3800000, depreciation: 0.16 },
            { name: "M550i", basePrice: 4500000, depreciation: 0.16 },
            { name: "M5", basePrice: 7000000, depreciation: 0.15 },

            // 6系列
            { name: "630i", basePrice: 4200000, depreciation: 0.16 },
            { name: "640i", basePrice: 4800000, depreciation: 0.16 },
            { name: "650i", basePrice: 5500000, depreciation: 0.16 },
            { name: "M6", basePrice: 7700000, depreciation: 0.15 },

            // 7系列
            { name: "730i", basePrice: 4500000, depreciation: 0.15 },
            { name: "740i", basePrice: 5200000, depreciation: 0.15 },
            { name: "750i", basePrice: 6200000, depreciation: 0.15 },
            { name: "M760i", basePrice: 8500000, depreciation: 0.15 },

            // 8系列
            { name: "840i", basePrice: 5500000, depreciation: 0.16 },
            { name: "M850i", basePrice: 7500000, depreciation: 0.15 },

            // X系列 SUV
            { name: "X1 sDrive18i", basePrice: 1900000, depreciation: 0.17 },
            { name: "X1 sDrive20i", basePrice: 2100000, depreciation: 0.17 },
            { name: "X2 sDrive18i", basePrice: 2000000, depreciation: 0.17 },
            { name: "X2 sDrive20i", basePrice: 2200000, depreciation: 0.17 },
            { name: "X3 xDrive20i", basePrice: 2600000, depreciation: 0.17 },
            { name: "X3 xDrive30i", basePrice: 3000000, depreciation: 0.17 },
            { name: "X3 M40i", basePrice: 3800000, depreciation: 0.16 },
            { name: "X4 xDrive20i", basePrice: 2800000, depreciation: 0.17 },
            { name: "X4 xDrive30i", basePrice: 3200000, depreciation: 0.17 },
            { name: "X4 M40i", basePrice: 4000000, depreciation: 0.16 },
            { name: "X5 xDrive25d", basePrice: 3500000, depreciation: 0.16 },
            { name: "X5 xDrive40i", basePrice: 4000000, depreciation: 0.16 },
            { name: "X5 M50i", basePrice: 5200000, depreciation: 0.16 },
            { name: "X6 xDrive40i", basePrice: 4500000, depreciation: 0.16 },
            { name: "X6 M50i", basePrice: 5800000, depreciation: 0.16 },
            { name: "X7 xDrive40i", basePrice: 4800000, depreciation: 0.16 },
            { name: "X7 M50i", basePrice: 6200000, depreciation: 0.15 },

            // i系列電動車
            { name: "i3", basePrice: 1900000, depreciation: 0.18 },
            { name: "i4 eDrive40", basePrice: 2800000, depreciation: 0.17 },
            { name: "i4 M50", basePrice: 3500000, depreciation: 0.17 },
            { name: "i7 xDrive60", basePrice: 6200000, depreciation: 0.16 },
            { name: "iX xDrive40", basePrice: 3500000, depreciation: 0.17 },
            { name: "iX xDrive50", basePrice: 4200000, depreciation: 0.17 },

            // Z系列跑車
            { name: "Z4 sDrive20i", basePrice: 2800000, depreciation: 0.17 },
            { name: "Z4 M40i", basePrice: 3500000, depreciation: 0.16 }
        ]
    },

    // ========== 英國品牌 ==========
    "Bentley賓利": {
        models: [
            { name: "Continental GT", basePrice: 13800000, depreciation: 0.16 },
            { name: "Continental GT Speed", basePrice: 16600000, depreciation: 0.15 },
            { name: "Continental GT Convertible", basePrice: 14200000, depreciation: 0.16 },
            { name: "Flying Spur", basePrice: 12000000, depreciation: 0.16 },
            { name: "Flying Spur Speed", basePrice: 14000000, depreciation: 0.15 },
            { name: "Bentayga", basePrice: 13000000, depreciation: 0.16 },
            { name: "Bentayga Speed", basePrice: 15000000, depreciation: 0.15 },
            { name: "Mulsanne", basePrice: 22000000, depreciation: 0.15 }
        ]
    },

    "Aston Martin奧斯頓馬丁": {
        models: [
            { name: "Vantage", basePrice: 8680000, depreciation: 0.16 },
            { name: "Vantage Roadster", basePrice: 9380000, depreciation: 0.16 },
            { name: "DB11 V8", basePrice: 11800000, depreciation: 0.15 },
            { name: "DB11 AMR", basePrice: 14800000, depreciation: 0.15 },
            { name: "DB12", basePrice: 12880000, depreciation: 0.15 },
            { name: "DBS", basePrice: 16800000, depreciation: 0.15 },
            { name: "DBS Volante", basePrice: 17800000, depreciation: 0.15 },
            { name: "DBX", basePrice: 10530000, depreciation: 0.16 },
            { name: "Rapide", basePrice: 13800000, depreciation: 0.16 },
            { name: "Vanquish", basePrice: 16800000, depreciation: 0.15 }
        ]
    },

    // ========== 意大利品牌 ==========
    "Ferrari法拉利": {
        models: [
            { name: "F12 Berlinetta", basePrice: 17610000, depreciation: 0.15 },
            { name: "458 Italia", basePrice: 13790000, depreciation: 0.15 },
            { name: "488 GTB", basePrice: 14690000, depreciation: 0.15 },
            { name: "F8 Tributo", basePrice: 15000000, depreciation: 0.14 },
            { name: "F8 Spider", basePrice: 16000000, depreciation: 0.14 },
            { name: "Roma", basePrice: 12000000, depreciation: 0.15 },
            { name: "Portofino", basePrice: 11000000, depreciation: 0.15 },
            { name: "SF90 Stradale", basePrice: 25000000, depreciation: 0.13 },
            { name: "296 GTB", basePrice: 18000000, depreciation: 0.14 },
            { name: "812 Superfast", basePrice: 20000000, depreciation: 0.14 },
            { name: "GTC4Lusso", basePrice: 18000000, depreciation: 0.15 }
        ]
    },

    "Alfa Romeo愛快羅密歐": {
        models: [
            { name: "MiTo", basePrice: 1680000, depreciation: 0.18 },
            { name: "Giulietta", basePrice: 1740000, depreciation: 0.17 },
            { name: "Giulia", basePrice: 2280000, depreciation: 0.17 },
            { name: "Giulia Sport", basePrice: 1840000, depreciation: 0.17 },
            { name: "Giulia Sportiva", basePrice: 1690000, depreciation: 0.17 },
            { name: "Stelvio", basePrice: 2800000, depreciation: 0.17 },
            { name: "Stelvio Sport", basePrice: 2280000, depreciation: 0.17 },
            { name: "4C", basePrice: 4280000, depreciation: 0.16 }
        ]
    },

    // ========== 法國品牌 ==========
    "Citroen雪鐵龍": {
        models: [
            { name: "C3", basePrice: 868000, depreciation: 0.17 },
            { name: "C3 Picasso", basePrice: 968000, depreciation: 0.17 },
            { name: "C4", basePrice: 1068000, depreciation: 0.16 },
            { name: "C4 Picasso", basePrice: 1728000, depreciation: 0.16 },
            { name: "C5", basePrice: 1468000, depreciation: 0.16 },
            { name: "C5 Aircross", basePrice: 1388000, depreciation: 0.16 },
            { name: "DS3", basePrice: 1108000, depreciation: 0.17 },
            { name: "DS4", basePrice: 1398000, depreciation: 0.17 },
            { name: "DS5", basePrice: 1698000, depreciation: 0.16 },
            { name: "Berlingo", basePrice: 988000, depreciation: 0.16 },
            { name: "Berlingo Van", basePrice: 898000, depreciation: 0.16 }
        ]
    },

    // ========== 保留原有日系品牌（簡化版）==========
    "Toyota豐田": {
        models: [
            { name: "Altis", basePrice: 712000, depreciation: 0.15 },
            { name: "Camry", basePrice: 1113000, depreciation: 0.12 },
            { name: "Camry Hybrid", basePrice: 1289000, depreciation: 0.12 },
            { name: "Corolla Cross", basePrice: 873000, depreciation: 0.13 },
            { name: "RAV4", basePrice: 1077000, depreciation: 0.12 },
            { name: "Yaris", basePrice: 636000, depreciation: 0.16 },
            { name: "Yaris Cross", basePrice: 745000, depreciation: 0.15 },
            { name: "Sienna", basePrice: 2530000, depreciation: 0.14 },
            { name: "Alphard", basePrice: 2390000, depreciation: 0.12 },
            { name: "Vellfire", basePrice: 2710000, depreciation: 0.12 }
        ]
    },

    "Honda本田": {
        models: [
            { name: "Civic", basePrice: 950000, depreciation: 0.14 },
            { name: "CR-V", basePrice: 1300000, depreciation: 0.13 },
            { name: "Fit", basePrice: 700000, depreciation: 0.15 },
            { name: "HR-V", basePrice: 850000, depreciation: 0.14 },
            { name: "Accord", basePrice: 1500000, depreciation: 0.12 },
            { name: "Odyssey", basePrice: 1800000, depreciation: 0.13 }
        ]
    },

    "Nissan日產": {
        models: [
            { name: "Sentra", basePrice: 805000, depreciation: 0.15 },
            { name: "Kicks", basePrice: 785000, depreciation: 0.14 },
            { name: "X-Trail", basePrice: 1195000, depreciation: 0.13 },
            { name: "Leaf", basePrice: 1490000, depreciation: 0.16 }
        ]
    },

    "Mazda馬自達": {
        models: [
            { name: "Mazda3", basePrice: 739000, depreciation: 0.14 },
            { name: "CX-30", basePrice: 918000, depreciation: 0.13 },
            { name: "CX-5", basePrice: 1169000, depreciation: 0.13 },
            { name: "CX-60", basePrice: 1499000, depreciation: 0.13 }
        ]
    },

    "Lexus凌志": {
        models: [
            { name: "IS", basePrice: 2000000, depreciation: 0.14 },
            { name: "ES", basePrice: 2200000, depreciation: 0.13 },
            { name: "NX", basePrice: 2100000, depreciation: 0.13 },
            { name: "RX", basePrice: 3000000, depreciation: 0.13 }
        ]
    },

    "Porsche保時捷": {
        models: [
            { name: "718 Cayman", basePrice: 3500000, depreciation: 0.16 },
            { name: "718 Boxster", basePrice: 3600000, depreciation: 0.16 },
            { name: "911 Carrera", basePrice: 6500000, depreciation: 0.15 },
            { name: "911 Turbo", basePrice: 9500000, depreciation: 0.14 },
            { name: "Taycan", basePrice: 4500000, depreciation: 0.16 },
            { name: "Panamera", basePrice: 5500000, depreciation: 0.15 },
            { name: "Macan", basePrice: 3000000, depreciation: 0.16 },
            { name: "Cayenne", basePrice: 4200000, depreciation: 0.15 }
        ]
    },

    "Tesla特斯拉": {
        models: [
            { name: "Model 3", basePrice: 1800000, depreciation: 0.16 },
            { name: "Model Y", basePrice: 2100000, depreciation: 0.16 },
            { name: "Model S", basePrice: 3500000, depreciation: 0.15 },
            { name: "Model X", basePrice: 4000000, depreciation: 0.15 }
        ]
    },

    "Volvo富豪": {
        models: [
            { name: "S60", basePrice: 2000000, depreciation: 0.15 },
            { name: "S90", basePrice: 2500000, depreciation: 0.14 },
            { name: "XC40", basePrice: 1800000, depreciation: 0.15 },
            { name: "XC60", basePrice: 2400000, depreciation: 0.14 },
            { name: "XC90", basePrice: 3200000, depreciation: 0.14 },
            { name: "V60", basePrice: 2200000, depreciation: 0.14 },
            { name: "V90", basePrice: 2800000, depreciation: 0.14 }
        ]
    },

    "Jaguar捷豹": {
        models: [
            { name: "XE", basePrice: 2400000, depreciation: 0.17 },
            { name: "XF", basePrice: 3000000, depreciation: 0.16 },
            { name: "XJ", basePrice: 4500000, depreciation: 0.16 },
            { name: "F-TYPE", basePrice: 3800000, depreciation: 0.16 },
            { name: "F-TYPE Coupe", basePrice: 4000000, depreciation: 0.16 },
            { name: "F-PACE", basePrice: 3000000, depreciation: 0.16 },
            { name: "E-PACE", basePrice: 2200000, depreciation: 0.17 },
            { name: "I-PACE", basePrice: 3500000, depreciation: 0.17 }
        ]
    },

    "Lamborghini藍寶堅尼": {
        models: [
            { name: "Gallardo", basePrice: 13500000, depreciation: 0.15 },
            { name: "Huracan", basePrice: 15000000, depreciation: 0.15 },
            { name: "Huracan Evo", basePrice: 19000000, depreciation: 0.14 },
            { name: "Aventador", basePrice: 25000000, depreciation: 0.14 },
            { name: "Urus", basePrice: 10000000, depreciation: 0.16 },
            { name: "Revuelto", basePrice: 28000000, depreciation: 0.13 }
        ]
    },

    "Land Rover路虎": {
        models: [
            { name: "Discovery", basePrice: 3600000, depreciation: 0.16 },
            { name: "Discovery Sport", basePrice: 2400000, depreciation: 0.17 },
            { name: "Range Rover", basePrice: 7000000, depreciation: 0.15 },
            { name: "Range Rover Sport", basePrice: 5000000, depreciation: 0.15 },
            { name: "Range Rover Evoque", basePrice: 2400000, depreciation: 0.17 },
            { name: "Range Rover Velar", basePrice: 3500000, depreciation: 0.16 },
            { name: "Defender", basePrice: 3000000, depreciation: 0.16 }
        ]
    },

    "Maserati瑪莎拉蒂": {
        models: [
            { name: "Ghibli", basePrice: 4500000, depreciation: 0.16 },
            { name: "Quattroporte", basePrice: 7000000, depreciation: 0.16 },
            { name: "Levante", basePrice: 5500000, depreciation: 0.16 },
            { name: "GranTurismo", basePrice: 8000000, depreciation: 0.15 },
            { name: "GranCabrio", basePrice: 8500000, depreciation: 0.15 },
            { name: "MC20", basePrice: 10000000, depreciation: 0.15 },
            { name: "Grecale", basePrice: 3500000, depreciation: 0.16 }
        ]
    },

    "McLaren麥拉倫": {
        models: [
            { name: "540C", basePrice: 8990000, depreciation: 0.16 },
            { name: "570S", basePrice: 10880000, depreciation: 0.16 },
            { name: "600LT", basePrice: 13800000, depreciation: 0.15 },
            { name: "650S", basePrice: 15350000, depreciation: 0.15 },
            { name: "720S", basePrice: 16200000, depreciation: 0.15 },
            { name: "765LT", basePrice: 25680000, depreciation: 0.14 },
            { name: "GT", basePrice: 12600000, depreciation: 0.15 },
            { name: "Artura", basePrice: 13980000, depreciation: 0.15 }
        ]
    },

    "Rolls Royce勞斯萊斯": {
        models: [
            { name: "Ghost", basePrice: 24000000, depreciation: 0.14 },
            { name: "Phantom", basePrice: 30000000, depreciation: 0.13 },
            { name: "Wraith", basePrice: 24000000, depreciation: 0.14 },
            { name: "Cullinan", basePrice: 26000000, depreciation: 0.14 },
            { name: "Dawn", basePrice: 23500000, depreciation: 0.14 },
            { name: "Spectre", basePrice: 25700000, depreciation: 0.14 }
        ]
    },

    "Mini": {
        models: [
            { name: "Cooper", basePrice: 1400000, depreciation: 0.17 },
            { name: "Cooper S", basePrice: 1650000, depreciation: 0.17 },
            { name: "Cooper Clubman", basePrice: 1580000, depreciation: 0.17 },
            { name: "Cooper Countryman", basePrice: 1700000, depreciation: 0.17 },
            { name: "JCW", basePrice: 1860000, depreciation: 0.17 },
            { name: "Cabrio", basePrice: 1790000, depreciation: 0.17 }
        ]
    },

    "Peugeot寶獅": {
        models: [
            { name: "208", basePrice: 1000000, depreciation: 0.16 },
            { name: "2008", basePrice: 1200000, depreciation: 0.16 },
            { name: "308", basePrice: 1350000, depreciation: 0.16 },
            { name: "3008", basePrice: 1500000, depreciation: 0.16 },
            { name: "5008", basePrice: 1650000, depreciation: 0.16 },
            { name: "508", basePrice: 1800000, depreciation: 0.16 },
            { name: "Traveller", basePrice: 1700000, depreciation: 0.16 }
        ]
    },

    "Volkswagen福斯": {
        models: [
            { name: "Polo", basePrice: 800000, depreciation: 0.15 },
            { name: "Golf", basePrice: 1100000, depreciation: 0.15 },
            { name: "Passat", basePrice: 1500000, depreciation: 0.15 },
            { name: "Tiguan", basePrice: 1400000, depreciation: 0.15 },
            { name: "Touran", basePrice: 1300000, depreciation: 0.15 },
            { name: "T-Roc", basePrice: 1200000, depreciation: 0.15 },
            { name: "T-Cross", basePrice: 1000000, depreciation: 0.15 },
            { name: "Amarok", basePrice: 1900000, depreciation: 0.15 },
            { name: "Arteon", basePrice: 1800000, depreciation: 0.15 },
            { name: "ID.4", basePrice: 1900000, depreciation: 0.16 }
        ]
    },

    "Skoda斯柯達": {
        models: [
            { name: "Fabia", basePrice: 700000, depreciation: 0.15 },
            { name: "Scala", basePrice: 900000, depreciation: 0.15 },
            { name: "Octavia", basePrice: 1100000, depreciation: 0.15 },
            { name: "Superb", basePrice: 1500000, depreciation: 0.14 },
            { name: "Kamiq", basePrice: 950000, depreciation: 0.15 },
            { name: "Karoq", basePrice: 1200000, depreciation: 0.15 },
            { name: "Kodiaq", basePrice: 1550000, depreciation: 0.14 }
        ]
    },

    "Lotus蓮花": {
        models: [
            { name: "Elise", basePrice: 2800000, depreciation: 0.16 },
            { name: "Exige", basePrice: 3500000, depreciation: 0.16 },
            { name: "Evora", basePrice: 5000000, depreciation: 0.15 },
            { name: "Emira", basePrice: 5800000, depreciation: 0.15 }
        ]
    },

    "Smart": {
        models: [
            { name: "Fortwo", basePrice: 750000, depreciation: 0.17 },
            { name: "Forfour", basePrice: 850000, depreciation: 0.17 }
        ]
    },

    "Jeep吉普": {
        models: [
            { name: "Compass", basePrice: 1350000, depreciation: 0.16 },
            { name: "Cherokee", basePrice: 2000000, depreciation: 0.16 },
            { name: "Grand Cherokee", basePrice: 3500000, depreciation: 0.15 },
            { name: "Wrangler", basePrice: 2600000, depreciation: 0.14 },
            { name: "Gladiator", basePrice: 3180000, depreciation: 0.15 }
        ]
    },

    "Cadillac凱迪拉克": {
        models: [
            { name: "CT5", basePrice: 2290000, depreciation: 0.16 },
            { name: "CT6", basePrice: 2590000, depreciation: 0.16 },
            { name: "XT4", basePrice: 1795000, depreciation: 0.16 },
            { name: "XT5", basePrice: 2295000, depreciation: 0.16 },
            { name: "XT6", basePrice: 2895000, depreciation: 0.16 },
            { name: "Escalade", basePrice: 4500000, depreciation: 0.15 }
        ]
    },

    "Fiat飛雅特": {
        models: [
            { name: "500", basePrice: 800000, depreciation: 0.16 },
            { name: "500X", basePrice: 1000000, depreciation: 0.16 },
            { name: "Panda", basePrice: 650000, depreciation: 0.16 }
        ]
    },

    "Opel歐寶": {
        models: [
            { name: "Astra", basePrice: 1100000, depreciation: 0.16 },
            { name: "Insignia", basePrice: 1400000, depreciation: 0.16 },
            { name: "Mokka", basePrice: 1100000, depreciation: 0.16 },
            { name: "Grandland", basePrice: 1300000, depreciation: 0.16 }
        ]
    },

    "Saab紳寶": {
        models: [
            { name: "9-3", basePrice: 1780000, depreciation: 0.17 },
            { name: "9-5", basePrice: 2280000, depreciation: 0.17 }
        ]
    },

    "Daihatsu大發": {
        models: [
            { name: "Sirion 第三代", basePrice: 658000, depreciation: 0.17 },
            { name: "Terios 第二代", basePrice: 848000, depreciation: 0.16 }
        ]
    },

    "DFSK東風": {
        models: [
            { name: "大發 S2.5t", basePrice: 445000, depreciation: 0.17 }
        ]
    },

    "Ford福特": {
        models: [
            // Fiesta系列
            { name: "Fiesta 第五代", basePrice: 588000, depreciation: 0.17 },
            { name: "Fiesta 小改款", basePrice: 698000, depreciation: 0.17 },

            // Focus系列
            { name: "Focus 第二代", basePrice: 599000, depreciation: 0.16 },
            { name: "Focus 第三代", basePrice: 759000, depreciation: 0.16 },
            { name: "Focus 第四代", basePrice: 809000, depreciation: 0.15 },
            { name: "Focus Active", basePrice: 859000, depreciation: 0.15 },

            // Escort
            { name: "Escort 第一代", basePrice: 579000, depreciation: 0.17 },

            // Mondeo
            { name: "Mondeo CD345 第四代", basePrice: 889000, depreciation: 0.16 },
            { name: "Mondeo 第五代", basePrice: 999000, depreciation: 0.16 },

            // Kuga系列
            { name: "Kuga 第一代", basePrice: 993000, depreciation: 0.16 },
            { name: "Kuga 第二代", basePrice: 1099000, depreciation: 0.15 },
            { name: "Kuga 第三代", basePrice: 1139000, depreciation: 0.15 },

            // Mustang
            { name: "Mustang Mach-E 野馬", basePrice: 1899000, depreciation: 0.16 },

            // Ranger系列
            { name: "Ranger 第三代", basePrice: 1288000, depreciation: 0.14 },
            { name: "Ranger 藍哥第二代", basePrice: 1468000, depreciation: 0.14 },

            // Escape系列
            { name: "Escape 第二代", basePrice: 659000, depreciation: 0.16 },

            // i-Max
            { name: "i-Max 第一代", basePrice: 706000, depreciation: 0.16 },

            // Tourneo系列
            { name: "Tourneo Custom 旅行家", basePrice: 1469000, depreciation: 0.16 },
            { name: "Tourneo Custom 小改款", basePrice: 1633000, depreciation: 0.16 },
            { name: "Tourneo Connect 第二代", basePrice: 1048000, depreciation: 0.16 }
        ]
    },

    "Foton福田": {
        models: [
            { name: "Aumark 歐馬可", basePrice: 899000, depreciation: 0.16 }
        ]
    },

    "Hino日野": {
        models: [
            // 300系列
            { name: "300系列貨車 3.49噸", basePrice: 1044000, depreciation: 0.15 },
            { name: "300系列 XZU307L", basePrice: 1040000, depreciation: 0.15 },

            // 200系列
            { name: "200系列 HKMEVR3", basePrice: 1190000, depreciation: 0.15 },
            { name: "200系列貨車", basePrice: 1245000, depreciation: 0.15 }
        ]
    },

    "Hyundai現代": {
        models: [
            // Elantra系列
            { name: "Elantra 伊倫強第一代", basePrice: 689000, depreciation: 0.16 },
            { name: "Elantra 第二代", basePrice: 739000, depreciation: 0.16 },
            { name: "Elantra 第三代", basePrice: 759000, depreciation: 0.15 },

            // i30
            { name: "i30 第一代", basePrice: 599000, depreciation: 0.16 },
            { name: "i30 第二代", basePrice: 449000, depreciation: 0.16 },

            // Ioniq系列
            { name: "Ioniq 第一代", basePrice: 1019000, depreciation: 0.16 },
            { name: "Ioniq 5", basePrice: 1059000, depreciation: 0.16 },
            { name: "Ioniq 6", basePrice: 1599000, depreciation: 0.16 },

            // Genesis
            { name: "Genesis 第一代", basePrice: 2880000, depreciation: 0.16 },

            // Veloster
            { name: "Veloster 第一代", basePrice: 1009000, depreciation: 0.17 },
            { name: "Veloster 第二代", basePrice: 1199000, depreciation: 0.16 },

            // Porter
            { name: "Porter 波特第一代", basePrice: 698000, depreciation: 0.16 },
            { name: "Porter 第二代", basePrice: 728000, depreciation: 0.16 },

            // Grand Starex
            { name: "Grand Starex 第一代 TQ型", basePrice: 1168000, depreciation: 0.16 },
            { name: "Grand Starex 第二代小改款", basePrice: 1268000, depreciation: 0.16 },

            // Staria
            { name: "Staria 第一代", basePrice: 1598000, depreciation: 0.16 },

            // Tucson系列
            { name: "Tucson 社會第二代", basePrice: 809000, depreciation: 0.16 },
            { name: "Tucson 第三代", basePrice: 849000, depreciation: 0.15 },
            { name: "Tucson 第四代小改款", basePrice: 829000, depreciation: 0.15 },

            // Santa Fe系列
            { name: "Santa Fe 聖塔第一代", basePrice: 1019000, depreciation: 0.15 },
            { name: "Santa Fe 第二代", basePrice: 1199000, depreciation: 0.15 },
            { name: "Santa Fe 聖塔第三代", basePrice: 1249000, depreciation: 0.15 },
            { name: "Santa Fe 第四代", basePrice: 1329000, depreciation: 0.15 },

            // Venue
            { name: "Venue QXG型", basePrice: 729000, depreciation: 0.16 },

            // Kona系列
            { name: "Kona 科納第一代", basePrice: 799000, depreciation: 0.16 },
            { name: "Kona 科納Electric", basePrice: 1319000, depreciation: 0.17 }
        ]
    },

    "Infiniti無限": {
        models: [
            // Q25
            { name: "Q25", basePrice: 1920000, depreciation: 0.17 },

            // Q37系列
            { name: "Q37", basePrice: 2210000, depreciation: 0.16 },
            { name: "Q37C", basePrice: 2350000, depreciation: 0.16 },

            // M系列
            { name: "M25", basePrice: 2290000, depreciation: 0.16 },
            { name: "M35", basePrice: 2560000, depreciation: 0.16 },
            { name: "M37", basePrice: 2780000, depreciation: 0.16 },

            // Q50系列
            { name: "Q50 第一代", basePrice: 2050000, depreciation: 0.16 },
            { name: "Q50 第二代", basePrice: 2450000, depreciation: 0.16 },

            // Q60系列
            { name: "Q60 第一代", basePrice: 2050000, depreciation: 0.16 },
            { name: "Q60 第二代", basePrice: 2990000, depreciation: 0.16 },

            // Q70
            { name: "Q70", basePrice: 2290000, depreciation: 0.16 },
            { name: "Q70 小改款", basePrice: 2090000, depreciation: 0.16 },

            // FX系列
            { name: "FX35 第二代", basePrice: 2460000, depreciation: 0.16 },
            { name: "FX37", basePrice: 2480000, depreciation: 0.16 },
            { name: "FX50", basePrice: 3300000, depreciation: 0.16 },

            // QX30
            { name: "QX30", basePrice: 1680000, depreciation: 0.17 },

            // QX50系列
            { name: "QX50 第一代", basePrice: 2170000, depreciation: 0.16 },
            { name: "QX50 第二代", basePrice: 2450000, depreciation: 0.16 },

            // QX60系列
            { name: "QX60 第一代", basePrice: 2990000, depreciation: 0.16 },
            { name: "QX60 第二代", basePrice: 2680000, depreciation: 0.16 },

            // QX70
            { name: "QX70", basePrice: 2480000, depreciation: 0.16 }
        ]
    },

    "Isuzu五十鈴": {
        models: [
            // ELF系列
            { name: "ELF 第五代 貨車", basePrice: 1280000, depreciation: 0.15 },
            { name: "ELF 第六代 貨車", basePrice: 1565000, depreciation: 0.15 },
            { name: "ELF 一路發（日本）", basePrice: 1565000, depreciation: 0.15 }
        ]
    },

    "Kia起亞": {
        models: [
            // Morning系列
            { name: "Morning 第一代", basePrice: 519800, depreciation: 0.17 },
            { name: "Morning 晨尼第一代小改款", basePrice: 495000, depreciation: 0.17 },

            // Picanto系列
            { name: "Picanto 帕克托第一代", basePrice: 499000, depreciation: 0.17 },
            { name: "Picanto 第一代小改款", basePrice: 565000, depreciation: 0.17 },
            { name: "Picanto 第二代小改款", basePrice: 590000, depreciation: 0.17 },

            // Stinger
            { name: "Stinger 史丁格", basePrice: 1558000, depreciation: 0.16 },

            // Stonic
            { name: "Stonic 史托尼克", basePrice: 739000, depreciation: 0.16 },

            // Soul
            { name: "Soul 靈魂", basePrice: 869800, depreciation: 0.16 },
            { name: "Soul 第二代小改款", basePrice: 859000, depreciation: 0.16 },

            // Sportage系列
            { name: "Sportage 第三代", basePrice: 989000, depreciation: 0.15 },
            { name: "Sportage 第四代", basePrice: 1039000, depreciation: 0.15 },
            { name: "Sportage 運動版第四代", basePrice: 1139000, depreciation: 0.15 },

            // Sorento系列
            { name: "Sorento 所蘭托第二代", basePrice: 1419000, depreciation: 0.15 },
            { name: "Sorento 第三代", basePrice: 1670000, depreciation: 0.15 },
            { name: "Sorento 所蘭托第四代", basePrice: 1780000, depreciation: 0.15 },

            // Carnival系列
            { name: "Carnival 嘉年華第二代", basePrice: 1389000, depreciation: 0.15 },
            { name: "Carnival 第三代", basePrice: 1559000, depreciation: 0.15 },

            // EV6
            { name: "EV6", basePrice: 1669000, depreciation: 0.17 },
            { name: "EV6 小改款", basePrice: 1979000, depreciation: 0.17 },

            // Ceed SW
            { name: "Ceed SW", basePrice: 1129000, depreciation: 0.16 }
        ]
    },

    "Luxgen納智捷": {
        models: [
            // S3
            { name: "S3 拉傑第一代", basePrice: 649000, depreciation: 0.17 },

            // S5系列
            { name: "S5 Sedan", basePrice: 690000, depreciation: 0.17 },
            { name: "S5 Turbo", basePrice: 690000, depreciation: 0.17 },
            { name: "S5 Turbo Eco Hyper", basePrice: 659000, depreciation: 0.17 },

            // U6系列
            { name: "U6 Turbo", basePrice: 819000, depreciation: 0.16 },
            { name: "U6 Turbo Eco Hyper", basePrice: 812000, depreciation: 0.16 },
            { name: "U6 GT", basePrice: 899000, depreciation: 0.16 },
            { name: "U6 GT220", basePrice: 939000, depreciation: 0.16 },

            // U7系列
            { name: "U7 Turbo", basePrice: 945000, depreciation: 0.16 },
            { name: "U7 Turbo Eco Hyper", basePrice: 923000, depreciation: 0.16 },

            // M7系列
            { name: "M7 Turbo", basePrice: 1015000, depreciation: 0.16 },
            { name: "M7 Turbo Eco Hyper", basePrice: 1013000, depreciation: 0.16 },

            // URX
            { name: "URX", basePrice: 848000, depreciation: 0.16 },

            // N7
            { name: "N7 電動車", basePrice: 999000, depreciation: 0.17 },

            // U5
            { name: "U5", basePrice: 659000, depreciation: 0.16 }
        ]
    },

    "Morgan摩根": {
        models: [
            { name: "Plus 4", basePrice: 4000000, depreciation: 0.16 },
            { name: "Plus Six", basePrice: 6470000, depreciation: 0.15 },
            { name: "Aero", basePrice: 8888000, depreciation: 0.15 }
        ]
    },

    // ========== 日本品牌（新增）==========
    "Mitsubishi三菱": {
        models: [
            // Lancer系列
            { name: "Lancer", basePrice: 839000, depreciation: 0.16 },
            { name: "Sport Back", basePrice: 859000, depreciation: 0.16 },
            { name: "Lancer Fortis", basePrice: 649000, depreciation: 0.16 },
            { name: "Lancer Fortis 旗艦版", basePrice: 779000, depreciation: 0.16 },
            { name: "Lancer iO", basePrice: 699000, depreciation: 0.16 },
            { name: "Grand Lancer", basePrice: 669000, depreciation: 0.16 },
            { name: "Grand Lancer 旗艦版", basePrice: 881000, depreciation: 0.16 },

            // SUV系列
            { name: "ASX", basePrice: 1128000, depreciation: 0.16 },
            { name: "Eclipse Cross", basePrice: 949000, depreciation: 0.16 },
            { name: "Eclipse Cross PHEV", basePrice: 1339000, depreciation: 0.17 },
            { name: "Outlander", basePrice: 789000, depreciation: 0.15 },
            { name: "Outlander PHEV", basePrice: 1990000, depreciation: 0.16 },
            { name: "Xforce", basePrice: 799000, depreciation: 0.16 },

            // Pajero系列
            { name: "Pajero", basePrice: 2280000, depreciation: 0.15 },

            // MPV/商用車系列
            { name: "Colt Plus", basePrice: 549000, depreciation: 0.17 },
            { name: "Savrin", basePrice: 747000, depreciation: 0.16 },
            { name: "Zinger", basePrice: 540000, depreciation: 0.16 },
            { name: "Zinger Pickup", basePrice: 629000, depreciation: 0.16 },

            // 其他
            { name: "Galant Grunder", basePrice: 845000, depreciation: 0.16 }
        ]
    },

    "Suzuki鈴木": {
        models: [
            // Swift系列
            { name: "Swift", basePrice: 578000, depreciation: 0.17 },
            { name: "Swift 思維特", basePrice: 720000, depreciation: 0.17 },

            // SX4系列
            { name: "SX4", basePrice: 568000, depreciation: 0.17 },
            { name: "SX4 Crossover", basePrice: 785000, depreciation: 0.16 },

            // Baleno系列
            { name: "Baleno", basePrice: 708000, depreciation: 0.17 },

            // Ignis系列
            { name: "Ignis", basePrice: 638000, depreciation: 0.17 },

            // Jimny系列
            { name: "Jimny", basePrice: 648000, depreciation: 0.17 },

            // Vitara系列
            { name: "Vitara", basePrice: 768000, depreciation: 0.16 },

            // S-Cross系列
            { name: "S-Cross", basePrice: 980000, depreciation: 0.16 },

            // Alto系列
            { name: "Alto", basePrice: 468000, depreciation: 0.17 },

            // 商用車
            { name: "Carry", basePrice: 479000, depreciation: 0.16 },
            { name: "Grand Vitara JP", basePrice: 1038000, depreciation: 0.16 }
        ]
    },

    "Subaru速霸陸": {
        models: [
            // Impreza系列
            { name: "Impreza", basePrice: 1850000, depreciation: 0.16 },
            { name: "Impreza WRX STI", basePrice: 1900000, depreciation: 0.16 },

            // WRX系列
            { name: "WRX", basePrice: 1270000, depreciation: 0.16 },
            { name: "WRX STI", basePrice: 1760000, depreciation: 0.16 },
            { name: "WRX Wagon", basePrice: 1658000, depreciation: 0.16 },

            // Legacy系列
            { name: "Legacy", basePrice: 1100000, depreciation: 0.16 },
            { name: "Legacy Wagon", basePrice: 1230000, depreciation: 0.16 },

            // BRZ系列
            { name: "BRZ", basePrice: 1330000, depreciation: 0.16 },
            { name: "BRZ STI", basePrice: 1748000, depreciation: 0.16 },

            // Forester系列
            { name: "Forester", basePrice: 1070000, depreciation: 0.15 },
            { name: "Forester GT", basePrice: 1258000, depreciation: 0.15 },

            // Outback系列
            { name: "Outback", basePrice: 1800000, depreciation: 0.15 },

            // XV系列
            { name: "XV", basePrice: 980000, depreciation: 0.16 },

            // Levorg系列
            { name: "Levorg", basePrice: 1220000, depreciation: 0.16 },

            // Crosstrek系列
            { name: "Crosstrek", basePrice: 1148000, depreciation: 0.16 },

            // Solterra電動車
            { name: "Solterra", basePrice: 1898000, depreciation: 0.17 }
        ]
    },

    // ========== 韓國品牌（新增）==========
    "Ssangyong雙龍": {
        models: [
            // Korando系列
            { name: "Korando", basePrice: 1148000, depreciation: 0.16 },

            // Rexton系列
            { name: "Rexton II", basePrice: 2150000, depreciation: 0.16 },
            { name: "Rexton W", basePrice: 1570000, depreciation: 0.16 },
            { name: "Rexton W Sports", basePrice: 1368000, depreciation: 0.16 },

            // Tivoli系列
            { name: "Tivoli", basePrice: 768000, depreciation: 0.16 },

            // Stavic系列
            { name: "Stavic", basePrice: 1698000, depreciation: 0.16 },

            // Actyon系列
            { name: "Actyon", basePrice: 1180000, depreciation: 0.16 },

            // Kyron系列
            { name: "Kyron", basePrice: 1428000, depreciation: 0.16 }
        ]
    },

    // ========== 英國品牌（新增）==========
    "MG": {
        models: [
            // HS系列
            { name: "HS", basePrice: 939000, depreciation: 0.16 },

            // ZS系列
            { name: "ZS", basePrice: 769000, depreciation: 0.16 },

            // MG4電動車
            { name: "MG4", basePrice: 1189000, depreciation: 0.17 },

            // MG5
            { name: "MG5", basePrice: 1085000, depreciation: 0.16 },

            // GS50 Plus
            { name: "GS50 Plus", basePrice: 1085000, depreciation: 0.16 }
        ]
    },

    // ========== 馬來西亞品牌（新增）==========
    "Proton普騰": {
        models: [
            { name: "Gen2", basePrice: 578000, depreciation: 0.17 },
            { name: "Savvy", basePrice: 448000, depreciation: 0.17 },
            { name: "Persona", basePrice: 568000, depreciation: 0.17 }
        ]
    },

    // ========== 印度品牌（新增）==========
    "Mahindra馬亨達": {
        models: [
            { name: "PIK-UP", basePrice: 758000, depreciation: 0.16 },
            { name: "KUV100", basePrice: 558000, depreciation: 0.16 }
        ]
    },

    // ========== 中華品牌（商用車）==========
    "CMC中華汽車": {
        models: [
            // Veryca系列
            { name: "Veryca", basePrice: 486000, depreciation: 0.16 },
            { name: "Veryca 菱利", basePrice: 527000, depreciation: 0.16 },
            { name: "E-Veryca", basePrice: 879000, depreciation: 0.17 },

            // Delica系列
            { name: "Delica", basePrice: 484000, depreciation: 0.16 },
            { name: "Delica 得利卡", basePrice: 497000, depreciation: 0.16 },

            // Canter系列
            { name: "Canter", basePrice: 1140000, depreciation: 0.15 },
            { name: "Canter Turbo", basePrice: 943000, depreciation: 0.15 },

            // Leadca系列
            { name: "Leadca", basePrice: 806000, depreciation: 0.16 },

            // J-Space系列
            { name: "J-Space", basePrice: 950000, depreciation: 0.16 }
        ]
    }
};

// 初始化車款選單
function initCarSelect() {
    const carSelect = document.getElementById('carBrand');

    // 清空現有選項（保留第一個預設選項）
    while (carSelect.options.length > 1) {
        carSelect.remove(1);
    }

    // 添加所有車款
    Object.keys(carDatabase).forEach(brand => {
        const brandGroup = document.createElement('optgroup');
        brandGroup.label = brand;

        carDatabase[brand].models.forEach(model => {
            const option = document.createElement('option');
            option.value = JSON.stringify({
                brand: brand,
                model: model.name,
                basePrice: model.basePrice,
                depreciation: model.depreciation
            });
            option.textContent = `${brand} ${model.name}`;
            brandGroup.appendChild(option);
        });

        carSelect.appendChild(brandGroup);
    });
}

// 頁面載入時初始化
document.addEventListener('DOMContentLoaded', initCarSelect);
