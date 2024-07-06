const template = document.querySelector(".template-card");

export default class Card {
  constructor(name, link, handleCardClick) {
    this._name = name;
    this._link = link;
    this._card = this.getTemplate();
    this.handleCardClick = handleCardClick;
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
    this._cardImage.alt = this._name;
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
      this.handleCardClick();
    });
  }
  generateCards() {
    this.setProperties();
    this.setEventListeners();
    return this._card;
  }
}
