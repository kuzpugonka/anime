const mainData = () => {
  const renderAnimeList = (array, ganres) => {
    const wrapper = document.querySelector(".product .col-lg-8");

    wrapper.innerHTML = "";

    ganres.forEach((ganre) => {
      const productBlock = document.createElement("div");
      const listBlock = document.createElement("div");
      const list = array.filter((item) => item.ganre === ganre);

      listBlock.classList.add("row");
      productBlock.classList.add("mb-5");

      productBlock.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-8">
            <div class="section-title">
              <h4>${ganre}</h4>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <div class="btn__all">
              <a href="/categories.html" class="primary-btn"
                >View All <span class="arrow_right"></span
              ></a>
            </div>
          </div>
        </div>
      `
      );

      list.forEach((item) => {
        listBlock.insertAdjacentHTML(
          "afterbegin",
          `
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="product__item">
              <div
                class="product__item__pic set-bg"
                data-setbg="${item.image}">
                <div class="ep">${item.rating} / 10</div>
                <div class="view"><i class="fa fa-eye"></i> ${item.views}</div>
              </div>
              <div class="product__item__text">
                <ul>
                  <li>Active</li>
                  <li>Movie</li>
                </ul>
                <h5>
                  <a href="/anime-details.html">
                  ${item.title}
                  </a>
                </h5>
              </div>
            </div>
          </div>
        `
        );
      });

      productBlock.append(listBlock);
      wrapper.append(productBlock);

      const elements = wrapper.querySelectorAll(".set-bg");
      elements.forEach((elem) => {
        elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
      });
    });
  };

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
      const array = data.anime;
      const ganres = new Set();

      renderTopAnime(array.sort((a, b) => b.views - a.views).slice(0, 5));

      array.forEach((item) => ganres.add(item.ganre));
      renderAnimeList(array, ganres);
    });
};

mainData();
