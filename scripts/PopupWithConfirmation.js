import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector(
      ".popup-remove__confirm"
    );
    this._buttonElement = this._formElement.querySelector(
      ".popup-remove__button"
    );
    this._handleFormSubmit = handleFormSubmit;
    this.cardId = "";
  }

  open(cardId) {
    this.cardId = cardId;
    this._popupElement.classList.add("popup-remove_opened");
    this._buttonElement.textContent = "Sí";
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup-remove_opened");
  }

  setEventListeners() {
    const closeBtnConfirm = document.querySelector(".popup-remove__close-icon");
    const closeOverConfirm = document.querySelector(".popup-remove__overlay");

    closeBtnConfirm.addEventListener("click", () => {
      this.close();
    });

    closeOverConfirm.addEventListener("click", () => {
      this.close();
    });

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._buttonElement.textContent = "Eliminando...";
      const close = () => this.close();
      this._handleFormSubmit(this.cardId, close);
    });
  }
}
