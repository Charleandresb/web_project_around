export default class FormValidator {
  constructor(formElement, settings) {
    this._formElement = formElement;
    this._settings = settings;
    console.log(formElement);
    console.log(settings);
  }
  _showInputError(inputElement, errorMessage, formElement) {
    this._errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorClass);
    this._errorElement.textContent = errorMessage;
  }
  _hideInputError(inputElement, formElement) {
    this._errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputErrorClass);
    this._errorElement.textContent = "";
  }
  _checkInputValidity(inputElement, formElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        inputElement,
        inputElement.validationMessage,
        formElement
      );
    } else {
      this._hideInputError(inputElement, formElement);
    }
  }
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._settings.inactiveButtonClass);
    } else {
      buttonElement.classList.remove(this._settings.inactiveButtonClass);
    }
  }
  _setEventListeners(formElement) {
    const inputList = Array.from(
      formElement.querySelectorAll(this._settings.inputSelector)
    );
    const buttonElement = formElement.querySelector(
      this._settings.submitButtonSelector
    );
    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement, formElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }
  enableValidation() {
    this._formElement.forEach((formElement) => {
      this._setEventListeners(formElement);
    });
  }
}
