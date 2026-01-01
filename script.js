// 主要功能腳本

// LINE 官方帳號設定
const LINE_OFFICIAL_URL = 'https://line.me/R/ti/p/@288dyysc';

// Google Sheets 網址（請在設定 Google Apps Script 後填入）
// 設定教學：請參考 Google-Sheet-設定說明.md
const GOOGLE_SHEET_URL = ''; // 👈 設定完 Google Sheet 後，請在這裡填入您的 Web 應用程式網址

// Email 通知設定
const NOTIFICATION_EMAIL = 'a0911177619@yahoo.com.tw';

// 電話號碼設定
const PHONE_NUMBER = '0911177619'; // 收購專線電話號碼

// Google Analytics ID（選填）
const GA_TRACKING_ID = ''; // 👈 如需使用 Google Analytics，請填入追蹤 ID（例如：G-XXXXXXXXXX）

// 防重複提交機制
let lastSubmitTime = 0;
const SUBMIT_COOLDOWN = 30000; // 30秒內不能重複提交

// 全域變數
let currentEstimation = null;

// 頁面載入完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 表單提交事件
    const carForm = document.getElementById('carForm');
    carForm.addEventListener('submit', handleFormSubmit);

    // 重新估價按鈕
    const recalculateBtn = document.getElementById('recalculateBtn');
    recalculateBtn.addEventListener('click', resetForm);

    // 諮詢按鈕
    const consultBtn = document.getElementById('consultBtn');
    consultBtn.addEventListener('click', openConsultModal);

    // LINE 官方帳號按鈕
    const lineBtn = document.getElementById('lineBtn');
    if (lineBtn) {
        lineBtn.addEventListener('click', openLineChat);
    }

    const lineContactBtn = document.getElementById('lineContactBtn');
    if (lineContactBtn) {
        lineContactBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openLineChat();
        });
    }

    // 諮詢表單提交
    const consultForm = document.getElementById('consultForm');
    consultForm.addEventListener('submit', handleConsultSubmit);

    // 關閉彈窗
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closeConsultModal);

    // 點擊彈窗外部關閉
    const modal = document.getElementById('consultModal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeConsultModal();
        }
    });
});

