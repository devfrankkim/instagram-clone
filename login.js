const loginID = document.getElementById("login-id");
const loginPassword = document.getElementById("login-password");
const loginButton = document.getElementById("login-button");
const showPassword = document.querySelector(".show-password");
const loginIncorrect = document.querySelector(".login-incorrect");
const userID = "insta";
const userPassword = "123456";

// ====== Login button colour changes ======
const checkLoginID = (e) => {
  let inputValue = e.target.value;
  if (inputValue.length > 0 && loginPassword.value.length > 5) {
    loginButton.style.opacity = "1";
    loginButton.style.cursor = "pointer";
  }
  if (inputValue.length === 0 || loginPassword.value.length < 6) {
    loginButton.style.opacity = "0.3";
    loginButton.style.cursor = "default";
  }
};

const checkLoginPassword = (e) => {
  let passwordValue = e.target.value;
  if (loginID.value.length > 0 && passwordValue.length > 5) {
    loginButton.style.opacity = "1";
    loginButton.style.cursor = "pointer";
  }

  if (loginID.value.length === 0 || passwordValue.length < 6) {
    loginButton.style.opacity = "0.3";
    loginButton.style.cursor = "default";
  }

  passwordValue.length === 0
    ? (showPassword.style.display = "none")
    : (showPassword.style.display = "block");
};

loginID.addEventListener("input", checkLoginID);
loginPassword.addEventListener("input", checkLoginPassword);

// ====== Show/hide password ======
const showHidePassword = (e) => {
  e.preventDefault();
  loginPassword.type !== "password"
    ? (loginPassword.type = "password")
    : (loginPassword.type = "text");
  loginPassword.type === "password"
    ? (showPassword.textContent = "Show")
    : (showPassword.textContent = "Hide");
};

showPassword.addEventListener("click", showHidePassword);

// ====== Login test ======
const signIn = (e) => {
  e.preventDefault();
  loginID.value.toLowerCase() === userID.toLowerCase() &&
  loginPassword.value === userPassword
    ? (window.location = "main.html")
    : (loginIncorrect.style.display = "block");
};

loginButton.addEventListener("click", signIn);
