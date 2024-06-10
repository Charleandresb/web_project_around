const template = document.querySelector(".template-card");
const popupImageCard = document.querySelector(".popup-image__card");
const popupImageTitle = document.querySelector(".popup-image__title");
const popupImage = document.querySelector(".popup-image__container");

export default class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
    this._card = this.getTemplate();
  }
  getTemplate() {
    return template.cloneNode(true).content.querySelector(".card");
  }
  setProperties() {
    this._cardTitle = this._card.querySelector(".card__title");
    this._cardImage = this._card.querySelector(".card__image");
    this._cardTrash = this._card.querySelector(".card__image-trash");
    this._cardLike = this._card.querySelector(".card__image-like");
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
  }
  handleLike() {
    this._cardLike.classList.toggle("card__image-like_active");
  }
  setEventListeners() {
    this._cardLike.addEventListener("click", () => {
      this.handleLike();
    });
    this._cardTrash.addEventListener("click", () => {
      this._card.remove();
    });
    this._cardImage.addEventListener("click", () => {
      popupImage.classList.add("popup-image__container_opened");
      popupImageCard.src = this._link;
      popupImageTitle.textContent = this._name;
      popupImageCard.alt = this._name;
    });
  }
  generateCards() {
    this.setProperties();
    this.setEventListeners();
    return this._card;
  }
}