// 處理表單提交
function handleFormSubmit(e) {
    e.preventDefault();

    // 防重複提交檢查
    const currentTime = Date.now();
    if (currentTime - lastSubmitTime < SUBMIT_COOLDOWN) {
        const remainingTime = Math.ceil((SUBMIT_COOLDOWN - (currentTime - lastSubmitTime)) / 1000);
        alert(`⏱️ 請稍候 ${remainingTime} 秒後再提交\n避免重複送出表單`);
        return;
    }

    const carBrandSelect = document.getElementById('carBrand');
    const carType = document.getElementById('carType').value;
    const manufactureDate = document.getElementById('manufactureDate').value;
    const mileage = parseFloat(document.getElementById('mileage').value);
    const carColor = document.getElementById('carColor').value;
    const carCondition = document.getElementById('carCondition').value;
    const accidentHistory = document.getElementById('accidentHistory').value;
    const carLocation = document.getElementById('carLocation').value;
    const urgency = document.getElementById('urgency').value;

    // 表單驗證
    if (!carBrandSelect.value) {
        alert('請選擇車款');
        return;
    }

    if (!carType) {
        alert('請選擇車輛形式');
        return;
    }

    if (!manufactureDate) {
        alert('請選擇出廠年月');
        return;
    }

    if (!mileage || mileage < 0) {
        alert('請輸入正確的行駛里程');
        return;
    }

    if (!carColor) {
        alert('請選擇車身顏色');
        return;
    }

    if (!carCondition) {
        alert('請選擇車況評估');
        return;
    }

    if (!accidentHistory) {
        alert('請選擇事故記錄');
        return;
    }

    if (!carLocation) {
        alert('請選擇車籍所在地');
        return;
    }

    // 解析車款資料
    const carData = JSON.parse(carBrandSelect.value);

    // 取得車輛配備（checkbox）
    const equipmentCheckboxes = document.querySelectorAll('input[name="equipment"]:checked');
    const equipmentList = Array.from(equipmentCheckboxes).map(cb => {
        return cb.nextElementSibling.textContent;
    });
    const equipment = equipmentList.join('、') || '無特殊配備';

    // 取得聯絡資訊（如果有填寫）
    const contactName = document.getElementById('contactName')?.value || '';
    const contactPhone = document.getElementById('contactPhone')?.value || '';
    const lineId = document.getElementById('lineId')?.value || '';
    const contactEmail = document.getElementById('contactEmail')?.value || '';

    // 中文對照表
    const carTypeMap = {
        'sedan': '轎車 (Sedan)',
        'suv': '休旅車 (SUV)',
        'mpv': '多功能車 (MPV)',
        'sports': '跑車 (Sports Car)',
        'coupe': '雙門轎跑 (Coupe)',
        'hatchback': '掀背車 (Hatchback)',
        'wagon': '旅行車 (Wagon)',
        'truck': '貨卡 (Truck)',
        'van': '廂型車 (Van)',
        'convertible': '敞篷車 (Convertible)',
        'other': '其他'
    };

    const colorMap = {
        'white': '白色', 'black': '黑色', 'silver': '銀色', 'gray': '灰色',
        'red': '紅色', 'blue': '藍色', 'yellow': '黃色', 'green': '綠色',
        'orange': '橘色', 'brown': '咖啡色', 'other': '其他顏色'
    };

    const conditionMap = {
        'excellent': '極佳', 'good': '良好', 'fair': '普通', 'poor': '需整理'
    };

    const accidentMap = {
        'none': '無事故', 'minor': '小事故（已修復）',
        'major': '重大事故', 'flood': '泡水車', 'fire': '火燒車'
    };

    const locationMap = {
        'north': '北部', 'central': '中部', 'south': '南部',
        'east': '東部', 'offshore': '離島'
    };

    const urgencyMap = {
        'urgent': '🔥 急售（3天內）', 'week': '一週內',
        'month': '一個月內', 'flexible': '不急，先了解行情'
    };

    // 組合 LINE 訊息
    let lineMessage = `【我要估車】\n\n`;
    lineMessage += `🚗 車輛資訊\n`;
    lineMessage += `廠牌車款：${carData.brand} ${carData.model}\n`;
    lineMessage += `車輛形式：${carTypeMap[carType] || carType}\n`;
    lineMessage += `出廠年月：${manufactureDate}\n`;
    lineMessage += `車身顏色：${colorMap[carColor] || carColor}\n`;
    lineMessage += `行駛里程：${mileage.toLocaleString()} 公里\n`;
    lineMessage += `車輛配備：${equipment}\n`;
    lineMessage += `車況評估：${conditionMap[carCondition]}\n`;
    lineMessage += `事故記錄：${accidentMap[accidentHistory]}\n`;
    lineMessage += `車籍所在：${locationMap[carLocation]}\n`;
    if (urgency) lineMessage += `售車時間：${urgencyMap[urgency]}\n`;

    // 如果有填寫聯絡資訊，加入訊息中
    if (contactName || contactPhone || lineId || contactEmail) {
        lineMessage += `\n👤 聯絡資訊\n`;
        if (contactName) lineMessage += `姓名：${contactName}\n`;
        if (contactPhone) lineMessage += `電話：${contactPhone}\n`;
        if (lineId) lineMessage += `Line ID：${lineId}\n`;
        if (contactEmail) lineMessage += `Email：${contactEmail}\n`;
    }

    lineMessage += `\n希望了解更詳細的估價資訊，謝謝！`;

    // 準備要儲存的資料
    const formData = {
        carBrand: `${carData.brand} ${carData.model}`,
        carType: carTypeMap[carType] || carType,
        manufactureDate: manufactureDate,
        carColor: colorMap[carColor] || carColor,
        mileage: mileage,
        equipment: equipment,
        carCondition: conditionMap[carCondition],
        accidentHistory: accidentMap[accidentHistory],
        carLocation: locationMap[carLocation],
        urgency: urgency ? urgencyMap[urgency] : '未填寫',
        contactName: contactName,
        contactPhone: contactPhone,
        lineId: lineId,
        contactEmail: contactEmail,
        timestamp: new Date().toLocaleString('zh-TW')
    };

    // 1. 儲存到 Google 試算表（如果已設定）
    if (GOOGLE_SHEET_URL) {
        saveToGoogleSheet(formData);
    }

    // 2. 發送 Email 通知
    sendEmailNotification(formData);

    // 3. 記錄提交時間（防重複提交）
    lastSubmitTime = currentTime;

    // 4. Google Analytics 事件追蹤
    if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
            'event_category': 'engagement',
            'event_label': `${carData.brand} ${carData.model}`,
            'value': urgency === 'urgent' ? 10 : 5
        });
    }

    // 5. 跳轉到 LINE 並帶入訊息
    setTimeout(() => {
        const lineUrl = `${LINE_OFFICIAL_URL}?text=${encodeURIComponent(lineMessage)}`;
        window.open(lineUrl, '_blank');
    }, 500);

    // 顯示提示訊息
    alert('✅ 您的資料已送出！\n\n即將開啟 LINE 對話視窗\n我們會為您提供專業的估價服務！');
}

