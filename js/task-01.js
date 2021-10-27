const ListCategoriesRef = document.querySelectorAll(".item");
console.log(`В списке ${ListCategoriesRef.length} категории.`);

// const CategoriesArray = [...ListCategoriesRef]
//     .map(categories => `Категория: ${categories.children[0].textContent}
// Количество элементов: ${categories.children[1].children.length}`
// ).join('\n');
//     console.log(CategoriesArray)
// 1 таск попробуйте через первого и последнего ребенка решить.

ListCategoriesRef.forEach(element => {
  console.log(
    `Категория: ${element.firstElementChild.textContent}, Количество элементов: ${element.lastElementChild.children.length}`,
  );
});
