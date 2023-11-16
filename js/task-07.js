const control = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

control.addEventListener("input", (event) => {
  span.style.fontSize = event.currentTarget.value + "px";
});
