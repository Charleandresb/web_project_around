const popupProfile = document.querySelector("#popup-profile");
const popupAdd = document.querySelector("#popup-add");
const inputName = document.querySelector("#name-input");
const inputAbout = document.querySelector("#about-input");
const profileName = document.querySelector(".profile__info-name");
const profileAbout = document.querySelector(".profile__info-description");

export function openProfileForm() {
  popupProfile.classList.add("popup_opened");
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

export function closeProfileForm() {
  popupProfile.classList.remove("popup_opened");
}

export function openCardForm() {
  popupAdd.classList.add("popup_opened");
}

export function closeCardForm() {
  popupAdd.classList.remove("popup_opened");
}
