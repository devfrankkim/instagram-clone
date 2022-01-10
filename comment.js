const commentBox = document.querySelector(".comment-box");
const addComment = document.querySelector(".add-form");
const typeComment = document.querySelector(".type-comment");
const postButton = document.querySelector(".add-comments .post");

const createComments = (e) => {
  e.preventDefault();
  let comment = document.createElement("div");
  comment.classList.add("comment-style");
  comment.innerHTML = `<span style="font-weight:bold"> swe.frank.kim </span> ${typeComment.value}`;
  commentBox.appendChild(comment);
  typeComment.value = "";
  postButton.style.opacity = "0.3";
};

const changePostOpacity = () =>
  typeComment.value.length > 0
    ? (postButton.style.opacity = "1")
    : (postButton.style.opacity = "0.3");

addComment.addEventListener("input", changePostOpacity);
addComment.addEventListener("submit", createComments);
postButton.addEventListener("click", createComments);
