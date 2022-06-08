const form = document.querySelector(".form__input");
const mail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const input = document.querySelector(".form__in");
const label = document.querySelector(".label__info");
const errors = function () {
  if (input.value == "" || !input) {
    let img = input.closest(".form__input").querySelector("img");
    label.classList.add("error__visibility");
    label.textContent = "provide a valid email";
    img.classList.add("error__visibility");
    input.classList.add("error__border");
  }
};
const success = function () {
  if (input.value.match(mail)) {
    let img = input.closest(".form__input");
    label.classList.add("sucess__visibility");
    label.textContent = "succesfully filled email";
    img.classList.remove("error__visibility");
    label.classList.remove("error__visibility");
    input.classList.remove("error__border");
    input.value = "";
    input.value.focus();
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  errors();
  success();
});
