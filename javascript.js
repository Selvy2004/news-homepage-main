'use strict'

// Images
const decktopImage = document.querySelector('.desktop-phone');
const phoneImage = document.querySelector('.photo-phone');
// Icons
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");
// Navigation
const navigation = document.querySelector(".navigation");

// Replace Desktop-img with Mobile-img
if (window.innerWidth <= 500) {
  phoneImage.classList.remove('hidden');
  decktopImage.classList.add('hidden');
}

// Some Default for tablits and phones
if (window.innerWidth <= 650) {
  navigation.classList.add("opacity-nav");
  openIcon.classList.remove("hidden");
}

// Open Navigation
openIcon.addEventListener("click", function () {
  openIcon.classList.add("hidden");
  closeIcon.classList.remove("hidden");
  navigation.classList.remove("opacity-nav");
});

// CLOSE NAVIGATION
const closeNav = function () {
  if (!closeIcon.classList.contains("hidden")) {
    closeIcon.classList.toggle("hidden");
    openIcon.classList.toggle("hidden");
    navigation.classList.add("opacity-nav");
  }
}
closeIcon.addEventListener("click", closeNav);

//Close Navigation using Escape key on keyboard
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeNav();
  }
});