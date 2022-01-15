const heartLike = document.querySelector(".like-heart");
const heartUnlike = document.querySelector(".unlike-heart");
const textLikes = document.querySelector(".likes");

heartLike.addEventListener("click", () => {
  textLikes.innerHTML = "3 likes";
  heartUnlike.classList.remove("display-none");
  heartUnlike.classList.add("heart-active");
  heartLike.classList.add("display-none");
});

heartUnlike.addEventListener("click", () => {
  textLikes.innerHTML = "2 likes";
  heartLike.classList.remove("display-none");
  heartUnlike.classList.add("display-none");
});
