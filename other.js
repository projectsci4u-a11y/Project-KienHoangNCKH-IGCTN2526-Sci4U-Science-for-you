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
    



