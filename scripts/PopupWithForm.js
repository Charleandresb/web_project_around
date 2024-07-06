import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector(".popup__form");
    this._inputList = this._formElement.querySelectorAll(".popup__input");
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
      this._handleFormSubmit(this._getInputValues());
      this._formElement.reset();
      super.close();
    });
  }
}
