const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.querySelector("#ingredients");

ingredients.forEach((ingredient) => {
  const ing = document.createElement("li");
  ing.textContent = `${ingredient}`;
  ulIngredients.append(ing);
});
