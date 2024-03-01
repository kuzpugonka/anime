const preloader = document.querySelector(".preloader");
console.log('preloader: ', preloader);
preloader.classList.add("active");

setTimeout(() => {
  preloader.classList.remove("active");
}, 500);
