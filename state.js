/* ----------------------
       State
    -----------------------*/
    let currentMode = null; // 'hoc' | 'quiz' | 'flash'
    let selectedClass = null;
    let selectedLesson = null;
    let numQuestionsChoice = 10;

    // thời gian chạy quiz
    let quizIndex = 0;
    let score = 0;
    let quizList = [];
    let lockSelect = false;
    let quizStartTimestamp = null;
    let perQuestionTimer = null;
    const popup = document.getElementById('popup');

    // local storage key
    const STORAGE_KEY = 'sci4u_quiz_history_v1';

    /* ----------------------
       Điều khiển hỗ trợ UI
    -----------------------*/
    function showPage(id,el){
      document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      document.querySelectorAll('nav a').forEach(a=>a.classList.remove('active'));
      if(el) el.classList.add('active');

      // Nếu là flashcards thì khởi tạo nội dung
      if (id === 'flashcards') {
         initFlashcards();
      }
      else if (id==="periodic"){
        document.getElementById("periodic-content").innerHTML=showPreiodic();
        
      }
    }

    /* ----------------------
       Modals ( học/ quiz )
    -----------------------*/
    function openHocModal(){ document.getElementById("hoc-modal").style.display = "flex"; }
    function closeHocModal(){ document.getElementById("hoc-modal").style.display = "none"; }
    function openQuizModal(){ document.getElementById("quiz-modal").style.display = "flex"; }
    function closeQuizModal(){ document.getElementById("quiz-modal").style.display = "none"; }

    function chooseClassFor(mode,cls){
      currentMode = mode;
      selectedClass = cls;
      if(mode === 'hoc'){ closeHocModal(); startHoc(cls); }
      else if(mode === 'quiz'){ closeQuizModal(); showLessonModalForClass(cls); }
    }