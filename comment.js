const commentBox = document.querySelector(".comment-box");
const addComment = document.querySelector(".add-form");
const typeComment = document.querySelector(".type-comment");
const postButton = document.querySelector(".add-comments .post");

const createComments = (e) => {
  e.preventDefault();
  if (typeComment.value.length > 0) {
    postButton.style.opacity = "0.3";
    let comment = document.createElement("div");
    comment.classList.add("comment-style");
    comment.innerHTML = `<span style="font-weight:bold"> swe.frank.kim </span> ${typeComment.value}`;
    commentBox.appendChild(comment);
    typeComment.value = "";
    postButton.classList.remove("pointer");
  }
};

const changePostOpacity = () =>
  typeComment.value.length > 0
    ? (postButton.style.opacity = "1")
    : (postButton.style.opacity = "0.3");

const changeCursor = (e) => {
  e.target.value.length > 0
    ? postButton.classList.add("pointer")
    : postButton.classList.remove("pointer");
};

addComment.addEventListener("input", changePostOpacity);
addComment.addEventListener("submit", createComments);
postButton.addEventListener("click", createComments);
typeComment.addEventListener("input", changeCursor);
