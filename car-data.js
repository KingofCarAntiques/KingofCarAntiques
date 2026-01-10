// ===============================================
// 秒估車 - 車款價格資料庫（完整版）
// ===============================================
// 📅 最後更新：2026年1月10日
// 📊 數據來源：石貳全中古車行情表第460期 完整版
// 🔄 更新頻率：每月更新
// 📋 支援品牌：51個品牌
// 📋 支援車款：850+ 款
//
// 🆕 2026年1月10日 更新：
//    ✅ Toyota豐田：新增 Vios、C-HR、Highlander、Land Cruiser、
//       Fortuner、Granvia、Previa、Wish、Innova、Hilux、GR系列、
//       Prius、bZ4X、Tercel、Exsior 等 45+ 款
//    ✅ Honda本田：新增 Civic Type R、City、ZR-V、NSX、S2000、
//       Stream、Jazz、Pilot、Prelude、Integra 等 30+ 款
//    ✅ Nissan日產：新增 Altima、Tiida、Livina、March、Teana、
//       Juke、Murano、GT-R、Cefiro、Skyline 等 25+ 款
//    ✅ Mazda馬自達：新增 Mazda6、CX-3、CX-9、CX-90、MX-5、
//       Mazda2、RX-8、323 等 20+ 款
//    ✅ Lexus凌志：新增完整 IS/ES/GS/LS/NX/RX/UX/LX/GX/LC/RC
//       系列共 50+ 款
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
//
// 🎯 本次細節補充（2026年1月2日 - 基於PDF第51-75頁）：
//   ✅ Audi奧迪：新增 e-tron 系列詳細型號
//      - Q4/Q6/Q8 e-TRON 全系列（共11款新車型）
//      - GT e-TRON 跑車系列
//
//   ✅ Mercedes-Benz賓士：新增詳細車型變體
//      - B-Class：新增 AMG 和特殊版本（共5款）
//      - C-Class：新增 Coupe 和特殊版本（共11款）
//      - E-Class：新增 Coupe/Estate 和詳細版本（共12款）
//      - S-Class：新增 Coupe 和 Maybach 詳細版本（共9款）
//
//   ✅ BMW：新增 i 系列電動車詳細型號
//      - i3/i4/i5/i7/i8 全系列（共15款新車型）
//      - iX1/iX3/iX 系列
//
//   📈 總計新增車型：60+ 款細節車型變體
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
            { name: "e-tron Sportback", basePrice: 3450000, depreciation: 0.18 },

            // Q4 e-TRON系列（基於PDF第4頁）
            { name: "Q4 e-TRON 40", basePrice: 3050000, depreciation: 0.18 },
            { name: "Q4 e-TRON 45", basePrice: 3300000, depreciation: 0.18 },
            { name: "Q4 e-TRON 50", basePrice: 3800000, depreciation: 0.18 },
            { name: "Q4 e-TRON Sportback", basePrice: 3200000, depreciation: 0.18 },

            // Q6 e-TRON系列
            { name: "Q6 e-TRON", basePrice: 3980000, depreciation: 0.18 },
            { name: "Q6 e-TRON Sportback", basePrice: 4080000, depreciation: 0.18 },

            // Q8 e-TRON系列
            { name: "Q8 e-TRON 50", basePrice: 4060000, depreciation: 0.18 },
            { name: "Q8 e-TRON 55", basePrice: 4750000, depreciation: 0.17 },
            { name: "Q8 e-TRON Sportback", basePrice: 4210000, depreciation: 0.18 },

            // GT e-TRON系列
            { name: "GT e-TRON 四門跑車", basePrice: 4660000, depreciation: 0.17 },
            { name: "RS e-TRON GT", basePrice: 7850000, depreciation: 0.16 }
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

            // B-Class系列（基於PDF第6頁）
            { name: "B180", basePrice: 1700000, depreciation: 0.18 },
            { name: "B200", basePrice: 1900000, depreciation: 0.18 },
            { name: "B180 AMG", basePrice: 1740000, depreciation: 0.18 },
            { name: "B200 AMG", basePrice: 1865000, depreciation: 0.18 },
            { name: "B250", basePrice: 2100000, depreciation: 0.18 },
            { name: "B200 Blue Efficiency", basePrice: 1790000, depreciation: 0.18 },
            { name: "B200 CDI", basePrice: 1830000, depreciation: 0.18 },

            // C-Class系列（基於PDF第6-7頁）
            { name: "C180", basePrice: 2100000, depreciation: 0.17 },
            { name: "C200", basePrice: 2300000, depreciation: 0.17 },
            { name: "C200 Kompressor", basePrice: 2150000, depreciation: 0.17 },
            { name: "C200 CGI Turbo", basePrice: 2380000, depreciation: 0.17 },
            { name: "C200 Estate", basePrice: 2850000, depreciation: 0.17 },
            { name: "C220 CDI", basePrice: 2200000, depreciation: 0.17 },
            { name: "C250", basePrice: 2600000, depreciation: 0.17 },
            { name: "C250 AMG", basePrice: 2800000, depreciation: 0.17 },
            { name: "C300", basePrice: 2850000, depreciation: 0.17 },
            { name: "C300 AMG", basePrice: 3040000, depreciation: 0.17 },
            { name: "C180 Coupe", basePrice: 2010000, depreciation: 0.17 },
            { name: "C200 Coupe", basePrice: 2330000, depreciation: 0.17 },
            { name: "C250 Coupe", basePrice: 2730000, depreciation: 0.17 },
            { name: "C300 Coupe", basePrice: 3040000, depreciation: 0.17 },
            { name: "C43 AMG", basePrice: 3800000, depreciation: 0.16 },
            { name: "C63 AMG", basePrice: 5500000, depreciation: 0.16 },
            { name: "C63 AMG Coupe", basePrice: 5660000, depreciation: 0.16 },

            // E-Class系列（基於PDF第8-9頁）
            { name: "E200", basePrice: 2800000, depreciation: 0.16 },
            { name: "E200 Elegance", basePrice: 2850000, depreciation: 0.16 },
            { name: "E200 AVANTGARDE", basePrice: 2790000, depreciation: 0.16 },
            { name: "E220 Blue TEC", basePrice: 2960000, depreciation: 0.16 },
            { name: "E250", basePrice: 3100000, depreciation: 0.16 },
            { name: "E250 Estate", basePrice: 3100000, depreciation: 0.16 },
            { name: "E250 Coupe", basePrice: 3160000, depreciation: 0.16 },
            { name: "E300", basePrice: 3400000, depreciation: 0.16 },
            { name: "E300 Coupe", basePrice: 3480000, depreciation: 0.16 },
            { name: "E320 CDI", basePrice: 3280000, depreciation: 0.16 },
            { name: "E350", basePrice: 3700000, depreciation: 0.16 },
            { name: "E350 Coupe", basePrice: 3770000, depreciation: 0.16 },
            { name: "E400", basePrice: 4010000, depreciation: 0.16 },
            { name: "E400 Coupe", basePrice: 3980000, depreciation: 0.16 },
            { name: "E43 AMG", basePrice: 4500000, depreciation: 0.16 },
            { name: "E53 AMG", basePrice: 4900000, depreciation: 0.16 },
            { name: "E53 AMG Coupe", basePrice: 4760000, depreciation: 0.16 },
            { name: "E63 AMG", basePrice: 7100000, depreciation: 0.15 },
            { name: "E63 AMG Wagon", basePrice: 7120000, depreciation: 0.15 },

            // S-Class系列（基於PDF第9頁）
            { name: "S320L CDI", basePrice: 4990000, depreciation: 0.15 },
            { name: "S350", basePrice: 5300000, depreciation: 0.15 },
            { name: "S350L", basePrice: 5500000, depreciation: 0.15 },
            { name: "S400", basePrice: 5800000, depreciation: 0.15 },
            { name: "S400 Hybrid", basePrice: 5760000, depreciation: 0.15 },
            { name: "S450", basePrice: 6200000, depreciation: 0.15 },
            { name: "S450L", basePrice: 6410000, depreciation: 0.15 },
            { name: "S500", basePrice: 6800000, depreciation: 0.15 },
            { name: "S500 Coupe", basePrice: 6780000, depreciation: 0.15 },
            { name: "S560", basePrice: 7500000, depreciation: 0.15 },
            { name: "S560 Coupe", basePrice: 7580000, depreciation: 0.15 },
            { name: "S600", basePrice: 10280000, depreciation: 0.14 },
            { name: "S600 Maybach", basePrice: 12800000, depreciation: 0.14 },
            { name: "S650 Maybach", basePrice: 14200000, depreciation: 0.14 },
            { name: "S680 Maybach", basePrice: 16500000, depreciation: 0.14 },

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

            // i系列電動車（基於PDF第22頁）
            { name: "i3", basePrice: 1900000, depreciation: 0.18 },
            { name: "i3 REX", basePrice: 1990000, depreciation: 0.18 },
            { name: "i3s", basePrice: 2580000, depreciation: 0.18 },
            { name: "i3s REX", basePrice: 2680000, depreciation: 0.18 },
            { name: "i4 eDrive35", basePrice: 2490000, depreciation: 0.17 },
            { name: "i4 eDrive40", basePrice: 2800000, depreciation: 0.17 },
            { name: "i4 M50", basePrice: 3500000, depreciation: 0.17 },
            { name: "i5 eDrive40", basePrice: 3480000, depreciation: 0.17 },
            { name: "i5 M60", basePrice: 4850000, depreciation: 0.17 },
            { name: "i7 xDrive60", basePrice: 6200000, depreciation: 0.16 },
            { name: "i7 M70", basePrice: 7680000, depreciation: 0.16 },
            { name: "i8", basePrice: 9980000, depreciation: 0.16 },
            { name: "i8 Coupe", basePrice: 10680000, depreciation: 0.16 },
            { name: "i8 Roadster", basePrice: 10680000, depreciation: 0.16 },
            { name: "iX1 xDrive30", basePrice: 2690000, depreciation: 0.17 },
            { name: "iX3", basePrice: 3150000, depreciation: 0.17 },
            { name: "iX xDrive40", basePrice: 3500000, depreciation: 0.17 },
            { name: "iX xDrive50", basePrice: 4200000, depreciation: 0.17 },
            { name: "iX M60", basePrice: 5400000, depreciation: 0.16 },

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
            // Corolla 系列
            { name: "Altis", basePrice: 712000, depreciation: 0.15 },
            { name: "Altis Hybrid", basePrice: 790000, depreciation: 0.14 },
            { name: "Altis GR Sport", basePrice: 830000, depreciation: 0.14 },
            { name: "Corolla Cross", basePrice: 873000, depreciation: 0.13 },
            { name: "Corolla Cross Hybrid", basePrice: 980000, depreciation: 0.12 },
            { name: "Corolla Sport", basePrice: 850000, depreciation: 0.14 },

            // Camry 系列
            { name: "Camry", basePrice: 1113000, depreciation: 0.12 },
            { name: "Camry Hybrid", basePrice: 1289000, depreciation: 0.12 },
            { name: "Camry 2.5", basePrice: 1150000, depreciation: 0.12 },

            // Yaris / Vios 系列
            { name: "Yaris", basePrice: 636000, depreciation: 0.16 },
            { name: "Yaris Cross", basePrice: 745000, depreciation: 0.15 },
            { name: "Vios", basePrice: 550000, depreciation: 0.16 },
            { name: "Vios 1.5", basePrice: 580000, depreciation: 0.16 },

            // SUV / 休旅車系列
            { name: "RAV4", basePrice: 1077000, depreciation: 0.12 },
            { name: "RAV4 Hybrid", basePrice: 1250000, depreciation: 0.11 },
            { name: "RAV4 Adventure", basePrice: 1150000, depreciation: 0.12 },
            { name: "C-HR", basePrice: 950000, depreciation: 0.14 },
            { name: "C-HR Hybrid", basePrice: 1050000, depreciation: 0.13 },
            { name: "Highlander", basePrice: 1800000, depreciation: 0.12 },
            { name: "Land Cruiser", basePrice: 3200000, depreciation: 0.10 },
            { name: "Land Cruiser Prado", basePrice: 2500000, depreciation: 0.11 },
            { name: "Fortuner", basePrice: 1450000, depreciation: 0.13 },

            // MPV / 商旅車系列
            { name: "Sienna", basePrice: 2530000, depreciation: 0.14 },
            { name: "Sienna SE", basePrice: 2680000, depreciation: 0.13 },
            { name: "Sienna XLE", basePrice: 2780000, depreciation: 0.13 },
            { name: "Sienna Limited", basePrice: 2980000, depreciation: 0.13 },
            { name: "Alphard", basePrice: 2390000, depreciation: 0.12 },
            { name: "Alphard Hybrid", basePrice: 2600000, depreciation: 0.11 },
            { name: "Alphard Executive", basePrice: 2890000, depreciation: 0.11 },
            { name: "Alphard SC", basePrice: 2550000, depreciation: 0.12 },
            { name: "Vellfire", basePrice: 2710000, depreciation: 0.12 },
            { name: "Vellfire Z", basePrice: 2850000, depreciation: 0.12 },
            { name: "Vellfire Executive", basePrice: 3100000, depreciation: 0.11 },
            { name: "Granvia", basePrice: 1750000, depreciation: 0.13 },
            { name: "Granvia 6人座", basePrice: 1850000, depreciation: 0.13 },
            { name: "Granvia 9人座", basePrice: 1690000, depreciation: 0.13 },
            { name: "Previa", basePrice: 1650000, depreciation: 0.14 },
            { name: "Previa 2.4", basePrice: 1550000, depreciation: 0.14 },
            { name: "Previa 3.5", basePrice: 1850000, depreciation: 0.13 },
            { name: "Sienta", basePrice: 650000, depreciation: 0.15 },
            { name: "Sienta 5人座", basePrice: 620000, depreciation: 0.15 },
            { name: "Sienta 7人座", basePrice: 680000, depreciation: 0.15 },
            { name: "Sienta Crossover", basePrice: 750000, depreciation: 0.14 },
            { name: "Wish", basePrice: 850000, depreciation: 0.15 },
            { name: "Wish 2.0", basePrice: 920000, depreciation: 0.15 },
            { name: "Innova", basePrice: 950000, depreciation: 0.14 },
            { name: "Innova Cross", basePrice: 1150000, depreciation: 0.13 },
            { name: "Noah", basePrice: 1350000, depreciation: 0.14 },
            { name: "Voxy", basePrice: 1450000, depreciation: 0.14 },
            { name: "Esquire", basePrice: 1380000, depreciation: 0.14 },

            // 皮卡 / 商用車
            { name: "Hilux", basePrice: 1350000, depreciation: 0.13 },
            { name: "Tacoma", basePrice: 1800000, depreciation: 0.12 },
            { name: "Town Ace", basePrice: 650000, depreciation: 0.15 },
            { name: "Hiace", basePrice: 1450000, depreciation: 0.13 },

            // 性能車 / GR系列
            { name: "GR86", basePrice: 1298000, depreciation: 0.14 },
            { name: "GR Supra", basePrice: 2350000, depreciation: 0.14 },
            { name: "GR Yaris", basePrice: 1790000, depreciation: 0.13 },
            { name: "GR Corolla", basePrice: 1890000, depreciation: 0.13 },

            // 油電 / 電動車
            { name: "Prius", basePrice: 1100000, depreciation: 0.14 },
            { name: "Prius PHV", basePrice: 1390000, depreciation: 0.15 },
            { name: "bZ4X", basePrice: 1590000, depreciation: 0.16 },

            // 經典 / 停產車款（二手市場常見）
            { name: "Tercel", basePrice: 450000, depreciation: 0.18 },
            { name: "Exsior", basePrice: 500000, depreciation: 0.17 },
            { name: "Corona", basePrice: 550000, depreciation: 0.17 },
            { name: "Premio", basePrice: 600000, depreciation: 0.16 },
            { name: "Zace", basePrice: 550000, depreciation: 0.16 },
            { name: "86", basePrice: 1200000, depreciation: 0.15 }
        ]
    },

    "Honda本田": {
        models: [
            // City 系列
            { name: "City", basePrice: 650000, depreciation: 0.15 },
            { name: "City 1.5", basePrice: 680000, depreciation: 0.15 },
            { name: "City VTi", basePrice: 720000, depreciation: 0.14 },
            { name: "City VTi-S", basePrice: 750000, depreciation: 0.14 },

            // Fit 系列
            { name: "Fit", basePrice: 700000, depreciation: 0.15 },
            { name: "Fit e:HEV", basePrice: 850000, depreciation: 0.14 },
            { name: "Fit 1.5", basePrice: 720000, depreciation: 0.15 },
            { name: "Fit VTi", basePrice: 750000, depreciation: 0.14 },
            { name: "Fit VTi-S", basePrice: 780000, depreciation: 0.14 },
            { name: "Fit Home", basePrice: 760000, depreciation: 0.14 },

            // Civic 系列
            { name: "Civic", basePrice: 950000, depreciation: 0.14 },
            { name: "Civic e:HEV", basePrice: 1150000, depreciation: 0.13 },
            { name: "Civic Type R", basePrice: 1890000, depreciation: 0.12 },
            { name: "Civic Ferio", basePrice: 550000, depreciation: 0.16 },
            { name: "Civic 1.5T", basePrice: 980000, depreciation: 0.14 },
            { name: "Civic VTi", basePrice: 920000, depreciation: 0.14 },
            { name: "Civic VTi-S", basePrice: 1050000, depreciation: 0.13 },
            { name: "Civic Si", basePrice: 1280000, depreciation: 0.13 },
            { name: "Civic Hatchback", basePrice: 1100000, depreciation: 0.14 },

            // CR-V 系列
            { name: "CR-V", basePrice: 1300000, depreciation: 0.13 },
            { name: "CR-V e:HEV", basePrice: 1450000, depreciation: 0.12 },
            { name: "CR-V 2.0", basePrice: 1150000, depreciation: 0.13 },
            { name: "CR-V 1.5T", basePrice: 1250000, depreciation: 0.13 },
            { name: "CR-V VTi", basePrice: 1190000, depreciation: 0.13 },
            { name: "CR-V VTi-S", basePrice: 1290000, depreciation: 0.12 },
            { name: "CR-V S", basePrice: 1350000, depreciation: 0.12 },
            { name: "CR-V Prestige", basePrice: 1420000, depreciation: 0.12 },

            // HR-V 系列
            { name: "HR-V", basePrice: 850000, depreciation: 0.14 },
            { name: "HR-V e:HEV", basePrice: 980000, depreciation: 0.13 },
            { name: "HR-V S", basePrice: 820000, depreciation: 0.14 },
            { name: "HR-V VTi", basePrice: 870000, depreciation: 0.14 },
            { name: "HR-V VTi-S", basePrice: 920000, depreciation: 0.13 },
            { name: "HR-V RS", basePrice: 950000, depreciation: 0.13 },
            { name: "HR-V Prestige", basePrice: 990000, depreciation: 0.13 },

            // Accord 系列
            { name: "Accord", basePrice: 1500000, depreciation: 0.12 },
            { name: "Accord Hybrid", basePrice: 1690000, depreciation: 0.11 },
            { name: "Accord 2.0T", basePrice: 1600000, depreciation: 0.12 },
            { name: "Accord 1.5T", basePrice: 1450000, depreciation: 0.12 },
            { name: "Accord VTi", basePrice: 1420000, depreciation: 0.12 },
            { name: "Accord VTi-S", basePrice: 1550000, depreciation: 0.12 },

            // MPV 系列
            { name: "Odyssey", basePrice: 1800000, depreciation: 0.13 },
            { name: "Odyssey Apex", basePrice: 1990000, depreciation: 0.12 },
            { name: "Odyssey Elite", basePrice: 1850000, depreciation: 0.12 },
            { name: "Freed", basePrice: 950000, depreciation: 0.14 },
            { name: "Freed+", basePrice: 1050000, depreciation: 0.14 },
            { name: "Stepwgn", basePrice: 1350000, depreciation: 0.14 },

            // SUV 系列
            { name: "ZR-V", basePrice: 1150000, depreciation: 0.13 },
            { name: "ZR-V e:HEV", basePrice: 1350000, depreciation: 0.12 },
            { name: "Passport", basePrice: 1650000, depreciation: 0.13 },
            { name: "Pilot", basePrice: 1850000, depreciation: 0.13 },
            { name: "Vezel", basePrice: 900000, depreciation: 0.14 },

            // 性能車 / 跑車
            { name: "NSX", basePrice: 9500000, depreciation: 0.14 },
            { name: "S2000", basePrice: 1800000, depreciation: 0.12 },
            { name: "S660", basePrice: 850000, depreciation: 0.14 },
            { name: "Integra Type R", basePrice: 1200000, depreciation: 0.12 },

            // 經典 / 停產車款（二手市場常見）
            { name: "Stream", basePrice: 750000, depreciation: 0.15 },
            { name: "Stream RSZ", basePrice: 820000, depreciation: 0.14 },
            { name: "Insight", basePrice: 900000, depreciation: 0.15 },
            { name: "Jazz", basePrice: 650000, depreciation: 0.15 },
            { name: "Legend", basePrice: 1500000, depreciation: 0.14 },
            { name: "Element", basePrice: 850000, depreciation: 0.15 },
            { name: "Prelude", basePrice: 900000, depreciation: 0.14 },
            { name: "Integra", basePrice: 850000, depreciation: 0.14 },
            { name: "CRX", basePrice: 600000, depreciation: 0.15 },
            { name: "Beat", basePrice: 550000, depreciation: 0.15 },
            { name: "Concerto", basePrice: 500000, depreciation: 0.16 },
            { name: "Edix", basePrice: 700000, depreciation: 0.15 },
            { name: "Mobilio", basePrice: 650000, depreciation: 0.15 },
            { name: "Spike", basePrice: 600000, depreciation: 0.15 }
        ]
    },

    "Nissan日產": {
        models: [
            // ========== Tiida 騏達系列 ==========
            { name: "Tiida", basePrice: 650000, depreciation: 0.15 },
            { name: "Tiida 騏達", basePrice: 650000, depreciation: 0.15 },
            { name: "Tiida 1.6", basePrice: 620000, depreciation: 0.15 },
            { name: "Tiida 1.8", basePrice: 680000, depreciation: 0.15 },
            { name: "Tiida 5門", basePrice: 650000, depreciation: 0.15 },
            { name: "Tiida 4門", basePrice: 630000, depreciation: 0.15 },
            { name: "Tiida 豪華版", basePrice: 699000, depreciation: 0.15 },
            { name: "Tiida Turbo", basePrice: 750000, depreciation: 0.15 },
            { name: "Big Tiida", basePrice: 720000, depreciation: 0.15 },
            { name: "Big Tiida 1.6", basePrice: 720000, depreciation: 0.15 },

            // ========== March 馬乳系列 ==========
            { name: "March", basePrice: 500000, depreciation: 0.16 },
            { name: "March 馬乳", basePrice: 500000, depreciation: 0.16 },
            { name: "March 1.3", basePrice: 480000, depreciation: 0.16 },
            { name: "March 1.5", basePrice: 520000, depreciation: 0.16 },
            { name: "March 經典版", basePrice: 459000, depreciation: 0.16 },
            { name: "March 豪華版", basePrice: 529000, depreciation: 0.16 },
            { name: "New March", basePrice: 539000, depreciation: 0.16 },

            // ========== Super Sentra / Sentra 系列 ==========
            { name: "Sentra", basePrice: 805000, depreciation: 0.15 },
            { name: "Sentra B18", basePrice: 820000, depreciation: 0.14 },
            { name: "Super Sentra", basePrice: 750000, depreciation: 0.15 },
            { name: "Super Sentra 1.8", basePrice: 750000, depreciation: 0.15 },
            { name: "Super Sentra 豪華版", basePrice: 799000, depreciation: 0.15 },
            { name: "Super Sentra 旗艦版", basePrice: 859000, depreciation: 0.15 },
            { name: "Sentra 1.6", basePrice: 699000, depreciation: 0.15 },
            { name: "Sentra 1.8", basePrice: 759000, depreciation: 0.15 },
            { name: "Sentra Aero", basePrice: 829000, depreciation: 0.15 },
            { name: "New Sentra", basePrice: 805000, depreciation: 0.15 },
            { name: "All New Sentra", basePrice: 839000, depreciation: 0.14 },

            // ========== Teana 鐵安娜系列 ==========
            { name: "Teana", basePrice: 1150000, depreciation: 0.14 },
            { name: "Teana 鐵乳娜", basePrice: 1150000, depreciation: 0.14 },
            { name: "Teana 2.0", basePrice: 999000, depreciation: 0.14 },
            { name: "Teana 2.5", basePrice: 1150000, depreciation: 0.14 },
            { name: "Teana 3.5", basePrice: 1450000, depreciation: 0.14 },
            { name: "Teana 豪華版", basePrice: 1099000, depreciation: 0.14 },
            { name: "Teana 旗艦版", basePrice: 1299000, depreciation: 0.14 },
            { name: "New Teana", basePrice: 1199000, depreciation: 0.14 },

            // ========== Altima 系列 ==========
            { name: "Altima", basePrice: 1250000, depreciation: 0.14 },
            { name: "Altima 2.0T", basePrice: 1250000, depreciation: 0.14 },
            { name: "Altima 2.5", basePrice: 1350000, depreciation: 0.14 },
            { name: "Altima 豪華版", basePrice: 1299000, depreciation: 0.14 },
            { name: "Altima 旗艦版", basePrice: 1399000, depreciation: 0.14 },

            // ========== 370Z / Z 跑車系列 ==========
            { name: "370Z", basePrice: 2200000, depreciation: 0.14 },
            { name: "370Z Coupe", basePrice: 2200000, depreciation: 0.14 },
            { name: "370Z Roadster", basePrice: 2450000, depreciation: 0.14 },
            { name: "370Z NISMO", basePrice: 2650000, depreciation: 0.13 },
            { name: "350Z", basePrice: 1800000, depreciation: 0.14 },
            { name: "Z", basePrice: 2350000, depreciation: 0.13 },
            { name: "New Z", basePrice: 2350000, depreciation: 0.13 },
            { name: "Fairlady Z", basePrice: 2350000, depreciation: 0.13 },

            // ========== GT-R 超跑系列 ==========
            { name: "GT-R", basePrice: 6500000, depreciation: 0.12 },
            { name: "GTR", basePrice: 6500000, depreciation: 0.12 },
            { name: "GT-R Premium", basePrice: 6800000, depreciation: 0.12 },
            { name: "GT-R NISMO", basePrice: 8500000, depreciation: 0.11 },
            { name: "GT-R Black Edition", basePrice: 7200000, depreciation: 0.12 },
            { name: "GT-R Track Edition", basePrice: 7500000, depreciation: 0.12 },
            { name: "GT-R R35", basePrice: 6500000, depreciation: 0.12 },
            { name: "Skyline GT-R", basePrice: 5500000, depreciation: 0.12 },
            { name: "Skyline GT-R R34", basePrice: 4500000, depreciation: 0.11 },
            { name: "Skyline GT-R R33", basePrice: 3500000, depreciation: 0.11 },

            // ========== X-Trail 奇駿系列 ==========
            { name: "X-Trail", basePrice: 1195000, depreciation: 0.13 },
            { name: "X-Trail 奇駿", basePrice: 1195000, depreciation: 0.13 },
            { name: "X-Trail 2.0", basePrice: 1099000, depreciation: 0.13 },
            { name: "X-Trail 2.5", basePrice: 1295000, depreciation: 0.13 },
            { name: "X-Trail 4WD", basePrice: 1395000, depreciation: 0.13 },
            { name: "X-Trail e-Power", basePrice: 1350000, depreciation: 0.12 },
            { name: "X-Trail e-Power 4WD", basePrice: 1450000, depreciation: 0.12 },
            { name: "X-Trail 豪華版", basePrice: 1199000, depreciation: 0.13 },
            { name: "X-Trail 旗艦版", basePrice: 1359000, depreciation: 0.13 },
            { name: "New X-Trail", basePrice: 1259000, depreciation: 0.13 },

            // ========== Livina 麗威娜系列 ==========
            { name: "Livina", basePrice: 620000, depreciation: 0.15 },
            { name: "Livina 麗威娜", basePrice: 620000, depreciation: 0.15 },
            { name: "Livina 1.6", basePrice: 620000, depreciation: 0.15 },
            { name: "Livina 1.8", basePrice: 680000, depreciation: 0.15 },
            { name: "Livina 豪華版", basePrice: 669000, depreciation: 0.15 },
            { name: "Livina 經典版", basePrice: 599000, depreciation: 0.15 },
            { name: "Grand Livina", basePrice: 720000, depreciation: 0.15 },
            { name: "Grand Livina 7人座", basePrice: 759000, depreciation: 0.15 },
            { name: "New Livina", basePrice: 659000, depreciation: 0.15 },

            // ========== Kicks 勁客系列 ==========
            { name: "Kicks", basePrice: 785000, depreciation: 0.14 },
            { name: "Kicks 勁客", basePrice: 785000, depreciation: 0.14 },
            { name: "Kicks 1.5", basePrice: 759000, depreciation: 0.14 },
            { name: "Kicks 豪華版", basePrice: 819000, depreciation: 0.14 },
            { name: "Kicks 旗艦版", basePrice: 879000, depreciation: 0.14 },
            { name: "Kicks e-Power", basePrice: 950000, depreciation: 0.13 },
            { name: "Kicks e-Power 豪華版", basePrice: 999000, depreciation: 0.13 },
            { name: "New Kicks", basePrice: 819000, depreciation: 0.14 },

            // ========== Juke 小乘系列 ==========
            { name: "Juke", basePrice: 850000, depreciation: 0.14 },
            { name: "Juke 1.6", basePrice: 850000, depreciation: 0.14 },
            { name: "Juke 1.6T", basePrice: 950000, depreciation: 0.14 },
            { name: "Juke 豪華版", basePrice: 899000, depreciation: 0.14 },
            { name: "Juke 旗艦版", basePrice: 959000, depreciation: 0.14 },
            { name: "Juke NISMO", basePrice: 1050000, depreciation: 0.14 },
            { name: "New Juke", basePrice: 919000, depreciation: 0.14 },

            // ========== Rogue 俠客系列 ==========
            { name: "Rogue", basePrice: 1299000, depreciation: 0.13 },
            { name: "Rogue 俠客", basePrice: 1299000, depreciation: 0.13 },
            { name: "Rogue 2.5", basePrice: 1299000, depreciation: 0.13 },
            { name: "Rogue SV", basePrice: 1399000, depreciation: 0.13 },
            { name: "Rogue SL", basePrice: 1499000, depreciation: 0.13 },
            { name: "Rogue Platinum", basePrice: 1599000, depreciation: 0.13 },
            { name: "Rogue Sport", basePrice: 1199000, depreciation: 0.13 },

            // ========== Murano 樓蘭系列 ==========
            { name: "Murano", basePrice: 1450000, depreciation: 0.14 },
            { name: "Murano 樓蘭", basePrice: 1450000, depreciation: 0.14 },
            { name: "Murano 2.5", basePrice: 1350000, depreciation: 0.14 },
            { name: "Murano 3.5", basePrice: 1550000, depreciation: 0.14 },
            { name: "Murano 4WD", basePrice: 1599000, depreciation: 0.14 },

            // ========== Pathfinder 探路者系列 ==========
            { name: "Pathfinder", basePrice: 1650000, depreciation: 0.13 },
            { name: "Pathfinder 探路者", basePrice: 1650000, depreciation: 0.13 },
            { name: "Pathfinder 4WD", basePrice: 1799000, depreciation: 0.13 },
            { name: "Pathfinder Platinum", basePrice: 1899000, depreciation: 0.13 },

            // ========== 電動車系列 ==========
            { name: "Leaf", basePrice: 1490000, depreciation: 0.16 },
            { name: "Leaf 40kWh", basePrice: 1490000, depreciation: 0.16 },
            { name: "Leaf 62kWh", basePrice: 1690000, depreciation: 0.16 },
            { name: "Leaf e+", basePrice: 1790000, depreciation: 0.16 },
            { name: "Ariya", basePrice: 1850000, depreciation: 0.15 },
            { name: "Ariya 63kWh", basePrice: 1850000, depreciation: 0.15 },
            { name: "Ariya 87kWh", basePrice: 2150000, depreciation: 0.15 },
            { name: "Ariya e-4ORCE", basePrice: 2350000, depreciation: 0.15 },

            // ========== 商用車系列 ==========
            { name: "NV350", basePrice: 1350000, depreciation: 0.14 },
            { name: "NV350 Urvan", basePrice: 1350000, depreciation: 0.14 },
            { name: "NV200", basePrice: 899000, depreciation: 0.15 },
            { name: "Urvan", basePrice: 1250000, depreciation: 0.14 },
            { name: "Caravan", basePrice: 1150000, depreciation: 0.14 },

            // ========== 經典車款 ==========
            { name: "Cefiro", basePrice: 750000, depreciation: 0.15 },
            { name: "Cefiro 2.0", basePrice: 699000, depreciation: 0.15 },
            { name: "Cefiro 3.0", basePrice: 850000, depreciation: 0.15 },
            { name: "Cefiro A32", basePrice: 650000, depreciation: 0.15 },
            { name: "Cefiro A33", basePrice: 750000, depreciation: 0.15 },
            { name: "Bluebird", basePrice: 550000, depreciation: 0.16 },
            { name: "Maxima", basePrice: 900000, depreciation: 0.15 },
            { name: "Maxima 3.5", basePrice: 1050000, depreciation: 0.15 },
            { name: "Skyline", basePrice: 1500000, depreciation: 0.13 },
            { name: "Skyline 350GT", basePrice: 1650000, depreciation: 0.13 },
            { name: "Primera", basePrice: 650000, depreciation: 0.15 },
            { name: "Sunny", basePrice: 450000, depreciation: 0.16 },
            { name: "Silvia", basePrice: 1200000, depreciation: 0.13 },
            { name: "Silvia S15", basePrice: 1500000, depreciation: 0.12 },
            { name: "180SX", basePrice: 1100000, depreciation: 0.13 },
            { name: "240SX", basePrice: 1000000, depreciation: 0.13 }
        ]
    },

    "Mazda馬自達": {
        models: [
            // Mazda2 馬二系列（小型車）
            { name: "Mazda2", basePrice: 650000, depreciation: 0.15 },
            { name: "馬2", basePrice: 650000, depreciation: 0.15 },
            { name: "馬二", basePrice: 650000, depreciation: 0.15 },
            { name: "Mazda2 1.5", basePrice: 680000, depreciation: 0.15 },
            { name: "Mazda2 Sedan", basePrice: 700000, depreciation: 0.15 },
            { name: "Mazda2 Hatchback", basePrice: 680000, depreciation: 0.15 },

            // Mazda3 馬三系列（中型車）
            { name: "Mazda3", basePrice: 850000, depreciation: 0.14 },
            { name: "馬3", basePrice: 850000, depreciation: 0.14 },
            { name: "馬三", basePrice: 850000, depreciation: 0.14 },
            { name: "Mazda3 5D", basePrice: 880000, depreciation: 0.14 },
            { name: "Mazda3 4D", basePrice: 850000, depreciation: 0.14 },
            { name: "Mazda3 Sedan", basePrice: 850000, depreciation: 0.14 },
            { name: "Mazda3 Fastback", basePrice: 920000, depreciation: 0.13 },
            { name: "Mazda3 Hatchback", basePrice: 880000, depreciation: 0.14 },
            { name: "Mazda3 2.0", basePrice: 920000, depreciation: 0.14 },
            { name: "Mazda3 2.5", basePrice: 980000, depreciation: 0.13 },
            { name: "Mazda3 e-Skyactiv X", basePrice: 1050000, depreciation: 0.13 },
            { name: "Mazda3 Hybrid", basePrice: 1020000, depreciation: 0.13 },
            { name: "混動馬三", basePrice: 1020000, depreciation: 0.13 },
            { name: "Mazda3 Sport", basePrice: 950000, depreciation: 0.14 },

            // Mazda6 馬六系列（中大型車）
            { name: "Mazda6", basePrice: 1190000, depreciation: 0.13 },
            { name: "馬6", basePrice: 1190000, depreciation: 0.13 },
            { name: "馬六", basePrice: 1190000, depreciation: 0.13 },
            { name: "Mazda6 Sedan", basePrice: 1190000, depreciation: 0.13 },
            { name: "Mazda6 Wagon", basePrice: 1290000, depreciation: 0.13 },
            { name: "Mazda6 旅行車", basePrice: 1290000, depreciation: 0.13 },
            { name: "Mazda6 2.0", basePrice: 1150000, depreciation: 0.13 },
            { name: "Mazda6 2.5", basePrice: 1250000, depreciation: 0.13 },
            { name: "Mazda6 2.5T", basePrice: 1350000, depreciation: 0.12 },
            { name: "Mazda6 SKY-G", basePrice: 1220000, depreciation: 0.13 },

            // CX-3 系列（小型休旅）
            { name: "CX-3", basePrice: 780000, depreciation: 0.14 },
            { name: "CX3", basePrice: 780000, depreciation: 0.14 },
            { name: "CX-3 1.5", basePrice: 750000, depreciation: 0.14 },
            { name: "CX-3 2.0", basePrice: 850000, depreciation: 0.14 },
            { name: "CX-3 SKY-G", basePrice: 820000, depreciation: 0.14 },

            // CX-30 系列（跨界休旅）
            { name: "CX-30", basePrice: 918000, depreciation: 0.13 },
            { name: "CX30", basePrice: 918000, depreciation: 0.13 },
            { name: "CX-30 2.0", basePrice: 950000, depreciation: 0.13 },
            { name: "CX-30 e-Skyactiv X", basePrice: 1080000, depreciation: 0.13 },
            { name: "CX-30 Hybrid", basePrice: 1050000, depreciation: 0.13 },

            // CX-5 系列（中型休旅）
            { name: "CX-5", basePrice: 1169000, depreciation: 0.13 },
            { name: "CX5", basePrice: 1169000, depreciation: 0.13 },
            { name: "CX-5 2.0", basePrice: 1120000, depreciation: 0.13 },
            { name: "CX-5 2.5", basePrice: 1250000, depreciation: 0.12 },
            { name: "CX-5 2.5T", basePrice: 1380000, depreciation: 0.12 },
            { name: "CX-5 AWD", basePrice: 1300000, depreciation: 0.12 },
            { name: "CX-5 SKY-G", basePrice: 1200000, depreciation: 0.13 },
            { name: "CX-5 SKY-D", basePrice: 1350000, depreciation: 0.12 },
            { name: "CX-5 旗艦版", basePrice: 1380000, depreciation: 0.12 },

            // CX-60 系列（中大型休旅）
            { name: "CX-60", basePrice: 1499000, depreciation: 0.13 },
            { name: "CX60", basePrice: 1499000, depreciation: 0.13 },
            { name: "CX-60 2.5T", basePrice: 1550000, depreciation: 0.13 },
            { name: "CX-60 3.3D", basePrice: 1650000, depreciation: 0.12 },
            { name: "CX-60 PHEV", basePrice: 1890000, depreciation: 0.14 },
            { name: "CX-60 Hybrid", basePrice: 1750000, depreciation: 0.13 },
            { name: "CX-60 AWD", basePrice: 1620000, depreciation: 0.13 },

            // CX-9 系列（大型休旅 7人座）
            { name: "CX-9", basePrice: 1750000, depreciation: 0.13 },
            { name: "CX9", basePrice: 1750000, depreciation: 0.13 },
            { name: "CX-9 2.5T", basePrice: 1850000, depreciation: 0.13 },
            { name: "CX-9 AWD", basePrice: 1880000, depreciation: 0.12 },
            { name: "CX-9 7人座", basePrice: 1750000, depreciation: 0.13 },
            { name: "CX-9 旗艦版", basePrice: 1950000, depreciation: 0.12 },

            // CX-90 系列（旗艦休旅）
            { name: "CX-90", basePrice: 2090000, depreciation: 0.13 },
            { name: "CX90", basePrice: 2090000, depreciation: 0.13 },
            { name: "CX-90 3.3T", basePrice: 2250000, depreciation: 0.12 },
            { name: "CX-90 PHEV", basePrice: 2450000, depreciation: 0.13 },
            { name: "CX-90 7人座", basePrice: 2090000, depreciation: 0.13 },

            // CX-50 系列（越野休旅）
            { name: "CX-50", basePrice: 1350000, depreciation: 0.13 },
            { name: "CX50", basePrice: 1350000, depreciation: 0.13 },
            { name: "CX-50 2.5T", basePrice: 1480000, depreciation: 0.13 },

            // CX-70 系列
            { name: "CX-70", basePrice: 1850000, depreciation: 0.13 },
            { name: "CX70", basePrice: 1850000, depreciation: 0.13 },

            // CX-80 系列
            { name: "CX-80", basePrice: 1950000, depreciation: 0.13 },
            { name: "CX80", basePrice: 1950000, depreciation: 0.13 },

            // Mazda5 馬五系列（MPV）
            { name: "Mazda5", basePrice: 850000, depreciation: 0.15 },
            { name: "馬5", basePrice: 850000, depreciation: 0.15 },
            { name: "馬五", basePrice: 850000, depreciation: 0.15 },
            { name: "Mazda5 2.0", basePrice: 880000, depreciation: 0.15 },
            { name: "Mazda5 7人座", basePrice: 900000, depreciation: 0.15 },

            // MX 跑車系列
            { name: "MX-5", basePrice: 1290000, depreciation: 0.13 },
            { name: "MX5", basePrice: 1290000, depreciation: 0.13 },
            { name: "MX-5 Miata", basePrice: 1290000, depreciation: 0.13 },
            { name: "MX-5 RF", basePrice: 1390000, depreciation: 0.12 },
            { name: "MX-5 敞篷", basePrice: 1350000, depreciation: 0.13 },
            { name: "MX-30", basePrice: 1350000, depreciation: 0.15 },
            { name: "MX-30 EV", basePrice: 1450000, depreciation: 0.16 },

            // 經典/停產車款
            { name: "RX-7", basePrice: 1800000, depreciation: 0.12 },
            { name: "RX-8", basePrice: 1200000, depreciation: 0.14 },
            { name: "323", basePrice: 450000, depreciation: 0.17 },
            { name: "626", basePrice: 500000, depreciation: 0.17 },
            { name: "Premacy", basePrice: 750000, depreciation: 0.16 },
            { name: "Tribute", basePrice: 750000, depreciation: 0.15 },
            { name: "MPV", basePrice: 900000, depreciation: 0.15 },
            { name: "Isamu", basePrice: 450000, depreciation: 0.17 },
            { name: "Capella", basePrice: 480000, depreciation: 0.17 },
            { name: "Familia", basePrice: 420000, depreciation: 0.18 }
        ]
    },

    "Lexus凌志": {
        models: [
            // CT 系列（掀背油電）
            { name: "CT200h", basePrice: 1450000, depreciation: 0.14 },
            { name: "CT 200h", basePrice: 1450000, depreciation: 0.14 },
            { name: "CT200h F Sport", basePrice: 1580000, depreciation: 0.14 },

            // IS 系列（轎車）
            { name: "IS", basePrice: 2000000, depreciation: 0.14 },
            { name: "IS200t", basePrice: 1850000, depreciation: 0.14 },
            { name: "IS250", basePrice: 1750000, depreciation: 0.14 },
            { name: "IS300", basePrice: 2130000, depreciation: 0.14 },
            { name: "IS 300", basePrice: 2130000, depreciation: 0.14 },
            { name: "IS300h", basePrice: 2350000, depreciation: 0.13 },
            { name: "IS 300h", basePrice: 2350000, depreciation: 0.13 },
            { name: "IS350", basePrice: 2600000, depreciation: 0.13 },
            { name: "IS 350", basePrice: 2600000, depreciation: 0.13 },
            { name: "IS F", basePrice: 3200000, depreciation: 0.13 },
            { name: "IS F Sport", basePrice: 2400000, depreciation: 0.13 },

            // ES 系列（豪華轎車）
            { name: "ES", basePrice: 2200000, depreciation: 0.13 },
            { name: "ES200", basePrice: 2020000, depreciation: 0.13 },
            { name: "ES 200", basePrice: 2020000, depreciation: 0.13 },
            { name: "ES250", basePrice: 2190000, depreciation: 0.13 },
            { name: "ES 250", basePrice: 2190000, depreciation: 0.13 },
            { name: "ES300", basePrice: 2350000, depreciation: 0.13 },
            { name: "ES300h", basePrice: 2390000, depreciation: 0.12 },
            { name: "ES 300h", basePrice: 2390000, depreciation: 0.12 },
            { name: "ES330", basePrice: 2450000, depreciation: 0.13 },
            { name: "ES350", basePrice: 2650000, depreciation: 0.13 },
            { name: "ES 350", basePrice: 2650000, depreciation: 0.13 },
            { name: "ES F Sport", basePrice: 2550000, depreciation: 0.13 },

            // GS 系列（運動轎車）
            { name: "GS", basePrice: 2800000, depreciation: 0.14 },
            { name: "GS200t", basePrice: 2650000, depreciation: 0.14 },
            { name: "GS250", basePrice: 2750000, depreciation: 0.14 },
            { name: "GS300", basePrice: 2850000, depreciation: 0.14 },
            { name: "GS 300", basePrice: 2850000, depreciation: 0.14 },
            { name: "GS300h", basePrice: 2950000, depreciation: 0.13 },
            { name: "GS350", basePrice: 3200000, depreciation: 0.13 },
            { name: "GS 350", basePrice: 3200000, depreciation: 0.13 },
            { name: "GS430", basePrice: 3450000, depreciation: 0.13 },
            { name: "GS450h", basePrice: 3650000, depreciation: 0.13 },
            { name: "GS460", basePrice: 3850000, depreciation: 0.13 },
            { name: "GS F", basePrice: 4800000, depreciation: 0.13 },
            { name: "GS F Sport", basePrice: 3350000, depreciation: 0.13 },

            // LS 系列（旗艦轎車）
            { name: "LS", basePrice: 4500000, depreciation: 0.13 },
            { name: "LS350", basePrice: 4390000, depreciation: 0.13 },
            { name: "LS 350", basePrice: 4390000, depreciation: 0.13 },
            { name: "LS430", basePrice: 4550000, depreciation: 0.13 },
            { name: "LS460", basePrice: 4850000, depreciation: 0.12 },
            { name: "LS460L", basePrice: 5250000, depreciation: 0.12 },
            { name: "LS500", basePrice: 5150000, depreciation: 0.12 },
            { name: "LS 500", basePrice: 5150000, depreciation: 0.12 },
            { name: "LS500h", basePrice: 5650000, depreciation: 0.12 },
            { name: "LS 500h", basePrice: 5650000, depreciation: 0.12 },
            { name: "LS600h", basePrice: 6250000, depreciation: 0.11 },
            { name: "LS600hL", basePrice: 6850000, depreciation: 0.11 },
            { name: "LS F Sport", basePrice: 5450000, depreciation: 0.12 },

            // UX 系列（小型 SUV）
            { name: "UX", basePrice: 1590000, depreciation: 0.14 },
            { name: "UX200", basePrice: 1490000, depreciation: 0.14 },
            { name: "UX 200", basePrice: 1490000, depreciation: 0.14 },
            { name: "UX250h", basePrice: 1690000, depreciation: 0.13 },
            { name: "UX 250h", basePrice: 1690000, depreciation: 0.13 },
            { name: "UX300e", basePrice: 1890000, depreciation: 0.15 },
            { name: "UX 300e", basePrice: 1890000, depreciation: 0.15 },
            { name: "UX F Sport", basePrice: 1750000, depreciation: 0.14 },

            // NX 系列（中型 SUV）
            { name: "NX", basePrice: 2100000, depreciation: 0.13 },
            { name: "NX200", basePrice: 1890000, depreciation: 0.13 },
            { name: "NX 200", basePrice: 1890000, depreciation: 0.13 },
            { name: "NX200t", basePrice: 1950000, depreciation: 0.13 },
            { name: "NX250", basePrice: 2030000, depreciation: 0.13 },
            { name: "NX 250", basePrice: 2030000, depreciation: 0.13 },
            { name: "NX300", basePrice: 2190000, depreciation: 0.13 },
            { name: "NX 300", basePrice: 2190000, depreciation: 0.13 },
            { name: "NX300h", basePrice: 2350000, depreciation: 0.12 },
            { name: "NX 300h", basePrice: 2350000, depreciation: 0.12 },
            { name: "NX350h", basePrice: 2490000, depreciation: 0.12 },
            { name: "NX 350h", basePrice: 2490000, depreciation: 0.12 },
            { name: "NX450h+", basePrice: 2890000, depreciation: 0.13 },
            { name: "NX 450h+", basePrice: 2890000, depreciation: 0.13 },
            { name: "NX F Sport", basePrice: 2350000, depreciation: 0.13 },

            // RX 系列（大型 SUV）
            { name: "RX", basePrice: 3000000, depreciation: 0.13 },
            { name: "RX270", basePrice: 2550000, depreciation: 0.13 },
            { name: "RX300", basePrice: 2690000, depreciation: 0.13 },
            { name: "RX 300", basePrice: 2690000, depreciation: 0.13 },
            { name: "RX330", basePrice: 2850000, depreciation: 0.13 },
            { name: "RX350", basePrice: 3190000, depreciation: 0.12 },
            { name: "RX 350", basePrice: 3190000, depreciation: 0.12 },
            { name: "RX350h", basePrice: 3290000, depreciation: 0.12 },
            { name: "RX 350h", basePrice: 3290000, depreciation: 0.12 },
            { name: "RX400h", basePrice: 3350000, depreciation: 0.12 },
            { name: "RX450h", basePrice: 3590000, depreciation: 0.12 },
            { name: "RX 450h", basePrice: 3590000, depreciation: 0.12 },
            { name: "RX500h", basePrice: 3890000, depreciation: 0.12 },
            { name: "RX 500h", basePrice: 3890000, depreciation: 0.12 },
            { name: "RX F Sport", basePrice: 3450000, depreciation: 0.12 },
            { name: "RX350L", basePrice: 3390000, depreciation: 0.12 },
            { name: "RX450hL", basePrice: 3790000, depreciation: 0.12 },

            // LX 系列（旗艦 SUV）
            { name: "LX", basePrice: 5500000, depreciation: 0.11 },
            { name: "LX470", basePrice: 5150000, depreciation: 0.11 },
            { name: "LX570", basePrice: 5590000, depreciation: 0.11 },
            { name: "LX 570", basePrice: 5590000, depreciation: 0.11 },
            { name: "LX600", basePrice: 6190000, depreciation: 0.10 },
            { name: "LX 600", basePrice: 6190000, depreciation: 0.10 },
            { name: "LX F Sport", basePrice: 6450000, depreciation: 0.10 },

            // GX 系列（越野 SUV）
            { name: "GX", basePrice: 4200000, depreciation: 0.12 },
            { name: "GX460", basePrice: 4350000, depreciation: 0.12 },
            { name: "GX 460", basePrice: 4350000, depreciation: 0.12 },
            { name: "GX470", basePrice: 4150000, depreciation: 0.12 },
            { name: "GX550", basePrice: 4650000, depreciation: 0.11 },

            // LC 系列（旗艦跑車）
            { name: "LC", basePrice: 5200000, depreciation: 0.13 },
            { name: "LC500", basePrice: 5390000, depreciation: 0.13 },
            { name: "LC 500", basePrice: 5390000, depreciation: 0.13 },
            { name: "LC500h", basePrice: 5690000, depreciation: 0.13 },
            { name: "LC 500h", basePrice: 5690000, depreciation: 0.13 },
            { name: "LC Convertible", basePrice: 5850000, depreciation: 0.13 },

            // RC 系列（雙門跑車）
            { name: "RC", basePrice: 2800000, depreciation: 0.14 },
            { name: "RC200t", basePrice: 2650000, depreciation: 0.14 },
            { name: "RC300", basePrice: 2890000, depreciation: 0.14 },
            { name: "RC 300", basePrice: 2890000, depreciation: 0.14 },
            { name: "RC300h", basePrice: 3050000, depreciation: 0.14 },
            { name: "RC350", basePrice: 3290000, depreciation: 0.13 },
            { name: "RC 350", basePrice: 3290000, depreciation: 0.13 },
            { name: "RC F", basePrice: 4590000, depreciation: 0.13 },

            // 經典車款
            { name: "HS250h", basePrice: 1650000, depreciation: 0.15 },
            { name: "SC430", basePrice: 2800000, depreciation: 0.14 },
            { name: "SC 430", basePrice: 2800000, depreciation: 0.14 },
            { name: "LFA", basePrice: 15000000, depreciation: 0.08 }
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
            // Elantra 系列（轎車）
            { name: "Elantra", basePrice: 750000, depreciation: 0.15 },
            { name: "Elantra 1.6", basePrice: 720000, depreciation: 0.15 },
            { name: "Elantra 1.8", basePrice: 780000, depreciation: 0.15 },
            { name: "Elantra Sport", basePrice: 850000, depreciation: 0.14 },
            { name: "Elantra Hybrid", basePrice: 920000, depreciation: 0.14 },
            { name: "Elantra N Line", basePrice: 980000, depreciation: 0.14 },
            { name: "Elantra N", basePrice: 1350000, depreciation: 0.13 },

            // Sonata 系列
            { name: "Sonata", basePrice: 1150000, depreciation: 0.14 },
            { name: "Sonata 2.0", basePrice: 1100000, depreciation: 0.14 },
            { name: "Sonata 2.4", basePrice: 1200000, depreciation: 0.14 },
            { name: "Sonata Hybrid", basePrice: 1350000, depreciation: 0.13 },
            { name: "Sonata N Line", basePrice: 1450000, depreciation: 0.13 },

            // Accent 系列
            { name: "Accent", basePrice: 550000, depreciation: 0.16 },
            { name: "Accent 1.6", basePrice: 580000, depreciation: 0.16 },
            { name: "Verna", basePrice: 520000, depreciation: 0.16 },

            // i 系列
            { name: "i10", basePrice: 450000, depreciation: 0.17 },
            { name: "i30", basePrice: 650000, depreciation: 0.16 },
            { name: "i30 N", basePrice: 1350000, depreciation: 0.14 },
            { name: "i40", basePrice: 950000, depreciation: 0.15 },

            // ix35 系列（SUV）
            { name: "ix35", basePrice: 850000, depreciation: 0.15 },
            { name: "ix35 2.0", basePrice: 880000, depreciation: 0.15 },
            { name: "ix35 2.4", basePrice: 950000, depreciation: 0.15 },
            { name: "ix35 旗艦版", basePrice: 980000, depreciation: 0.14 },

            // Tucson 系列（SUV）
            { name: "Tucson", basePrice: 950000, depreciation: 0.14 },
            { name: "Tucson 1.6T", basePrice: 1050000, depreciation: 0.14 },
            { name: "Tucson 2.0", basePrice: 980000, depreciation: 0.14 },
            { name: "Tucson Hybrid", basePrice: 1150000, depreciation: 0.13 },
            { name: "Tucson L", basePrice: 1100000, depreciation: 0.14 },
            { name: "Tucson N Line", basePrice: 1180000, depreciation: 0.13 },

            // Santa Fe 系列（SUV）
            { name: "Santa Fe", basePrice: 1250000, depreciation: 0.14 },
            { name: "Santa Fe 2.2D", basePrice: 1350000, depreciation: 0.14 },
            { name: "Santa Fe 2.5T", basePrice: 1450000, depreciation: 0.13 },
            { name: "Santa Fe Hybrid", basePrice: 1550000, depreciation: 0.13 },
            { name: "Santa Fe PHEV", basePrice: 1750000, depreciation: 0.14 },
            { name: "Santa Fe 7人座", basePrice: 1380000, depreciation: 0.14 },

            // Kona 系列（小型SUV）
            { name: "Kona", basePrice: 850000, depreciation: 0.15 },
            { name: "Kona 1.6T", basePrice: 950000, depreciation: 0.14 },
            { name: "Kona Hybrid", basePrice: 1050000, depreciation: 0.14 },
            { name: "Kona Electric", basePrice: 1350000, depreciation: 0.15 },
            { name: "Kona N", basePrice: 1280000, depreciation: 0.14 },
            { name: "Kona N Line", basePrice: 1080000, depreciation: 0.14 },

            // Venue 系列（小型SUV）
            { name: "Venue", basePrice: 700000, depreciation: 0.15 },
            { name: "Venue GLB", basePrice: 750000, depreciation: 0.15 },
            { name: "Venue GLC", basePrice: 780000, depreciation: 0.15 },

            // Palisade 系列（大型SUV）
            { name: "Palisade", basePrice: 1850000, depreciation: 0.13 },
            { name: "Palisade 2.2D", basePrice: 1950000, depreciation: 0.13 },
            { name: "Palisade 旗艦版", basePrice: 2100000, depreciation: 0.12 },

            // Ioniq 電動車系列
            { name: "Ioniq", basePrice: 1050000, depreciation: 0.16 },
            { name: "Ioniq Hybrid", basePrice: 1100000, depreciation: 0.15 },
            { name: "Ioniq 5", basePrice: 1650000, depreciation: 0.15 },
            { name: "Ioniq 5 Long Range", basePrice: 1850000, depreciation: 0.14 },
            { name: "Ioniq 6", basePrice: 1750000, depreciation: 0.15 },
            { name: "Ioniq 6 Long Range", basePrice: 1950000, depreciation: 0.14 },

            // MPV / 商旅車
            { name: "Grand Starex", basePrice: 1350000, depreciation: 0.14 },
            { name: "Grand Starex 9人座", basePrice: 1280000, depreciation: 0.14 },
            { name: "Grand Starex 12人座", basePrice: 1250000, depreciation: 0.14 },
            { name: "Staria", basePrice: 1650000, depreciation: 0.14 },
            { name: "Staria 9人座", basePrice: 1580000, depreciation: 0.14 },
            { name: "Custin", basePrice: 1150000, depreciation: 0.15 },

            // 性能車
            { name: "Veloster", basePrice: 1050000, depreciation: 0.15 },
            { name: "Veloster N", basePrice: 1450000, depreciation: 0.14 },
            { name: "Genesis Coupe", basePrice: 1550000, depreciation: 0.15 },

            // 商用車
            { name: "Porter", basePrice: 720000, depreciation: 0.15 },
            { name: "Porter II", basePrice: 780000, depreciation: 0.15 },

            // 經典車款
            { name: "Matrix", basePrice: 550000, depreciation: 0.16 },
            { name: "Getz", basePrice: 450000, depreciation: 0.17 },
            { name: "Lavita", basePrice: 480000, depreciation: 0.17 },
            { name: "Trajet", basePrice: 650000, depreciation: 0.16 },
            { name: "Terracan", basePrice: 750000, depreciation: 0.16 },
            { name: "Grandeur", basePrice: 1200000, depreciation: 0.15 }
        ]
    },

    "Infiniti無限": {
        models: [
            // G 系列（轎車/跑車）
            { name: "G25", basePrice: 1650000, depreciation: 0.16 },
            { name: "G25 Sedan", basePrice: 1680000, depreciation: 0.16 },
            { name: "G35", basePrice: 1850000, depreciation: 0.16 },
            { name: "G35 Sedan", basePrice: 1880000, depreciation: 0.16 },
            { name: "G35 Coupe", basePrice: 1950000, depreciation: 0.15 },
            { name: "G37", basePrice: 2100000, depreciation: 0.15 },
            { name: "G37 Sedan", basePrice: 2150000, depreciation: 0.15 },
            { name: "G37 Coupe", basePrice: 2280000, depreciation: 0.15 },
            { name: "G37 Convertible", basePrice: 2450000, depreciation: 0.15 },
            { name: "G37S", basePrice: 2350000, depreciation: 0.14 },

            // M 系列（豪華轎車）
            { name: "M25", basePrice: 2290000, depreciation: 0.16 },
            { name: "M35", basePrice: 2560000, depreciation: 0.16 },
            { name: "M35h Hybrid", basePrice: 2750000, depreciation: 0.15 },
            { name: "M37", basePrice: 2780000, depreciation: 0.15 },
            { name: "M37S", basePrice: 2950000, depreciation: 0.15 },
            { name: "M45", basePrice: 3200000, depreciation: 0.15 },
            { name: "M56", basePrice: 3500000, depreciation: 0.15 },

            // Q50 系列（G37 後繼）
            { name: "Q50", basePrice: 2050000, depreciation: 0.15 },
            { name: "Q50 2.0T", basePrice: 1950000, depreciation: 0.15 },
            { name: "Q50 3.0T", basePrice: 2350000, depreciation: 0.14 },
            { name: "Q50 3.7", basePrice: 2280000, depreciation: 0.15 },
            { name: "Q50 Hybrid", basePrice: 2450000, depreciation: 0.15 },
            { name: "Q50 Red Sport", basePrice: 2650000, depreciation: 0.14 },
            { name: "Q50 Silver Sport", basePrice: 2150000, depreciation: 0.15 },

            // Q60 系列（G37 Coupe 後繼）
            { name: "Q60", basePrice: 2350000, depreciation: 0.15 },
            { name: "Q60 2.0T", basePrice: 2250000, depreciation: 0.15 },
            { name: "Q60 3.0T", basePrice: 2650000, depreciation: 0.14 },
            { name: "Q60 Red Sport", basePrice: 2950000, depreciation: 0.14 },
            { name: "Q60 Coupe", basePrice: 2450000, depreciation: 0.15 },

            // Q70 系列（M 系列後繼）
            { name: "Q70", basePrice: 2290000, depreciation: 0.15 },
            { name: "Q70 3.7", basePrice: 2450000, depreciation: 0.15 },
            { name: "Q70 5.6", basePrice: 3200000, depreciation: 0.15 },
            { name: "Q70 Hybrid", basePrice: 2650000, depreciation: 0.15 },
            { name: "Q70L", basePrice: 2550000, depreciation: 0.15 },

            // FX 系列（跨界休旅）
            { name: "FX35", basePrice: 2350000, depreciation: 0.15 },
            { name: "FX37", basePrice: 2480000, depreciation: 0.15 },
            { name: "FX45", basePrice: 2850000, depreciation: 0.15 },
            { name: "FX50", basePrice: 3300000, depreciation: 0.14 },
            { name: "FX50S", basePrice: 3500000, depreciation: 0.14 },

            // EX 系列（小型跨界）
            { name: "EX25", basePrice: 1850000, depreciation: 0.16 },
            { name: "EX35", basePrice: 2050000, depreciation: 0.15 },
            { name: "EX37", basePrice: 2150000, depreciation: 0.15 },

            // QX30 系列（小型 SUV）
            { name: "QX30", basePrice: 1680000, depreciation: 0.16 },
            { name: "QX30 AWD", basePrice: 1850000, depreciation: 0.16 },

            // QX50 系列（EX 後繼）
            { name: "QX50", basePrice: 2250000, depreciation: 0.15 },
            { name: "QX50 2.0T", basePrice: 2150000, depreciation: 0.15 },
            { name: "QX50 AWD", basePrice: 2350000, depreciation: 0.15 },
            { name: "QX50 Sensory", basePrice: 2450000, depreciation: 0.15 },
            { name: "QX50 Autograph", basePrice: 2550000, depreciation: 0.14 },

            // QX55 系列（跑旅）
            { name: "QX55", basePrice: 2450000, depreciation: 0.15 },
            { name: "QX55 Sensory", basePrice: 2550000, depreciation: 0.15 },

            // QX60 系列（7人座 SUV）
            { name: "QX60", basePrice: 2850000, depreciation: 0.14 },
            { name: "QX60 3.5", basePrice: 2950000, depreciation: 0.14 },
            { name: "QX60 Hybrid", basePrice: 3150000, depreciation: 0.14 },
            { name: "QX60 AWD", basePrice: 3050000, depreciation: 0.14 },
            { name: "QX60 Sensory", basePrice: 3150000, depreciation: 0.14 },
            { name: "QX60 Autograph", basePrice: 3350000, depreciation: 0.13 },

            // QX70 系列（FX 後繼）
            { name: "QX70", basePrice: 2480000, depreciation: 0.15 },
            { name: "QX70 3.7", basePrice: 2580000, depreciation: 0.15 },
            { name: "QX70 5.0", basePrice: 3200000, depreciation: 0.14 },

            // QX80 系列（旗艦 SUV）
            { name: "QX80", basePrice: 3850000, depreciation: 0.14 },
            { name: "QX80 5.6", basePrice: 3950000, depreciation: 0.14 },
            { name: "QX80 Sensory", basePrice: 4150000, depreciation: 0.13 },
            { name: "QX80 ProActive", basePrice: 4050000, depreciation: 0.13 },

            // 經典車款
            { name: "I30", basePrice: 1450000, depreciation: 0.16 },
            { name: "I35", basePrice: 1650000, depreciation: 0.16 },
            { name: "J30", basePrice: 1550000, depreciation: 0.16 },
            { name: "Q45", basePrice: 2500000, depreciation: 0.16 }
        ]
    },

    "Isuzu五十鈴": {
        models: [
            // ELF 一路發系列（小型貨車 3.5噸以下）
            { name: "ELF", basePrice: 1350000, depreciation: 0.14 },
            { name: "ELF 一路發", basePrice: 1280000, depreciation: 0.14 },
            { name: "ELF 一路發 2.8", basePrice: 1180000, depreciation: 0.14 },
            { name: "ELF 一路發 3.0", basePrice: 1280000, depreciation: 0.14 },
            { name: "ELF 一路發 3.5噸", basePrice: 1350000, depreciation: 0.14 },
            { name: "ELF 一路發 冷凍車", basePrice: 1550000, depreciation: 0.14 },
            { name: "ELF 一路發 廂型車", basePrice: 1450000, depreciation: 0.14 },
            { name: "ELF 100P", basePrice: 950000, depreciation: 0.15 },
            { name: "ELF 150", basePrice: 1050000, depreciation: 0.15 },
            { name: "ELF 250", basePrice: 1150000, depreciation: 0.15 },
            { name: "ELF 350", basePrice: 1280000, depreciation: 0.14 },

            // NLR / NMR / NPR 系列（中型貨車）
            { name: "NLR", basePrice: 1150000, depreciation: 0.14 },
            { name: "NLR 3.5噸", basePrice: 1180000, depreciation: 0.14 },
            { name: "NMR", basePrice: 1350000, depreciation: 0.14 },
            { name: "NMR 5噸", basePrice: 1450000, depreciation: 0.14 },
            { name: "NPR", basePrice: 1550000, depreciation: 0.13 },
            { name: "NPR 6.5噸", basePrice: 1650000, depreciation: 0.13 },
            { name: "NPR 75", basePrice: 1580000, depreciation: 0.13 },
            { name: "NQR", basePrice: 1750000, depreciation: 0.13 },
            { name: "NQR 8噸", basePrice: 1850000, depreciation: 0.13 },

            // Forward 福乘系列（大型貨車）
            { name: "Forward", basePrice: 2250000, depreciation: 0.13 },
            { name: "Forward 福乘 10噸", basePrice: 2350000, depreciation: 0.13 },
            { name: "Forward 福乘 15噸", basePrice: 2650000, depreciation: 0.12 },
            { name: "FRR", basePrice: 1950000, depreciation: 0.13 },
            { name: "FRR 11噸", basePrice: 2150000, depreciation: 0.13 },
            { name: "FSR", basePrice: 2350000, depreciation: 0.13 },
            { name: "FTR", basePrice: 2550000, depreciation: 0.12 },
            { name: "FVR", basePrice: 2850000, depreciation: 0.12 },

            // Giga 巨乘系列（重型貨車/拖車頭）
            { name: "Giga", basePrice: 3500000, depreciation: 0.12 },
            { name: "Giga 巨乘", basePrice: 3650000, depreciation: 0.12 },
            { name: "Giga 拖車頭", basePrice: 3850000, depreciation: 0.11 },
            { name: "CXZ", basePrice: 3250000, depreciation: 0.12 },
            { name: "CYZ", basePrice: 3450000, depreciation: 0.12 },
            { name: "EXZ", basePrice: 3850000, depreciation: 0.11 },

            // D-MAX 皮卡系列
            { name: "D-MAX", basePrice: 950000, depreciation: 0.14 },
            { name: "D-MAX 1.9", basePrice: 920000, depreciation: 0.14 },
            { name: "D-MAX 3.0", basePrice: 1050000, depreciation: 0.14 },
            { name: "D-MAX 4WD", basePrice: 1150000, depreciation: 0.13 },
            { name: "D-MAX Hi-Lander", basePrice: 1080000, depreciation: 0.14 },
            { name: "D-MAX V-Cross", basePrice: 1180000, depreciation: 0.13 },
            { name: "D-MAX X-Series", basePrice: 1250000, depreciation: 0.13 },

            // MU-X 休旅車系列
            { name: "MU-X", basePrice: 1350000, depreciation: 0.14 },
            { name: "MU-X 1.9", basePrice: 1280000, depreciation: 0.14 },
            { name: "MU-X 3.0", basePrice: 1450000, depreciation: 0.13 },
            { name: "MU-X 4WD", basePrice: 1550000, depreciation: 0.13 },
            { name: "MU-X Ultimate", basePrice: 1650000, depreciation: 0.13 },

            // 商用車 / 巴士
            { name: "Elf 中巴", basePrice: 1850000, depreciation: 0.14 },
            { name: "NQR 中型巴士", basePrice: 2350000, depreciation: 0.13 },
            { name: "LT 大型巴士", basePrice: 3500000, depreciation: 0.12 },

            // 經典 / 停產車款
            { name: "Trooper", basePrice: 650000, depreciation: 0.16 },
            { name: "Bighorn", basePrice: 750000, depreciation: 0.15 },
            { name: "Faster", basePrice: 550000, depreciation: 0.16 },
            { name: "Panther", basePrice: 450000, depreciation: 0.17 },
            { name: "Gemini", basePrice: 350000, depreciation: 0.18 }
        ]
    },

    "Kia起亞": {
        models: [
            // Picanto / Morning 系列（小型車）
            { name: "Picanto", basePrice: 550000, depreciation: 0.16 },
            { name: "Picanto X-Line", basePrice: 620000, depreciation: 0.16 },
            { name: "Picanto GT Line", basePrice: 650000, depreciation: 0.15 },
            { name: "Morning", basePrice: 500000, depreciation: 0.17 },

            // Stonic 系列（小型 SUV）
            { name: "Stonic", basePrice: 780000, depreciation: 0.15 },
            { name: "Stonic 1.0T", basePrice: 850000, depreciation: 0.15 },
            { name: "Stonic GT Line", basePrice: 920000, depreciation: 0.15 },

            // Soul 系列
            { name: "Soul", basePrice: 850000, depreciation: 0.15 },
            { name: "Soul EV", basePrice: 1350000, depreciation: 0.16 },

            // Sportage 系列（中型 SUV）
            { name: "Sportage", basePrice: 1150000, depreciation: 0.14 },
            { name: "Sportage 1.6T", basePrice: 1250000, depreciation: 0.14 },
            { name: "Sportage 2.0", basePrice: 1180000, depreciation: 0.14 },
            { name: "Sportage Hybrid", basePrice: 1380000, depreciation: 0.13 },
            { name: "Sportage GT Line", basePrice: 1350000, depreciation: 0.14 },
            { name: "Sportage AWD", basePrice: 1320000, depreciation: 0.14 },

            // Sorento 系列（大型 SUV）
            { name: "Sorento", basePrice: 1550000, depreciation: 0.14 },
            { name: "Sorento 2.2D", basePrice: 1650000, depreciation: 0.14 },
            { name: "Sorento 2.5T", basePrice: 1750000, depreciation: 0.13 },
            { name: "Sorento Hybrid", basePrice: 1850000, depreciation: 0.13 },
            { name: "Sorento PHEV", basePrice: 2050000, depreciation: 0.14 },
            { name: "Sorento 7人座", basePrice: 1680000, depreciation: 0.14 },

            // Carnival 系列（MPV）
            { name: "Carnival", basePrice: 1650000, depreciation: 0.14 },
            { name: "Carnival 2.2D", basePrice: 1750000, depreciation: 0.14 },
            { name: "Carnival 7人座", basePrice: 1580000, depreciation: 0.14 },
            { name: "Carnival 9人座", basePrice: 1550000, depreciation: 0.14 },
            { name: "Carnival Hi-Limousine", basePrice: 2150000, depreciation: 0.13 },

            // Stinger 系列（性能轎跑）
            { name: "Stinger", basePrice: 1650000, depreciation: 0.15 },
            { name: "Stinger 2.0T", basePrice: 1550000, depreciation: 0.15 },
            { name: "Stinger 3.3T", basePrice: 1950000, depreciation: 0.14 },
            { name: "Stinger GT", basePrice: 2050000, depreciation: 0.14 },

            // K 系列（轎車）
            { name: "K3", basePrice: 750000, depreciation: 0.15 },
            { name: "K5", basePrice: 1050000, depreciation: 0.15 },
            { name: "K5 2.0", basePrice: 1100000, depreciation: 0.15 },
            { name: "K5 GT Line", basePrice: 1250000, depreciation: 0.14 },
            { name: "K8", basePrice: 1450000, depreciation: 0.14 },
            { name: "K9", basePrice: 2250000, depreciation: 0.14 },

            // EV 電動車系列
            { name: "EV6", basePrice: 1850000, depreciation: 0.15 },
            { name: "EV6 Long Range", basePrice: 2050000, depreciation: 0.15 },
            { name: "EV6 GT", basePrice: 2450000, depreciation: 0.14 },
            { name: "EV6 GT-Line", basePrice: 2150000, depreciation: 0.15 },
            { name: "EV9", basePrice: 2650000, depreciation: 0.15 },
            { name: "EV9 Long Range", basePrice: 2850000, depreciation: 0.14 },
            { name: "Niro EV", basePrice: 1550000, depreciation: 0.15 },
            { name: "Niro Hybrid", basePrice: 1250000, depreciation: 0.14 },
            { name: "Niro PHEV", basePrice: 1450000, depreciation: 0.15 },

            // Ceed 系列
            { name: "Ceed", basePrice: 950000, depreciation: 0.15 },
            { name: "Ceed SW", basePrice: 1050000, depreciation: 0.15 },
            { name: "Ceed GT", basePrice: 1150000, depreciation: 0.15 },

            // Kaon 卡旺系列（貨車）⭐
            { name: "Kaon 卡旺", basePrice: 650000, depreciation: 0.14 },
            { name: "Kaon 卡旺 2.5", basePrice: 680000, depreciation: 0.14 },
            { name: "Kaon 卡旺 2.7", basePrice: 720000, depreciation: 0.14 },
            { name: "Kaon 卡旺 3噸", basePrice: 750000, depreciation: 0.14 },
            { name: "Kaon 卡旺 冷凍車", basePrice: 850000, depreciation: 0.14 },
            { name: "Kaon 卡旺 廂型車", basePrice: 780000, depreciation: 0.14 },
            { name: "Kaon 卡旺 雙乘車", basePrice: 800000, depreciation: 0.14 },

            // Bongo 商用車系列
            { name: "Bongo", basePrice: 580000, depreciation: 0.15 },
            { name: "Bongo 2.5", basePrice: 620000, depreciation: 0.15 },
            { name: "Bongo 冷凍車", basePrice: 750000, depreciation: 0.14 },
            { name: "Bongo III", basePrice: 680000, depreciation: 0.14 },

            // 經典車款
            { name: "Carens", basePrice: 750000, depreciation: 0.16 },
            { name: "Optima", basePrice: 950000, depreciation: 0.15 },
            { name: "Cadenza", basePrice: 1350000, depreciation: 0.15 },
            { name: "Forte", basePrice: 700000, depreciation: 0.16 },
            { name: "Rio", basePrice: 550000, depreciation: 0.16 },
            { name: "Cerato", basePrice: 680000, depreciation: 0.16 }
        ]
    },

    "Luxgen納智捷": {
        models: [
            // S3 系列（小型轎車）
            { name: "S3", basePrice: 650000, depreciation: 0.17 },
            { name: "S3 EV+", basePrice: 720000, depreciation: 0.17 },
            { name: "S3 1.6", basePrice: 620000, depreciation: 0.17 },

            // S5 系列（中型轎車）
            { name: "S5", basePrice: 750000, depreciation: 0.16 },
            { name: "S5 Sedan", basePrice: 690000, depreciation: 0.17 },
            { name: "S5 Turbo", basePrice: 750000, depreciation: 0.16 },
            { name: "S5 Turbo Eco Hyper", basePrice: 720000, depreciation: 0.16 },
            { name: "S5 GT", basePrice: 850000, depreciation: 0.16 },
            { name: "S5 GT225", basePrice: 920000, depreciation: 0.15 },

            // U5 系列（小型 SUV）
            { name: "U5", basePrice: 700000, depreciation: 0.16 },
            { name: "U5 1.6", basePrice: 680000, depreciation: 0.16 },
            { name: "U5 Turbo", basePrice: 750000, depreciation: 0.16 },
            { name: "U5 EV+", basePrice: 780000, depreciation: 0.16 },

            // U6 系列（中型 SUV）
            { name: "U6", basePrice: 850000, depreciation: 0.16 },
            { name: "U6 Turbo", basePrice: 850000, depreciation: 0.16 },
            { name: "U6 Turbo Eco Hyper", basePrice: 820000, depreciation: 0.16 },
            { name: "U6 GT", basePrice: 920000, depreciation: 0.15 },
            { name: "U6 GT220", basePrice: 980000, depreciation: 0.15 },
            { name: "U6 GT225", basePrice: 1050000, depreciation: 0.15 },
            { name: "U6 1.8", basePrice: 800000, depreciation: 0.16 },
            { name: "U6 2.0T", basePrice: 880000, depreciation: 0.16 },

            // U7 系列（大型 SUV）
            { name: "U7", basePrice: 1000000, depreciation: 0.16 },
            { name: "U7 Turbo", basePrice: 1050000, depreciation: 0.16 },
            { name: "U7 Turbo Eco Hyper", basePrice: 1020000, depreciation: 0.16 },
            { name: "U7 2.2T", basePrice: 980000, depreciation: 0.16 },
            { name: "U7 SUV", basePrice: 1000000, depreciation: 0.16 },

            // M7 系列（MPV）
            { name: "M7", basePrice: 1100000, depreciation: 0.15 },
            { name: "M7 Turbo", basePrice: 1150000, depreciation: 0.15 },
            { name: "M7 Turbo Eco Hyper", basePrice: 1120000, depreciation: 0.15 },
            { name: "M7 2.2T", basePrice: 1080000, depreciation: 0.15 },
            { name: "M7 7人座", basePrice: 1100000, depreciation: 0.15 },

            // N7 系列（電動車）
            { name: "N7", basePrice: 1100000, depreciation: 0.16 },
            { name: "N7 電動車", basePrice: 1100000, depreciation: 0.16 },
            { name: "N7 純電", basePrice: 1150000, depreciation: 0.16 },
            { name: "N7 5人座", basePrice: 1050000, depreciation: 0.16 },
            { name: "N7 亮點版", basePrice: 1200000, depreciation: 0.16 },

            // URX 系列（跨界 SUV）
            { name: "URX", basePrice: 900000, depreciation: 0.16 },
            { name: "URX 5+1", basePrice: 920000, depreciation: 0.16 },
            { name: "URX 7人座", basePrice: 950000, depreciation: 0.16 },
            { name: "URX Neo", basePrice: 980000, depreciation: 0.16 },
            { name: "URX 樂活版", basePrice: 1020000, depreciation: 0.16 },

            // 經典/停產車款
            { name: "MPV", basePrice: 950000, depreciation: 0.17 },
            { name: "CEO", basePrice: 1350000, depreciation: 0.16 },
            { name: "SUV", basePrice: 900000, depreciation: 0.17 },
            { name: "Sedan", basePrice: 750000, depreciation: 0.17 }
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
            // ========== Colt Plus 小可 系列 ==========
            { name: "Colt Plus", basePrice: 549000, depreciation: 0.17 },
            { name: "Colt Plus 小乘", basePrice: 549000, depreciation: 0.17 },
            { name: "Colt Plus 經典版", basePrice: 509000, depreciation: 0.17 },
            { name: "Colt Plus 豪華版", basePrice: 569000, depreciation: 0.17 },
            { name: "Colt Plus 尊貴版", basePrice: 599000, depreciation: 0.17 },
            { name: "Colt Plus 1.5", basePrice: 549000, depreciation: 0.17 },
            { name: "Colt Plus 1.6", basePrice: 579000, depreciation: 0.17 },

            // ========== Lancer 系列 ==========
            { name: "Lancer", basePrice: 839000, depreciation: 0.16 },
            { name: "Sport Back", basePrice: 859000, depreciation: 0.16 },
            { name: "Lancer Fortis", basePrice: 649000, depreciation: 0.16 },
            { name: "Lancer Fortis 佛提斯", basePrice: 649000, depreciation: 0.16 },
            { name: "Lancer Fortis 旗艦版", basePrice: 779000, depreciation: 0.16 },
            { name: "Lancer Fortis 1.8", basePrice: 649000, depreciation: 0.16 },
            { name: "Lancer Fortis 2.0", basePrice: 729000, depreciation: 0.16 },
            { name: "Lancer iO", basePrice: 699000, depreciation: 0.16 },
            { name: "Lancer iO 2.0", basePrice: 749000, depreciation: 0.16 },
            { name: "Grand Lancer", basePrice: 669000, depreciation: 0.16 },
            { name: "Grand Lancer 旗艦版", basePrice: 881000, depreciation: 0.16 },
            { name: "Grand Lancer 1.8", basePrice: 669000, depreciation: 0.16 },
            { name: "Grand Lancer 2.0", basePrice: 789000, depreciation: 0.16 },
            { name: "Lancer Evolution", basePrice: 1890000, depreciation: 0.14 },
            { name: "Lancer EVO", basePrice: 1890000, depreciation: 0.14 },
            { name: "Lancer EVO X", basePrice: 2090000, depreciation: 0.14 },

            // ========== Outlander 歐藍德系列 ==========
            { name: "Outlander", basePrice: 789000, depreciation: 0.15 },
            { name: "Outlander 歐藍德", basePrice: 789000, depreciation: 0.15 },
            { name: "Outlander 2.4", basePrice: 789000, depreciation: 0.15 },
            { name: "Outlander 2.4 4WD", basePrice: 899000, depreciation: 0.15 },
            { name: "Outlander 豪華版", basePrice: 859000, depreciation: 0.15 },
            { name: "Outlander 尊貴版", basePrice: 929000, depreciation: 0.15 },
            { name: "Outlander 旗艦版", basePrice: 999000, depreciation: 0.15 },
            { name: "Outlander PHEV", basePrice: 1990000, depreciation: 0.16 },
            { name: "Outlander PHEV 插電混動", basePrice: 1990000, depreciation: 0.16 },
            { name: "Outlander PHEV 旗艦版", basePrice: 2190000, depreciation: 0.16 },
            { name: "New Outlander", basePrice: 1069000, depreciation: 0.15 },
            { name: "New Outlander 旗艦版", basePrice: 1259000, depreciation: 0.15 },

            // ========== Savrin 幸福力系列 ==========
            { name: "Savrin", basePrice: 747000, depreciation: 0.16 },
            { name: "Savrin 幸福力", basePrice: 747000, depreciation: 0.16 },
            { name: "Savrin 2.0", basePrice: 679000, depreciation: 0.16 },
            { name: "Savrin 2.4", basePrice: 747000, depreciation: 0.16 },
            { name: "Savrin 豪華版", basePrice: 789000, depreciation: 0.16 },
            { name: "Savrin 7人座", basePrice: 809000, depreciation: 0.16 },

            // ========== Zinger 勁哥系列 ==========
            { name: "Zinger", basePrice: 540000, depreciation: 0.16 },
            { name: "Zinger 勁哥", basePrice: 540000, depreciation: 0.16 },
            { name: "Zinger Pickup", basePrice: 629000, depreciation: 0.16 },
            { name: "Zinger Pickup 皮卡", basePrice: 629000, depreciation: 0.16 },
            { name: "Zinger 2.4", basePrice: 579000, depreciation: 0.16 },
            { name: "Zinger 商用版", basePrice: 499000, depreciation: 0.16 },
            { name: "Zinger 豪華版", basePrice: 619000, depreciation: 0.16 },
            { name: "Zinger 5人座", basePrice: 540000, depreciation: 0.16 },
            { name: "Zinger 8人座", basePrice: 589000, depreciation: 0.16 },

            // ========== Veryca 菱利系列 (商用車) ==========
            { name: "Veryca", basePrice: 389000, depreciation: 0.18 },
            { name: "Veryca 菱利", basePrice: 389000, depreciation: 0.18 },
            { name: "Veryca A180", basePrice: 389000, depreciation: 0.18 },
            { name: "Veryca A190", basePrice: 419000, depreciation: 0.18 },
            { name: "Veryca 廂車", basePrice: 429000, depreciation: 0.18 },
            { name: "Veryca 貨車", basePrice: 379000, depreciation: 0.18 },
            { name: "Veryca 1.3", basePrice: 389000, depreciation: 0.18 },
            { name: "Veryca 1.5", basePrice: 429000, depreciation: 0.18 },
            { name: "Veryca 廂型車", basePrice: 459000, depreciation: 0.18 },
            { name: "Veryca 客貨兩用", basePrice: 449000, depreciation: 0.18 },
            { name: "Veryca 冷凍車", basePrice: 529000, depreciation: 0.18 },

            // ========== Delica 得利卡系列 (商用車/MPV) ==========
            { name: "Delica", basePrice: 529000, depreciation: 0.17 },
            { name: "Delica 得利卡", basePrice: 529000, depreciation: 0.17 },
            { name: "Delica 貨車", basePrice: 479000, depreciation: 0.17 },
            { name: "Delica 廂車", basePrice: 549000, depreciation: 0.17 },
            { name: "Delica 9人座", basePrice: 589000, depreciation: 0.17 },
            { name: "Delica 2.0", basePrice: 529000, depreciation: 0.17 },
            { name: "Delica 2.4", basePrice: 579000, depreciation: 0.17 },
            { name: "Delica 4WD", basePrice: 649000, depreciation: 0.17 },
            { name: "Delica 客貨車", basePrice: 549000, depreciation: 0.17 },
            { name: "Space Gear 得利卡", basePrice: 599000, depreciation: 0.17 },

            // ========== Canter 堅達系列 (中型貨車) ==========
            { name: "Canter", basePrice: 789000, depreciation: 0.16 },
            { name: "Canter 堅達", basePrice: 789000, depreciation: 0.16 },
            { name: "Canter 3.5噸", basePrice: 789000, depreciation: 0.16 },
            { name: "Canter 5噸", basePrice: 899000, depreciation: 0.16 },
            { name: "Canter 6噸", basePrice: 989000, depreciation: 0.16 },
            { name: "Canter 7.5噸", basePrice: 1089000, depreciation: 0.16 },
            { name: "Canter 8.5噸", basePrice: 1189000, depreciation: 0.16 },
            { name: "Canter 冷凍車", basePrice: 1089000, depreciation: 0.16 },
            { name: "Canter 傾卸車", basePrice: 929000, depreciation: 0.16 },
            { name: "Canter 平板車", basePrice: 849000, depreciation: 0.16 },
            { name: "Canter 廂式貨車", basePrice: 889000, depreciation: 0.16 },

            // ========== Fuso 大貨車系列 ==========
            { name: "Fuso", basePrice: 1290000, depreciation: 0.15 },
            { name: "Fuso 11噸", basePrice: 1290000, depreciation: 0.15 },
            { name: "Fuso 15噸", basePrice: 1590000, depreciation: 0.15 },
            { name: "Fuso 17噸", basePrice: 1790000, depreciation: 0.15 },
            { name: "Fuso 21噸", basePrice: 2090000, depreciation: 0.15 },
            { name: "Fuso 曳引車", basePrice: 2490000, depreciation: 0.15 },

            // ========== SUV/Crossover 系列 ==========
            { name: "ASX", basePrice: 1128000, depreciation: 0.16 },
            { name: "Eclipse Cross", basePrice: 949000, depreciation: 0.16 },
            { name: "Eclipse Cross PHEV", basePrice: 1339000, depreciation: 0.17 },
            { name: "Xforce", basePrice: 799000, depreciation: 0.16 },
            { name: "Xforce 旗艦版", basePrice: 899000, depreciation: 0.16 },

            // ========== Pajero 帕傑洛系列 ==========
            { name: "Pajero", basePrice: 2280000, depreciation: 0.15 },
            { name: "Pajero 帕傑洛", basePrice: 2280000, depreciation: 0.15 },
            { name: "Pajero 3.2柴油", basePrice: 2280000, depreciation: 0.15 },
            { name: "Pajero 3.8汽油", basePrice: 2180000, depreciation: 0.15 },
            { name: "Pajero Sport", basePrice: 1790000, depreciation: 0.15 },

            // ========== Space Gear 太空乘系列 ==========
            { name: "Space Gear", basePrice: 799000, depreciation: 0.16 },
            { name: "Space Gear 太空乘", basePrice: 799000, depreciation: 0.16 },
            { name: "Space Gear 2.4", basePrice: 799000, depreciation: 0.16 },
            { name: "Space Gear 4WD", basePrice: 899000, depreciation: 0.16 },
            { name: "Space Gear 長軸", basePrice: 859000, depreciation: 0.16 },

            // ========== 其他經典車型 ==========
            { name: "Galant Grunder", basePrice: 845000, depreciation: 0.16 },
            { name: "Galant", basePrice: 789000, depreciation: 0.16 },
            { name: "Grunder", basePrice: 845000, depreciation: 0.16 },
            { name: "Grunder 2.4", basePrice: 845000, depreciation: 0.16 },
            { name: "Mirage", basePrice: 499000, depreciation: 0.17 },
            { name: "Attrage", basePrice: 549000, depreciation: 0.17 },
            { name: "i-MiEV", basePrice: 890000, depreciation: 0.20 },
            { name: "Freeca", basePrice: 459000, depreciation: 0.17 },
            { name: "Freeca 福利卡", basePrice: 459000, depreciation: 0.17 },
            { name: "Virage", basePrice: 529000, depreciation: 0.17 },
            { name: "Virage iO", basePrice: 579000, depreciation: 0.17 }
        ]
    },

    "Suzuki鈴木": {
        models: [
            // ========== Swift 思維特系列 ==========
            { name: "Swift", basePrice: 578000, depreciation: 0.17 },
            { name: "Swift 思維特", basePrice: 720000, depreciation: 0.17 },
            { name: "Swift 1.2", basePrice: 578000, depreciation: 0.17 },
            { name: "Swift 1.4", basePrice: 650000, depreciation: 0.17 },
            { name: "Swift 1.5", basePrice: 680000, depreciation: 0.17 },
            { name: "Swift GLX", basePrice: 720000, depreciation: 0.17 },
            { name: "Swift Sport", basePrice: 850000, depreciation: 0.16 },
            { name: "Swift Sport 1.4T", basePrice: 890000, depreciation: 0.16 },
            { name: "Swift RS", basePrice: 780000, depreciation: 0.17 },
            { name: "Swift Hybrid", basePrice: 799000, depreciation: 0.17 },
            { name: "New Swift", basePrice: 750000, depreciation: 0.17 },

            // ========== SX4 系列 ==========
            { name: "SX4", basePrice: 568000, depreciation: 0.17 },
            { name: "SX4 1.6", basePrice: 568000, depreciation: 0.17 },
            { name: "SX4 2.0", basePrice: 650000, depreciation: 0.17 },
            { name: "SX4 Crossover", basePrice: 785000, depreciation: 0.16 },
            { name: "SX4 Crossover 4WD", basePrice: 859000, depreciation: 0.16 },
            { name: "SX4 S-Cross", basePrice: 850000, depreciation: 0.16 },
            { name: "SX4 豪華版", basePrice: 699000, depreciation: 0.17 },
            { name: "New SX4", basePrice: 799000, depreciation: 0.16 },

            // ========== Carry 吉乘商用車系列 ==========
            { name: "Carry", basePrice: 479000, depreciation: 0.16 },
            { name: "Carry 吉乘", basePrice: 479000, depreciation: 0.16 },
            { name: "Carry 貨車", basePrice: 459000, depreciation: 0.16 },
            { name: "Carry 廂型車", basePrice: 499000, depreciation: 0.16 },
            { name: "Carry 1.5", basePrice: 489000, depreciation: 0.16 },
            { name: "Carry 冷凍車", basePrice: 579000, depreciation: 0.16 },
            { name: "Carry Pro", basePrice: 529000, depreciation: 0.16 },
            { name: "Super Carry", basePrice: 459000, depreciation: 0.16 },
            { name: "New Carry", basePrice: 509000, depreciation: 0.16 },

            // ========== Jimny 吉乘尼越野系列 ==========
            { name: "Jimny", basePrice: 648000, depreciation: 0.17 },
            { name: "Jimny 吉姆尼", basePrice: 648000, depreciation: 0.17 },
            { name: "Jimny 1.5", basePrice: 749000, depreciation: 0.17 },
            { name: "Jimny 4WD", basePrice: 799000, depreciation: 0.16 },
            { name: "Jimny Sierra", basePrice: 859000, depreciation: 0.16 },
            { name: "Jimny 5門", basePrice: 899000, depreciation: 0.16 },
            { name: "Jimny 3門", basePrice: 749000, depreciation: 0.17 },
            { name: "New Jimny", basePrice: 799000, depreciation: 0.16 },
            { name: "Jimny 經典版", basePrice: 699000, depreciation: 0.17 },
            { name: "Jimny 旗艦版", basePrice: 879000, depreciation: 0.16 },

            // ========== Vitara 維特拉系列 ==========
            { name: "Vitara", basePrice: 768000, depreciation: 0.16 },
            { name: "Vitara 維特拉", basePrice: 768000, depreciation: 0.16 },
            { name: "Vitara 1.4T", basePrice: 850000, depreciation: 0.16 },
            { name: "Vitara 1.6", basePrice: 768000, depreciation: 0.16 },
            { name: "Vitara 4WD", basePrice: 899000, depreciation: 0.16 },
            { name: "Vitara 豪華版", basePrice: 859000, depreciation: 0.16 },
            { name: "Vitara 旗艦版", basePrice: 929000, depreciation: 0.16 },
            { name: "Vitara S", basePrice: 899000, depreciation: 0.16 },
            { name: "Grand Vitara", basePrice: 950000, depreciation: 0.16 },
            { name: "Grand Vitara JP", basePrice: 1038000, depreciation: 0.16 },
            { name: "Grand Vitara 2.4", basePrice: 1099000, depreciation: 0.16 },
            { name: "Grand Vitara 4WD", basePrice: 1199000, depreciation: 0.16 },
            { name: "New Vitara", basePrice: 899000, depreciation: 0.16 },

            // ========== S-Cross 系列 ==========
            { name: "S-Cross", basePrice: 980000, depreciation: 0.16 },
            { name: "S-Cross 1.4T", basePrice: 980000, depreciation: 0.16 },
            { name: "S-Cross 4WD", basePrice: 1099000, depreciation: 0.16 },
            { name: "S-Cross 豪華版", basePrice: 1029000, depreciation: 0.16 },
            { name: "S-Cross 旗艦版", basePrice: 1099000, depreciation: 0.16 },
            { name: "S-Cross Hybrid", basePrice: 1150000, depreciation: 0.16 },
            { name: "New S-Cross", basePrice: 1050000, depreciation: 0.16 },

            // ========== Baleno 系列 ==========
            { name: "Baleno", basePrice: 708000, depreciation: 0.17 },
            { name: "Baleno 1.0T", basePrice: 708000, depreciation: 0.17 },
            { name: "Baleno 1.4", basePrice: 750000, depreciation: 0.17 },
            { name: "Baleno GLX", basePrice: 780000, depreciation: 0.17 },
            { name: "New Baleno", basePrice: 759000, depreciation: 0.17 },

            // ========== Ignis 系列 ==========
            { name: "Ignis", basePrice: 638000, depreciation: 0.17 },
            { name: "Ignis 1.2", basePrice: 638000, depreciation: 0.17 },
            { name: "Ignis GLX", basePrice: 699000, depreciation: 0.17 },
            { name: "Ignis 4WD", basePrice: 759000, depreciation: 0.17 },
            { name: "New Ignis", basePrice: 689000, depreciation: 0.17 },

            // ========== Alto 奧拓系列 ==========
            { name: "Alto", basePrice: 468000, depreciation: 0.17 },
            { name: "Alto 奧拓", basePrice: 468000, depreciation: 0.17 },
            { name: "Alto 0.8", basePrice: 418000, depreciation: 0.17 },
            { name: "Alto 1.0", basePrice: 468000, depreciation: 0.17 },
            { name: "Alto K10", basePrice: 450000, depreciation: 0.17 },
            { name: "Alto Works", basePrice: 550000, depreciation: 0.17 },

            // ========== 其他經典車款 ==========
            { name: "Liana", basePrice: 550000, depreciation: 0.17 },
            { name: "Liana 利乳娜", basePrice: 550000, depreciation: 0.17 },
            { name: "Solio", basePrice: 620000, depreciation: 0.17 },
            { name: "Solio Bandit", basePrice: 680000, depreciation: 0.17 },
            { name: "Escudo", basePrice: 899000, depreciation: 0.16 },
            { name: "Escudo 2.4", basePrice: 999000, depreciation: 0.16 },
            { name: "Every", basePrice: 459000, depreciation: 0.17 },
            { name: "Every Wagon", basePrice: 520000, depreciation: 0.17 },
            { name: "Wagon R", basePrice: 480000, depreciation: 0.17 },
            { name: "Wagon R+", basePrice: 520000, depreciation: 0.17 },
            { name: "Hustler", basePrice: 599000, depreciation: 0.17 },
            { name: "Spacia", basePrice: 550000, depreciation: 0.17 },
            { name: "Across", basePrice: 1290000, depreciation: 0.16 },
            { name: "Across PHEV", basePrice: 1390000, depreciation: 0.16 }
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
            // ========== HS 系列 (中型SUV) ==========
            { name: "HS", basePrice: 939000, depreciation: 0.16 },
            { name: "HS 1.5T", basePrice: 899000, depreciation: 0.16 },
            { name: "HS 2.0T", basePrice: 999000, depreciation: 0.16 },
            { name: "HS 豪華版", basePrice: 959000, depreciation: 0.16 },
            { name: "HS 旗艦版", basePrice: 1029000, depreciation: 0.16 },
            { name: "HS PHEV", basePrice: 1199000, depreciation: 0.17 },
            { name: "HS PHEV 插電混動", basePrice: 1199000, depreciation: 0.17 },

            // ========== ZS 系列 (小型SUV) ==========
            { name: "ZS", basePrice: 769000, depreciation: 0.16 },
            { name: "ZS 1.5", basePrice: 729000, depreciation: 0.16 },
            { name: "ZS 豪華版", basePrice: 789000, depreciation: 0.16 },
            { name: "ZS 旗艦版", basePrice: 849000, depreciation: 0.16 },
            { name: "ZS EV", basePrice: 1099000, depreciation: 0.17 },
            { name: "ZS EV 純電動", basePrice: 1099000, depreciation: 0.17 },
            { name: "ZS EV 長程版", basePrice: 1199000, depreciation: 0.17 },

            // ========== MG4 EV 電動車系列 ==========
            { name: "MG4", basePrice: 1189000, depreciation: 0.17 },
            { name: "MG4 EV", basePrice: 1189000, depreciation: 0.17 },
            { name: "MG4 EV 純電動", basePrice: 1189000, depreciation: 0.17 },
            { name: "MG4 EV 標準版", basePrice: 1089000, depreciation: 0.17 },
            { name: "MG4 EV 長程版", basePrice: 1289000, depreciation: 0.17 },
            { name: "MG4 EV 旗艦版", basePrice: 1389000, depreciation: 0.17 },
            { name: "MG4 EV XPOWER", basePrice: 1489000, depreciation: 0.17 },
            { name: "MG4 XPOWER", basePrice: 1489000, depreciation: 0.17 },

            // ========== MG5 系列 (轎車/旅行車) ==========
            { name: "MG5", basePrice: 1085000, depreciation: 0.16 },
            { name: "MG5 1.5T", basePrice: 989000, depreciation: 0.16 },
            { name: "MG5 豪華版", basePrice: 1059000, depreciation: 0.16 },
            { name: "MG5 旗艦版", basePrice: 1129000, depreciation: 0.16 },
            { name: "MG5 EV", basePrice: 1199000, depreciation: 0.17 },
            { name: "MG5 EV 純電動", basePrice: 1199000, depreciation: 0.17 },

            // ========== G50 Plus / G10 MPV系列 ==========
            { name: "G50 Plus", basePrice: 1085000, depreciation: 0.16 },
            { name: "G50", basePrice: 999000, depreciation: 0.16 },
            { name: "G50 Plus 豪華版", basePrice: 1129000, depreciation: 0.16 },
            { name: "G50 Plus 旗艦版", basePrice: 1199000, depreciation: 0.16 },
            { name: "G10", basePrice: 1289000, depreciation: 0.16 },
            { name: "G10 豪華版", basePrice: 1389000, depreciation: 0.16 },
            { name: "G10 PLUS", basePrice: 1489000, depreciation: 0.16 },

            // ========== MG6 / MG7 轎車系列 ==========
            { name: "MG6", basePrice: 899000, depreciation: 0.16 },
            { name: "MG6 1.5T", basePrice: 859000, depreciation: 0.16 },
            { name: "MG6 2.0T", basePrice: 989000, depreciation: 0.16 },
            { name: "MG7", basePrice: 1089000, depreciation: 0.16 },
            { name: "MG7 2.0T", basePrice: 1189000, depreciation: 0.16 },

            // ========== RX 系列 (SUV) ==========
            { name: "RX5", basePrice: 859000, depreciation: 0.16 },
            { name: "RX5 PLUS", basePrice: 959000, depreciation: 0.16 },
            { name: "RX8", basePrice: 1189000, depreciation: 0.16 },

            // ========== 其他電動車 ==========
            { name: "Marvel R", basePrice: 1399000, depreciation: 0.17 },
            { name: "Cyberster", basePrice: 1999000, depreciation: 0.17 },
            { name: "Cyberster 電動跑車", basePrice: 1999000, depreciation: 0.17 }
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
