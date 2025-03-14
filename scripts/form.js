//email validation
const form = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailValue = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(emailValue)) {
    errorMessage.style.display = "block";
    successMessage.style.display = "none";
  } else {
    errorMessage.style.display = "none";
    successMessage.style.display = "block";

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 2000);
  }
});
