const form = document.querySelector("form.login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Wypełnij wszystkie pola formularza.");
    return;
  }
  console.log(email.value, password.value);
  event.target.reset();
});
