import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {
  openProfileForm,
  closeProfileForm,
  openCardForm,
  closeCardForm,
} from "./utils.js";

const openFormButton = document.querySelector(".profile__info-button");
const profileName = document.querySelector(".profile__info-name");
const profileAbout = document.querySelector(".profile__info-description");
const closeFormButton = document.querySelector("#popup-close");
const formProfile = document.querySelector("#popup-form");
const inputName = document.querySelector("#name-input");
const inputAbout = document.querySelector("#about-input");
//formulario editar perfil ^^
const openCardFormButton = document.querySelector(".profile__add-button");
const closeCardFormButton = document.querySelector("#popup-add-close");
const cardForm = document.querySelector("#popup-add-form");
const inputCardName = document.querySelector("#add-input");
const inputCardLink = document.querySelector("#link-input");
//formulario agregar cartas ^^
const popupImage = document.querySelector(".popup-image__container");
const closePopupImage = document.querySelector(".popup-image__close-icon");
//popup imagen cartas ^^
const cardSpace = document.querySelector(".photo-cards");
//Espacio HTML para cartas ^^
const popupOverlay = document.querySelector(".popup__overlay"); //Cerrar popupProfile
const popupAddOverlay = document.querySelector("#popup-overlay"); //Cerrar popupAdd
const popupImageOverlay = document.querySelector(".popup-image__overlay"); //Cerrar popupImage

const formElement = document.querySelectorAll(".popup__form"); //Selector de formularios

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

// function makeCards(name, link) {
//   const card = template.cloneNode(true).content.querySelector(".card");
//   const cardTitle = card.querySelector(".card__title");
//   const cardImage = card.querySelector(".card__image");
//   const cardTrash = card.querySelector(".card__image-trash");
//   const cardLike = card.querySelector(".card__image-like");
//   cardTrash.addEventListener("click", function () {
//     card.remove();
//   });
//   cardLike.addEventListener("click", function () {
//     cardLike.classList.toggle("card__image-like_active");
//   });
//   cardImage.addEventListener("click", function () {
//     popupImage.classList.add("popup-image__container_opened");
//     popupImageCard.src = link;
//     popupImageTitle.textContent = name;
//     popupImageCard.alt = name;
//   });
//   cardTitle.textContent = name;
//   cardImage.src = link;
//   cardImage.alt = name;
//   return card;
// }

initialCards.forEach(function (item) {
  const cardToEnd = new Card(item.name, item.link).generateCards();
  cardSpace.append(cardToEnd);
});

openFormButton.addEventListener("click", openProfileForm);
closeFormButton.addEventListener("click", closeProfileForm);
popupOverlay.addEventListener("click", closeProfileForm);

formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closeProfileForm();
});

openCardFormButton.addEventListener("click", openCardForm);
closeCardFormButton.addEventListener("click", closeCardForm);
popupAddOverlay.addEventListener("click", closeCardForm);

cardForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardToStar = new Card(
    inputCardName.value,
    inputCardLink.value
  ).generateCards();
  cardSpace.prepend(cardToStar);
  closeCardForm();
});

closePopupImage.addEventListener("click", function () {
  popupImage.classList.remove("popup-image__container_opened");
});

popupImageOverlay.addEventListener("click", function () {
  popupImage.classList.remove("popup-image__container_opened");
});

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    closeProfileForm();
    closeCardForm();
    popupImage.classList.remove("popup-image__container_opened");
  }
});

const Validator = new FormValidator(formElement, {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error",
});

Validator.enableValidation();
