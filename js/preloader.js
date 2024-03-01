const preloader = document.querySelector(".preloader");
preloader.classList.add("active");

setTimeout(() => {
  preloader.classList.remove("active");
}, 500);
