let title = document.querySelector("h1");
let valueFontSize = document.querySelector(".default-font-size");
let valueIncreasetFontSize = document.querySelector(".increase-font-size");
let valueColorFont = document.querySelector(".color-font");
let btn = document.querySelector(".btn");

let defaultFontSize = 16;
let defaultIncreasetFontSize = 16;

btn.addEventListener("click", changeFontSize);

function changeFontSize() {
    let fontSize = Number(valueFontSize.value);
    let incFont = Number(valueIncreasetFontSize.value);
    let colorFont = valueColorFont.value;

    if (incFont === 0) {
        incFont = defaultIncreasetFontSize;
    }

    if (fontSize === 0) {
        fontSize = defaultFontSize;
        fontSize = fontSize + incFont;
    }else {
        fontSize = fontSize + incFont;
    }

    title.style.fontSize = fontSize + "px";
    title.style.color = colorFont;
}