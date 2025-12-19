    function startHoc(cls){
      showPage('hoc-tap', document.querySelector("nav a[onclick*='openHocModal()']"));
      const box = document.getElementById("hoc-content");
      box.innerHTML = "";
      if(cls === 7){
        box.innerHTML = `<h3>📘 Nội dung lớp 7</h3>
          <p>(Nội dung lớp 7)</p>
          <img src="Knowlegde/ND7/Bài 1.2 - Nguyên tử - Nguyên tố hóa học.png" style="max-width:70%;border-radius:12px;margin-top:15px;">
          <img src="Knowlegde/ND7/Bài 3-Sơ lược BTH.png" style="max-width:70%;border-radius:12px;margin-top:15px;">
          <img src="Knowlegde/ND7/Bài 4.5 - Pt-Dc-Hc-Lkhh (2).png" style="max-width:70%;border-radius:12px;margin-top:15px;">
          <img src="Knowlegde/ND7/Bài 4.5 - Pt-Dc-Hc-Lkhh (3).png" style="max-width:70%;border-radius:12px;margin-top:15px;">
          <img src="Knowlegde/ND7/Bài 4.5 - Pt-Dc-Hc-Lkhh.png" style="max-width:70%;border-radius:12px;margin-top:15px;">
          <img src="Knowlegde/ND7/Bài 6-Hóa trị, công thức hóa học (2).png" style="max-width:70%;border-radius:12px;margin-top:15px;">
          <img src="Knowlegde/ND7/Bài 6-Hóa trị, công thức hóa học.png" style="max-width:70%;border-radius:12px;margin-top:15px;">`;
      } else {
        box.innerHTML = `<h3>📘 Nội dung lớp 8</h3><p>(Nội dung lớp 8)</p>
        <img src="Knowlegde/ND8/Bài 1.2.png" style="max-width:70%;border-radius:12px;margin-top:15px;">
        <img src="Knowlegde/ND8/Bài 1.2 (2).png" style="max-width:70%;border-radius:12px;margin-top:15px;">
        <img src="Knowlegde/ND8/Bài 3-Định luật bảo toàn khối lượng.png" style="max-width:70%;border-radius:12px;margin-top:15px;">
        <img src="Knowlegde/ND8/Bài 4 - Mol và tỉ khối của chất khí.png" style="max-width:70%;border-radius:12px;margin-top:15px;">
        <img src="Knowlegde/ND8/Bài 5 - Tính theo phương trình hóa học.png" style="max-width:70%;border-radius:12px;margin-top:15px;">
        <img src="Knowlegde/ND8/Bài 6 - Nồng độ dung dịch.png" style="max-width:70%;border-radius:12px;margin-top:15px;">
        <img src="Knowlegde/ND8/Bài 7 - Tốc độ phản ứng và chất xúc tác.png" style="max-width:70%;border-radius:12px;margin-top:15px;">
        <img src="Knowlegde/ND8/Bài 8.9 - Acid - Base.png" style="max-width:70%;border-radius:12px;margin-top:15px;">
        <img src="Knowlegde/ND8/Bài 10.11 - Thang pH - Oxide.png" style="max-width:70%;border-radius:12px;margin-top:15px;">
        <img src="Knowlegde/ND8/Bài 12 - Muối.png" style="max-width:70%;border-radius:12px;margin-top:15px;">
        <img src="Knowlegde/ND8/Bài 13 - Phân bón hóa học.png" style="max-width:70%;border-radius:12px;margin-top:15px;">`;
      }
    }