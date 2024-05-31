const ingredientsList = document.querySelector('#ingredients');
console.log(ingredientsList);

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];
console.log(ingredients);

const ingredientsItems = ingredients.map((ingredient) => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  return listItem
})
ingredientsList.append(...ingredientsItems);