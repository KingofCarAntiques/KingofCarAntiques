// ==================== 網站防複製功能 ====================
// 版權所有 © 2025 秒估車

(function() {
    'use strict';

    // 1. 禁用右鍵選單
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // 2. 禁用文字選取
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });

    // 3. 禁用拖曳
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });

    // 4. 禁用複製
    document.addEventListener('copy', function(e) {
        e.preventDefault();
        return false;
    });

    // 5. 禁用快捷鍵
    document.addEventListener('keydown', function(e) {
        // F12 開發者工具
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
        // Ctrl+U 查看原始碼
        if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
            e.preventDefault();
            return false;
        }
        // Ctrl+S 儲存
        if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
            e.preventDefault();
            return false;
        }
        // Ctrl+C 複製
        if (e.ctrlKey && (e.key === 'c' || e.key === 'C')) {
            e.preventDefault();
            return false;
        }
        // Ctrl+A 全選
        if (e.ctrlKey && (e.key === 'a' || e.key === 'A')) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I 開發者工具
        if (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+J 控制台
        if (e.ctrlKey && e.shiftKey && (e.key === 'j' || e.key === 'J')) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+C 檢查元素
        if (e.ctrlKey && e.shiftKey && (e.key === 'c' || e.key === 'C')) {
            e.preventDefault();
            return false;
        }
    });

    console.log('🔒 網站防複製功能已啟用');
})();
