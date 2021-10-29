// post  variable from dom
const picList = document.getElementById('js-list');
const mainPic = document.querySelector('#js-gl__pic img');
const bfGallery = document.getElementById('js-bf__gl');
const rightArrBf = document.getElementById('js-arrR-bf');
const leftArrBf = document.getElementById('js-arrL-bf');
const closeBtn = document.querySelector('.close #js-close');
const bfScroll = document.getElementById('js-scroll');
const bfList = document.getElementById('js-bf-list');


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

closeBtn.addEventListener('click', () => {
  bfGallery.classList.add('display');
});

let value = -1440;
let count = -1;
const minRoll = 0;
const maxRoll = -1440;

function border(node) {
  for (let index = 0; index < bfList.childNodes.length; index += 1) {
    bfList.childNodes[index].style.opacity = '1';
    if (index === node) {
      bfList.childNodes[index].style.opacity = '.6';
    }
  }
}

leftArrBf.addEventListener('click', () => {
  if (value !== maxRoll) {
  // node count
    count -= 1;

    // border function calling
    border(count);

    value -= 360;

    bfScroll.style.transform = `translateX(${value}px)`;
  } if (count === 0 || value === maxRoll) {
    leftArrBf.style.visibility = 'hidden';
    rightArrBf.style.visibility = 'visible';
  }
});

rightArrBf.addEventListener('click', () => {
  if (value !== minRoll) {
    // node count
    count += 1;

    // border function calling
    border(count);

    value += 360;
    bfScroll.style.transform = `translateX(${value}px)`;
    leftArrBf.style.visibility = 'hidden';
	console.log(value);
  } if (count === bfList.childNodes.length - 1 || value === minRoll) {
    rightArrBf.style.visibility = 'hidden';
    leftArrBf.style.visibility = 'visible';
  }
});
