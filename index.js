const openFormButton = document.querySelector(".profile__info-button");
const closeFormButton = document.querySelector(".popup__close-icon");
const popup = document.querySelector(".popup");
const formProfile = document.querySelector(".popup__form");
const profileName = document.querySelector(".profile__info-name");
const profileAbout = document.querySelector(".profile__info-description");
const inputName = document.querySelector(".popup__input-name");
const inputAbout = document.querySelector(".popup__input-about");

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
