import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popupElement.querySelector(".popup-image__card");
    this._title = this._popupElement.querySelector(".popup-image__title");
  }

  open(link, name) {
    this._popupElement.classList.add("popup-image_opened");
    this._image.src = link;
    this._image.alt = name;
    this._title.textContent = name;
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup-image_opened");
  }

  setEventListeners() {
    const closeBtnImg = this._popupElement.querySelector(
      ".popup-image__close-icon"
    );
    const closeOverlayImg = this._popupElement.querySelector(
      ".popup-image__overlay"
    );

    closeBtnImg.addEventListener("click", () => {
      this.close();
    });

    closeOverlayImg.addEventListener("click", () => {
      this.close();
    });
  }
}
