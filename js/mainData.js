const mainData = () => {
  const renderTopAnime = (array) => {
    const wrapper = document.querySelector(".filter__gallery");
    wrapper.innerHTML = "";

    array.forEach((item) => {
      // console.log(item);
      wrapper.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="product__sidebar__view__item set-bg mix"
          data-setbg="${item.image}">
          <div class="ep">${item.rating} / 10</div>
          <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
          <h5><a href="/anime-details.html" >${item.title}</a></h5>
        </div>
      `
      );
    });

    const elements = wrapper.querySelectorAll(".set-bg");
    elements.forEach((elem) => {
      elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
    });
    
  };

  fetch("../db.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderTopAnime(data.anime.sort((a, b) => b.views - a.views).slice(0, 5));
    });
};

mainData();
