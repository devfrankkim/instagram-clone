// ============= Content Slider =============
const IMAGES = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK7kb76FiUc80WNVG5kjD4BxxiC3VeuS4Jow&usqp=CAU",
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2020%2F04%2F27%2Fpositive-quotes-captions-life-motivational-inspirational-jim-rohn.jpg",
  "https://media.istockphoto.com/vectors/calm-down-simple-inspire-and-motivational-quote-english-idiom-youth-vector-id1087183038?k=20&m=1087183038&s=170667a&w=0&h=Jk2XhdKKuqJLZmbVU2qUNvRPVVFxWBL17vFGVHpOfxM=",
];
const contentSlider1 = document.querySelector(
  ".content__container-content .slider-1"
);
const contentSlider2 = document.querySelector(
  ".content__container-content .slider-2"
);
const mainImage = document.querySelector(".content__container-content img");
let index = 0;

const moveLeftContent = () => {
  if (0 < index || index < IMAGES.length - 1) {
    mainImage.src = IMAGES[--index];
  }
  index === 0
    ? (contentSlider1.style.display = "none")
    : (contentSlider2.style.display = "flex");
};

const moveRightContent = () => {
  if (index < IMAGES.length) {
    mainImage.src = IMAGES[++index];
  }
  index === IMAGES.length - 1
    ? (contentSlider2.style.display = "none")
    : (contentSlider1.style.display = "flex");
};

contentSlider1.addEventListener("click", moveLeftContent);
contentSlider2.addEventListener("click", moveRightContent);

// ============= Scroll - story - Slider =============

const storyUlContainer = document.querySelector(
  ".story__container__organizer__parent"
);
const storySlider1 = document.querySelector(
  ".story__container__slider-box .slider-1"
);
const storySlider2 = document.querySelector(
  ".story__container__slider-box .slider-2"
);

const moveLeftStory = () => {
  storyUlContainer.scrollBy({
    left: -210,
    behavior: "smooth",
  });
  storySlider1.style.display = "none";
};

const moveRightStory = () => {
  storyUlContainer.scrollBy({
    left: 210,
    behavior: "smooth",
  });
  storySlider1.style.display = "flex";
};

const toggleArrowStory = (e) => {
  e.target.scrollLeft === 0
    ? (storySlider1.style.display = "none")
    : (storySlider1.style.display = "flex");

  //  max scrollLeft >= scrollWidth - clientWidth - (less than 1 move)
  e.target.scrollLeft >= e.target.scrollWidth - e.target.clientWidth - 5
    ? (storySlider2.style.display = "none")
    : (storySlider2.style.display = "flex");
};

storySlider1.addEventListener("click", moveLeftStory);
storySlider2.addEventListener("click", moveRightStory);
storyUlContainer.addEventListener("scroll", toggleArrowStory);
