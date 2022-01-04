const loginID = document.getElementById("login-id");
const loginPassword = document.getElementById("login-password");
const loginButton = document.getElementById("login-button");
const showPassword = document.querySelector(".show-password");

const userID = "";
const userPassword = "";

loginID.addEventListener("input", (e) => {
  let inputValue = e.target.value;
  if (inputValue.length > 0 && loginPassword.value.length > 5) {
    loginButton.style.opacity = "1";
  }
  if (inputValue.length === 0 || loginPassword.value.length < 6) {
    loginButton.style.opacity = "0.3";
  }
});

loginPassword.addEventListener("input", (e) => {
  let passwordValue = e.target.value;
  if (loginID.value.length > 0 && passwordValue.length > 5) {
    loginButton.style.opacity = "1";
  }
  if (loginID.value.length === 0 || passwordValue.length < 6) {
    loginButton.style.opacity = "0.3";
  }

  passwordValue.length === 0
    ? (showPassword.style.display = "none")
    : (showPassword.style.display = "block");
});

// when entering > it goes to button (hide or show)
showPassword.addEventListener("click", (e) => {
  e.preventDefault();

  loginPassword.type !== "password"
    ? (loginPassword.type = "password")
    : (loginPassword.type = "text");

  loginPassword.type === "password"
    ? (showPassword.textContent = "Show")
    : (showPassword.textContent = "Hide");
});