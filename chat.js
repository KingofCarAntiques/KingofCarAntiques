// 線上客服系統腳本

// 自動回覆資料庫
const autoReplies = {
    '我想了解估價流程': {
        messages: [
            '我們的估價流程非常簡單：',
            '1️⃣ 選擇您的車款廠牌和型號',
            '2️⃣ 輸入出廠年月',
            '3️⃣ 填寫行駛里程',
            '4️⃣ 立即獲得估價結果',
            '',
            '整個過程只需要30秒！如需更精確的評估，歡迎預約專人到府鑑定。'
        ]
    },
    '如何聯繫真人客服': {
        messages: [
            '您可以透過以下方式聯繫我們的專業顧問：',
            '',
            '📞 客服專線：0800-123-456',
            '📧 Email：service@秒估車.com.tw',
            '💬 LINE 官方帳號：@288dyysc',
            '👉 點擊下方「加入 LINE 諮詢」按鈕即可直接聯繫！',
            '',
            '營業時間內我們會盡快為您服務！'
        ]
    },
    '營業時間是什麼時候': {
        messages: [
            '⏰ 秒估車營業時間：',
            '',
            '週一至週五：09:00 - 21:00',
            '週六：10:00 - 18:00',
            '週日：公休',
            '',
            '國定假日營業時間請來電確認。'
        ]
    },
    '我想賣車': {
        messages: [
            '太好了！讓我們幫您快速賣車 🚗',
            '',
            '您可以：',
            '1. 使用上方表單快速估價',
            '2. 點擊「線上一對一諮詢」預約專人服務',
            '3. 直接撥打 0800-123-456',
            '',
            '我們提供免費到府鑑定服務，當天即可完成交易！'
        ]
    },
    '預設': {
        messages: [
            '感謝您的訊息！',
            '',
            '如需立即協助，請選擇下方快速選項，或直接撥打客服專線：',
            '📞 0800-123-456',
            '',
            '我們的專業顧問將竭誠為您服務。'
        ]
    }
};

// 客服狀態
let chatState = {
    isOpen: false,
    messageCount: 0,
    hasUnread: true
};

// 初始化客服系統
document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('chatButton');
    const chatWindow = document.getElementById('chatWindow');
    const closeChatBtn = document.getElementById('closeChatBtn');
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const chatInput = document.getElementById('chatInput');
    const quickReplyBtns = document.querySelectorAll('.quick-reply-btn');

    // 開啟/關閉聊天視窗
    chatButton.addEventListener('click', toggleChat);
    closeChatBtn.addEventListener('click', closeChat);

    // 發送訊息
    sendMessageBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // 快速回覆按鈕
    quickReplyBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const message = this.getAttribute('data-message');
            sendUserMessage(message);
            handleAutoReply(message);
        });
    });

    // 3秒後顯示歡迎提示
    setTimeout(function() {
        if (!chatState.isOpen) {
            showNotification();
        }
    }, 3000);
});

// 切換聊天視窗
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    const chatBadge = document.getElementById('chatBadge');

    chatState.isOpen = !chatState.isOpen;

    if (chatState.isOpen) {
        chatWindow.classList.remove('hidden');
        chatBadge.classList.add('hidden');
        chatState.hasUnread = false;
        scrollToBottom();
    } else {
        chatWindow.classList.add('hidden');
    }
}

// 關閉聊天視窗
function closeChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.classList.add('hidden');
    chatState.isOpen = false;
}

// 發送訊息
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();

    if (message) {
        sendUserMessage(message);
        chatInput.value = '';

        // 檢查是否有匹配的自動回覆
        handleAutoReply(message);
    }
}

// 發送用戶訊息
function sendUserMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageTime = getCurrentTime();

    const messageHtml = `
        <div class="message user-message">
            <div class="message-avatar">您</div>
            <div class="message-content">
                <p>${escapeHtml(message)}</p>
                <div class="message-time">${messageTime}</div>
            </div>
        </div>
    `;

    chatMessages.insertAdjacentHTML('beforeend', messageHtml);
    scrollToBottom();
    chatState.messageCount++;
}

// 發送客服訊息
function sendBotMessage(messages) {
    const chatMessages = document.getElementById('chatMessages');
    const messageTime = getCurrentTime();

    // 組合所有訊息段落
    let content = '';
    messages.forEach(msg => {
        if (msg) {
            content += `<p>${escapeHtml(msg)}</p>`;
        }
    });

    const messageHtml = `
        <div class="message bot-message">
            <div class="message-avatar">客</div>
            <div class="message-content">
                ${content}
                <div class="message-time">${messageTime}</div>
            </div>
        </div>
    `;

    // 延遲回覆以模擬真人客服
    setTimeout(() => {
        chatMessages.insertAdjacentHTML('beforeend', messageHtml);
        scrollToBottom();

        // 如果聊天視窗關閉，顯示未讀提示
        if (!chatState.isOpen) {
            showUnreadBadge();
        }
    }, 800);
}

// 處理自動回覆
function handleAutoReply(message) {
    let reply = autoReplies['預設'];

    // 檢查是否有匹配的關鍵字
    for (let key in autoReplies) {
        if (message.includes(key) || key === message) {
            reply = autoReplies[key];
            break;
        }
    }

    sendBotMessage(reply.messages);
}

// 顯示通知提示
function showNotification() {
    const chatBadge = document.getElementById('chatBadge');
    chatBadge.classList.remove('hidden');
    chatState.hasUnread = true;
}

// 顯示未讀徽章
function showUnreadBadge() {
    const chatBadge = document.getElementById('chatBadge');
    let count = parseInt(chatBadge.textContent) || 0;
    count++;
    chatBadge.textContent = count;
    chatBadge.classList.remove('hidden');
    chatState.hasUnread = true;
}

// 滾動到底部
function scrollToBottom() {
    const chatMessages = document.getElementById('chatMessages');
    setTimeout(() => {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 100);
}

// 獲取當前時間
function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

// HTML 轉義（防止 XSS 攻擊）
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 整合估價系統 - 當用戶完成估價時自動發送訊息
function notifyCarEstimation(carInfo) {
    if (!chatState.isOpen) {
        const messages = [
            `已為您的 ${carInfo.car} 完成估價！`,
            `估價範圍：NT$ ${carInfo.minPrice.toLocaleString()} - ${carInfo.maxPrice.toLocaleString()}`,
            '',
            '如需更詳細的評估或有任何疑問，歡迎隨時與我們聯繫！'
        ];

        sendBotMessage(messages);
        showUnreadBadge();
    }
}

// 匯出函數供其他腳本使用
window.chatService = {
    notifyEstimation: notifyCarEstimation
};
