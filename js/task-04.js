let counterValue = 0;

const valueSpan = document.getElementById("value");
const decr = document.querySelector('[data-action="decrement"]');
const incr = document.querySelector('[data-action="increment"]');

decr.addEventListener("click", () => {
  counterValue--;
  valueSpan.textContent = counterValue;
});

incr.addEventListener("click", () => {
  counterValue++;
  valueSpan.textContent = counterValue;
});
