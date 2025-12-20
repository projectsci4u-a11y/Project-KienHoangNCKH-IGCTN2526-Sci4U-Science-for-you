    // escape HTML to avoid injection
    function escapeHtml(text) {
      const div = document.createElement('div');
      div.innerText = text;
      return div.innerHTML;
    }

    // format time for message meta (HH:MM:SS)
    function formatTime(date) {
      const h = String(date.getHours()).padStart(2, '0');
      const m = String(date.getMinutes()).padStart(2, '0');
      const s = String(date.getSeconds()).padStart(2, '0');
      return `${h}:${m}:${s}`;
    }

    // persistent storage helpers
    const CHAT_HISTORY_KEY = 'sci4u_chat_history_v1';
    function saveChatHistory(history) {
      try { localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(history || [])); } catch(e) { console.error('saveChatHistory', e); }
    }
    function loadChatHistory() {
      try { return JSON.parse(localStorage.getItem(CHAT_HISTORY_KEY) || '[]'); } catch(e){ return []; }
    }

    // render a single message object {role:'user'|'ai', text, time}
    function renderMessage(msg, opts = {}) {
      const box = document.getElementById('chat-box');
      if (!box) return;
      const row = document.createElement('div');
      row.className = `chat-row ${msg.role === 'user' ? 'user' : 'ai'}`;

      const bubble = document.createElement('div');
      bubble.className = `chat-bubble ${msg.role === 'user' ? 'user' : 'ai'}`;
      // show typing indicator for AI placeholder
      if (msg.text === '...đang trả lời...') {
        bubble.classList.add('typing');
        bubble.innerHTML = '<span class="dots"><span></span><span></span><span></span></span>';
      } else {
        // escape HTML first
        let content = escapeHtml(msg.text || '');
        
        // process LaTeX for AI replies
        if (msg.role === 'ai') {
          // convert LaTeX arrows and common commands to unicode/HTML
          content = content.replace(/\\rightarrow/g, '→');
          content = content.replace(/\\leftarrow/g, '←');
          content = content.replace(/\\leftrightarrow/g, '↔');
        }
        
        bubble.innerHTML = content;
        
        // render KaTeX for formulas with underscores (async, after DOM ready)
        if (msg.role === 'ai' && typeof katex !== 'undefined') {
          setTimeout(() => {
            try {
              // find all text nodes and process them for chemical formulas like H_2O, C_2H_4, etc.
              const walker = document.createTreeWalker(bubble, NodeFilter.SHOW_TEXT, null);
              const nodes = [];
              let textNode;
              while (textNode = walker.nextNode()) {
                nodes.push(textNode);
              }
              
              nodes.forEach(node => {
                const text = node.nodeValue;
                // match chemical formulas/subscripts: patterns like C_2H_4, H_2SO_4, etc.
                if (text && text.includes('_')) {
                  const regex = /([A-Za-z0-9()]+_[0-9]+(?:[A-Za-z0-9_()]+)*)/g;
                  if (regex.test(text)) {
                    const fragment = document.createDocumentFragment();
                    let lastIdx = 0;
                    text.replace(regex, (match, ...args) => {
                      const idx = args[args.length - 2];
                      if (idx > lastIdx) {
                        fragment.appendChild(document.createTextNode(text.substring(lastIdx, idx)));
                      }
                      const mathSpan = document.createElement('span');
                      mathSpan.style.display = 'inline-math';
                      try {
                        katex.render(match, mathSpan, { throwOnError: false, displayMode: false });
                        fragment.appendChild(mathSpan);
                      } catch(e) {
                        fragment.appendChild(document.createTextNode(match));
                      }
                      lastIdx = idx + match.length;
                    });
                    if (lastIdx < text.length) {
                      fragment.appendChild(document.createTextNode(text.substring(lastIdx)));
                    }
                    node.parentNode.replaceChild(fragment, node);
                  }
                }
              });
            } catch(e) { /* silent fail */ }
          }, 10);
        }
      }

      // meta
      const meta = document.createElement('div');
      meta.className = 'chat-meta';
      meta.innerText = msg.time || formatTime(new Date());

      bubble.appendChild(meta);

      // only render avatar for AI messages (remove user avatar as requested)
      if (msg.role === 'ai') {
        const avatar = document.createElement('div');
        avatar.className = 'chat-avatar ai';
        avatar.innerText = 'AI';
        row.appendChild(avatar);
        row.appendChild(bubble);
      } else {
        // user: no avatar, append bubble only
        row.appendChild(bubble);
      }

      box.appendChild(row);
      if (!opts.preventScroll) box.scrollTop = box.scrollHeight;
      return row;
    }

    async function sendMessage() {
      const box = document.getElementById('chat-box');
      const input = document.getElementById('user-input');
      const sendBtn = document.getElementById('sendButton');
      const userMessage = input && input.value ? input.value.trim() : '';
      if (!userMessage) return;

      // append user message and persist
      const userMsgObj = { role: 'user', text: userMessage, time: formatTime(new Date()) };
      renderMessage(userMsgObj);
      if (input) input.value = '';
      box.scrollTop = box.scrollHeight;

      // create AI loading placeholder and persist later
      const aiPlaceholder = { role: 'ai', text: '...đang trả lời...', time: formatTime(new Date()) };
      const aiRow = renderMessage(aiPlaceholder, { preventScroll: false });
      box.scrollTop = box.scrollHeight;
      if (sendBtn) { sendBtn.disabled = true; sendBtn.classList.add('sending'); }

      // keep hardcoded API key as requested by user
      const apiKey = "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";
      const url = 'https://api.openai.com/v1/chat/completions';

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
              { role: 'system', content: 'Bạn là một trợ lý học tập ảo (AI) cho Sci4U – Science for you, là 1 trang web hỗ trợ học sinh lớp 7 và lớp 8 học tập bộ môn Khoa học tự nhiên cụ thể là chủ đề “Chất và sự biến đổi chất” theo chương trình giáo dục phổ thông 2018 của bộ giáo dục và đào tạo, bạn sẽ xưng hô theo bạn – tôi. Bạn sẽ lọc thông tin tìm kiếm của bạn ra chỉ các thông tin kiến thức liên quan tới khoa học tự nhiên lớp 7 và lớp 8 cụ thể là chủ đề “Chất và sự biến đổi chất”. Khi học sinh hỏi, bạn sẽ lựa chọn và trả lời các câu hỏi liên quan đến các nội dung “Nguyên tử; Nguyên tố hóa học; Sơ lược về bảng tuần hoàn các nguyên tố hóa học; Phân tử, đơn chất, hợp chất; Sơ lược về liên kết hóa học; Hóa trị, công thức hóa học; Biến đổi vật lí và biến đổi hóa học; Phản ứng hóa học; Năng lượng trong các phản ứng hóa học; Định luật bảo toàn khối lượng; Phương trình hóa học; Tính theo phương trình hóa học; Mol và tỉ khối của chất khí; Nồng độ dung dịch; Tốc độ phản ứng và chất xúc tác; Acid – Base – pH – Oxide – Muối; Phân bón hóa học” từ các nguồn thông tin đáng tin cậy và có cơ sở khoa học rõ ràng từ các bộ sách giáo khoa của Bộ giáo dục và đào tạo, sách tham khảo khoa học.Cách nói chuyện của bạn với học sinh sẽ ngắn ngọn, dễ hiểu, nếu đưa ra thông tin nào thì phải có ví dụ cho học sinh hiểu vấn đề bạn đang nói, luôn luôn hỏi học sinh sau khi trả lời câu hỏi của học sinh rằng: “Có thông tin nào mà bạn không hiểu không, nếu có thì nói cho tôi biết ngay để tôi giải thích ngay cho nhé!”.' },
              { role: 'user', content: userMessage }
            ]
          })
        });

        if (!response.ok) {
          let errText = response.statusText || '';
          try { errText = await response.text(); } catch(e){}
          // replace placeholder with error
          aiPlaceholder.text = `(Lỗi API ${response.status}) ${errText}`;
          // re-render box: remove last aiRow and render error
          aiRow.remove();
          renderMessage({ role:'ai', text: aiPlaceholder.text, time: formatTime(new Date()) });
          // persist
          const hist = loadChatHistory(); hist.push(userMsgObj); hist.push({ role:'ai', text: aiPlaceholder.text, time: formatTime(new Date()) }); saveChatHistory(hist);
          return;
        }

        let data;
        try { data = await response.json(); } catch (e) { data = null; }
        const aiReply = data?.choices?.[0]?.message?.content || '(Không có phản hồi)';
        // replace placeholder row
        aiRow.remove();
        const aiMsgObj = { role: 'ai', text: aiReply, time: formatTime(new Date()) };
        renderMessage(aiMsgObj);
        // persist conversation
        const hist = loadChatHistory(); hist.push(userMsgObj); hist.push(aiMsgObj); saveChatHistory(hist);
      } catch (error) {
        const errText = `(Lỗi khi kết nối AI) ${error?.message || ''}`;
        aiRow.remove();
        renderMessage({ role:'ai', text: errText, time: formatTime(new Date()) });
        const hist2 = loadChatHistory(); hist2.push(userMsgObj); hist2.push({ role:'ai', text: errText, time: formatTime(new Date()) }); saveChatHistory(hist2);
        console.error(error);
      } finally {
        if (sendBtn) { sendBtn.disabled = false; sendBtn.classList.remove('sending'); }
        box.scrollTop = box.scrollHeight;
      }
    }

    // allow clearing stored chat
    function clearChatHistory() {
      try { localStorage.removeItem(CHAT_HISTORY_KEY); } catch(e){}
      const box = document.getElementById('chat-box'); if (box) box.innerHTML = '';
    }

    // wire Enter key to send and load stored history on DOM ready
    document.addEventListener('DOMContentLoaded', function(){
      const input = document.getElementById('user-input');
      const sendBtn = document.getElementById('sendButton');
      if (input) {
        input.addEventListener('keydown', function(e){ if (e.key === 'Enter') { e.preventDefault(); sendMessage(); } });
      }
      if (sendBtn) sendBtn.addEventListener('click', function(){ /* already wired via onclick in HTML */ });

      // load history
      const history = loadChatHistory();
      if (history && history.length) {
        history.forEach(m=>renderMessage(m, { preventScroll: true }));
        const box = document.getElementById('chat-box'); if (box) box.scrollTop = box.scrollHeight;
      }
    });