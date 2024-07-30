import "./index.css";
import Card from "../scripts/Cards.js";
import Section from "../scripts/Section.js";
import UserInfo from "../scripts/UserInfo.js";
import FormValidator from "../scripts/FormValidator.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import PopupWithConfirmation from "../scripts/PopupWithConfirmation.js";
import Api from "../scripts/Api.js";
import {
  openFormButton,
  openCardFormButton,
  openAvatarFormButton,
  cardArea,
  formElement,
} from "../scripts/utils.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_11",
  headers: {
    authorization: "607e8388-c5c3-4ce3-b6ce-2c44041903cd",
    "Content-Type": "application/json",
  },
});

api.getInitialCards().then((res) => {
  if (!res) {
    return null;
  }
  const cardList = new Section(
    {
      items: res,
      renderer: (item) => {
        const cards = new Card(
          item,
          userInfo._userId,
          () => {
            popupWithImage.open(item.link, item.name);
          },
          () => {
            popupConfirm.open(item._id);
          },
          () => {
            return api.addLike(item._id);
          },
          () => {
            return api.removeLike(item._id);
          }
        );

        const cardElement = cards.generateCards();

        cardList.addItem(cardElement);
      },
    },
    ".photo-cards"
  );

  cardList.renderItems();
});

api.getUserInfo().then((res) => {
  userInfo.setUserInfo(res);
});

const userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  jobSelector: ".profile__info-description",
  userId: "",
  userAvatar: ".profile__avatar",
});

const popupProfile = new PopupWithForm("#popup-profile", (inputs, close) => {
  api.editProfile(inputs).then((res) => {
    if (res) {
      userInfo.setUserInfo(res);
      close();
    }
  });
});

const popupCards = new PopupWithForm("#popup-add", (inputs, close) => {
  api.addCard(inputs).then((res) => {
    if (!res) {
      return null;
    }
    const newCard = new Card(
      res,
      userInfo._userId,
      () => {
        popupWithImage.open(res.link, res.name);
      },
      () => {
        popupConfirm.open(res._id);
      },
      () => {
        return api.addLike(res._id);
      },
      () => {
        return api.removeLike(res._id);
      }
    ).generateCards();

    cardArea.prepend(newCard);

    close();
  });
});

const popupAvatar = new PopupWithForm("#popup-avatar", (input, close) => {
  api.editAvatar(input).then((res) => {
    if (res) {
      userInfo.setUserInfo(res);
    }
    close();
  });
});

const popupWithImage = new PopupWithImage(".popup-image");

const popupConfirm = new PopupWithConfirmation(
  ".popup-remove",
  (cardId, close) => {
    api.removeCard(cardId).then((res) => {
      if (res) {
        document.querySelector(`#id-${cardId}`).remove();
        close();
      }
    });
  }
);

popupProfile.setEventListeners();
popupCards.setEventListeners();
popupAvatar.setEventListeners();
popupWithImage.setEventListeners();
popupConfirm.setEventListeners();

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

openAvatarFormButton.addEventListener("click", () => {
  const Validator = new FormValidator(formElement, {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error",
  });

  Validator.enableValidation();
  popupAvatar.open(userInfo.getUserInfo);
});
