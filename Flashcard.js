    const ELEMENT_PAIRS = [
      {sym:"H", name:"Hydrogen"},
      {sym:"He", name:"Helium"},
      {sym:"Li", name:"Lithium"},
      {sym:"Be", name:"Beryllium"},
      {sym:"B", name:"Boron"},
      {sym:"C", name:"Carbon"},
      {sym:"N", name:"Nitrogen"},
      {sym:"O", name:"Oxygen"},
      {sym:"F", name:"Fluorine"},
      {sym:"Ne", name:"Neon"},
      {sym:"Na", name:"Sodium"},
      {sym:"Mg", name:"Magnesium"},
      {sym:"Al", name:"Aluminum"},
      {sym:"Si", name:"Silicon"},
      {sym:"P", name:"Phosphorus"},
      {sym:"S", name:"Sulfur"},
      {sym:"Cl", name:"Chlorine"},
      {sym:"Ar", name:"Argon"},
      {sym:"K", name:"Potassium"},
      {sym:"Ca", name:"Calcium"},
      {sym:"Fe", name:"Iron"},
      {sym:"Cu", name:"Copper"},
      {sym:"Zn", name:"Zinc"},
      {sym:"Ag", name:"Silver"},
      {sym:"Au", name:"Gold"},
      {sym:"Pb", name:"Lead"},
      {sym:"Sn", name:"Tin"},
      {sym:"Hg", name:"Mercury"},
      {sym:"I", name:"Iodine"},
      {sym:"Mn", name:"Manganese"}
    ];

    // thời gian flash
    let flashState = {
      cards: [],
      flipped: [],
      matchedCount: 0,
      score: 0,
      lock: false,
      startTime: null,
      timerInterval: null
    };

    function initFlashcards(){
      // reset state
      clearFlashTimer();
      flashState.flipped = [];
      flashState.matchedCount = 0;
      flashState.score = 0;
      flashState.lock = false;
      flashState.startTime = Date.now();

      // UI refs
      const box = document.getElementById("flash-box");
      const scoreEl = document.getElementById("flash-score");
      const timerEl = document.getElementById("flash-timer");
      box.innerHTML = "";
      scoreEl.textContent = "Điểm: 0/10";
      timerEl.textContent = "Thời gian: 0s";

      // chọn đại 10 thẻ từ 20 thẻ data
      const shuffledPairs = shuffle(ELEMENT_PAIRS).slice(0,10);

      // tạo 20 thẻ ngẫu nhiên
      const cards = [];
      shuffledPairs.forEach((p, idx) => {
        cards.push({ pairId: idx, type: 'sym', val: p.sym });
        cards.push({ pairId: idx, type: 'name', val: p.name });
      });

      // 3) xáo 20 thẻ
      flashState.cards = shuffle(cards);

      // 4) render khung cho 20 thẻ
      flashState.cards.forEach((c, i) => {
        const tile = document.createElement('div');
        tile.className = 'flip-card';
        tile.dataset.pair = String(c.pairId);
        tile.dataset.type = c.type;
        tile.dataset.index = String(i);

        tile.innerHTML = `
          <div class="flip-inner">
            <div class="flip-face flip-front">?</div>
            <div class="flip-face flip-back">${escapeHtml(c.val)}</div>
          </div>
        `;

        // trình xử lý chuột
        tile.addEventListener('click', ()=> onFlashTileClick(tile));

        box.appendChild(tile);
      });

      // đắt đầu đồng hồi
      flashState.startTime = Date.now();
      flashState.timerInterval = setInterval(()=> {
        const s = Math.floor((Date.now() - flashState.startTime)/1000);
        document.getElementById('flash-timer').textContent = `Thời gian: ${s}s`;
      }, 1000);
    }

    function clearFlashTimer(){
      if(flashState.timerInterval) clearInterval(flashState.timerInterval);
      flashState.timerInterval = null;
      document.getElementById('flash-timer').textContent = 'Thời gian: 0s';
    }

    function onFlashTileClick(tile){
      if(flashState.lock) return;
      if(tile.classList.contains('matched')) return;
      // nếu đã lật (cùng ô), hãy bỏ qua
      if(tile.classList.contains('is-flipped')) return;

      // cho lật
      tile.classList.add('is-flipped');
      flashState.flipped.push(tile);

      // nếu lật 2 cái thì check
      if(flashState.flipped.length === 2){
        flashState.lock = true;
        const [a,b] = flashState.flipped;
        const pairA = a.dataset.pair;
        const pairB = b.dataset.pair;
        const typeA = a.dataset.type;
        const typeB = b.dataset.type;

        // là khớp nếu cùng một cặp id và kiểu khác nhau (một sym, một tên)
        const isMatch = (pairA === pairB) && (typeA !== typeB);

        if(isMatch){
          // đánh dấu khớp: tick vào cả hai, tăng điểm
          setTimeout(()=> {
            a.classList.add('matched');
            b.classList.add('matched');
            flashState.matchedCount += 1;
            flashState.score += 1;
            document.getElementById('flash-score').textContent = `Điểm: ${flashState.score}/10`;
            // xóa mảng bị lật và mở khóa sau 200ms
            flashState.flipped = [];
            setTimeout(()=> {
              flashState.lock = false;
              // kiểm tra kết thúc chưa
              if(flashState.matchedCount >= 10){
                onFlashComplete();
              }
            }, 200);
          }, 150); // độ trễ nhỏ để người dùng nhìn thấy mặt sau trước khi chuyển sang màu xanh lá cây
        } else {
          // sai: đợi 0,5 giây rồi lật lại, sau đó đợi 0,2 giây để mở khóa
          setTimeout(()=> {
            a.classList.remove('is-flipped');
            b.classList.remove('is-flipped');
            setTimeout(()=> {
              flashState.flipped = [];
              flashState.lock = false;
            }, 200);
          }, 500);
        }
      }
    }

    function onFlashComplete(){
      clearFlashTimer();
      const totalSec = Math.floor((Date.now() - flashState.startTime)/1000);
      // hiện thông báo chúc mừng và nút chơi lại
      const p = (typeof popup !== 'undefined' && popup) ? popup : document.getElementById('popup');
      if(p){
        p.className = 'correct';
        p.innerHTML = `🎉 Chúc mừng! Bạn đã hoàn thành. <br>Thời gian: ${totalSec}s<br><br><button onclick="closeCompletionPopup()">Chơi lại</button>`;
        p.style.display = 'block';
      } else {
        alert(`Chúc mừng! Bạn đã hoàn thành. Thời gian: ${totalSec}s`);
      }
    }

    function closeCompletionPopup(){
      hidePopup();
      initFlashcards();
    }