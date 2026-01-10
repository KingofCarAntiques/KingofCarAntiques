// ===============================================
// 秒估車 - 完整版車款價格資料庫 V2
// ===============================================
// 📅 最後更新：2025年12月
// 📊 數據來源：2025 12權威
// 🔄 更新頻率：每月更新
// 📝 新增功能：
//    - 支援多車型版本
//    - 逐年價格資料
//    - 詳細車輛規格
// ===============================================

const carDatabaseV2 = {
    "Honda本田": {
        brand: "Honda",
        brandChinese: "本田",
        brandEnglish: "HONDA",
        models: [
            {
                modelName: "City",
                modelChinese: "思迪",
                type: "sedan",
                variants: [
                    {
                        variantCode: "001",
                        variantName: "1.5 VTi",
                        displacement: 1497,
                        seats: 5,
                        fuelType: "汽油",
                        transmission: "手排",
                        yearlyPrices: {
                            "2025": 68.5,
                            "2024": 64.0,
                            "2023": 60.0,
                            "2022": 56.0,
                            "2021": 52.0
                        }
                    },
                    {
                        variantCode: "002",
                        variantName: "1.5 VTi",
                        displacement: 1497,
                        seats: 5,
                        fuelType: "汽油",
                        transmission: "自排",
                        yearlyPrices: {
                            "2025": 72.0,
                            "2024": 68.0,
                            "2023": 64.0,
                            "2022": 60.0,
                            "2021": 56.0
                        }
                    },
                    {
                        variantCode: "003",
                        variantName: "1.5 VTi-S",
                        displacement: 1497,
                        seats: 5,
                        fuelType: "汽油",
                        transmission: "自排",
                        yearlyPrices: {
                            "2025": 78.0,
                            "2024": 74.0,
                            "2023": 70.0,
                            "2022": 66.0,
                            "2021": 62.0
                        }
                    }
                ]
            },
            {
                modelName: "FIT",
                modelChinese: "飛度",
                type: "hatchback",
                variants: [
                    {
                        variantCode: "004",
                        variantName: "1.5 VTi",
                        displacement: 1497,
                        seats: 5,
                        fuelType: "汽油",
                        transmission: "手排",
                        yearlyPrices: {
                            "2025": 65.0,
                            "2024": 62.0,
                            "2023": 58.0,
                            "2022": 54.0,
                            "2021": 50.0
                        }
                    },
                    {
                        variantCode: "005",
                        variantName: "1.5 VTi-S",
                        displacement: 1497,
                        seats: 5,
                        fuelType: "汽油",
                        transmission: "自排",
                        yearlyPrices: {
                            "2025": 72.0,
                            "2024": 68.0,
                            "2023": 64.0,
                            "2022": 60.0,
                            "2021": 56.0
                        }
                    },
                    {
                        variantCode: "006",
                        variantName: "Hybrid",
                        displacement: 1497,
                        seats: 5,
                        fuelType: "油電混合",
                        transmission: "自排",
                        yearlyPrices: {
                            "2025": 85.0,
                            "2024": 80.0,
                            "2023": 75.0,
                            "2022": 70.0,
                            "2021": 65.0
                        }
                    }
                ]
            },
            {
                modelName: "CR-V",
                modelChinese: "CR-V",
                type: "suv",
                variants: [
                    {
                        variantCode: "007",
                        variantName: "2.0 VTi",
                        displacement: 1997,
                        seats: 5,
                        fuelType: "汽油",
                        transmission: "自排",
                        yearlyPrices: {
                            "2025": 125.0,
                            "2024": 118.0,
                            "2023": 112.0,
                            "2022": 106.0,
                            "2021": 100.0
                        }
                    },
                    {
                        variantCode: "008",
                        variantName: "2.4 VTi-S",
                        displacement: 2354,
                        seats: 5,
                        fuelType: "汽油",
                        transmission: "自排",
                        yearlyPrices: {
                            "2025": 145.0,
                            "2024": 138.0,
                            "2023": 132.0,
                            "2022": 126.0,
                            "2021": 120.0
                        }
                    }
                ]
            },
            {
                modelName: "Civic",
                modelChinese: "喜美",
                type: "sedan",
                variants: [
                    {
                        variantCode: "009",
                        variantName: "1.8 VTi",
                        displacement: 1799,
                        seats: 5,
                        fuelType: "汽油",
                        transmission: "自排",
                        yearlyPrices: {
                            "2025": 95.0,
                            "2024": 90.0,
                            "2023": 85.0,
                            "2022": 80.0,
                            "2021": 75.0
                        }
                    },
                    {
                        variantCode: "010",
                        variantName: "1.8 VTi-S",
                        displacement: 1799,
                        seats: 5,
                        fuelType: "汽油",
                        transmission: "自排",
                        yearlyPrices: {
                            "2025": 105.0,
                            "2024": 100.0,
                            "2023": 95.0,
                            "2022": 90.0,
                            "2021": 85.0
                        }
                    }
                ]
            },
            {
                modelName: "Accord",
                modelChinese: "雅哥",
                type: "sedan",
                variants: [
                    {
                        variantCode: "011",
                        variantName: "2.0",
                        displacement: 1993,
                        seats: 5,
                        fuelType: "汽油",
                        transmission: "自排",
                        yearlyPrices: {
                            "2025": 150.0,
                            "2024": 142.0,
                            "2023": 135.0,
                            "2022": 128.0,
                            "2021": 122.0
                        }
                    }
                ]
            },
            {
                modelName: "HR-V",
                modelChinese: "HR-V",
                type: "suv",
                variants: [
                    {
                        variantCode: "012",
                        variantName: "1.8 VTi",
                        displacement: 1799,
                        seats: 5,
                        fuelType: "汽油",
                        transmission: "自排",
                        yearlyPrices: {
                            "2025": 85.0,
                            "2024": 80.0,
                            "2023": 75.0,
                            "2022": 70.0,
                            "2021": 66.0
                        }
                    }
                ]
            },
            {
                modelName: "Odyssey",
                modelChinese: "奧德賽",
                type: "mpv",
                variants: [
                    {
                        variantCode: "013",
                        variantName: "2.4",
                        displacement: 2354,
                        seats: 7,
                        fuelType: "汽油",
                        transmission: "自排",
                        yearlyPrices: {
                            "2025": 180.0,
                            "2024": 170.0,
                            "2023": 162.0,
                            "2022": 154.0,
                            "2021": 146.0
                        }
                    }
                ]
            }
        ]
    },

    "Hino日野": {
        brand: "Hino",
        brandChinese: "日野",
        brandEnglish: "HINO",
        models: [
            {
                modelName: "300系列",
                modelChinese: "300系列",
                type: "truck",
                variants: [
                    {
                        variantCode: "H001",
                        variantName: "XZU302L",
                        displacement: null,
                        seats: 2,
                        fuelType: "柴油",
                        transmission: "手排",
                        cargoWeight: "3.5噸",
                        yearlyPrices: {
                            "2025": 110.0,
                            "2024": 105.0,
                            "2023": 100.0
                        }
                    },
                    {
                        variantCode: "H002",
                        variantName: "XZU306L",
                        displacement: null,
                        seats: 2,
                        fuelType: "柴油",
                        transmission: "手排",
                        cargoWeight: "3.5噸",
                        yearlyPrices: {
                            "2025": 115.0,
                            "2024": 110.0,
                            "2023": 105.0
                        }
                    }
                ]
            },
            {
                modelName: "500系列",
                modelChinese: "500系列",
                type: "truck",
                variants: [
                    {
                        variantCode: "H003",
                        variantName: "GH8J",
                        displacement: null,
                        seats: 2,
                        fuelType: "柴油",
                        transmission: "手排",
                        cargoWeight: "11噸",
                        yearlyPrices: {
                            "2025": 250.0,
                            "2024": 240.0,
                            "2023": 230.0
                        }
                    }
                ]
            },
            {
                modelName: "700系列",
                modelChinese: "700系列",
                type: "truck",
                variants: [
                    {
                        variantCode: "H004",
                        variantName: "SH1FDTA",
                        displacement: null,
                        seats: 2,
                        fuelType: "柴油",
                        transmission: "手排",
                        cargoWeight: "16噸",
                        yearlyPrices: {
                            "2025": 350.0,
                            "2024": 335.0,
                            "2023": 320.0
                        }
                    }
                ]
            }
        ]
    }
};

// 向後兼容函數：將 V2 格式轉換為原始格式供現有代碼使用
function convertToLegacyFormat() {
    const legacyDatabase = {};

    for (const [brandKey, brandData] of Object.entries(carDatabaseV2)) {
        legacyDatabase[brandKey] = {
            models: []
        };

        for (const model of brandData.models) {
            // 計算該車款的平均基礎價格（取最新年份的平均值）
            let avgBasePrice = 0;
            let count = 0;

            for (const variant of model.variants) {
                const latestYear = Math.max(...Object.keys(variant.yearlyPrices).map(Number));
                const latestPrice = variant.yearlyPrices[latestYear];
                avgBasePrice += latestPrice * 10000; // 轉換為元
                count++;
            }

            if (count > 0) {
                avgBasePrice = avgBasePrice / count;

                legacyDatabase[brandKey].models.push({
                    name: model.modelName,
                    basePrice: Math.round(avgBasePrice),
                    depreciation: 0.14,
                    type: model.type || 'N/A'
                });
            }
        }
    }

    return legacyDatabase;
}

// 導出為舊格式以保持兼容性
const carDatabase = convertToLegacyFormat();

// 同時導出新格式供未來使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { carDatabase, carDatabaseV2 };
}
