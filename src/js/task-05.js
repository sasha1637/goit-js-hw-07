
// Напиши скрипт который, при наборе текста в инпуте `input#name-input` (событие
// input), подставляет его текущее значение в `span#name-output`. Если инпут
// пустой, в спане должна отображаться строка `'незнакомец'`.

// ```html
// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>
// ```
let inputRef = document.querySelector('#name-input');
let outputRef = document.querySelector('#name-output');
const onInputChange = (event) => {
    inputRef = event.currentTarget.value
    console.log(inputRef)
    inputRef !== '' ? (outputRef.innerText = inputRef.trim()) : (outputRef.innerText='незнакомец');
};
inputRef.addEventListener('input', onInputChange);

    