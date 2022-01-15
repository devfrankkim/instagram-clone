const commentBox = document.querySelector(".comment-box");
const addComment = document.querySelector(".add-form");
const typeComment = document.querySelector(".type-comment");
const postButton = document.querySelector(".add-comments .post");
const comment = document.querySelector(".comment-style");

const deleteComment = (e) => {
  if (e) {
    const box = e.target.parentNode.parentNode;
    box.removeChild(e.target.parentNode);
  }
};

const createComments = (e) => {
  e.preventDefault();
  if (typeComment.value.length > 0) {
    postButton.style.opacity = "0.3";
    const comment = document.createElement("div");
    comment.style.display = "flex";
    comment.classList.add("comment-style");
    comment.innerHTML = `
      <div>
        <span style="font-weight:bold;"> swe.frank.kim </span> 
        <span> ${typeComment.value} <span>
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       
      
      `;
    const newDeleteButton = document.createElement("button");
    newDeleteButton.textContent = " X ";
    newDeleteButton.classList.add("delete-button");
    comment.appendChild(newDeleteButton);
    commentBox.appendChild(comment);
    typeComment.value = "";
    postButton.classList.remove("pointer");
    newDeleteButton.addEventListener("click", (e) => deleteComment(e));
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
