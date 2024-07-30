import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector(".popup__form");
    this._inputList = this._formElement.querySelectorAll(".popup__input");
    this._buttonElement = this._formElement.querySelector(".popup__button");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this.formValues = {};
    this._inputList.forEach((input) => {
      this.formValues[input.name] = input.value;
    });
    return this.formValues;
  }

  open(getUserInfo) {
    super.open();
    if (this._buttonElement.id === "popup-button-card") {
      this._buttonElement.textContent = "Crear";
    } else {
      this._buttonElement.textContent = "Guardar";
    }
    const item = getUserInfo();
    if (this._formElement.id === "popup-form") {
      this._inputList[0].value = item.userName;
      this._inputList[1].value = item.userJob;
    }
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      if (this._buttonElement.id === "popup-button-card") {
        this._buttonElement.textContent = "Creando...";
      } else {
        this._buttonElement.textContent = "Guardando...";
      }
      const close = () => this.close();
      this._handleFormSubmit(this._getInputValues(), close);
      this._formElement.reset();
    });
  }
}
