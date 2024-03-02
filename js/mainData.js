const mainData = () => {
  fetch('./db.json')
    .then(res => res.json())
    .then(data => {
      console.log(data.anime);
  })
};

mainData();
