const template = document.querySelector(".template-card");

export default class Card {
  constructor(
    item,
    userId,
    handleCardClick,
    handleCardRemove,
    handleAddLike,
    handleRemoveLike
  ) {
    this._name = item.name;
    this._link = item.link;
    this._likes = item.likes;
    this._id = item._id;
    this.owner = item.owner;
    this.userId = userId;
    this.handleCardClick = handleCardClick;
    this.handleCardRemove = handleCardRemove;
    this.handleAddLike = handleAddLike;
    this.handleRemoveLike = handleRemoveLike;
    this._card = this.getTemplate();
  }

  getTemplate() {
    return template.cloneNode(true).content.querySelector(".card");
  }

  setProperties() {
    this._card.id = `id-${this._id}`;
    this._cardTitle = this._card.querySelector(".card__title");
    this._cardImage = this._card.querySelector(".card__image");
    this._cardTrash = this._card.querySelector(".card__image-trash");
    if (this.owner._id !== this.userId) {
      this._cardTrash.remove();
    }
    this._cardLike = this._card.querySelector(".card__image-like");
    if (this._likes.some((like) => like._id === this.userId)) {
      this._cardLike.classList.toggle("card__image-like_active");
    }
    this.setLikes(this._likes);
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
  }

  setLikes(likes) {
    this.likeCounter = this._card.querySelector(".card__like-number");
    this.likeCounter.textContent = likes.length;
    this._likes = likes;
  }

  setEventListeners() {
    this._cardLike.addEventListener("click", () => {
      if (this._likes.some((like) => like._id === this.userId)) {
        this.handleRemoveLike(this._card).then((res) =>
          this.setLikes(res.likes)
        );
        this._cardLike.classList.toggle("card__image-like_active");
      } else {
        this.handleAddLike(this._card).then((res) => this.setLikes(res.likes));
        this._cardLike.classList.toggle("card__image-like_active");
      }
    });
    this._cardTrash.addEventListener("click", () => {
      this.handleCardRemove();
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
