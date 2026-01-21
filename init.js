// 確保車款選項一定會載入
document.addEventListener('DOMContentLoaded', function() {
    console.log('init.js 開始執行');

    // 初始化車款選項
    if (typeof carDatabase !== 'undefined') {
        var carBrandSelect = document.getElementById('carBrand');
        if (carBrandSelect) {
            carBrandSelect.innerHTML = '<option value="">請選擇廠牌車款</option>';

            Object.keys(carDatabase).forEach(function(brand) {
                var brandData = carDatabase[brand];
                if (brandData.models && Array.isArray(brandData.models)) {
                    brandData.models.forEach(function(model) {
                        var option = document.createElement('option');
                        var carData = {
                            brand: brand,
                            model: model.name,
                            type: model.type || 'N/A',
                            basePrice: model.basePrice,
                            depreciation: model.depreciation
                        };
                        option.value = JSON.stringify(carData);
                        option.textContent = brand + ' - ' + model.name;
                        carBrandSelect.appendChild(option);
                    });
                }
            });

            // 加入「沒有品牌」選項
            var noBrandOption = document.createElement('option');
            noBrandOption.value = 'no-brand';
            noBrandOption.textContent = '── 沒有您的品牌車型？點此聯繫我們 ──';
            carBrandSelect.appendChild(noBrandOption);

            console.log('車款選項載入完成，共 ' + (carBrandSelect.options.length - 2) + ' 個車款');
        }
    } else {
        console.error('carDatabase 未定義');
    }
});
