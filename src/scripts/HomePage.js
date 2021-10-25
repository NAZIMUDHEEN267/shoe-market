// post  variable from dom
const picList = document.getElementById('js-list');
const mainPic = document.querySelector('#js-gl__pic img');
const bfGallery = document.getElementById('js-bf__gl');
const leftArr = document.getElementById('js-arrL');
const rightArr = document.getElementById('js-arrR');

// data fetching witch ajax call
const getData = function (url) {
  return new Promise((resolve, reject) => {
    const xml = new XMLHttpRequest();
    xml.open('GET', url);
    xml.send();

    // event trigger for state changing
    xml.addEventListener('readystatechange', () => {
      if (xml.readyState === 4 && xml.status === 200) {
        const data = JSON.parse(xml.responseText);
        resolve(data);
      } else if (xml.status !== 200) {
        reject('sry the data not recieved');
      }
    });
  });
};
const url = '/src/scripts/data.json';
getData(url).then((data) => {
  data.smImage.forEach((item, index) => {
    picList.innerHTML += `<div class="single__pic">
    <img src="${item}" class="pic--touch" alt="product-${index + 1}.jpg"/>
    </div>`;
  });

  const list = [...document.querySelectorAll('.single__pic')];
  return { list, mainImg: data.bgImage };
})
  .then((obj) => {
    obj.list.forEach((item, index) => {
      item.addEventListener('mouseover', () => {
        mainPic.src = obj.mainImg[index];
      });

      item.addEventListener('click', () => {
        bfGallery.classList.remove('display');
      });
    });
  })
  .catch((err) => {
    throw new Error(err);
  });

leftArr.addEventListener('click', () => {
	
});