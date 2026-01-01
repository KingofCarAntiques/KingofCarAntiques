// ===============================================
// 秒估車 - 車款價格資料庫
// ===============================================
// 📅 最後更新：2025年12月
// 📊 數據來源：8891汽車網、行將拍賣、市場行情
// 🔄 更新頻率：每月更新
// 📝 更新說明：請參閱「價格更新說明.md」
// ===============================================

// 車款資料庫
const carDatabase = {
    "Toyota豐田": {
        models: [
            { name: "Altis", basePrice: 700000, depreciation: 0.15 },
            { name: "Camry", basePrice: 1300000, depreciation: 0.12 },
            { name: "Corolla Cross", basePrice: 900000, depreciation: 0.13 },
            { name: "RAV4", basePrice: 1200000, depreciation: 0.12 },
            { name: "Yaris", basePrice: 650000, depreciation: 0.16 },
            { name: "Yaris Cross", basePrice: 750000, depreciation: 0.15 },
            { name: "GR Yaris", basePrice: 1850000, depreciation: 0.14 },
            { name: "bZ4X", basePrice: 1850000, depreciation: 0.16 },
            { name: "Sienna", basePrice: 2200000, depreciation: 0.14 },
            { name: "Vios", basePrice: 550000, depreciation: 0.16 },
            { name: "C-HR", basePrice: 950000, depreciation: 0.14 },
            { name: "Prius", basePrice: 1200000, depreciation: 0.13 },
            { name: "Alphard", basePrice: 3500000, depreciation: 0.12 },
            { name: "Sienta", basePrice: 750000, depreciation: 0.15 },
            { name: "Wish", basePrice: 680000, depreciation: 0.16 },
            { name: "Previa", basePrice: 1400000, depreciation: 0.15 },
            { name: "Innova", basePrice: 850000, depreciation: 0.15 },
            { name: "Vellfire", basePrice: 3800000, depreciation: 0.12 },
            { name: "Granvia", basePrice: 2800000, depreciation: 0.13 },
            { name: "Granace", basePrice: 1600000, depreciation: 0.14 },
            { name: "Town Ace", basePrice: 950000, depreciation: 0.15 },
            { name: "Land Cruiser", basePrice: 4500000, depreciation: 0.12 },
            { name: "Hilux", basePrice: 1400000, depreciation: 0.14 },
            { name: "Prius c", basePrice: 800000, depreciation: 0.15 },
            { name: "86", basePrice: 1500000, depreciation: 0.15 },
            { name: "Supra", basePrice: 3200000, depreciation: 0.15 },
            { name: "Corolla Sport", basePrice: 900000, depreciation: 0.14 },
            { name: "Prius PHEV", basePrice: 1400000, depreciation: 0.13 },
            { name: "Crown", basePrice: 2500000, depreciation: 0.12 },
            { name: "GR86", basePrice: 1550000, depreciation: 0.15 },
            { name: "Prado", basePrice: 2800000, depreciation: 0.12 },
            { name: "Urban Cruiser", basePrice: 1200000, depreciation: 0.16 },
            { name: "Auris", basePrice: 850000, depreciation: 0.15 }
        ]
    },
    "Honda本田": {
        models: [
            { name: "Civic", basePrice: 950000, depreciation: 0.14 },
            { name: "CR-V", basePrice: 1300000, depreciation: 0.13 },
            { name: "Fit", basePrice: 700000, depreciation: 0.15 },
            { name: "HR-V", basePrice: 850000, depreciation: 0.14 },
            { name: "Accord", basePrice: 1500000, depreciation: 0.12 },
            { name: "City", basePrice: 650000, depreciation: 0.15 },
            { name: "Odyssey", basePrice: 1800000, depreciation: 0.13 },
            { name: "CR-V Hybrid", basePrice: 1450000, depreciation: 0.12 },
            { name: "Shuttle", basePrice: 750000, depreciation: 0.15 },
            { name: "Freed", basePrice: 850000, depreciation: 0.14 },
            { name: "NSX", basePrice: 12000000, depreciation: 0.15 },
            { name: "Civic Type R", basePrice: 2200000, depreciation: 0.14 }
,
            { name: "ZR-V", basePrice: 1150000, depreciation: 0.13 },
            { name: "BR-V", basePrice: 850000, depreciation: 0.14 }
        ]
    },
    "Nissan日產": {
        models: [
            { name: "Sentra", basePrice: 750000, depreciation: 0.15 },
            { name: "Kicks", basePrice: 800000, depreciation: 0.14 },
            { name: "X-Trail", basePrice: 1100000, depreciation: 0.13 },
            { name: "Tiida", basePrice: 650000, depreciation: 0.16 },
            { name: "Livina", basePrice: 700000, depreciation: 0.15 },
            { name: "Juke", basePrice: 900000, depreciation: 0.14 },
            { name: "Leaf", basePrice: 1500000, depreciation: 0.16 },
            { name: "GT-R", basePrice: 6500000, depreciation: 0.15 },
            { name: "March", basePrice: 550000, depreciation: 0.17 },
            { name: "Teana", basePrice: 1200000, depreciation: 0.14 },
            { name: "Murano", basePrice: 1600000, depreciation: 0.14 },
            { name: "Urvan", basePrice: 1100000, depreciation: 0.15 },
            { name: "Navara", basePrice: 1300000, depreciation: 0.14 },
            { name: "370Z", basePrice: 2200000, depreciation: 0.16 },
            { name: "Ariya", basePrice: 1900000, depreciation: 0.16 },
            { name: "Note", basePrice: 700000, depreciation: 0.15 },
            { name: "X-Trail e-POWER", basePrice: 1520000, depreciation: 0.13 },
            { name: "Altima", basePrice: 1300000, depreciation: 0.14 },
            { name: "Big Tiida 5D", basePrice: 750000, depreciation: 0.15 },
            { name: "iTiida", basePrice: 700000, depreciation: 0.15 }
        ]
    },
    "Mazda馬自達": {
        models: [
            { name: "Mazda2", basePrice: 650000, depreciation: 0.15 },
            { name: "Mazda3", basePrice: 850000, depreciation: 0.14 },
            { name: "Mazda6", basePrice: 1300000, depreciation: 0.12 },
            { name: "CX-3", basePrice: 800000, depreciation: 0.14 },
            { name: "CX-30", basePrice: 1000000, depreciation: 0.13 },
            { name: "CX-5", basePrice: 1200000, depreciation: 0.13 },
            { name: "CX-9", basePrice: 1600000, depreciation: 0.13 },
            { name: "MX-5", basePrice: 1500000, depreciation: 0.14 },
            { name: "CX-60", basePrice: 1800000, depreciation: 0.13 },
            { name: "CX-90", basePrice: 2200000, depreciation: 0.13 },
            { name: "BT-50", basePrice: 1200000, depreciation: 0.14 },
            { name: "MX-30", basePrice: 1350000, depreciation: 0.16 },
            { name: "Mazda5", basePrice: 850000, depreciation: 0.15 }
        ]
    },
    "Mitsubishi三菱": {
        models: [
            { name: "Colt Plus", basePrice: 650000, depreciation: 0.16 },
            { name: "Grand Lancer", basePrice: 700000, depreciation: 0.15 },
            { name: "Outlander", basePrice: 1100000, depreciation: 0.14 },
            { name: "Eclipse Cross", basePrice: 1000000, depreciation: 0.14 },
            { name: "Zinger", basePrice: 750000, depreciation: 0.15 },
            { name: "Delica", basePrice: 1400000, depreciation: 0.14 },
            { name: "Lancer Fortis", basePrice: 650000, depreciation: 0.16 },
            { name: "Lancer iO", basePrice: 600000, depreciation: 0.16 },
            { name: "Pajero", basePrice: 1800000, depreciation: 0.15 },
            { name: "ASX", basePrice: 850000, depreciation: 0.15 },
            { name: "Triton", basePrice: 1100000, depreciation: 0.14 },
            { name: "Veryca", basePrice: 550000, depreciation: 0.17 },
            { name: "Canter", basePrice: 1200000, depreciation: 0.16 }
        ]
    },
    "Hyundai現代": {
        models: [
            { name: "Venue", basePrice: 700000, depreciation: 0.15 },
            { name: "Elantra", basePrice: 800000, depreciation: 0.14 },
            { name: "Tucson", basePrice: 1100000, depreciation: 0.13 },
            { name: "Santa Fe", basePrice: 1500000, depreciation: 0.13 },
            { name: "Kona", basePrice: 900000, depreciation: 0.14 },
            { name: "Ioniq 5", basePrice: 1800000, depreciation: 0.15 },
            { name: "Ioniq 6", basePrice: 2000000, depreciation: 0.15 },
            { name: "Starex", basePrice: 1300000, depreciation: 0.15 },
            { name: "Porter", basePrice: 900000, depreciation: 0.16 },
            { name: "Palisade", basePrice: 2200000, depreciation: 0.13 }
,
            { name: "Staria", basePrice: 1800000, depreciation: 0.14 }
        ]
    },
    "Kia起亞": {
        models: [
            { name: "Picanto", basePrice: 550000, depreciation: 0.16 },
            { name: "Morning", basePrice: 550000, depreciation: 0.16 },
            { name: "Stonic", basePrice: 750000, depreciation: 0.15 },
            { name: "Sportage", basePrice: 1200000, depreciation: 0.13 },
            { name: "Sorento", basePrice: 1500000, depreciation: 0.13 },
            { name: "Carnival", basePrice: 1600000, depreciation: 0.14 },
            { name: "EV6", basePrice: 2000000, depreciation: 0.15 }
        ]
    },
    "Ford福特": {
        models: [
            { name: "Focus", basePrice: 850000, depreciation: 0.15 },
            { name: "Kuga", basePrice: 1200000, depreciation: 0.14 },
            { name: "Mondeo", basePrice: 1400000, depreciation: 0.14 },
            { name: "Mustang", basePrice: 2800000, depreciation: 0.16 },
            { name: "Explorer", basePrice: 2200000, depreciation: 0.14 },
            { name: "Ranger", basePrice: 1300000, depreciation: 0.14 },
            { name: "Fiesta", basePrice: 700000, depreciation: 0.16 },
            { name: "EcoSport", basePrice: 850000, depreciation: 0.15 },
            { name: "Tourneo Custom", basePrice: 1600000, depreciation: 0.15 },
            { name: "Focus ST", basePrice: 1490000, depreciation: 0.15 },
            { name: "Territory", basePrice: 950000, depreciation: 0.14 },
            { name: "Ranger Raptor", basePrice: 2090000, depreciation: 0.14 },
            { name: "Tourneo Connect", basePrice: 1200000, depreciation: 0.15 },
            { name: "Mustang Mach-E", basePrice: 2200000, depreciation: 0.16 },
            { name: "Focus Wagon", basePrice: 1050000, depreciation: 0.15 },
            { name: "ST Wagon", basePrice: 1650000, depreciation: 0.15 }
        ]
    },
    "Volkswagen福斯": {
        models: [
            { name: "Polo", basePrice: 750000, depreciation: 0.15 },
            { name: "Golf", basePrice: 1100000, depreciation: 0.14 },
            { name: "Tiguan", basePrice: 1400000, depreciation: 0.13 },
            { name: "Passat", basePrice: 1500000, depreciation: 0.13 },
            { name: "T-Cross", basePrice: 950000, depreciation: 0.14 },
            { name: "Touran", basePrice: 1300000, depreciation: 0.14 },
            { name: "Arteon", basePrice: 1800000, depreciation: 0.14 },
            { name: "Tiguan Allspace", basePrice: 1550000, depreciation: 0.13 },
            { name: "T-Roc", basePrice: 1200000, depreciation: 0.14 },
            { name: "Sharan", basePrice: 1700000, depreciation: 0.14 },
            { name: "Caddy", basePrice: 1200000, depreciation: 0.15 },
            { name: "California", basePrice: 3500000, depreciation: 0.14 }
        ]
    },
    "Subaru速霸陸": {
        models: [
            { name: "Impreza", basePrice: 950000, depreciation: 0.14 },
            { name: "XV", basePrice: 1100000, depreciation: 0.13 },
            { name: "Forester", basePrice: 1300000, depreciation: 0.13 },
            { name: "Outback", basePrice: 1500000, depreciation: 0.13 },
            { name: "Legacy", basePrice: 1400000, depreciation: 0.13 },
            { name: "WRX", basePrice: 1800000, depreciation: 0.15 },
            { name: "Levorg", basePrice: 1600000, depreciation: 0.14 }
        ]
    },
    "Audi奧迪": {
        models: [
            { name: "A3", basePrice: 1600000, depreciation: 0.17 },
            { name: "A4", basePrice: 2000000, depreciation: 0.17 },
            { name: "A6", basePrice: 2800000, depreciation: 0.16 },
            { name: "Q2", basePrice: 1400000, depreciation: 0.17 },
            { name: "Q3", basePrice: 1700000, depreciation: 0.17 },
            { name: "Q5", basePrice: 2500000, depreciation: 0.16 },
            { name: "Q7", basePrice: 3500000, depreciation: 0.16 },
            { name: "TT", basePrice: 2800000, depreciation: 0.17 }
        ]
    },
    "Mercedes-Benz賓士": {
        models: [
            { name: "A-Class", basePrice: 1800000, depreciation: 0.18 },
            { name: "C-Class", basePrice: 2500000, depreciation: 0.17 },
            { name: "E-Class", basePrice: 3200000, depreciation: 0.16 },
            { name: "S-Class", basePrice: 5500000, depreciation: 0.15 },
            { name: "GLA", basePrice: 2000000, depreciation: 0.18 },
            { name: "GLB", basePrice: 2200000, depreciation: 0.17 },
            { name: "GLC", basePrice: 2700000, depreciation: 0.17 },
            { name: "GLE", basePrice: 3800000, depreciation: 0.16 },
            { name: "GLS", basePrice: 4500000, depreciation: 0.16 },
            { name: "CLA", basePrice: 2100000, depreciation: 0.18 },
            { name: "CLS", basePrice: 4000000, depreciation: 0.16 },
            { name: "AMG GT", basePrice: 7000000, depreciation: 0.17 },
            { name: "Vito", basePrice: 2400000, depreciation: 0.16 },
            { name: "V-Class", basePrice: 3000000, depreciation: 0.16 },
            { name: "Sprinter", basePrice: 2800000, depreciation: 0.16 }
        ]
    },
    "BMW": {
        models: [
            { name: "1 Series", basePrice: 1700000, depreciation: 0.18 },
            { name: "2 Series", basePrice: 1900000, depreciation: 0.18 },
            { name: "3 Series", basePrice: 2500000, depreciation: 0.17 },
            { name: "4 Series", basePrice: 2800000, depreciation: 0.17 },
            { name: "5 Series", basePrice: 3500000, depreciation: 0.16 },
            { name: "7 Series", basePrice: 5500000, depreciation: 0.15 },
            { name: "X1", basePrice: 2000000, depreciation: 0.18 },
            { name: "X2", basePrice: 2100000, depreciation: 0.18 },
            { name: "X3", basePrice: 2800000, depreciation: 0.17 },
            { name: "X4", basePrice: 3200000, depreciation: 0.17 },
            { name: "X5", basePrice: 3800000, depreciation: 0.16 },
            { name: "X6", basePrice: 4200000, depreciation: 0.16 },
            { name: "X7", basePrice: 4800000, depreciation: 0.16 },
            { name: "Z4", basePrice: 3000000, depreciation: 0.17 },
            { name: "i4", basePrice: 2800000, depreciation: 0.17 },
            { name: "iX", basePrice: 3500000, depreciation: 0.17 }
        ]
    },
    "Lexus凌志": {
        models: [
            { name: "CT", basePrice: 1500000, depreciation: 0.15 },
            { name: "IS", basePrice: 2000000, depreciation: 0.14 },
            { name: "ES", basePrice: 2200000, depreciation: 0.13 },
            { name: "LS", basePrice: 4500000, depreciation: 0.13 },
            { name: "UX", basePrice: 1600000, depreciation: 0.14 },
            { name: "NX", basePrice: 2100000, depreciation: 0.13 },
            { name: "RX", basePrice: 3000000, depreciation: 0.13 },
            { name: "LX", basePrice: 5000000, depreciation: 0.13 },
            { name: "RC", basePrice: 2800000, depreciation: 0.14 },
            { name: "LC", basePrice: 5500000, depreciation: 0.14 }
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
    "Ferrari法拉利": {
        models: [
            { name: "Roma", basePrice: 12000000, depreciation: 0.15 },
            { name: "Portofino", basePrice: 11000000, depreciation: 0.15 },
            { name: "F8 Tributo", basePrice: 15000000, depreciation: 0.14 },
            { name: "F8 Spider", basePrice: 16000000, depreciation: 0.14 },
            { name: "SF90 Stradale", basePrice: 25000000, depreciation: 0.13 },
            { name: "296 GTB", basePrice: 18000000, depreciation: 0.14 },
            { name: "812 Superfast", basePrice: 20000000, depreciation: 0.14 }
        ]
    },
    "Lamborghini藍寶堅尼": {
        models: [
            { name: "Huracán", basePrice: 15000000, depreciation: 0.15 },
            { name: "Aventador", basePrice: 25000000, depreciation: 0.14 },
            { name: "Urus", basePrice: 13000000, depreciation: 0.15 }
        ]
    },
    "McLaren麥拉倫": {
        models: [
            { name: "GT", basePrice: 12000000, depreciation: 0.16 },
            { name: "Artura", basePrice: 13000000, depreciation: 0.16 },
            { name: "720S", basePrice: 16000000, depreciation: 0.15 },
            { name: "765LT", basePrice: 22000000, depreciation: 0.15 }
        ]
    },
    "Bentley賓利": {
        models: [
            { name: "Continental GT", basePrice: 18000000, depreciation: 0.16 },
            { name: "Flying Spur", basePrice: 20000000, depreciation: 0.15 },
            { name: "Bentayga", basePrice: 16000000, depreciation: 0.16 }
        ]
    },
    "Rolls-Royce勞斯萊斯": {
        models: [
            { name: "Ghost", basePrice: 25000000, depreciation: 0.14 },
            { name: "Phantom", basePrice: 35000000, depreciation: 0.13 },
            { name: "Cullinan", basePrice: 28000000, depreciation: 0.14 }
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
            { name: "V60", basePrice: 2100000, depreciation: 0.15 },
            { name: "V90", basePrice: 2600000, depreciation: 0.14 },
            { name: "XC40", basePrice: 1800000, depreciation: 0.15 },
            { name: "XC60", basePrice: 2400000, depreciation: 0.14 },
            { name: "XC90", basePrice: 3200000, depreciation: 0.14 }
        ]
    },
    "Peugeot寶獅": {
        models: [
            { name: "208", basePrice: 750000, depreciation: 0.16 },
            { name: "2008", basePrice: 850000, depreciation: 0.15 },
            { name: "3008", basePrice: 1200000, depreciation: 0.15 },
            { name: "5008", basePrice: 1400000, depreciation: 0.15 }
        ]
    },
    "Skoda斯柯達": {
        models: [
            { name: "Fabia", basePrice: 700000, depreciation: 0.16 },
            { name: "Scala", basePrice: 850000, depreciation: 0.15 },
            { name: "Kamiq", basePrice: 900000, depreciation: 0.15 },
            { name: "Karoq", basePrice: 1100000, depreciation: 0.14 },
            { name: "Kodiaq", basePrice: 1350000, depreciation: 0.14 },
            { name: "Superb", basePrice: 1300000, depreciation: 0.14 }
        ]
    },
    "Luxgen納智捷": {
        models: [
            { name: "U5", basePrice: 650000, depreciation: 0.17 },
            { name: "U6 GT", basePrice: 850000, depreciation: 0.16 },
            { name: "URX", basePrice: 950000, depreciation: 0.16 },
            { name: "U7", basePrice: 900000, depreciation: 0.17 },
            { name: "S5", basePrice: 700000, depreciation: 0.17 }
        ]
    },
    "Infiniti極致": {
        models: [
            { name: "Q30", basePrice: 1400000, depreciation: 0.17 },
            { name: "Q50", basePrice: 1900000, depreciation: 0.16 },
            { name: "Q60", basePrice: 2300000, depreciation: 0.16 },
            { name: "QX30", basePrice: 1500000, depreciation: 0.17 },
            { name: "QX50", basePrice: 2100000, depreciation: 0.16 },
            { name: "QX55", basePrice: 2400000, depreciation: 0.16 }
        ]
    },
    "Land Rover荒原路華": {
        models: [
            { name: "Defender", basePrice: 4500000, depreciation: 0.15 },
            { name: "Discovery", basePrice: 3800000, depreciation: 0.15 },
            { name: "Discovery Sport", basePrice: 2500000, depreciation: 0.16 },
            { name: "Range Rover Evoque", basePrice: 2600000, depreciation: 0.16 },
            { name: "Range Rover Velar", basePrice: 3500000, depreciation: 0.15 },
            { name: "Range Rover Sport", basePrice: 4500000, depreciation: 0.15 },
            { name: "Range Rover", basePrice: 6000000, depreciation: 0.14 }
        ]
    },
    "Jaguar捷豹": {
        models: [
            { name: "E-PACE", basePrice: 2100000, depreciation: 0.17 },
            { name: "F-PACE", basePrice: 2800000, depreciation: 0.16 },
            { name: "I-PACE", basePrice: 3500000, depreciation: 0.17 },
            { name: "XE", basePrice: 2200000, depreciation: 0.17 },
            { name: "XF", basePrice: 2800000, depreciation: 0.16 },
            { name: "F-TYPE", basePrice: 4500000, depreciation: 0.16 }
        ]
    },
    "MINI": {
        models: [
            { name: "3-Door", basePrice: 1300000, depreciation: 0.17 },
            { name: "5-Door", basePrice: 1400000, depreciation: 0.17 },
            { name: "Clubman", basePrice: 1550000, depreciation: 0.17 },
            { name: "Countryman", basePrice: 1650000, depreciation: 0.16 },
            { name: "Convertible", basePrice: 1800000, depreciation: 0.17 },
            { name: "John Cooper Works", basePrice: 2200000, depreciation: 0.17 }
        ]
    },
    "Maserati瑪莎拉蒂": {
        models: [
            { name: "Ghibli", basePrice: 4500000, depreciation: 0.17 },
            { name: "Quattroporte", basePrice: 6500000, depreciation: 0.16 },
            { name: "Levante", basePrice: 5000000, depreciation: 0.16 },
            { name: "GranTurismo", basePrice: 8000000, depreciation: 0.16 },
            { name: "MC20", basePrice: 15000000, depreciation: 0.15 }
        ]
    },
    "Smart": {
        models: [
            { name: "Fortwo", basePrice: 800000, depreciation: 0.18 },
            { name: "Forfour", basePrice: 850000, depreciation: 0.18 }
        ]
    },
    "SsangYong雙龍": {
        models: [
            { name: "Tivoli", basePrice: 750000, depreciation: 0.16 },
            { name: "Korando", basePrice: 900000, depreciation: 0.15 },
            { name: "Rexton", basePrice: 1400000, depreciation: 0.15 }
        ]
    },
    "Suzuki鈴木": {
        models: [
            { name: "Swift", basePrice: 600000, depreciation: 0.16 },
            { name: "Vitara", basePrice: 850000, depreciation: 0.15 },
            { name: "Jimny", basePrice: 850000, depreciation: 0.14 },
            { name: "Ignis", basePrice: 650000, depreciation: 0.16 }
        ]
    },
    "MG": {
        models: [
            { name: "MG3", basePrice: 550000, depreciation: 0.17 },
            { name: "MG5", basePrice: 650000, depreciation: 0.16 },
            { name: "HS", basePrice: 900000, depreciation: 0.16 },
            { name: "ZS", basePrice: 750000, depreciation: 0.16 }
        ]
    },
    "Tobe酷比": {
        models: [
            { name: "W'car", basePrice: 400000, depreciation: 0.18 },
            { name: "M'car", basePrice: 450000, depreciation: 0.18 }
        ]
    },
    "Chevrolet雪佛蘭": {
        models: [
            { name: "Spark", basePrice: 550000, depreciation: 0.17 },
            { name: "Cruze", basePrice: 750000, depreciation: 0.16 },
            { name: "Malibu", basePrice: 1100000, depreciation: 0.16 },
            { name: "Trax", basePrice: 850000, depreciation: 0.16 },
            { name: "Camaro", basePrice: 2800000, depreciation: 0.16 },
            { name: "Corvette", basePrice: 6500000, depreciation: 0.15 }
        ]
    },
    "Citroen雪鐵龍": {
        models: [
            { name: "C3", basePrice: 700000, depreciation: 0.17 },
            { name: "C4", basePrice: 850000, depreciation: 0.16 },
            { name: "C5 Aircross", basePrice: 1150000, depreciation: 0.15 },
            { name: "Berlingo", basePrice: 950000, depreciation: 0.16 }
        ]
    },
    "Isuzu五十鈴": {
        models: [
            { name: "D-Max", basePrice: 1100000, depreciation: 0.15 },
            { name: "mu-X", basePrice: 1200000, depreciation: 0.14 },
            { name: "ELF", basePrice: 1500000, depreciation: 0.16 },
            { name: "Forward", basePrice: 2000000, depreciation: 0.16 }
        ]
    },
    "Hino日野": {
        models: [
            { name: "300系列", basePrice: 1800000, depreciation: 0.16 },
            { name: "500系列", basePrice: 2500000, depreciation: 0.16 },
            { name: "700系列", basePrice: 3500000, depreciation: 0.16 }
        ]
    }
    ,
    "Alfa Romeo愛快羅密歐": {
        models: [
            { name: "Giulia", basePrice: 2500000, depreciation: 0.17 },
            { name: "Stelvio", basePrice: 2800000, depreciation: 0.17 },
            { name: "Giulietta", basePrice: 1800000, depreciation: 0.18 }
        ]
    },
    "Aston Martin奧斯頓馬丁": {
        models: [
            { name: "DB11", basePrice: 18000000, depreciation: 0.15 },
            { name: "Vantage", basePrice: 15000000, depreciation: 0.16 },
            { name: "DBX", basePrice: 16000000, depreciation: 0.16 }
        ]
    },
    "Cadillac凱迪拉克": {
        models: [
            { name: "CT4", basePrice: 2000000, depreciation: 0.17 },
            { name: "CT5", basePrice: 2500000, depreciation: 0.16 },
            { name: "XT4", basePrice: 2100000, depreciation: 0.17 },
            { name: "XT5", basePrice: 2600000, depreciation: 0.16 },
            { name: "XT6", basePrice: 3000000, depreciation: 0.16 },
            { name: "Escalade", basePrice: 4500000, depreciation: 0.15 }
        ]
    },
    "Daihatsu大發": {
        models: [
            { name: "Terios", basePrice: 550000, depreciation: 0.17 },
            { name: "Sirion", basePrice: 500000, depreciation: 0.17 },
            { name: "Copen", basePrice: 700000, depreciation: 0.17 }
        ]
    },
    "DFSK東風": {
        models: [
            { name: "Glory 580", basePrice: 650000, depreciation: 0.17 },
            { name: "Glory 560", basePrice: 600000, depreciation: 0.17 }
        ]
    },
    "Foton福田": {
        models: [
            { name: "View", basePrice: 1200000, depreciation: 0.16 },
            { name: "Tunland", basePrice: 1000000, depreciation: 0.16 }
        ]
    },
    "Fiat飛雅特": {
        models: [
            { name: "500", basePrice: 850000, depreciation: 0.17 },
            { name: "500X", basePrice: 1100000, depreciation: 0.16 },
            { name: "Panda", basePrice: 650000, depreciation: 0.18 },
            { name: "Tipo", basePrice: 900000, depreciation: 0.17 }
        ]
    },
    "Iveco依維柯": {
        models: [
            { name: "Daily", basePrice: 2000000, depreciation: 0.16 },
            { name: "Eurocargo", basePrice: 2500000, depreciation: 0.16 }
        ]
    },
    "Jeep吉普": {
        models: [
            { name: "Renegade", basePrice: 1300000, depreciation: 0.16 },
            { name: "Compass", basePrice: 1500000, depreciation: 0.15 },
            { name: "Cherokee", basePrice: 1800000, depreciation: 0.15 },
            { name: "Grand Cherokee", basePrice: 2800000, depreciation: 0.15 },
            { name: "Wrangler", basePrice: 2500000, depreciation: 0.14 },
            { name: "Gladiator", basePrice: 2600000, depreciation: 0.15 }
        ]
    },
    "Lotus蓮花": {
        models: [
            { name: "Elise", basePrice: 5500000, depreciation: 0.16 },
            { name: "Exige", basePrice: 6500000, depreciation: 0.16 },
            { name: "Evora", basePrice: 7500000, depreciation: 0.16 },
            { name: "Emira", basePrice: 8000000, depreciation: 0.16 }
        ]
    },
    "Mahindra馬恆達": {
        models: [
            { name: "Scorpio", basePrice: 800000, depreciation: 0.17 },
            { name: "XUV500", basePrice: 1000000, depreciation: 0.16 }
        ]
    },
    "Morgan摩根": {
        models: [
            { name: "Plus Four", basePrice: 8000000, depreciation: 0.16 },
            { name: "Plus Six", basePrice: 10000000, depreciation: 0.16 }
        ]
    },
    "Opel歐寶": {
        models: [
            { name: "Astra", basePrice: 800000, depreciation: 0.17 },
            { name: "Corsa", basePrice: 650000, depreciation: 0.17 },
            { name: "Insignia", basePrice: 1200000, depreciation: 0.16 },
            { name: "Crossland", basePrice: 900000, depreciation: 0.16 }
        ]
    },
    "Proton寶騰": {
        models: [
            { name: "Saga", basePrice: 500000, depreciation: 0.18 },
            { name: "Persona", basePrice: 550000, depreciation: 0.17 },
            { name: "X50", basePrice: 700000, depreciation: 0.17 },
            { name: "X70", basePrice: 850000, depreciation: 0.16 }
        ]
    },
    "Renault雷諾": {
        models: [
            { name: "Clio", basePrice: 750000, depreciation: 0.17 },
            { name: "Captur", basePrice: 900000, depreciation: 0.16 },
            { name: "Megane", basePrice: 1000000, depreciation: 0.16 },
            { name: "Kadjar", basePrice: 1200000, depreciation: 0.15 },
            { name: "Koleos", basePrice: 1400000, depreciation: 0.15 }
        ]
    },
    "Saab紳寶": {
        models: [
            { name: "9-3", basePrice: 900000, depreciation: 0.18 },
            { name: "9-5", basePrice: 1200000, depreciation: 0.18 }
        ]
    },
    "BYD比亞迪": {
        models: [
            { name: "Atto 3", basePrice: 1350000, depreciation: 0.16 },
            { name: "Dolphin", basePrice: 1100000, depreciation: 0.16 },
            { name: "Seal", basePrice: 1750000, depreciation: 0.16 }
        ]
    },
    "Chery奇瑞": {
        models: [
            { name: "Tiggo 7", basePrice: 700000, depreciation: 0.17 },
            { name: "Tiggo 8", basePrice: 850000, depreciation: 0.16 }
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
