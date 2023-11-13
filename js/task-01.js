const numOfCat = document.querySelectorAll("#categories li.item");

console.log(`Number of categories: ${numOfCat.length}`);

numOfCat.forEach((cat) => {
  const catName = cat.querySelector("h2").textContent;
  const catNum = cat.querySelectorAll("ul li").length;
  console.log(`Category: ${catName}`);
  console.log(`Elements: ${catNum}`);
});
