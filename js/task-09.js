function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bg = document.querySelector("body");
const color = document.querySelector("span.color");
const button = document.querySelector("button.change-color");

button.addEventListener("click", () => {
  bg.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
});
