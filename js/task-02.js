const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.querySelector("#ingredients");
const ingTable = [];

ingredients.forEach((ingredient) => {
  const ing = document.createElement("li");
  ing.textContent = `${ingredient}`;
  ingTable.push(ing);
});

ulIngredients.append(...ingTable);
