const nav = document.querySelector("nav");
const logo = document.querySelector(".logo svg path:first-child");
const navbarLink = document.querySelectorAll(".navbar-link");
const rightMenu = document.querySelectorAll(".right-menu svg path:first-child");
const menuIcon = document.querySelector(
  ".mobile-nav-menu-icon svg path:first-child"
);
const mobileNav = document.querySelector(".mobile-nav-menu-icon");
const menuContainer = document.querySelector(".mobile-nav-menu-container");
const menuClose = document.querySelector(".close-icon");
const mobileMenuLinks = document.querySelectorAll(".mobile-nav-link");
// const bagIcon = document.querySelector(".bag-icon");
// const searchIcon = document.querySelector(".search-icon");
const subMenuIcons = document.querySelectorAll(".sub-menu > svg");

// NAV SCROLL EFFECT
window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    nav.classList.add("scrolled");
    logo.style.fill = "#fff";
    menuIcon.style.fill = "#fff";
    rightMenu.forEach((rightMenu) => {
      rightMenu.style.fill = "#fff";
    });
    navbarLink.forEach((link) => {
      link.style.color = "#fff";
    });
    mobileNav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
    logo.style.fill = "#5fd788";
    menuIcon.style.fill = "#000";
    rightMenu.forEach((rightMenu) => {
      rightMenu.style.fill = "#000";
    });
    navbarLink.forEach((link) => {
      link.style.color = "#1f2937";
    });
    mobileNav.classList.remove("scrolled");
  }
});

// MOBILE NAVIGATION
mobileNav.addEventListener("click", function () {
  menuContainer.classList.toggle("active");
});

menuClose.addEventListener("click", function () {
  menuContainer.classList.toggle("active");
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", function () {
    menuContainer.classList.toggle("active");
  });
});

subMenuIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    menuContainer.classList.toggle("active");
  });
});