// 儲存資料到 Google 試算表
function saveToGoogleSheet(data) {
    fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(() => {
        console.log('✅ 資料已儲存到 Google 試算表');
    }).catch((error) => {
        console.error('❌ 儲存失敗:', error);
    });
}

// 發送 Email 通知
function sendEmailNotification(data) {
    console.log('📧 開始發送 Email 到:', NOTIFICATION_EMAIL);
    console.log('📝 表單資料:', data);

    // 使用 FormSubmit.co 免費服務發送 Email
    const emailData = new FormData();
    emailData.append('_to', NOTIFICATION_EMAIL);
    emailData.append('_subject', '🚗 秒估車新留單通知');
    emailData.append('_template', 'table');
    emailData.append('提交時間', data.timestamp);
    emailData.append('廠牌車款', data.carBrand);
    emailData.append('車輛形式', data.carType);
    emailData.append('出廠年月', data.manufactureDate);
    emailData.append('車身顏色', data.carColor);
    emailData.append('行駛里程', `${data.mileage} 公里`);
    emailData.append('車輛配備', data.equipment);
    emailData.append('車況評估', data.carCondition);
    emailData.append('事故記錄', data.accidentHistory);
    emailData.append('車籍所在地', data.carLocation);
    emailData.append('預期售車時間', data.urgency);
    emailData.append('聯絡人', data.contactName || '未填寫');
    emailData.append('電話', data.contactPhone || '未填寫');
    emailData.append('Line ID', data.lineId || '未填寫');
    emailData.append('Email', data.contactEmail || '未填寫');

    fetch(`https://formsubmit.co/ajax/${NOTIFICATION_EMAIL}`, {
        method: 'POST',
        body: emailData
    }).then(response => response.json())
    .then(result => {
        console.log('✅ Email 發送成功！回應:', result);
        if (result.success) {
            console.log('✅ FormSubmit 確認收到');
        } else {
            console.warn('⚠️ FormSubmit 回應異常:', result);
        }
    }).catch(error => {
        console.error('❌ Email 發送失敗:', error);
        alert('⚠️ Email 發送可能失敗，請檢查網路連線或聯絡技術支援');
    });
}

