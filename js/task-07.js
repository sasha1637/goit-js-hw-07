// ## Задание 7

// Напиши скрипт, который реагирует на изменение значения `input#font-size-control`
// (событие input) и изменяет инлайн-стиль `span#text` обновляя свойство
// `font-size`. В результате при перетаскивании ползунка будет меняться размер
// текста.

// ```html
// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>
// ```


const textRef = document.getElementById("text");

const inputRef = document.getElementById("font-size-control");
const onTextLength = () => {
    const sizeText = inputRef.value
    textRef.style.fontSize = sizeText + "px";
}
inputRef.addEventListener('input',onTextLength);
