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


const list = ingredients.reduce((str, ingredient) => str + `<li>${ingredient}</li>`, 'reduce');
ListRef.innerHTML=list
console.log(ListRef);


 




