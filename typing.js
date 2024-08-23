const kanjiToRomaji = {
    "始終": ["shijuu", "sijuu"],
    "焦燥": ["shousou", "shosou","syousou"],
    "嫌悪": ["kenno"],
    "宿酔": ["shukusui","hutukayoi"]
};

let currentKanji = "";
let currentRomajiList = [];

// 要素の取得
const wordElement = document.getElementById("word");
const inputElement = document.getElementById("input");
const messageElement = document.getElementById("message");

// テキストをランダムに選んで表示する関数
function newText() {
    const keys = Object.keys(kanjiToRomaji);
    const randomIndex = Math.floor(Math.random() * keys.length);
    currentKanji = keys[randomIndex];
    currentRomajiList = kanjiToRomaji[currentKanji];
    wordElement.textContent = currentKanji;
    inputElement.value = "";
}

// イベントリスナーを設定
inputElement.addEventListener("input", () => {
    const inputText = inputElement.value.trim().toLowerCase();

    if (currentRomajiList.includes(inputText)) {
        messageElement.textContent = "正解!";
        newText();
    } else if (currentRomajiList.some(romaji => romaji.startsWith(inputText))) {
        messageElement.textContent = "";
    } else {
        messageElement.textContent = "違います。";
    }
});

// 初回にテキストを表示
newText();
