// 簡化版車款資料庫
const carDataInfo = {
    lastUpdate: "2026年1月21日",
    totalBrands: 5,
    totalModels: 20
};

const carDatabase = {
    "Toyota豐田": {
        models: [
            { name: "Altis", basePrice: 712000, depreciation: 0.15 },
            { name: "Camry", basePrice: 1113000, depreciation: 0.12 },
            { name: "RAV4", basePrice: 1060000, depreciation: 0.12 },
            { name: "Yaris", basePrice: 636000, depreciation: 0.16 }
        ]
    },
    "Honda本田": {
        models: [
            { name: "Civic", basePrice: 850000, depreciation: 0.14 },
            { name: "CR-V", basePrice: 1130000, depreciation: 0.13 },
            { name: "Fit", basePrice: 720000, depreciation: 0.15 },
            { name: "HR-V", basePrice: 850000, depreciation: 0.14 }
        ]
    },
    "BMW": {
        models: [
            { name: "3 Series", basePrice: 2200000, depreciation: 0.15 },
            { name: "5 Series", basePrice: 3100000, depreciation: 0.14 },
            { name: "X3", basePrice: 2600000, depreciation: 0.14 },
            { name: "X5", basePrice: 3500000, depreciation: 0.13 }
        ]
    },
    "Mercedes-Benz賓士": {
        models: [
            { name: "C-Class", basePrice: 2300000, depreciation: 0.15 },
            { name: "E-Class", basePrice: 3200000, depreciation: 0.14 },
            { name: "GLC", basePrice: 2700000, depreciation: 0.14 },
            { name: "GLE", basePrice: 3600000, depreciation: 0.13 }
        ]
    },
    "Lexus凌志": {
        models: [
            { name: "ES", basePrice: 1900000, depreciation: 0.12 },
            { name: "NX", basePrice: 2000000, depreciation: 0.12 },
            { name: "RX", basePrice: 2600000, depreciation: 0.11 },
            { name: "IS", basePrice: 1800000, depreciation: 0.13 }
        ]
    }
};
