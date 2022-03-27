const menuToggle = document.querySelector(".logo2 .input");
const nav = document.querySelector(".navlist");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
