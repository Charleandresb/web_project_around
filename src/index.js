import "./index.css";
import Card from "../scripts/Cards.js";
import Section from "../scripts/Section.js";
import UserInfo from "../scripts/UserInfo.js";
import FormValidator from "../scripts/FormValidator.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage.js";

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
const popupImage = document.querySelector(".popup-image");
const closePopupImage = document.querySelector(".popup-image__close-icon");
//popup imagen cartas ^^
const cardSpace = document.querySelector(".photo-cards");
//Espacio HTML para cartas ^^
const popupOverlay = document.querySelector("#popup-profile-overlay"); //Cerrar popupProfile
const popupAddOverlay = document.querySelector("#popup-cards-overlay"); //Cerrar popupAdd
const popupImageOverlay = document.querySelector(".popup-image__overlay"); //Cerrar popupImage

const formElement = document.querySelectorAll(".popup__form"); //Selector de formularios

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://images.unsplash.com/photo-1488441770602-aed21fc49bd5?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Cataratas del Niágara",
    link: "https://images.unsplash.com/photo-1579961376211-0da44016bdab?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Cañón del Antílope",
    link: "https://images.unsplash.com/photo-1566759733695-b2896905cade?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Alaska",
    link: "https://images.unsplash.com/photo-1525220964737-6c299398493c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Valle de Georgia",
    link: "https://images.unsplash.com/photo-1593233560036-4ed1ba4a171d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

// initialCards.forEach(function (item) {
//   const cardToEnd = new Card(item.name, item.link).generateCards();
//   cardSpace.append(cardToEnd);
// });

const cardList = new Section(
  {
    items: initialCards,
    renderer: (cardItem) => {
      const cards = new Card(cardItem.name, cardItem.link, () => {
        popupWithImage.open(cardItem.link, cardItem.name);
      });

      const cardElement = cards.generateCards();

      cardList.addItem(cardElement);
    },
  },
  ".photo-cards"
);

cardList.renderItems();

const userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  jobSelector: ".profile__info-description",
});

const popupProfile = new PopupWithForm("#popup-profile", (inputs) => {
  userInfo.setUserInfo({ name: inputs.name, job: inputs.about });
});

const popupWithImage = new PopupWithImage(".popup-image");

const popupCards = new PopupWithForm("#popup-add", (inputs) => {
  const newCard = new Card(inputs.title, inputs.link, () => {
    popupWithImage.open(inputs.link, inputs.title);
  }).generateCards();
  cardSpace.prepend(newCard);
});

popupProfile.setEventListeners();
popupCards.setEventListeners();
popupWithImage.setEventListeners();

openFormButton.addEventListener("click", () => {
  const Validator = new FormValidator(formElement, {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error",
  });

  Validator.enableValidation();
  popupProfile.open();
});
// closeFormButton.addEventListener("click", closeProfileForm);
// popupOverlay.addEventListener("click", closeProfileForm);

// formProfile.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   profileName.textContent = inputName.value;
//   profileAbout.textContent = inputAbout.value;
//   closeProfileForm();
// });

openCardFormButton.addEventListener("click", () => {
  const Validator = new FormValidator(formElement, {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error",
  });

  Validator.enableValidation();
  popupCards.open();
});
// closeCardFormButton.addEventListener("click", closeCardForm);
// popupAddOverlay.addEventListener("click", closeCardForm);

// cardForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   const cardToStar = new Card(
//     inputCardName.value,
//     inputCardLink.value
//   ).generateCards();
//   cardSpace.prepend(cardToStar);
//   closeCardForm();
// });

// closePopupImage.addEventListener("click", function () {
//   popupImage.classList.remove("popup-image_opened");
// });

// popupImageOverlay.addEventListener("click", function () {
//   popupImage.classList.remove("popup-image_opened");
// });

// document.addEventListener("keydown", function (evt) {
//   if (evt.key === "Escape") {
//     closeProfileForm();
//     closeCardForm();
//     popupImage.classList.remove("popup-image__container_opened");
//   }
// });
