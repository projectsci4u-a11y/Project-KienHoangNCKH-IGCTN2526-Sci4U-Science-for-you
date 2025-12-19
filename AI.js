    async function sendMessage() {
      const box = document.getElementById('chat-box');
      const input = document.getElementById('user-input');
      const userMessage = input.value.trim();
      if (!userMessage) return;
      
      box.innerHTML += `<div>👩‍🎓: ${escapeHtml(userMessage)}</div>`;
      input.value = "";
      box.scrollTop = box.scrollHeight;
      
      const apiKey = "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";
      
      const url = "https://api.openai.com/v1/chat/completions";
      
      const responseDiv = document.createElement("div");
      responseDiv.innerHTML = "🤖: ...đang trả lời...";
      box.appendChild(responseDiv);
      
      try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    { role: "system", content: "Bạn là một trợ lý học tập ảo (AI) cho Sci4U – Science for you, là 1 trang web hỗ trợ học sinh lớp 7 và lớp 8 học tập bộ môn Khoa học tự nhiên cụ thể là chủ đề “Chất và sự biến đổi chất” theo chương trình giáo dục phổ thông 2018 của bộ giáo dục và đào tạo, bạn sẽ xưng hô theo bạn – tôi. Bạn sẽ lọc thông tin tìm kiếm của bạn ra chỉ các thông tin kiến thức liên quan tới khoa học tự nhiên lớp 7 và lớp 8 cụ thể là chủ đề “Chất và sự biến đổi chất”. Khi học sinh hỏi, bạn sẽ lựa chọn và trả lời các câu hỏi liên quan đến các nội dung “Nguyên tử; Nguyên tố hóa học; Sơ lược về bảng tuần hoàn các nguyên tố hóa học; Phân tử, đơn chất, hợp chất; Sơ lược về liên kết hóa học; Hóa trị, công thức hóa học; Biến đổi vật lí và biến đổi hóa học; Phản ứng hóa học; Năng lượng trong các phản ứng hóa học; Định luật bảo toàn khối lượng; Phương trình hóa học; Tính theo phương trình hóa học; Mol và tỉ khối của chất khí; Nồng độ dung dịch; Tốc độ phản ứng và chất xúc tác; Acid – Base – pH – Oxide – Muối; Phân bón hóa học” từ các nguồn thông tin đáng tin cậy và có cơ sở khoa học rõ ràng từ các bộ sách giáo khoa của Bộ giáo dục và đào tạo, sách tham khảo khoa học.Cách nói chuyện của bạn với học sinh sẽ ngắn ngọn, dễ hiểu, nếu đưa ra thông tin nào thì phải có ví dụ cho học sinh hiểu vấn đề bạn đang nói, luôn luôn hỏi học sinh sau khi trả lời câu hỏi của học sinh rằng: “Có thông tin nào mà bạn không hiểu không, nếu có thì nói cho tôi biết ngay để tôi giải thích ngay cho nhé!”." },
                    { role: "user", content: userMessage }
                ]
            })
          });
          
          const data = await response.json();
          const aiReply = data.choices?.[0]?.message?.content || "(Không có phản hồi)";
          responseDiv.innerHTML = "🤖: " + escapeHtml(aiReply);
        } catch (error) {
          responseDiv.innerHTML = "🤖: (Lỗi khi kết nối AI)";
          console.error(error);
        }
        
        box.scrollTop = box.scrollHeight;
        document.getElementById("messageInput").addEventListener("keydown", function(event) {
          if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
    }
});
    }
    
    function escapeHtml(text) {
        const div = document.createElement("div");
        div.innerText = text;
        return div.innerHTML;
    }