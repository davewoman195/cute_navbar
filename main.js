const menu = document.querySelector(".menu");
const nav = document.querySelector("ul");
const close = document.querySelector(".close");
const search = document.querySelector(".search");
const form = document.querySelector("form");

menu.addEventListener("click", () => {
  nav.classList.add("active");
  menu.classList.add("hide");
  close.classList.add("show");
  menu.classList.remove("show");
  close.classList.remove("hide");
});

close.addEventListener("click", () => {
  nav.classList.remove("active");
  menu.classList.add("show");
  close.classList.add("hide");
  menu.classList.remove("hide");
  close.classList.remove("show");
});

search.addEventListener("click", () => {
  form.classList.toggle("grow");
  search.classList.toggle("active");
});
