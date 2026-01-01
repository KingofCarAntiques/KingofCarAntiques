# 📊 Google 試算表設定教學

## 🎯 功能說明
客戶填寫表單後，資料會自動儲存到您的 Google 試算表中，讓您隨時查看所有留單記錄。

---

## 📝 設定步驟

### 步驟 1：建立 Google 試算表

1. 開啟 [Google 試算表](https://sheets.google.com)
2. 點擊「**空白**」建立新試算表
3. 將試算表命名為：**秒估車-客戶資料**

### 步驟 2：設定表頭

在第一列輸入以下欄位名稱：

| A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|
| 提交時間 | 廠牌車款 | 出廠年月 | 車身顏色 | 行駛里程 | 車輛配備 | 聯絡人 | 電話 | Line ID | Email |

### 步驟 3：建立 Google Apps Script

1. 在試算表中，點擊上方選單：**擴充功能** → **Apps Script**
2. 刪除預設的程式碼
3. 複製以下程式碼並貼上：

```javascript
function doPost(e) {
  try {
    // 取得試算表
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // 解析傳入的資料
    var data = JSON.parse(e.postData.contents);

    // 準備要寫入的資料
    var row = [
      new Date(),                    // 提交時間
      data.carBrand || '',           // 廠牌車款
      data.manufactureDate || '',    // 出廠年月
      data.carColor || '',           // 車身顏色
      data.mileage || '',            // 行駛里程
      data.equipment || '',          // 車輛配備
      data.contactName || '',        // 聯絡人
      data.contactPhone || '',       // 電話
      data.lineId || '',             // Line ID
      data.contactEmail || ''        // Email
    ];

    // 新增資料到試算表
    sheet.appendRow(row);

    // 返回成功訊息
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': '資料已成功儲存'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch(error) {
    // 返回錯誤訊息
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. 點擊「**儲存專案**」圖示（💾）
5. 將專案命名為：**秒估車表單接收器**

### 步驟 4：部署 Web 應用程式

1. 點擊右上角「**部署**」→ 選擇「**新增部署作業**」
2. 在「選取類型」旁點擊齒輪圖示 ⚙️，選擇「**網頁應用程式**」
3. 設定如下：
   - **說明**：秒估車表單 v1
   - **執行身分**：我
   - **具有存取權的使用者**：**任何人**
4. 點擊「**部署**」
5. 會出現授權視窗，點擊「**授予存取權**」
6. 選擇您的 Google 帳號
7. 點擊「**進階**」→「**前往『秒估車表單接收器』(不安全)**」
8. 點擊「**允許**」

### 步驟 5：複製網址

部署完成後，會顯示「**網頁應用程式 URL**」，例如：
```
https://script.google.com/macros/s/AKfycbxxxxxxxxxxxxx/exec
```

**請複製這個網址！** 等等要貼到網站程式碼中。

---

## 🔔 設定 Email 通知（選用）

如果您想要每次有新資料時收到 Email 通知：

1. 在 Google 試算表中，點擊「**工具**」→「**通知規則**」
2. 選擇「**使用者提交表單時**」或「**進行任何變更時**」
3. 選擇通知頻率：**立即傳送電子郵件給我**
4. 點擊「**儲存**」

---

## ✅ 完成！

設定完成後，請將剛才複製的網址告訴我，我會幫您更新網站程式碼。

每次客戶填表後，資料會自動出現在您的 Google 試算表中！

---

## 📱 如何查看資料

- **電腦**：開啟 [Google 試算表](https://sheets.google.com)
- **手機**：下載 Google 試算表 App
- 隨時隨地都能查看客戶留單記錄！

---

## ⚠️ 常見問題

**Q: 資料沒有出現在試算表？**
A: 請檢查 Apps Script 部署時是否選擇「任何人」都可存取

**Q: 如何重新部署？**
A: 修改程式碼後，點「部署」→「管理部署作業」→ 點擊鉛筆圖示編輯 → 新增版本 → 部署

**Q: 可以看到誰填了表單嗎？**
A: 可以！試算表會記錄提交時間和所有資料

---

## 🎁 額外功能

### 自動計算統計
在試算表中可以使用公式統計：
- 今天收到幾筆留單
- 哪個廠牌最多人詢問
- 平均里程數是多少

### 匯出資料
可以隨時匯出成 Excel 或 PDF 檔案備份。

---

**設定完成後請告訴我您的 Web 應用程式網址，我會立即幫您整合到網站中！** 🚀
