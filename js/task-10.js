function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    size += 10;
    divBoxes.insertAdjacentElement("beforeend", newBox);
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
}

create.addEventListener("click", function () {
  const amount = document.querySelector("input").value;

  createBoxes(amount);
});

destroy.addEventListener("click", destroyBoxes);
