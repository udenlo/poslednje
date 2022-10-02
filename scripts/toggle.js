const toggleMenu = document.getElementsByClassName("toggle")[0];
const barToggle = document.getElementsByClassName("bar");
const navbarMobile = document.getElementsByClassName("navbar-mobile")[0];

toggleMenu.addEventListener("click", () => {
  navbarMobile.classList.toggle("active");
  barToggle[0].classList.toggle("activated");
  barToggle[1].classList.toggle("activated");
  barToggle[2].classList.toggle("activated");
});
