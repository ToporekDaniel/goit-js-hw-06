function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bg = document.querySelector("body");
const color = document.querySelector("span.color");
const button = document.querySelector("button.change-color");

button.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  bg.style.backgroundColor = newColor;
  color.textContent = newColor;
});
