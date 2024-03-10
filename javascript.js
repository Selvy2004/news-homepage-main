'use strict'

const decktopImage = document.querySelector('.desktop-phone');
const phoneImage = document.querySelector('.photo-phone');

const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");

const navList = document.querySelector(".nav-list");

if (window.innerWidth <= 380) {
  phoneImage.classList.remove('hidden');
  decktopImage.classList.add('hidden');

  navList.classList.add("hidden");
  openIcon.classList.remove("hidden");
} else {
  phoneImage.classList.add('hidden');
  decktopImage.classList.remove('hidden');

  navList.classList.remove("hidden");
  openIcon.classList.add("hidden");
}

openIcon.addEventListener("click", function () {
  openIcon.classList.add("hidden");
  closeIcon.classList.toggle("hidden");
  navList.classList.remove("hidden");
});
closeIcon.addEventListener("click", function () {
  closeIcon.classList.toggle("hidden");
  openIcon.classList.toggle("hidden");
  navList.classList.add("hidden");
});
