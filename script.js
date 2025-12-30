// 主要功能腳本

// LINE 官方帳號設定
const LINE_OFFICIAL_URL = 'https://line.me/R/ti/p/@288dyysc';

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

    const carBrandSelect = document.getElementById('carBrand');
    const manufactureDate = document.getElementById('manufactureDate').value;
    const mileage = parseFloat(document.getElementById('mileage').value);

    if (!carBrandSelect.value) {
        alert('請選擇車款');
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

    // 解析車款資料
    const carData = JSON.parse(carBrandSelect.value);

    // 計算估價
    const estimation = calculateCarValue(carData, manufactureDate, mileage);

    // 儲存估價結果
    currentEstimation = {
        car: `${carData.brand} ${carData.model}`,
        date: manufactureDate,
        mileage: mileage,
        ...estimation
    };

    // 顯示結果
    displayResult(currentEstimation);
}

// 計算車輛估價
function calculateCarValue(carData, manufactureDate, mileage) {
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
    const mileageDepreciation = Math.max(0.7, 1 - (mileage * 0.015));

    // 計算估價
    let estimatedPrice = basePrice * depreciation * mileageDepreciation;

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
    if (carAge <= 2 && mileage <= 5) return 'A+（極佳）';
    if (carAge <= 3 && mileage <= 8) return 'A（優良）';
    if (carAge <= 5 && mileage <= 12) return 'B+（良好）';
    if (carAge <= 7 && mileage <= 15) return 'B（尚可）';
    if (carAge <= 10 && mileage <= 20) return 'C（一般）';
    return 'D（需檢修）';
}

// 顯示估價結果
function displayResult(estimation) {
    // 填充結果資料
    document.getElementById('resultCar').textContent = estimation.car;
    document.getElementById('resultDate').textContent = formatDate(estimation.date);
    document.getElementById('resultMileage').textContent = `${estimation.mileage} 萬公里`;
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
