const options = document.querySelectorAll(".form__list-item");
const form = document.querySelector(".card__form");
const thanks = document.querySelector(".thanks");
const card = document.querySelector(".card");
const grades = document.querySelector(".thanks__grades");

let value = "0";

const handleClick = (event) => {
  options.forEach((option) =>
    option.classList.remove("form__list-item--active")
  );

  const $element = event.target;
  $element.classList.add("form__list-item--active");

  value = $element.textContent;
};

options.forEach((e) => {
  e.addEventListener("click", handleClick);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("El valor es: ", value);

  //   ocultar la valoración y mostrar el agradecimiento.
  card.classList.add("card--inactive");
  thanks.classList.add("thanks--show");
  grades.textContent = `You selected ${value} out of 5`;
});