// 計算車輛估價
function calculateCarValue(carData, manufactureDate, mileage, carColor) {
    const basePrice = carData.basePrice;
    const depreciationRate = carData.depreciation;

    // 計算車齡（以年為單位）
    const manufactureYear = new Date(manufactureDate).getFullYear();
    const currentYear = new Date().getFullYear();
    const carAge = currentYear - manufactureYear;

    // 基本折舊計算（每年折舊）
    let depreciation = 1;
    for (let i = 0; i < carAge; i++) {
        if (i === 0) {
            depreciation *= (1 - depreciationRate * 1.5); // 第一年折舊較多
        } else {
            depreciation *= (1 - depreciationRate);
        }
    }

    // 里程折舊（每萬公里減少一定比例）
    const mileageDepreciation = Math.max(0.7, 1 - (mileage / 10000 * 0.015));

    // 計算估價
    let estimatedPrice = basePrice * depreciation * mileageDepreciation;
// 顏色調整（白/黑/銀色較保值）    let colorAdjustment = 1.0;    if (carColor === "white" || carColor === "black" || carColor === "silver") {        colorAdjustment = 1.05; // 保值色 +5%    } else if (carColor === "gray" || carColor === "blue") {        colorAdjustment = 1.0; // 一般色 0%    } else if (carColor === "red") {        colorAdjustment = 0.98; // 紅色 -2%    } else {        colorAdjustment = 0.95; // 其他色 -5%    }    estimatedPrice *= colorAdjustment;

    // 確保最低價格
    estimatedPrice = Math.max(estimatedPrice, basePrice * 0.1);

    // 估價範圍（±8%）
    const minPrice = Math.round(estimatedPrice * 0.92);
    const maxPrice = Math.round(estimatedPrice * 1.08);

    return {
        minPrice: minPrice,
        maxPrice: maxPrice,
        avgPrice: Math.round((minPrice + maxPrice) / 2),
        carAge: carAge,
        condition: getCarCondition(carAge, mileage)
    };
}

// 根據車齡和里程判斷車況
function getCarCondition(carAge, mileage) {
    const mileageInTenThousand = mileage / 10000;
    if (carAge <= 2 && mileageInTenThousand <= 5) return 'A+（極佳）';
    if (carAge <= 3 && mileageInTenThousand <= 8) return 'A（優良）';
    if (carAge <= 5 && mileageInTenThousand <= 12) return 'B+（良好）';
    if (carAge <= 7 && mileageInTenThousand <= 15) return 'B（尚可）';
    if (carAge <= 10 && mileageInTenThousand <= 20) return 'C（一般）';
    return 'D（需檢修）';
}

// 顯示估價結果
function displayResult(estimation) {
    // 填充結果資料
    document.getElementById('resultCar').textContent = estimation.car;
    document.getElementById('resultDate').textContent = formatDate(estimation.date);
    document.getElementById('resultMileage').textContent = `${estimation.mileage.toLocaleString()} 公里`;
    document.getElementById('resultPrice').textContent =
        `NT$ ${estimation.minPrice.toLocaleString()} - ${estimation.maxPrice.toLocaleString()}`;

    // 隱藏表單，顯示結果
    document.getElementById('carForm').classList.add('hidden');
    document.getElementById('resultSection').classList.remove('hidden');
}

