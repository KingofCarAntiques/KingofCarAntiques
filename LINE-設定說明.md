# LINE 官方帳號設定說明

## 📱 如何申請 LINE 官方帳號

### 步驟 1：註冊 LINE 官方帳號

1. 前往 LINE 官方帳號網站：https://tw.linebiz.com/
2. 點擊「開始使用」或「免費開設帳號」
3. 使用您的 LINE 帳號登入
4. 填寫基本資料：
   - 帳號名稱：秒估車
   - 產業類別：汽車相關服務
   - 帳號介紹：專業快速的汽車估價服務

### 步驟 2：取得 LINE ID

1. 登入 LINE Official Account Manager (https://manager.line.biz/)
2. 選擇您的官方帳號
3. 前往「設定」→「帳號設定」
4. 找到「基本ID」或「進階ID」
   - 基本 ID：由 LINE 自動產生（例如：@123abcde）
   - 進階 ID：可自訂名稱（需付費，例如：@miaoguche）

### 步驟 3：設定加入好友連結

您的 LINE 官方帳號連結格式為：
```
https://line.me/R/ti/p/@YOUR_LINE_ID
```

例如：
- 如果您的 LINE ID 是 @miaoguche
- 完整連結就是：https://line.me/R/ti/p/@miaoguche

### 步驟 4：更新網站設定

開啟 `script.js` 文件，找到第 4 行：

```javascript
const LINE_OFFICIAL_URL = 'https://line.me/R/ti/p/@YOUR_LINE_ID';
```

將 `@YOUR_LINE_ID` 替換為您的實際 LINE ID：

```javascript
const LINE_OFFICIAL_URL = 'https://line.me/R/ti/p/@miaoguche';
```

---

## 🎨 進階設定（選用）

### 1. 設定自動回覆訊息

在 LINE Official Account Manager 中：
1. 前往「回應模式」→「自動回應訊息」
2. 設定歡迎訊息：
   ```
   您好！歡迎來到秒估車 🚗

   我們提供：
   ✅ 免費線上估價
   ✅ 專人到府鑑定
   ✅ 當天完成交易

   請問您需要什麼協助呢？
   ```

### 2. 設定圖文選單

建立圖文選單，讓用戶快速操作：
- 📋 線上估價
- 📞 聯絡專員
- 📍 門市位置
- 💰 最新優惠

### 3. 啟用 Messaging API（進階功能）

如需整合更複雜的自動回覆功能：
1. 在「設定」中啟用 Messaging API
2. 取得 Channel Access Token
3. 設定 Webhook URL
4. 開發自訂聊天機器人

---

## 🔧 測試 LINE 連結

### 方法 1：手機測試
1. 用手機開啟網站
2. 點擊「加入 LINE 諮詢」按鈕
3. 應該會自動開啟 LINE App 並顯示您的官方帳號

### 方法 2：電腦測試
1. 用電腦開啟網站
2. 點擊按鈕後會開啟新分頁
3. 顯示 LINE 官方帳號頁面和 QR Code

---

## 📊 LINE 官方帳號方案比較

### 免費方案
- ✅ 基本功能
- ✅ 每月 500 則免費訊息
- ✅ 自動回應訊息
- ❌ 無法自訂 ID

### 輕用量方案 (NT$ 800/月)
- ✅ 所有免費方案功能
- ✅ 每月 4,000 則訊息
- ✅ 可自訂 ID
- ✅ API 功能

### 中用量方案 (NT$ 4,000/月)
- ✅ 每月 30,000 則訊息
- ✅ 進階統計分析
- ✅ 優先客服支援

---

## 💡 使用建議

1. **初期建議**：先使用免費方案測試
2. **自訂 ID**：如預算允許，建議購買自訂 ID (@miaoguche) 更容易記憶
3. **圖文選單**：設定清楚的圖文選單可提升用戶體驗
4. **及時回應**：LINE 用戶期待快速回應，建議設定自動回應

---

## ❓ 常見問題

### Q: LINE ID 可以更改嗎？
A: 基本 ID 無法更改，但可以購買進階 ID 來自訂名稱。

### Q: 免費訊息用完怎麼辦？
A: 超過免費額度後，每則訊息約 NT$ 0.2-0.3，或升級付費方案。

### Q: 可以同時使用多個官方帳號嗎？
A: 可以，每個帳號獨立管理。

### Q: 如何追蹤 LINE 成效？
A: 在 LINE Official Account Manager 的「分析」功能中可查看詳細數據。

---

## 📞 需要協助？

如有任何問題，請聯絡：
- LINE 官方客服：https://help.line.me/
- LINE 商家中心：https://tw.linebiz.com/contact/

---

**提醒**：設定完成後，記得測試所有按鈕功能是否正常運作！
