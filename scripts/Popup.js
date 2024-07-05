export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    const closeButton = this._popupElement.querySelector(".popup__close-icon");
    const closeOverlay = this._popupElement.querySelector(".popup__overlay");

    closeButton.addEventListener("click", () => {
      this.close();
    });

    closeOverlay.addEventListener("click", () => {
      this.close();
    });
  }
}
