
const sub = {
  "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄",
  "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉"
};

const sup = {
  "+": "⁺", "-": "⁻",
  "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴",
  "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹"
};
const periodicArr = [
  {
    name: "Hydrogen",
    sign: "H",
    sh:1,
    ntk:1,
    category: "Phi kim",
    state: "Khí",
    econfig: "1s²",
    meltingPoint: "-259.1°C",
    desc: "Hydro là một nguyên tố hóa học trong hệ thống tuần hoàn các nguyên tố với nguyên tử số bằng 1, nguyên tử khối bằng 1 u. Trước đây còn được gọi là khinh khí, hiện nay từ này ít được sử dụng. Sở dĩ được gọi là khinh khí là do hydro là nguyên tố nhẹ nhất và tồn tại ở thể khí, với trọng lượng nguyên tử 1,00794 amu."
  },
  {
    name: "Helium",
    sign: "He",
    sh:2,
    ntk:4,
    category: "Khí hiếm",
    state: "Khí",
    econfig: "1s²",
    meltingPoint: "-272.2°C",
    desc: "Heli là nguyên tố trong bảng tuần hoàn nguyên tố có ký hiệu He và số hiệu nguyên tử bằng 2, nguyên tử khối bằng 4. Tên của nguyên tố này bắt nguồn từ Helios, tên của thần Mặt Trời trong thần thoại Hy Lạp, do nguồn gốc nguyên tố này được tìm thấy trong quang phổ trên Mặt Trời."
  },
  {
    name: "Lithium",
    sign: "Li",
    sh:3,
    ntk:7,
    category: "Kim loại kiềm",
    state: "Rắn",
    econfig: "[He] 2s¹",
    meltingPoint: "180.5°C",
    desc: "Lithi hay liti là một nguyên tố hóa học trong bảng tuần hoàn nguyên tố có ký hiệu Li và số hiệu nguyên tử bằng 3, nguyên tử khối bằng 7. Lithi là một kim loại mềm có màu trắng bạc thuộc nhóm kim loại kiềm. Trong điều kiện tiêu chuẩn, Lithi là kim loại nhẹ nhất và là nguyên tố rắn có mật độ thấp nhất."
  },
  {
    name: "Beryllium",
    sign: "Be",
    sh:4,
    ntk:9,
    category: "Kim loại kiềm dữ",
    state: "Rắn",
    econfig: "[He] 2s²",
    meltingPoint: "1287°C",
    desc: "Beryli, berili hay thường được gọi ngắn là beri là một nguyên tố hóa học trong bảng tuần hoàn có ký hiệu Be và số nguyên tử bằng 4, nguyên tử khối bằng 9."
  },
  {
    name: "Boron",
    sign: "B",
    sh:5,
    ntk:11,
    category: "Kim loại nửa dẫn",
    state: "Rắn",
    econfig: "[He] 2s² 2p¹",
    meltingPoint: "2076°C",
    desc: "Bor là một nguyên tố hóa học trong bảng tuần hoàn nguyên tố có ký hiệu B và số hiệu nguyên tử bằng 5, nguyên tử khối bằng 11."
  },
  {
    name: "Carbon",
    sign: "C",
    sh:6,
    ntk:12,
    category: "Phi kim",
    state: "Rắn",
    econfig: "[He] 2s² 2p²",
    meltingPoint: "3823°C",
    desc: "Carbon là nguyên tố hóa học có ký hiệu là C và số nguyên tử bằng 6, nguyên tử khối bằng 12. Nó là một nguyên tố phi kim có hóa trị 4 phổ biến, carbon có nhiều dạng thù hình khác nhau, phổ biến nhất là 4 dạng thù hình gồm carbon vô định hình, graphite, kim cương và Q-carbon."
  },
  {
    name: "Nitrogen",
    sign: "N",
    sh:7,
    ntk:14,
    category: "Phi kim",
    state: "Khí",
    econfig: "[He] 2s² 2p³",
    meltingPoint: "-210°C",
    desc: "Nitơ là một nguyên tố hóa học trong bảng tuần hoàn các nguyên tố có ký hiệu N và số nguyên tử bằng 7, nguyên tử khối bằng 14. Ở điều kiện bình thường nó là một chất khí không màu, không mùi, không vị và khá trơ và tồn tại dưới dạng phân tử N₂, còn gọi là đạm khí."
  },
  {
    name: "Oxygen",
    sign: "O",
    sh:8,
    ntk:16,
    category: "Phi kim",
    state: "Khí",
    econfig: "[He] 2s² 2p⁴",
    meltingPoint: "-218°C",
    desc: "Oxy, hay dưỡng khí, là một nguyên tố hóa học có ký hiệu O và số hiệu nguyên tử 8. Nó là một thành viên của nhóm chalcogen trong bảng tuần hoàn, một phi kim phản ứng mạnh và là một chất oxy hóa dễ tạo oxide với hầu hết các nguyên tố cũng như với các hợp chất khác."
  },
  {
    name: "Fluorine",
    sign: "F",
    sh:9,
    ntk:19,
    category: "Halogen",
    state: "Khí",
    econfig: "[He] 2s² 2p⁵",
    meltingPoint: "-220°C",
    desc: "Nguyên tố F chính là Flo (Fluor), ký hiệu hóa học F, số hiệu nguyên tử 9, thuộc nhóm Halogen (nhóm 17) trong bảng tuần hoàn, nổi tiếng là phi kim có tính hoạt động hóa học mạnh nhất, có độ âm điện lớn nhất. Flo tồn tại ở dạng khí màu vàng nhạt, độc hại, rất khó tách ra ở dạng tinh khiết mà thường có trong các hợp chất như fluorit (CaF₂) hay hợp chất hữu cơ, được ứng dụng rộng rãi trong y tế (kem đánh răng), công nghiệp (sản xuất Teflon, pin, chất làm lạnh) và đời sống."
  },
  {
    name: "Neon",
    sign: "Ne",
    sh:10,
    ntk:20,
    category: "Khí hiếm",
    state: "Khí",
    econfig: "[He] 2s² 2p⁶",
    meltingPoint: "-248°C",
    desc: "Neon là nguyên tố hóa học trong bảng tuần hoàn nguyên tố có ký hiệu Ne và số nguyên tử bằng 10, nguyên tử khối bằng 20. Là một khí hiếm không màu, gần như trơ, neon tạo ra ánh sáng màu đỏ khi sử dụng trong các ống phóng điện chân không và đèn neon, nó có trong không khí với một lượng rất nhỏ."
  },
  {
    name: "Sodium",
    sign: "Na",
    sh:11,
    ntk:23,
    category: "Kim loại kiềm",
    state: "Rắn",
    econfig: "[Ne] 3s¹",
    meltingPoint: "97.8°C",
    desc: "Natri là một nguyên tố hóa học thuộc nhóm kim loại kiềm có hóa trị một trong bảng tuần hoàn nguyên tố với số nguyên tử bằng 11 và nguyên tử khối bằng 23. Đây là một kim loại mềm, màu trắng bạc và hoạt động mạnh; natri chỉ có một đồng vị bền là 23 Na."
  },
  {
    name: "Magnesium",
    sign: "Mg",
    sh:12,
    ntk:24,
    category: "Kim loại kiềm dữ",
    state: "Rắn",
    econfig: "[Ne] 3s²",
    meltingPoint: "650°C",
    desc: "Magnesium là nguyên tố hóa học trong bảng tuần hoàn nguyên tố có ký hiệu Mg và số nguyên tử bằng 12."
  },
  {
    name: "Aluminium",
    sign: "Al",
    sh:13,
    ntk:27,
    category: "Kim loại nửa dẫn",
    state: "Rắn",
    econfig: "[Ne] 3s² 3p¹",
    meltingPoint: "660°C",
    desc: "Nguyên tố Al chính là Nhôm (Aluminum), một kim loại nhẹ màu trắng bạc, ký hiệu hóa học Al, số nguyên tử 13, thuộc nhóm IIIA trong Bảng tuần hoàn. Nhôm rất phổ biến trong vỏ Trái Đất, có tính dẫn điện, dẫn nhiệt tốt, nhẹ, dẻo, chống ăn mòn (do lớp oxit bảo vệ) và không bị nhiễm từ, được ứng dụng rộng rãi trong nhiều ngành công nghiệp và đời sống."
  },
  {
    name: "Silicon",
    sign: "Si",
    sh:14,
    ntk:28,
    category: "Kim loại nửa dẫn",
    state: "Rắn",
    econfig: "[Ne] 3s² 3p²",
    meltingPoint: "1414°C",
    desc: "Silicon là một nguyên tố hóa học có ký hiệu Si và số nguyên tử 14. Đây là một chất rắn kết tinh cứng, giòn có ánh kim màu xanh xám và là một chất á kim và bán dẫn có hóa trị là 4."
  },
  {
    name: "Phosphorus",
    sign: "P",
    sh:15,
    ntk:31,
    category: "Phi kim",
    state: "Rắn",
    econfig: "[Ne] 3s² 3p³",
    meltingPoint: "44°C",
    desc: "Phosphorus hay phốt pho theo phiên âm tiếng Việt, là một nguyên tố hóa học trong bảng tuần hoàn có ký hiệu P và số nguyên tử 15. Là một phi kim đa hóa trị trong nhóm nitơ, phosphorus chủ yếu được tìm thấy trong các loại đá phosphat vô cơ và trong các cơ thể sống."
  },
  {
    name: "Sulfur",
    sign: "S",
    sh:16,
    ntk:32,
    category: "Phi kim",
    state: "Rắn",
    econfig: "[Ne] 3s² 3p⁴",
    meltingPoint: "115°C",
    desc: "Lưu huỳnh là nguyên tố hóa học trong bảng tuần hoàn có ký hiệu S và số nguyên tử 16. Nó là một phi kim phổ biến, không mùi, không vị, nhiều hóa trị. Lưu huỳnh, trong dạng gốc của nó là chất rắn kết tinh màu vàng chanh. Trong tự nhiên, nó có thể tìm thấy ở dạng đơn chất hay trong các khoáng chất sulfide và sulfat."
  },
  {
    name: "Chlorine",
    sign: "Cl",
    sh:17,
    ntk:35.5,
    category: "Halogen",
    state: "Khí",
    econfig: "[Ne] 3s² 3p⁵",
    meltingPoint: "-102°C",
    desc: "Nguyên tố Chlorine là một phi kim halogen hoạt động mạnh, có ký hiệu Cl, số nguyên tử 17, tồn tại ở dạng khí màu vàng lục độc hại, là thành phần chính trong muối ăn (NaCl) và được dùng để khử trùng nước, sản xuất hóa chất. Clo có khả năng oxy hóa mạnh, dễ dàng tạo hợp chất với hầu hết kim loại và hydro, thường có hóa trị -1 nhưng có thể có số oxy hóa dương (+1, +3, +5, +7) khi phản ứng với các nguyên tố có độ âm điện mạnh hơn."
  },
  {
    name: "Argon",
    sign: "Ar",
    sh:18,
    ntk:39.9,
    category: "Khí hiếm",
    state: "Khí",
    econfig: "[Ne] 3s² 3p⁶",
    meltingPoint: "-189°C",
    desc: "Argon là một nguyên tố hóa học trong bảng tuần hoàn. Nó có ký hiệu Ar và số nguyên tử bằng 18. Là khí hiếm thứ ba trong nhóm 8, argon chiếm khoảng 0,934% khí quyển Trái Đất, điều này làm cho nó trở thành khí hiếm phổ biến nhất trên Trái Đất."
  },
  {
    name: "Potassium",
    sign: "K",
    sh:19,
    ntk:39,
    category: "Kim loại kiềm",
    state: "Rắn",
    econfig: "[Ar] 4s¹",
    meltingPoint: "63.7°C",
    desc: "Kali là nguyên tố hoá học ký hiệu K, số thứ tự 19 trong bảng tuần hoàn. Ngoài những tên đã nêu, Kali còn được gọi là bồ tạt hay potassium."
  },
  {
    name: "Calcium",
    sign: "Ca",
    sh:20,
    ntk:40,
    category: "Kim loại kiềm dữ",
    state: "Rắn",
    econfig: "[Ar] 4s²",
    meltingPoint: "842°C",
    desc: "Nguyên tố Ca (Calcium/Canxi) là một kim loại kiềm thổ, số hiệu nguyên tử 20, ký hiệu Ca, có màu trắng bạc, rất thiết yếu cho sự sống, chủ yếu cấu tạo nên xương, răng và tham gia nhiều chức năng cơ thể như truyền tín hiệu thần kinh, đông máu, duy trì sức khỏe, có tính chất dẻo, dễ cắt bằng dao và là chất dẫn điện tốt."
  },
  {
    name: "Chromium",
    sign: "Cr",
    sh:24,
    ntk:52,
    category: "Kim loại chuyển tiếp",
    state: "Rắn",
    econfig: "[Ar] 3d⁵ 4s¹",
    meltingPoint: "1857°C",
    desc: "Chromium là một nguyên tố hóa học trong bảng tuần hoàn có ký hiệu Cr và số hiệu nguyên tử bằng 24, là nguyên tố đầu tiên của nhóm 6, là 1 kim loại cứng, giòn, có độ nóng chảy cao. Bề mặt chromi được bao phủ bởi 1 lớp màng mỏng Cr₂O₃, nên có ánh bạc và khả năng chống trầy xước cao."
  },
  {
    name: "Manganese",
    sign: "Mn",
    sh:25,
    ntk:55,
    category: "Kim loại chuyển tiếp",
    state: "Rắn",
    econfig: "[Ar] 3d⁵ 4s²",
    meltingPoint: "1246°C",
    desc: "Manganese, là nguyên tố hóa học trong bảng tuần hoàn có ký hiệu Mn và số nguyên tử là 25. Nó được tìm thấy ở dạng tự do trong tự nhiên, và trong một số loại khoáng vật. Ở dạng nguyên tố tự do, mangan là kim loại quan trọng trong các hợp kim công nghiệp, đặc biệt là thép không rỉ."
  },
  {
    name: "Iron",
    sign: "Fe",
    sh:26,
    ntk:56,
    category: "Kim loại chuyển tiếp",
    state: "Rắn",
    econfig: "[Ar] 3d⁶ 4s²",
    meltingPoint: "1538°C",
    desc: "Sắt là một nguyên tố hóa học trong bảng tuần hoàn nguyên tố có ký hiệu Fe, số nguyên tử bằng 26, phân nhóm VIIIB, chu kỳ 4. Sắt là nguyên tố có ích trên Trái Đất, cấu thành lớp vỏ ngoài và trong của lõi Trái Đất."
  },
  {
    name: "Copper",
    sign: "Cu",
    sh:29,
    ntk:64,
    category: "Kim loại chuyển tiếp",
    state: "Rắn",
    econfig: "[Ar] 3d¹⁰ 4s¹",
    meltingPoint: "1085°C",
    desc: "Đồng là nguyên tố hóa học trong bảng tuần hoàn nguyên tố có ký hiệu là Cu, có số hiệu nguyên tử bằng 29. Đồng là kim loại dẻo có độ dẫn điện và dẫn nhiệt cao. Đồng nguyên chất mềm và dễ uốn; bề mặt đồng tươi có màu cam đỏ."
  },
  {
    name: "Zinc",
    sign: "Zn",
    sh:30,
    ntk:65,
    category: "Kim loại chuyển tiếp",
    state: "Rắn",
    econfig: "[Ar] 3d¹⁰ 4s²",
    meltingPoint: "420°C",
    desc: "Kẽm là nguyên tố kim loại chuyển tiếp có ký hiệu là Zn và số nguyên tử là 30. Kẽm là nguyên tố đầu tiên trong nhóm 12 của bảng tuần hoàn. Kẽm là nguyên tố phổ biến thứ 24 trong lớp vỏ Trái Đất và có 5 đồng vị bền. Quặng kẽm phổ biến nhất là quặng sphalerit, một loại kẽm sulfide."
  },
  {
    name: "Bromine",
    sign: "Br",
    sh:35,
    ntk:80,
    category: "Halogen",
    state: "Lỏng",
    econfig: "[Ar] 3d¹⁰ 4s² 4p⁵",
    meltingPoint: "-7°C",
    desc: "Bromine, còn được viết là bờ-rôm, brom, là nguyên tố hóa học thứ 3 thuộc nhóm Halogen, có ký hiệu Br và số nguyên tử 35. Cả nhóm Halogen thuộc nhóm VIIA trong bảng hệ thống tuần hoàn. Bromine là một chất lỏng bốc khói màu nâu đỏ ở nhiệt độ phòng. Nó bốc hơi dễ dàng để hình thành chất khí màu tương tự."
  },
  {
    name: "Silver",
    sign: "Ag",
    sh:47,
    ntk:108,
    category: "Kim loại chuyển tiếp",
    state: "Rắn",
    econfig: "[Kr] 4d¹⁰ 5s¹",
    meltingPoint: "962°C",
    desc: "Bạc hay ngân là một nguyên tố hóa học trong bảng tuần hoàn nguyên tố có ký hiệu Ag và số hiệu nguyên tử bằng 47. Là một kim loại chuyển tiếp màu trắng, mềm, nó có tính dẫn điện cao nhất trong bất kỳ nguyên tố nào và có độ dẫn nhiệt cao nhất trong tất cả kim loại."
  },
  {
    name: "Barium",
    sign: "Ba",
    sh:56,
    ntk:137,
    category: "Kim loại kiềm dữ",
    state: "Rắn",
    econfig: "[Xe] 6s²",
    meltingPoint: "727°C",
    desc: "Barium là một nguyên tố hoá học có ký hiệu là Ba và số hiệu nguyên tử là 56. Nó là nguyên tố thứ năm trong nhóm 2 của bảng tuần hoàn và là một kim loại kiềm thổ màu trắng bạc. Do có khả năng phản ứng hóa học rất cao nên bari không thể được tìm thấy trong tự nhiên dưới dạng nguyên tố tự do."
  },
  {
    name: "Mercury",
    sign: "Hg",
    sh:80,
    ntk:201,
    category: "Kim loại chuyển tiếp",
    state: "Lỏng",
    econfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s²",
    meltingPoint: "-39°C",
    desc: "Thủy ngân là nguyên tố hóa học có ký hiệu Hg và số hiệu nguyên tử 80. Nó có nhiều tính chất khác biệt so với những kim loại thông thường."
  },
  {
    name: "Lead",
    sign: "Pb",
    sh:82,
    ntk:207,
    category: "Kim loại nặng",
    state: "Rắn",
    econfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
    meltingPoint: "327°C",
    desc: "Chì là một nguyên tố hóa học trong bảng tuần hoàn hóa học viết tắt là Pb và có số nguyên tử là 82. Chì có hóa trị phổ biến là II, có khi là IV. Chì là một kim loại mềm, nặng, độc hại và có thể tạo hình. Chì có màu trắng xanh khi mới cắt nhưng bắt đầu xỉn màu thành xám khi tiếp xúc với không khí."
  },

]
//  Format text
function convertFormula(formula) {
  // 1. Xử lý nhóm trong ngoặc kèm s
  // lố: (SO4)3 → (SO₄)₃
  formula = formula.replace(/\(([A-Za-z0-9]+)\)(\d+)/g, (match, group, num) => {
    let newGroup = group.replace(/\d/g, n => sub[n] || n); // subscript bên trong ngoặc
    let newNum = num.split("").map(n => sub[n] || n).join(""); // subscript số ngoài ngoặc
    return `(${newGroup})${newNum}`;
  });

  // 2. Xử lý ion: số + dấu + → superscript, ví dụ Ba2+ → Ba²⁺
  formula = formula.replace(/([A-Za-z]+)(\d*)([+-])/g, (match, elem, num, sign) => {
    let supNum = num.split("").map(n => sup[n] || n).join("");

    let supSign = sup[sign] || sign;

    return elem + supNum + supSign;
  });

  // 3. Subscript cho số còn lại (trong H2SO4, Al2…) nhưng không chạm vào superscript
  formula = formula.replace(/(\d)/g, n => sub[n] || n);

  return formula;
}

