const mainData = () => {
  fetch('https://anime-bd-7d6a1-default-rtdb.firebaseio.com/anime.json')
    .then(res => res.json())
    .then(data => {
      console.log(data.anime);
  })
};

mainData();
