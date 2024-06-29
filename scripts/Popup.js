const closeProfileFormButton = document.querySelector("#popup-close");
const closeCardFormButton = document.querySelector("#popup-add-close");
const popupProfileOverlay = document.querySelector("#popup-profile-overlay"); //Cerrar popupProfile
const popupCardsOverlay = document.querySelector("#popup-cards-overlay"); //Cerrar popupCards

export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("popup_opened");
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
    closeProfileFormButton.addEventListener("click", () => {
      this.close();
    });

    closeCardFormButton.addEventListener("click", () => {
      this.close();
    });

    popupProfileOverlay.addEventListener("click", () => {
      this.close();
    });

    popupCardsOverlay.addEventListener("click", () => {
      this.close();
    });
  }
}
