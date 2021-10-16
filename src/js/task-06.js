// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.

// ```html
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// ```

// - Сколько символов должно быть в инпуте, указывается в его атрибуте
//   `data-length`.
// - Если введено подходящее количество, то `border` инпута становится зеленым,
//   если неправильное - красным.

// Для добавления стилей, используй CSS-классы `valid` и `invalid`.

// ```css
// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
// ```
let inputRef = document.querySelector('#validation-input');
const TotalLength = inputRef.getAttribute("data-length")
// console.log(typeof TotalLength); 1 час ушел на это(
const inTotalLength=parseInt(TotalLength, 10);

const onTotalLength = () => {

    if (inputRef.value.length === inTotalLength) {
        inputRef.classList.remove("invalid");
        inputRef.classList.add("valid")
    }
    else {
        inputRef.classList.remove("valid");
        inputRef.classList.add("invalid");
    }
}
inputRef.addEventListener('blur', onTotalLength);

