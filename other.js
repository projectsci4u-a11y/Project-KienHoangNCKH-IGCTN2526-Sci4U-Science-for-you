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

    // setting 
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
      alert("Ngôn ngữ: " + lang + " (sắp cập nhật)");
    }
    function toggleSound() {
      localStorage.setItem("sound", document.getElementById("sound-toggle").checked);
    }
    
    function toggleWrongSound() {
      localStorage.setItem("wrongSound", document.getElementById("wrong-sound-toggle").checked);
    }
    function clearLocalData() {
      localStorage.clear();
      alert("Đã xóa toàn bộ dữ liệu!")
    }
    function togglePrivacyMode() {
      localStorage.setItem("privacyMode", document.getElementById("privacy-mode-toggle").checked);
    }



