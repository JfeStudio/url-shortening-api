// hambuger menu
const menuHamburger = document.querySelector(".menu-hamburger");
const navigation = document.querySelector(".navigation");
const iconMenu = document.querySelector(".bx-menu-alt-right");

menuHamburger.addEventListener("click", () => {
  // set data visible
  const visability = navigation.getAttribute("data-visible");
  //  sett class icon
  iconMenu.classList.toggle("bx-x");
  if (visability === "false") {
    navigation.setAttribute("data-visible", true);
  } else if (visability === "true") {
    navigation.setAttribute("data-visible", false);
  }
});

// sroll header
const scrollNavigation = document.querySelector(".fixed");
window.addEventListener("scroll", () => {
  scrollNavigation.classList.toggle("header-fixed", this.scrollY > 80);
});

// reload logo
const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  location.reload();
});
