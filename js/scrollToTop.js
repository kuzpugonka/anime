const scroll = () => {
  const topBtn = document.querySelector("#scrollToTopButton");
  topBtn.addEventListener("click", (e) => {
    // console.log("e: ", e);
    e.preventDefault;

    seamless.scrollIntoView(document.querySelector(".header"), {
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
};
scroll();
