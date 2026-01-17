const menuButton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  nav.style.display = nav.classList.contains("open") ? "block" : "none";
});
