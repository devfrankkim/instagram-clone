let images = [
  "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
  "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg",
  "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg",
];

let index = 0;

const imgList = document.querySelector(".mainPhoto");

function changeImg() {
  imgList.src = images[index];
  index > 1 ? (index = 0) : index++;
}

window.onload = function () {
  setInterval(changeImg, 1500);
};
