const hamburguesa = document.getElementById("btn-active");
const menu = document.getElementById("menu");

hamburguesa.addEventListener("click", () => {
  menu.classList.toggle("active");
});