function convertText(text) {
  // Regex nhận tất cả các phần tử hóa học, nhóm trong ngoặc, ion
  return text.replace(/([A-Z][a-z]?\d*[+-]?|\([A-Za-z0-9]+\)\d+)/g, (match) => convertFormula(match));
}
function elementDetail(index) {
  const p = periodicArr[index] || {};
  let element_detail = document.getElementById("element_detail");
  element_detail.innerHTML="";
  const atomicNumber = p.sh ?? '—';
  const atomicMass = p.ntk ?? '—';
  const category = p.category ?? '—';
  const state = p.state ?? '—';
  const meltingPoint = p.meltingPoint ?? '—';
  const desc = p.desc ?? '';
  
  let html = `
    <div class="element-box">
      <div class="element-number">
        <div>Z: ${atomicNumber}</div>
        <div>m: ${atomicMass}</div>
      </div>
      <div class="element-symbol">${p.sign || ''}</div>
      <div class="element-name">${p.name || ''}</div>
      
      <div class="element-info">
        <div class="info-row"><div class="info-key">Số nguyên tử</div><div class="info-value">${atomicNumber}</div></div>
        <div class="info-row"><div class="info-key">Loại</div><div class="info-value">${category}</div></div>
        <div class="info-row"><div class="info-key">Trạng thái</div><div class="info-value">${state}</div></div>
        <div class="info-row"><div class="info-key">Nóng chảy</div><div class="info-value">${meltingPoint}</div></div>
      </div>
      
      <div style="margin-top:12px;color:#334155;font-size:13px;line-height:1.5">${desc}</div>
      
      <div style="margin-top:12px;text-align:center">
        <button class="audio-btn" onclick="playAudio('${p.name || ''}')}" title="Phát âm">
          <i class="fa-solid fa-volume-high"></i>
        </button>
      </div>
    </div>
  `
element_detail.innerHTML=html;
  return;
}
// Trả về html bảng nguyên tố hóa học
function showPreiodic() {
  let html = `<div class='periodic_element'>
        <div class="table">`;
  let html1 = "";

  periodicArr.forEach((p, i) => {
    html1 += `
      <div onclick="elementDetail(${i})" class="item" title="${p.name}">
        ${p.sign}
      </div>
    `;
  });

  let html2 = `
      </div>
      <div id="element_detail"></div>
    </div>
  `;

  return html + html1 + html2;
};
function playAudio(audio){
  let play_audio = new Audio("./audio/" + audio+".mp3")
  play_audio.play();
  return;
}