// 格式化日期
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${year}年${month}月`;
}

// 重置表單
function resetForm() {
    document.getElementById('carForm').classList.remove('hidden');
    document.getElementById('resultSection').classList.add('hidden');
    document.getElementById('carForm').reset();
    currentEstimation = null;
}

// 開啟諮詢彈窗
function openConsultModal() {
    document.getElementById('consultModal').classList.remove('hidden');
}

// 關閉諮詢彈窗
function closeConsultModal() {
    document.getElementById('consultModal').classList.add('hidden');
    document.getElementById('consultForm').reset();
}

// 處理諮詢表單提交
function handleConsultSubmit(e) {
    e.preventDefault();

    const userName = document.getElementById('userName').value;
    const userPhone = document.getElementById('userPhone').value;
    const userEmail = document.getElementById('userEmail').value;
    const preferTime = document.getElementById('preferTime').value;
    const userNote = document.getElementById('userNote').value;

    // 建立諮詢資料
    const consultData = {
        userName,
        userPhone,
        userEmail,
        preferTime,
        userNote,
        carInfo: currentEstimation,
        timestamp: new Date().toISOString()
    };

    // 儲存到 localStorage（實際應用中應發送到後端）
    saveConsultation(consultData);

    // 顯示成功訊息
    alert(`感謝您的諮詢！\n\n我們的專員將在您選擇的時段聯繫您。\n\n聯絡電話：${userPhone}\nEmail：${userEmail}`);

    // 關閉彈窗
    closeConsultModal();
}

// 儲存諮詢記錄
function saveConsultation(data) {
    // 從 localStorage 讀取現有記錄
    let consultations = localStorage.getItem('consultations');
    consultations = consultations ? JSON.parse(consultations) : [];

    // 加入新記錄
    consultations.push(data);

    // 儲存回 localStorage
    localStorage.setItem('consultations', JSON.stringify(consultations));

    console.log('諮詢記錄已儲存：', data);
}

// 標籤切換功能（可選）
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

// 開啟 LINE 官方帳號聊天
function openLineChat() {
    // 如果有估價資訊，可以帶入預填訊息
    let message = '您好，我想諮詢汽車估價相關問題。';

    if (currentEstimation) {
        message = `您好，我剛完成了 ${currentEstimation.car} 的估價（${currentEstimation.date}、${currentEstimation.mileage}萬公里），估價範圍為 NT$${currentEstimation.minPrice.toLocaleString()}-${currentEstimation.maxPrice.toLocaleString()}，想進一步諮詢。`;
    }

    // 建立 LINE 官方帳號連結（含預填訊息）
    const encodedMessage = encodeURIComponent(message);
    const lineUrl = `${LINE_OFFICIAL_URL}?text=${encodedMessage}`;

    // 在新視窗開啟 LINE
    window.open(lineUrl, '_blank');

    // 記錄用戶點擊
    console.log('用戶開啟 LINE 官方帳號:', lineUrl);
}

// ==================== 汽車照片輪播功能 ====================

let currentSlideIndex = 1;
let autoSlideInterval;

// 初始化輪播
document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlideIndex);
    startAutoSlide();
});

// 移動輪播
function moveCarousel(n) {
    stopAutoSlide();
    showSlide(currentSlideIndex += n);
    startAutoSlide();
}

// 跳到指定幻燈片
function currentSlide(n) {
    stopAutoSlide();
    showSlide(currentSlideIndex = n);
    startAutoSlide();
}

// 顯示幻燈片
function showSlide(n) {
    const slides = document.getElementsByClassName('car-slide');
    const dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
        currentSlideIndex = 1;
    }
    if (n < 1) {
        currentSlideIndex = slides.length;
    }

    // 隱藏所有幻燈片
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    // 移除所有點的 active 狀態
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    // 顯示當前幻燈片
    if (slides[currentSlideIndex - 1]) {
        slides[currentSlideIndex - 1].classList.add('active');
    }
    if (dots[currentSlideIndex - 1]) {
        dots[currentSlideIndex - 1].classList.add('active');
    }
}

// 自動輪播
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
    }, 4000); // 每4秒切換
}

// 停止自動輪播
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// ==================== 模式切換功能 ====================

let currentMode = 'quick'; // 'quick' 或 'full'
let isQuickEstimateActive = false;

// 標籤切換功能
function setupTabSwitching() {
    const tabs = document.querySelectorAll('.tab');
    const formContainer = document.querySelector('.form-container');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 更新標籤樣式
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // 切換模式
            const tabType = this.getAttribute('data-tab');
            switchMode(tabType, formContainer);
        });
    });
    
    // 初始化為快速估價模式
    switchMode('sell', formContainer);
}

// 切換模式函數
function switchMode(mode, container) {
    if (mode === 'sell') {
        // 快速估價模式
        currentMode = 'quick';
        container.classList.remove('mode-full-estimate');
        container.classList.add('mode-quick-estimate');
        
        // 啟用即時估價
        isQuickEstimateActive = true;
        setupQuickEstimate();
        
    } else if (mode === 'estimate') {
        // 我要估車模式
        currentMode = 'full';
        container.classList.remove('mode-quick-estimate');
        container.classList.add('mode-full-estimate');
        
        // 禁用即時估價，隱藏結果
        isQuickEstimateActive = false;
        hideQuickPriceSection();
    }
}

// 設置快速估價功能（已改為手動點擊按鈕，不再自動計算）
function setupQuickEstimate() {
    console.log('📊 快速估價模式：需手動點擊「即時估價」按鈕');
    // 不再自動監聽 change 事件，改為點擊按鈕才計算
}

// 檢查並計算快速估價
function checkAndCalculateQuick() {
    console.log('📊 檢查快速估價條件...');

    if (!isQuickEstimateActive || currentMode !== 'quick') {
        console.log('⚠️ 快速估價未啟用或模式不正確');
        return;
    }

    const carBrand = document.getElementById('carBrand');
    const manufactureDate = document.getElementById('manufactureDate');
    const mileage = document.getElementById('mileage');

    if (carBrand && manufactureDate && mileage) {
        const brandValue = carBrand.value;
        const dateValue = manufactureDate.value;
        const mileageValue = mileage.value;

        console.log('📋 表單值:', {
            brand: brandValue ? '已選擇' : '未選擇',
            date: dateValue || '未填寫',
            mileage: mileageValue || '未填寫'
        });

        if (brandValue && dateValue && mileageValue) {
            console.log('✅ 所有必填欄位已完成，開始計算估價...');
            calculateQuickPrice(brandValue, dateValue, mileageValue);
        } else {
            console.log('⚠️ 還有必填欄位未填寫');
            hideQuickPriceSection();
        }
    }
}

// 計算快速估價
function calculateQuickPrice(brandValue, dateValue, mileageValue, selectedEquipment = []) {
    try {
        // 從 carBrand select 的 value 解析車輛資料
        const carData = JSON.parse(brandValue);

        // 解析出廠年月
        const [year, month] = dateValue.split('-').map(Number);
        const carAge = new Date().getFullYear() - year;

        // 基礎價格
        let basePrice = carData.basePrice || 500000;

        // 年份折舊（每年約12%）
        const depreciationRate = 0.12;
        let depreciation = 1;
        for (let i = 0; i < carAge; i++) {
            depreciation *= (1 - depreciationRate);
        }

        // 里程影響（每萬公里折2.5%）
        const mileageInWan = parseInt(mileageValue) / 10000;
        const mileageFactor = Math.max(0.5, 1 - (mileageInWan * 0.025));

        // 配備加成
        const equipmentBonus = selectedEquipment.length * 0.02;

        // 計算最終價格
        let estimatedPrice = basePrice * depreciation * mileageFactor * (1 + equipmentBonus);

        // 零售行情（約1.2倍）
        const retailPrice = estimatedPrice * 1.20;

        // 收購行情（約0.85倍）
        const purchasePrice = estimatedPrice * 0.85;

        // 顯示結果
        displayQuickEstimate(carData, year, mileageValue, basePrice, retailPrice, purchasePrice, selectedEquipment);

    } catch (error) {
        console.error('計算估價時出錯:', error);
        hideQuickPriceSection();
    }
}

// 顯示快速估價結果
function displayQuickEstimate(carData, year, mileage, basePrice, retailPrice, purchasePrice, selectedEquipment = []) {
    console.log('💰 顯示估價結果:', {
        車款: `${carData.brand} ${carData.model}`,
        年份: year,
        里程: mileage,
        配備: selectedEquipment.join('、') || '無',
        零售價: (retailPrice / 10000).toFixed(1) + '萬',
        收購價: (purchasePrice / 10000).toFixed(1) + '萬'
    });

    // 顯示車輛資訊
    document.getElementById('displayBrand').textContent = carData.brand || '-';
    document.getElementById('displayModel').textContent = carData.model || '-';
    document.getElementById('displayType').textContent = carData.type || 'N/A';
    document.getElementById('displayYear').textContent = year || '-';
    document.getElementById('displayMileage').textContent = (parseInt(mileage) / 10000).toFixed(1) + ' 萬公里';
    document.getElementById('displayNewPrice').textContent = '$' + (basePrice / 10000).toFixed(1) + ' 萬';

    // 顯示配備
    const equipmentDisplay = document.getElementById('displayEquipment');
    if (equipmentDisplay) {
        if (selectedEquipment.length > 0) {
            equipmentDisplay.textContent = selectedEquipment.join('、');
            equipmentDisplay.style.color = '#333';
            equipmentDisplay.style.fontWeight = '500';
        } else {
            equipmentDisplay.textContent = '無選擇配備';
            equipmentDisplay.style.color = '#999';
            equipmentDisplay.style.fontWeight = 'normal';
        }
    }

    // 顯示價格
    const retailWan = (retailPrice / 10000).toFixed(1);
    const purchaseWan = (purchasePrice / 10000).toFixed(1);

    document.getElementById('retailPrice').textContent = '$ ' + retailWan + ' 萬';
    document.getElementById('purchasePrice').textContent = '$ ' + purchaseWan + ' 萬';

    // 顯示快速估價區域
    const quickPriceSection = document.getElementById('quickPriceSection');
    if (quickPriceSection) {
        quickPriceSection.style.display = 'block';
        console.log('✅ 快速估價區域已顯示');

        // 平滑滾動到結果
        setTimeout(() => {
            quickPriceSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    } else {
        console.error('❌ 找不到 quickPriceSection 元素');
    }
}

// 隱藏快速估價區域
function hideQuickPriceSection() {
    const quickPriceSection = document.getElementById('quickPriceSection');
    if (quickPriceSection) {
        quickPriceSection.style.display = 'none';
    }
}

// 頁面載入後初始化
document.addEventListener('DOMContentLoaded', function() {
    setupTabSwitching();
    initializeCarOptions(); // 初始化車款選項
    setupMainResetButton(); // 設置重新填寫按鈕
    setupQuickEstimateButton(); // 設置即時估價按鈕
    setupNoBrandHandler(); // 設置「沒有品牌」選項處理
});


// ==================== 重新填寫快速估價 ====================

function resetQuickEstimate() {
    // 隱藏估價結果區域
    hideQuickPriceSection();
    
    // 清空表單字段
    const carBrand = document.getElementById('carBrand');
    const manufactureDate = document.getElementById('manufactureDate');
    const mileage = document.getElementById('mileage');
    const equipmentCheckboxes = document.querySelectorAll('input[name="equipment"]');
    
    if (carBrand) carBrand.value = '';
    if (manufactureDate) manufactureDate.value = '';
    if (mileage) mileage.value = '';
    
    equipmentCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // 平滑滾動到表單頂部
    const formContainer = document.querySelector('.form-container');
    if (formContainer) {
        formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // 提示訊息（可選）
    console.log('已重置快速估價表單');
}

// ==================== 初始化車款選項 ====================

function initializeCarOptions() {
    const carBrandSelect = document.getElementById('carBrand');

    if (!carBrandSelect) {
        console.error('找不到 carBrand 選單元素');
        return;
    }

    // 清空現有選項（保留第一個「請選擇」選項）
    carBrandSelect.innerHTML = '<option value="">請選擇廠牌車款</option>';

    // 檢查 carDatabase 是否存在
    if (typeof carDatabase === 'undefined') {
        console.error('carDatabase 未定義，請確認 car-data.js 已正確載入');
        return;
    }

    // 遍歷所有品牌
    Object.keys(carDatabase).forEach(brand => {
        const brandData = carDatabase[brand];

        if (brandData.models && Array.isArray(brandData.models)) {
            // 為每個車型建立選項
            brandData.models.forEach(model => {
                const option = document.createElement('option');

                // 建立車輛資料物件
                const carData = {
                    brand: brand,
                    model: model.name,
                    type: model.type || 'N/A',
                    basePrice: model.basePrice,
                    depreciation: model.depreciation
                };

                // 將資料轉為 JSON 字串作為 value
                option.value = JSON.stringify(carData);

                // 顯示文字：品牌 + 車型
                option.textContent = `${brand} - ${model.name}`;

                carBrandSelect.appendChild(option);
            });
        }
    });

    // 新增「沒有您的品牌車型」選項
    const noBrandOption = document.createElement('option');
    noBrandOption.value = 'no-brand';
    noBrandOption.textContent = '── 沒有您的品牌車型？點此聯繫我們 ──';
    noBrandOption.style.color = '#e74c3c';
    noBrandOption.style.fontWeight = 'bold';
    noBrandOption.style.textAlign = 'center';
    carBrandSelect.appendChild(noBrandOption);

    console.log('✅ 車款選項初始化完成，共', carBrandSelect.options.length - 2, '個車款 + 1 個「沒有品牌」選項');
}

// ==================== 設置主要重新填寫按鈕 ====================

function setupMainResetButton() {
    const mainResetBtn = document.getElementById('mainResetBtn');

    if (!mainResetBtn) {
        console.error('找不到 mainResetBtn 按鈕');
        return;
    }

    mainResetBtn.addEventListener('click', function() {
        if (currentMode === 'quick') {
            // 快速估價模式：調用快速重置
            resetQuickEstimate();
        } else {
            // 我要估車模式：重置整個表單
            const carForm = document.getElementById('carForm');
            if (carForm) {
                carForm.reset();
                hideQuickPriceSection();
            }
        }
    });

    console.log('✅ 重新填寫按鈕已設置');
}

// ==================== 設置即時估價按鈕 ====================

function setupQuickEstimateButton() {
    const quickEstimateBtn = document.getElementById('quickEstimateBtn');

    if (!quickEstimateBtn) {
        console.error('找不到 quickEstimateBtn 按鈕');
        return;
    }

    quickEstimateBtn.addEventListener('click', function() {
        console.log('🔘 點擊即時估價按鈕');

        // 檢查是否在快速估價模式
        if (currentMode !== 'quick') {
            console.warn('⚠️ 不在快速估價模式');
            return;
        }

        // 取得表單值
        const carBrand = document.getElementById('carBrand');
        const manufactureDate = document.getElementById('manufactureDate');
        const mileage = document.getElementById('mileage');

        if (!carBrand || !manufactureDate || !mileage) {
            alert('⚠️ 表單元素載入失敗，請重新整理頁面');
            return;
        }

        const brandValue = carBrand.value;
        const dateValue = manufactureDate.value;
        const mileageValue = mileage.value;

        // 檢查必填欄位
        if (!brandValue) {
            alert('⚠️ 請選擇廠牌車款');
            carBrand.focus();
            return;
        }

        if (!dateValue) {
            alert('⚠️ 請選擇出廠年月');
            manufactureDate.focus();
            return;
        }

        if (!mileageValue || mileageValue <= 0) {
            alert('⚠️ 請輸入行駛里程');
            mileage.focus();
            return;
        }

        // 所有必填欄位都已填寫，開始計算估價
        console.log('✅ 開始計算即時估價...');

        // 取得選擇的配備
        const selectedEquipment = getSelectedEquipment();

        calculateQuickPrice(brandValue, dateValue, mileageValue, selectedEquipment);
    });

    console.log('✅ 即時估價按鈕已設置');
}

// ==================== 取得選擇的配備 ====================

function getSelectedEquipment() {
    const equipmentCheckboxes = document.querySelectorAll('input[name="equipment"]:checked');
    const equipmentList = Array.from(equipmentCheckboxes).map(cb => {
        return cb.nextElementSibling.textContent.trim();
    });
    return equipmentList;
}

// ==================== 處理「沒有品牌」選項 ====================

function setupNoBrandHandler() {
    const carBrandSelect = document.getElementById('carBrand');

    if (!carBrandSelect) {
        console.error('找不到 carBrand 選單元素');
        return;
    }

    carBrandSelect.addEventListener('change', function() {
        if (this.value === 'no-brand') {
            // 顯示提示訊息
            const userConfirm = confirm(
                '😊 沒找到您的愛車品牌或車型？\n\n' +
                '別擔心！我們收購所有品牌車款\n' +
                '點擊「確定」將為您開啟 LINE 諮詢，\n' +
                '我們的專員會立即為您服務！'
            );

            if (userConfirm) {
                // 準備 LINE 訊息
                const lineMessage =
                    '您好！我想詢問車輛估價\n\n' +
                    '📋 我的車款在清單中找不到：\n' +
                    '希望能提供估價服務，謝謝！';

                // 開啟 LINE 對話
                const lineUrl = `${LINE_OFFICIAL_URL}?text=${encodeURIComponent(lineMessage)}`;
                window.open(lineUrl, '_blank');

                console.log('✅ 已開啟 LINE 諮詢（無品牌選項）');
            }

            // 重置選單到預設值
            setTimeout(() => {
                this.value = '';
            }, 100);
        }
    });

    console.log('✅ 「沒有品牌」選項處理已設置');
}

