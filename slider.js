// ============= Content Slider =============
let IMAGES = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK7kb76FiUc80WNVG5kjD4BxxiC3VeuS4Jow&usqp=CAU",
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2020%2F04%2F27%2Fpositive-quotes-captions-life-motivational-inspirational-jim-rohn.jpg",
  "https://media.istockphoto.com/vectors/calm-down-simple-inspire-and-motivational-quote-english-idiom-youth-vector-id1087183038?k=20&m=1087183038&s=170667a&w=0&h=Jk2XhdKKuqJLZmbVU2qUNvRPVVFxWBL17vFGVHpOfxM=",
];

let mainImage = document.querySelector(".content__container-content img");
let index = 0;

const contentSlider1 = document.querySelector(
  ".content__container-content .slider-1"
);
const contentSlider2 = document.querySelector(
  ".content__container-content .slider-2"
);

contentSlider1.addEventListener("click", () => {
  if (0 < index || index < IMAGES.length - 1) {
    mainImage.src = IMAGES[--index];
  }
  if (index === 0) {
    contentSlider1.style.display = "none";
    contentSlider2.style.display = "flex";
  }
});

contentSlider2.addEventListener("click", () => {
  if (index < IMAGES.length) {
    mainImage.src = IMAGES[++index];
  }
  if (index === IMAGES.length - 1) {
    contentSlider2.style.display = "none";
    contentSlider1.style.display = "flex";
  }
});
