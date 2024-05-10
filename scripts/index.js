const openFormButton = document.querySelector(".profile__info-button");
const closeFormButton = document.querySelector(".popup__close-icon");
const popup = document.querySelector(".popup");
const formProfile = document.querySelector(".popup__form");
const profileName = document.querySelector(".profile__info-name");
const profileAbout = document.querySelector(".profile__info-description");
const inputName = document.querySelector(".popup__input-name");
const inputAbout = document.querySelector(".popup__input-about");
const template = document.querySelector(".template-card");
const cardSpace = document.querySelector(".photo-cards");

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

function cardMaker(name, link) {
  const card = template.cloneNode(true).content.querySelector(".card");
  const cardTitle = card.querySelector(".card__title");
  const cardImage = card.querySelector(".card__image");
  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  cardSpace.append(card);
}

initialCards.forEach(function (item) {
  cardMaker(item.name, item.link);
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
