
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
    ntk:1
  },
  {
    name: "Helium",
    sign: "He",
    sh:2,
    ntk:4
  },
  {
    name: "Lithium",
    sign: "Li",
    sh:3,
    ntk:7
  },
  {
    name: "Beryllium",
    sign: "Be",
    sh:4,
    ntk:9
  },
  {
    name: "Boron",
    sign: "B",
    sh:5,
    ntk:11
  },
  {
    name: "Carbon",
    sign: "C",
    sh:6,
    ntk:12
  },
  {
    name: "Nitrogen",
    sign: "N",
    sh:7,
    ntk:14
  },
  {
    name: "Oxygen",
    sign: "O",
    sh:8,
    ntk:16
  },
  {
    name: "Fluorine",
    sign: "F",
    sh:9,
    ntk:19
  },
  {
    name: "Neon",
    sign: "Ne",
    sh:10,
    ntk:20
  },
  {
    name: "Sodium",
    sign: "Na",
    sh:11,
    ntk:23
  },
  {
    name: "Magnesium",
    sign: "Mg",
    sh:12,
    ntk:24
  },
  {
    name: "Aluminium",
    sign: "Al",
    sh:13,
    ntk:27
  },
  {
    name: "Silicon",
    sign: "Si",
    sh:14,
    ntk:28
  },
  {
    name: "Phosphorus",
    sign: "P",
    sh:15,
    ntk:31
  },
  {
    name: "Sulfur",
    sign: "S",
    sh:16,
    ntk:32
  },
  {
    name: "Chlorine",
    sign: "Cl",
    sh:17,
    ntk:35.5
  },
  {
    name: "Argon",
    sign: "Ar",
    sh:18,
    ntk:39.9
  },
  {
    name: "Potassium",
    sign: "K",
    sh:19,
    ntk:39
  },
  {
    name: "Calcium",
    sign: "Ca",
    sh:20,
    ntk:40
  },
  {
    name: "Chromium",
    sign: "Cr",
    sh:24,
    ntk:52
  },
  {
    name: "Manganese",
    sign: "Mn",
    sh:25,
    ntk:55
  },
  {
    name: "Iron",
    sign: "Fe",
    sh:26,
    ntk:56
  },
  {
    name: "Copper",
    sign: "Cu",
    sh:29,
    ntk:64
  },
  {
    name: "Zinc",
    sign: "Zn",
    sh:30,
    ntk:65
  },
  {
    name: "Bromine",
    sign: "Br",
    sh:35,
    ntk:80
  },
  {
    name: "Silver",
    sign: "Ag",
    sh:47,
    ntk:108
  },
  {
    name: "Barium",
    sign: "Ba",
    sh:56,
    ntk:137
  },
  {
    name: "Mercury",
    sign: "Hg",
    sh:80,
    ntk:201
  },
  {
    name: "Lead",
    sign: "Pb",
    sh:82,
    ntk:207
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
function elementDetail(sign,name,sh,ntk) {
  let element_detail = document.getElementById("element_detail");
  element_detail.innerHTML="";
  let html = `
 <div
                style="height: 250px;width: 250px;border:solid black 1px; font-weight: bold;" ">
                <div style="display: flex;justify-content: space-between; margin-top: 10px;padding: 0 20px;">
                    <div style="font-size: 27px;">${sh}</div>
                    <div>${ntk}</div>
                </div>
                <div style="text-align: center;font-size: 35px;margin-top: 5px;">
                    ${sign}
                </div>
                 <div style="text-align: center;font-size: 20px;margin-top: 5px;">
                    ${name}
                </div>
                <div style="text-align: center;font-size: 20px;margin-top: 5px;">
                    <div id="audio_action" onclick="playAudio('${name}')"><i class="fa-solid fa-volume-high"></i></div>
                </div>
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

  periodicArr.forEach((p) => {
    html1 += `
      <div onclick="elementDetail('${p.sign}','${p.name}','${p.sh ?? 0}','${p.ntk ?? 0}')"
           class="item">
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
