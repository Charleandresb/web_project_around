const openFormButton = document.querySelector(".profile__info-button");
const closeFormButton = document.querySelector(".popup__close-icon");
const popup = document.querySelector(".popup");
const formProfile = document.querySelector(".popup__form");
const profileName = document.querySelector(".profile__info-name");
const profileAbout = document.querySelector(".profile__info-description");
const inputName = document.querySelector(".popup__input-name");
const inputAbout = document.querySelector(".popup__input-about");
//formulario editar perfil ^^
const openCardFormButton = document.querySelector(".profile__add-button");
const closeCardFormButton = document.querySelector(".popup-add__close-icon");
const popupAdd = document.querySelector(".popup-add");
const cardForm = document.querySelector(".popup-add__form");
const inputCardName = document.querySelector(".popup-add__input-name");
const inputCardLink = document.querySelector(".popup-add__input-link");
//formulario agregar cartas ^^
const popupImage = document.querySelector(".popup-image__container");
const closePopupImage = document.querySelector(".popup-image__close-icon");
const popupImageCard = document.querySelector(".popup-image__card");
const popupImageTitle = document.querySelector(".popup-image__title");
//popup imagen cartas ^^
const template = document.querySelector(".template-card");
const cardSpace = document.querySelector(".photo-cards");
//template cartas ^^

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

function makeCards(name, link) {
  const card = template.cloneNode(true).content.querySelector(".card");
  const cardTitle = card.querySelector(".card__title");
  const cardImage = card.querySelector(".card__image");
  const cardTrash = card.querySelector(".card__image-trash");
  const cardLike = card.querySelector(".card__image-like");
  cardTrash.addEventListener("click", function () {
    card.remove();
  });
  cardLike.addEventListener("click", function () {
    cardLike.classList.toggle("card__image-like_active");
  });
  cardImage.addEventListener("click", function () {
    popupImage.classList.add("popup-image__container_opened");
    popupImageCard.src = link;
    popupImageTitle.textContent = name;
    popupImageCard.alt = name;
  });
  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  return card;
}

initialCards.forEach(function (item) {
  const cardToEnd = makeCards(item.name, item.link);
  cardSpace.append(cardToEnd);
});

function toggleForm(evt) {
  popup.classList.toggle("popup_opened");
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

function handleCloseProfile() {
  popup.classList.add("popup_opened");
}

openFormButton.addEventListener("click", toggleForm);
closeFormButton.addEventListener("click", toggleForm);

formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  handleCloseProfile();
});

function toggleCardForm(evt) {
  popupAdd.classList.toggle("popup-add_opened");
}

function handleCloseCardForm() {
  popupAdd.classList.add("popup-add_opened");
}

openCardFormButton.addEventListener("click", toggleCardForm);
closeCardFormButton.addEventListener("click", toggleCardForm);

cardForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardToStar = makeCards(inputCardName.value, inputCardLink.value);
  cardSpace.prepend(cardToStar);
  handleCloseCardForm();
});

closePopupImage.addEventListener("click", function () {
  popupImage.classList.remove("popup-image__container_opened");
});
