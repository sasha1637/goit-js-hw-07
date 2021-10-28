"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];


// const list = ingredients.reduce((str, ingredient) => str + `<li>${ingredient}</li>`, '');
// ListRef.innerHTML = list
const ListRef = document.querySelector('#ingredients');
const list = ingredients.map(el => {
  const item = document.createElement("li");
  item.textContent = el;
  return item;
});
ListRef.prepend(...list);





// 2 таск необходимо через распыление, а innerHTML используйте с осторожностью
// ListRef.insertAdjacentHTML('beforebegin',list);

 




