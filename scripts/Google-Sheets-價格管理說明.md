# Google Sheets 價格管理說明

## 快速設定步驟

### 1. 建立 Google Sheets

1. 前往 [Google Sheets](https://sheets.google.com)
2. 建立新的試算表，命名為「秒估車價格資料庫」
3. 設定欄位格式如下：

| A 欄 | B 欄 | C 欄 |
|------|------|------|
| 品牌 | 車款 | 新車價格 |
| Toyota豐田 | Camry | 1250000 |
| Toyota豐田 | RAV4 | 1150000 |
| BMW | 320i | 2350000 |
| ... | ... | ... |

### 2. 發布為 CSV

1. 點擊「檔案」→「共用」→「發布到網路」
2. 選擇「整份文件」和「逗號分隔值 (.csv)」
3. 點擊「發布」
4. 複製產生的 URL

URL 格式範例：
```
https://docs.google.com/spreadsheets/d/e/2PACX-xxxxx/pub?output=csv
```

### 3. 設定 GitHub Secrets

1. 前往你的 GitHub Repository
2. 點擊「Settings」→「Secrets and variables」→「Actions」
3. 點擊「New repository secret」
4. 名稱輸入：`GOOGLE_SHEET_CSV_URL`
5. 值貼上你的 CSV URL

---

## 價格更新方式

### 方式一：Google Sheets (推薦)

- 直接在 Google Sheets 更新價格
- 每月 1 日 GitHub Actions 會自動讀取並更新

**優點：**
- 簡單易用，不需要程式知識
- 可以多人協作
- 即時更新價格

### 方式二：自動計算

如果沒有設定 Google Sheets，系統會自動：
- 根據品牌保值係數調整價格
- 模擬市場波動 (±2%)
- 考慮季節性因素

---

## 品牌代碼對照表

請使用以下品牌名稱格式：

| 品牌代碼 | 品牌名稱 |
|----------|----------|
| Toyota豐田 | 豐田 |
| Honda本田 | 本田 |
| Nissan日產 | 日產 |
| Mazda馬自達 | 馬自達 |
| Mercedes-Benz賓士 | 賓士 |
| BMW | BMW |
| Audi奧迪 | 奧迪 |
| Lexus凌志 | 凌志 |
| Porsche保時捷 | 保時捷 |
| Volkswagen福斯 | 福斯 |
| Tesla特斯拉 | 特斯拉 |
| Volvo富豪 | 富豪 |
| Ford福特 | 福特 |
| Hyundai現代 | 現代 |
| Kia起亞 | 起亞 |

---

## 常見問題

### Q: 價格沒有更新？

1. 確認 Google Sheets 已發布為公開
2. 確認 GitHub Secrets 設定正確
3. 檢查 GitHub Actions 執行紀錄

### Q: 如何手動觸發更新？

1. 前往 GitHub → Actions
2. 選擇「每月自動更新車輛價格」
3. 點擊「Run workflow」

### Q: 如何查看更新紀錄？

1. 前往 GitHub → Actions
2. 查看最近的執行紀錄
3. 下載 Artifacts 查看詳細日誌
