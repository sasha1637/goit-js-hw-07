"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
const ListRef = document.querySelector('#ingredients');


const list = ingredients.reduce((str, ingredient) => str + `<li>${ingredient}</li>`,'');
// ListRef.innerHTML = list
// console.log(ListRef);

// 2 таск необходимо через распыление, а innerHTML используйте с осторожностью
ListRef.insertAdjacentHTML('beforebegin', list);
 




