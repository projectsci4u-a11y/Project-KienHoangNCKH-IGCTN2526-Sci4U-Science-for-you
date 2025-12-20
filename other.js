    // về home
    showPage('home');

    // onload: đặt mặc định selectedClass thành 7 để hộp thoại bài học có thể mở mượt như sunsilk
    selectedClass = 7;

    // đảm bảo trình trợ giúp ẩn cửac sổ bật lên sử dụng lại cùng một chức năng
    function _getPopupElement(){
      if(typeof popup !== 'undefined' && popup) return popup;
      return document.getElementById('popup');
    }
    function hidePopup(){
      const p = _getPopupElement();
      if(p){
        p.style.display = 'none';
        p.className = '';
        p.innerText = '';
        p.innerHTML = '';
      }
      lockSelect = false;
    }

    // đóng cửa sổ bật lên khi nhấn Esc
    document.addEventListener('keydown', (e)=> {
      if(e.key === 'Escape'){
        hidePopup();
      }
    });
    
    // nút cuộn trang
    const btn = document.getElementById("scrollTopBtn");
    window.addEventListener("scroll", () => {
      btn.style.display = window.scrollY > 200 ? "block" : "none";
    });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // setting: improve persistence and initialization
    function changeTheme() {
      const theme = document.getElementById("theme-select").value;
      document.body.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }

    function changeFontSize() {
      const size = document.getElementById("font-size-select").value;
      document.documentElement.style.fontSize = size + "px";
      localStorage.setItem("fontSize", size);
    }

    function changeLanguage() {
      const lang = document.getElementById("lang-select").value;
      localStorage.setItem("lang", lang);
      alert("Ngôn ngữ: " + lang + " (sắp cập nhật)");
    }

    function toggleSound() {
      const el = document.getElementById("sound-toggle");
      localStorage.setItem("sound", el.checked);
    }

    function toggleWrongSound() {
      const el = document.getElementById("wrong-sound-toggle");
      localStorage.setItem("wrongSound", el.checked);
    }

    function toggleNotify() {
      const el = document.getElementById("notify-toggle");
      localStorage.setItem("notify", el.checked);
    }

    function toggleDailyReminder() {
      const el = document.getElementById("daily-reminder-toggle");
      localStorage.setItem("dailyReminder", el.checked);
    }

    function togglePrivacyMode() {
      const el = document.getElementById("privacy-mode-toggle");
      if(el) localStorage.setItem("privacyMode", el.checked);
    }

    function clearLocalData() {
      localStorage.clear();
      alert("Đã xóa toàn bộ dữ liệu!");
      // re-apply defaults to UI
      initSettings();
    }

    // helpers
    function _getBool(key, def = false) {
      const v = localStorage.getItem(key);
      if (v === null) return def;
      return v === 'true' || v === true;
    }

    // initialize settings UI from localStorage
    function initSettings() {
      // theme
      const savedTheme = localStorage.getItem("theme") || 'light';
      const themeSelect = document.getElementById('theme-select');
      if(themeSelect) themeSelect.value = savedTheme;
      document.body.classList.toggle('dark', savedTheme === 'dark');

      // font size
      const savedSize = localStorage.getItem('fontSize') || '16';
      const fontSelect = document.getElementById('font-size-select');
      if(fontSelect) fontSelect.value = savedSize;
      document.documentElement.style.fontSize = savedSize + 'px';

      // language
      const savedLang = localStorage.getItem('lang') || 'vi';
      const langSelect = document.getElementById('lang-select');
      if(langSelect) langSelect.value = savedLang;

      // checkboxes
      const soundEl = document.getElementById('sound-toggle');
      if(soundEl) soundEl.checked = _getBool('sound', true);
      const wrongSoundEl = document.getElementById('wrong-sound-toggle');
      if(wrongSoundEl) wrongSoundEl.checked = _getBool('wrongSound', true);
      const notifyEl = document.getElementById('notify-toggle');
      if(notifyEl) notifyEl.checked = _getBool('notify', false);
      const dailyEl = document.getElementById('daily-reminder-toggle');
      if(dailyEl) dailyEl.checked = _getBool('dailyReminder', false);
    }

    // ensure initialization after DOM ready
    document.addEventListener('DOMContentLoaded', initSettings);



