# 🚗 秒估車 - 快速汽車估價系統

> **專業收購各大品牌豪華車款 | 每月自動更新權威數據**

[![Auto Update](https://img.shields.io/badge/Auto%20Update-Monthly-success)](https://github.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Data Source](https://img.shields.io/badge/Data-8891%20%7C%20行將拍賣-orange)](https://auto.8891.com.tw/)

---

## 📖 專案簡介

**秒估車** 是一個現代化的線上汽車估價系統，提供：

- ✅ 涵蓋 **39 個汽車品牌**、**330+ 車款**
- ✅ 每月自動更新價格（8891、行將拍賣等權威數據）
- ✅ LINE 官方帳號即時諮詢 (@288dyysc)
- ✅ 響應式設計，手機/平板/電腦完美適配
- ✅ 線上客服系統

---

## 🌟 主要功能

### 1. 快速估價
- 選擇廠牌車款
- 輸入出廠年月
- 輸入行駛里程
- 秒速獲得估價範圍

### 2. 自動價格更新
- 每月1日自動執行
- 爬取權威數據來源
- 無需人工維護

### 3. LINE 整合
- 直接連接 LINE 官方帳號
- 預填估價資訊
- 快速諮詢真人客服

### 4. 線上客服
- 智能快速回覆
- 常見問題解答
- 即時溝通

---

## 🚀 快速開始

### 線上訪問

**網站地址**: [www.秒估車.com.tw](https://www.秒估車.com.tw)
（或 GitHub Pages URL）

### 本地運行

```bash
# 1. 克隆專案
git clone https://github.com/您的帳號/miaoguche.git

# 2. 進入目錄
cd miaoguche

# 3. 直接開啟網頁
# 用瀏覽器打開 car-valuation.html
```

---

## 📁 專案結構

```
秒估車/
├── car-valuation.html      # 主頁面
├── style.css               # 樣式表
├── car-data.js             # 車款價格資料庫（自動更新）
├── script.js               # 主要邏輯
├── chat.js                 # 客服系統
├── .github/
│   └── workflows/
│       └── update-prices.yml   # GitHub Actions 自動更新
├── scripts/
│   ├── package.json        # Node.js 依賴
│   ├── scraper.js          # 價格爬蟲
│   └── update-car-data.js  # 資料庫更新腳本
├── images/                 # 汽車照片
│   └── README.txt
└── 說明文件/
    ├── 自動更新部署教學.md
    ├── 價格更新說明.md
    ├── LINE-設定說明.md
    └── 如何添加汽車照片.md
```

---

## 🔧 技術架構

### 前端
- **HTML5** - 網頁結構
- **CSS3** - 視覺設計（漸層、動畫）
- **Vanilla JavaScript** - 互動邏輯

### 自動化
- **GitHub Actions** - 定時任務執行
- **Node.js** - 爬蟲與資料處理
- **Puppeteer** - 網頁爬蟲
- **Cheerio** - HTML 解析

### 託管
- **GitHub Pages** - 免費網站託管
- **CDN** - 全球加速訪問

---

## 📊 數據來源

本系統價格參考以下權威來源：

1. **[8891汽車網](https://auto.8891.com.tw/)** - 市場行情價
2. **[行將汽車拍賣](https://www.sinjang.com.tw/)** - 實際拍賣成交價
3. **市場行情** - 綜合車商收購價

**更新頻率**: 每月1日自動更新
**最後更新**: 2025年12月

---

## 🛠️ 部署指南

### 一鍵部署到 GitHub Pages

詳細步驟請參考：[自動更新部署教學.md](./自動更新部署教學.md)

**簡易步驟：**

1. Fork 本專案
2. 啟用 GitHub Pages
3. 啟用 GitHub Actions
4. ✅ 完成！網站自動運作

---

## 🔄 自動更新說明

系統採用 **GitHub Actions** 實現完全自動化：

```
每月1日凌晨2點（台灣時間）
    ↓
自動執行爬蟲程式
    ↓
爬取 8891、行將拍賣等數據
    ↓
更新 car-data.js
    ↓
自動 commit 並推送
    ↓
GitHub Pages 自動部署
    ↓
✅ 用戶看到最新價格
```

**完全免費，無需人工干預！**

---

## 📱 LINE 官方帳號

**LINE ID**: @288dyysc

掃描 QR Code 或搜尋 ID 加入好友：

- 即時諮詢
- 專人服務
- 快速估價

---

## 🎨 客製化

### 更換汽車照片

將照片放入 `images/` 資料夾：
- ferrari.jpg
- mclaren.jpg
- porsche.jpg
- mercedes.jpg
- bmw.jpg

詳見：[如何添加汽車照片.md](./如何添加汽車照片.md)

### 修改 LINE ID

編輯 `script.js`:
```javascript
const LINE_OFFICIAL_URL = 'https://line.me/R/ti/p/@您的LINE_ID';
```

---

## 📈 統計數據

- **支援品牌**: 39 個
- **支援車款**: 330+ 款
- **價格更新**: 每月自動
- **託管費用**: NT$0（完全免費）

---

## 🤝 貢獻

歡迎貢獻！如果您想：

- 回報 Bug
- 建議新功能
- 改進程式碼

請開啟 [Issue](https://github.com/您的帳號/miaoguche/issues) 或提交 Pull Request。

---

## 📄 授權

本專案採用 [MIT License](LICENSE)

---

## ⚠️ 免責聲明

- 本估價結果僅供參考
- 實際價格請以現場鑑定為準
- 價格數據來源為公開市場行情
- 不保證價格絕對準確性

---

## 📞 聯絡我們

- **LINE 官方帳號**: @288dyysc
- **網站**: www.秒估車.com.tw
- **Email**: contact@miaoguche.com.tw（如有）

---

## 🙏 致謝

感謝以下數據來源提供市場行情：

- 8891汽車網
- 行將汽車拍賣
- SUM優質車商聯盟
- 好車網

---

**© 2025 秒估車 | Made with ❤️ in Taiwan**
