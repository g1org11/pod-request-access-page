const form = document.querySelector("form");
const button = document.querySelector("button");
const input = document.querySelector("input");
const error = document.querySelector(".error");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    error.innerHTML = "Oops! Please check your email";
    button.style.backgroundColor = "#B3FFE2";
  }
  if (input.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    error.innerHTML = "";
    button.style.backgroundColor = "#B3FFE2";
  }
});
