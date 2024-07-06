import "./index.css";
import Card from "../scripts/Cards.js";
import Section from "../scripts/Section.js";
import UserInfo from "../scripts/UserInfo.js";
import FormValidator from "../scripts/FormValidator.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import {
  openFormButton,
  openCardFormButton,
  cardSpace,
  formElement,
  initialCards,
} from "../scripts/utils.js";

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

const popupCards = new PopupWithForm("#popup-add", (inputs) => {
  const newCard = new Card(inputs.title, inputs.link, () => {
    popupWithImage.open(inputs.link, inputs.title);
  }).generateCards();

  cardSpace.prepend(newCard);
});

const popupWithImage = new PopupWithImage(".popup-image");

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
  popupProfile.open(userInfo.getUserInfo);
});

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
  popupCards.open(userInfo.getUserInfo);
});
