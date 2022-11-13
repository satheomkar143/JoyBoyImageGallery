// --------login page---------

const loginButton = document.getElementById("loginBtn");

// let password = userPass;
// let EmailAddress = userId;
// console.log(countEmail);
// let = userId = "omkar";
// let userPass = "omkar";

// ---------------onblur and onfocus for email------------

function onFocusEmail() {
  const emailErr = document.getElementById("email-error");
  const email = loginForm.EmailId.value;
  const countEmail = email.length;

  if (countEmail === 0) {
    emailErr.innerHTML = "Email field is required";
    loginForm.EmailId.focus();
  }
}
function onBlurEmail() {
  const emailErr = document.getElementById("email-error");
  const email = loginForm.EmailId.value;

  if (email.length > 0) {
    if ("omkar" == email) {
      emailErr.innerHTML = "";
      return true;
    } else {
      // alert("Email field is required");
      // emailErr.innerHTML="Email field is required";
      loginForm.EmailId.focus();
      loginForm.EmailId.value = "";
      emailErr.innerHTML = "sorry. This email not registered. Please sign up.";
      // return false;
    }
  } else {
    loginForm.EmailId.focus();
  }
}

// --------onblur and onfocus for password-----------

function onFocusPassword() {
  // console.log("focus password");
  const passErr = document.getElementById("password-error");
  const pass = loginForm.password.value;

  if (pass.length === 0) {
    passErr.innerHTML = "Password field is required";
    loginForm.password.focus();
  }
}

function onBlurPassword() {
  // console.log("blur password");
  const passErr = document.getElementById("password-error");
  const pass = loginForm.password.value;

  if (pass.length > 0) {
    if (pass == "omkar") {
      passErr.innerHTML = "";
      return true;
    } else {
      loginForm.password.focus();
      passErr.innerHTML = "password incorrect";
      loginForm.password.value = "";
      // return false;
    }
  } else {
    loginForm.password.focus();
  }
}

// -------check user Credential and login to website-------

function submitForm() {
  // alert("hello")
  // const email = loginForm.EmailId.value;
  // console.log(email)
  // const pass = loginForm.password.value;
  // console.log(password)

  //const emailErr = document.getElementById("email-error");
  // const passErr = document.getElementById("password-error");
  // const form = document.querySelector(".content");

  if (onBlurEmail()) {
    console.log("email");
    if (onBlurPassword()) {
      console.log("password");
      // loginForm.password.value="";
      // loginForm.EmailId.value = "";
      // form.classList.add("hide-item");
      signIn(event);
      return true;
    } else {
      console.log("not password");
      loginForm.password.focus();
      return false;
    }
  } else {
    console.log("not email");
    loginForm.EmailId.focus();
    return false;
  }
}

// ----------------display signin form after click on start browsing---------------
const start = document.getElementById("start-browsing");
start.addEventListener("click", () => {
  const form = document.querySelector(".content");
  form.classList.remove("hide-item");
});

// ------------------hide signin form after click on cross btn-------------
const closeBtn = document.querySelector(".cls-btn");
closeBtn.addEventListener("click", () => {
  const form = document.querySelector(".content");
  form.classList.add("hide-item");
});

//--------------show signup form after click on signup now-------------
const signup_form = document.getElementById("signup-anchor");
signup_form.addEventListener("click", () =>{
  const form = document.querySelector(".content");
  form.classList.add("hide-item");
  window.open("signup.html", "_parent");
  // const form2 = document.querySelector(".main-div-signup");
  // form2.classList.remove("hide-item");
})

// ------------------hide credential form after click on  btn-------------
const credClose = document.querySelector("#credClose");
credClose.addEventListener("click", () => {
  const form = document.querySelector(".credential");
  form.classList.add("hide-item");
});




//----------------show login form after click on CreateAccBtn---------------
// const createBtn = document.getElementById("CreateAccBtn");
// createBtn.addEventListener("click", () => {
//   const form2 = document.querySelector(".main-div-signup");
//   form2.classList.add("hide-item");
// })

