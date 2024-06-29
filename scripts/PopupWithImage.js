import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open() {
    this._popupElement.classList.add("popup-image__container_opened");
  }

  close() {
    this._popupElement.classList.remove("popup-image__container_opened");
  }
}
