const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');

let userEmail = "";
let userPassword = "";

emailInput.addEventListener("change", function (event) {
  userEmail = event.target.value;
});
passwordInput.addEventListener("change", function (event) {
  userPassword = event.target.value;
});

document
  .querySelector('button[type="button"]')
  .addEventListener("click", function () {
    console.log({ userEmail, userPassword });
  });
