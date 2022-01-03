const menuIcon = document.querySelector(".menu-icon");
const mobileNav = document.querySelector(".mobile-nav");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  mobileNav.classList.toggle("active");
});
