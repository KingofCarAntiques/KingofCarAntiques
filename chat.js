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
            '🎯 最快速的聯繫方式：',
            '',
            '💚 LINE 官方帳號：@288dyysc（推薦）',
            '👉 點擊下方「加入 LINE 諮詢」按鈕',
            '✅ 即時回覆、專人服務',
            '',
            '📞 客服專線：0911-177-619',
            '⏰ 週一至週五 09:00-21:00',
            '⏰ 週六 10:00-18:00',
            '',
            '📧 Email：a0911177619@yahoo.com.tw',
            '',
            '選擇您方便的方式，我們隨時為您服務！'
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
            '太好了！讓我們幫您快速賣車 🚗💰',
            '',
            '🎯 推薦流程：',
            '1️⃣ 使用上方表單快速估價（30秒完成）',
            '2️⃣ 加入 LINE 官方帳號 @288dyysc',
            '3️⃣ 專人立即為您服務',
            '',
            '💚 點擊下方「加入 LINE 諮詢」按鈕',
            '或直接撥打：📞 0911-177-619',
            '',
            '✅ 免費到府鑑定',
            '✅ 當天完成交易',
            '✅ 價格公道透明'
        ]
    },
    '預設': {
        messages: [
            '感謝您的訊息！我們已收到 ✅',
            '',
            '💚 建議加入 LINE 官方帳號獲得即時回覆：',
            '👉 @288dyysc',
            '點擊下方「加入 LINE 諮詢」按鈕',
            '',
            '或您也可以：',
            '📞 撥打專線：0911-177-619',
            '📧 Email：a0911177619@yahoo.com.tw',
            '',
            '我們的專業顧問將竭誠為您服務！'
        ]
    }
};

// 客服狀態
let chatState = {
    isOpen: false,
    messageCount: 0,
    hasUnread: true
};

// 對話歷史記錄
let conversationHistory = {
    sessionId: generateSessionId(),
    startTime: new Date().toISOString(),
    messages: [],
    userInfo: {}
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

    // 保存訊息到對話記錄
    saveMessage('user', message, messageTime);
}

// 發送客服訊息
function sendBotMessage(messages) {
    const chatMessages = document.getElementById('chatMessages');
    const messageTime = getCurrentTime();

    // 組合所有訊息段落
    let content = '';
    const fullMessage = messages.join('\n');
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

        // 保存客服訊息到對話記錄
        saveMessage('bot', fullMessage, messageTime);

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

// 生成對話 Session ID
function generateSessionId() {
    return 'chat_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// 保存訊息到對話記錄
function saveMessage(sender, message, time) {
    conversationHistory.messages.push({
        sender: sender,
        message: message,
        timestamp: time,
        fullTimestamp: new Date().toISOString()
    });

    // 保存到 localStorage
    saveToLocalStorage();

    // 如果是客戶訊息，立即發送 Email 通知
    if (sender === 'user') {
        sendInstantNotification(message, time);
    }

    // 如果對話超過 10 條訊息，自動發送完整對話記錄
    if (conversationHistory.messages.length >= 10 && conversationHistory.messages.length % 10 === 0) {
        sendConversationToBackend();
    }
}

// 保存對話到 localStorage
function saveToLocalStorage() {
    try {
        localStorage.setItem('chatHistory_' + conversationHistory.sessionId, JSON.stringify(conversationHistory));
    } catch (e) {
        console.error('無法保存對話記錄:', e);
    }
}

// 發送即時通知（每條客戶訊息）
function sendInstantNotification(message, time) {
    // 計算客戶訊息數量
    const userMessageCount = conversationHistory.messages.filter(msg => msg.sender === 'user').length;

    // 截取訊息預覽（最多50字）
    const messagePreview = message.length > 50 ? message.substring(0, 50) + '...' : message;

    // 準備要發送的資料
    const notificationData = new FormData();
    notificationData.append('_to', 'a0911177619@yahoo.com.tw');
    notificationData.append('_subject', `💬【秒估車客服】新訊息 - ${messagePreview} (${time})`);
    notificationData.append('_template', 'table');
    notificationData.append('⏰ 時間', time);
    notificationData.append('👤 客戶訊息', message);
    notificationData.append('🆔 對話編號', conversationHistory.sessionId);
    notificationData.append('📊 本次對話', `第 ${userMessageCount} 條客戶訊息`);
    notificationData.append('💚 建議', '請透過 LINE 官方帳號 @288dyysc 或撥打 0911-177-619 回覆客戶');

    // 發送到 FormSubmit
    fetch('https://formsubmit.co/ajax/a0911177619@yahoo.com.tw', {
        method: 'POST',
        body: notificationData
    }).then(response => {
        console.log('✅ 即時通知已發送');
    }).catch(error => {
        console.error('❌ 即時通知發送失敗:', error);
    });
}

// 發送對話記錄到後端（Email）
function sendConversationToBackend() {
    // 準備要發送的資料
    const chatData = new FormData();
    chatData.append('_to', 'a0911177619@yahoo.com.tw');
    chatData.append('_subject', `💬 秒估車客服對話記錄 - ${conversationHistory.sessionId}`);
    chatData.append('_template', 'table');
    chatData.append('Session ID', conversationHistory.sessionId);
    chatData.append('開始時間', conversationHistory.startTime);
    chatData.append('訊息數量', conversationHistory.messages.length);

    // 組合對話內容
    let conversationText = '';
    conversationHistory.messages.forEach((msg, index) => {
        const senderName = msg.sender === 'user' ? '客戶' : '客服';
        conversationText += `\n[${msg.timestamp}] ${senderName}：${msg.message}\n`;
    });

    chatData.append('對話內容', conversationText);

    // 發送到 FormSubmit
    fetch('https://formsubmit.co/ajax/a0911177619@yahoo.com.tw', {
        method: 'POST',
        body: chatData
    }).then(response => {
        console.log('✅ 對話記錄已發送到 Email');
    }).catch(error => {
        console.error('❌ 對話記錄發送失敗:', error);
    });
}

// 導出對話記錄為文字檔
function exportConversation() {
    let text = `秒估車客服對話記錄\n`;
    text += `Session ID: ${conversationHistory.sessionId}\n`;
    text += `開始時間: ${conversationHistory.startTime}\n`;
    text += `訊息數量: ${conversationHistory.messages.length}\n`;
    text += `\n${'='.repeat(50)}\n\n`;

    conversationHistory.messages.forEach((msg, index) => {
        const senderName = msg.sender === 'user' ? '客戶' : '客服';
        text += `[${msg.timestamp}] ${senderName}：\n`;
        text += `${msg.message}\n\n`;
    });

    // 創建下載連結
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `對話記錄_${conversationHistory.sessionId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// 匯出函數供其他腳本使用
window.chatService = {
    notifyEstimation: notifyCarEstimation,
    exportConversation: exportConversation,
    getConversationHistory: () => conversationHistory
};
