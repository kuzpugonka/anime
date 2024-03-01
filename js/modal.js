const modal = () => {
  const modal = document.querySelector(".search-modal");
  const modalBtn = document.querySelector(".icon_search");
  const modalClose = modal.querySelector(".search-close-switch");

  modalBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  const search = () => {
    const input = modal.querySelector(".search-modal-form > input");
    input.addEventListener("input", (e) => {
      console.log(input.value);
    });
  };
  search();
};
modal();
