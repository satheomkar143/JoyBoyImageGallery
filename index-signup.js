
// -----------------------signup form registration------------------

// ------- create account page------------------------

const createAcc = document.getElementById("CreateAccBtn");
//  var userId = "omkar";
//  var userPass = "omkar";

// -------create regular expressions---------
const firstName = "(^[A-Z]{1,1})+([a-z]{1,10})$";
const lastName = "(^[A-Z]{1,1})+([a-z]{1,10})$";
const emailRegex = "^[A-Za-z0-9_]{3,}@[A-za-z]{3,}[.]{1}[A-Za-z.]{2,6}$";
const passwordRegex = "^(?=.*[0-9])(?=.*[!@#$%^&*])[0-9a-zA-z!@#$%^&*]{8,}$";
const mobileRegex = "(^[6-9]{1,1})+([0-9]{9,9})$";

//---------  add remove check box------
function rightCheck(check) {
  check.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  check.style.color = "rgba(255, 255, 0, 0.75)";
}
function crossCheck(check) {
  check.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>";
  check.style.color = "red";
}

// ---------------onblur and onfocus for first name------------

function onFocusFirst() {
  const err = document.getElementById("errorFirst");
  // err.innerHTML="hi omkar"
  const check = document.getElementById("checkFirst");
  // check.innerHTML="check";
  const name = signupForm.FirstName.value;
  // console.log(name);
  if (name.length === 0) {
    err.innerHTML = "First Name is required";
    crossCheck(check);
    signupForm.FirstName.focus();
  }
}

function onBlurFirst() {
  const err = document.getElementById("errorFirst");
  const check = document.getElementById("checkFirst");
  const name = signupForm.FirstName.value;

  if (name.length > 0) {
    if (name.length >= 2) {
      if (name.match(firstName)) {
        err.innerHTML = "";
        rightCheck(check);
        return true;
      } else {
        signupForm.FirstName.focus();
        signupForm.FirstName.value = "";
        err.innerHTML =
          "only character and first character must be Capital letter";
        crossCheck(check);
      }
    } else {
      err.innerHTML = "minimum 2 Characters required";
      crossCheck(check);
      signupForm.FirstName.focus();
    }
  } else {
    crossCheck(check);
    signupForm.FirstName.focus();
  }
}

// ---------------onblur and onfocus for last name------------

function onFocusLast() {
  const err = document.getElementById("errorLast");
  const check = document.getElementById("checkLast");
  const name = signupForm.LastName.value;

  if (name.length === 0) {
    err.innerHTML = "Last Name is required";
    crossCheck(check);
    signupForm.LastName.focus();
  }
}

function onBlurLast() {
  const err = document.getElementById("errorLast");
  const check = document.getElementById("checkLast");
  const name = signupForm.LastName.value;

  if (name.length > 0) {
    if (name.length >= 2) {
      if (name.match(lastName)) {
        err.innerHTML = "";
        rightCheck(check);
        return true;
      } else {
        signupForm.LastName.focus();
        signupForm.LastName.value = "";
        err.innerHTML =
          "only character and first character must be Capital letter";
        crossCheck(check);
      }
    } else {
      err.innerHTML = "minimum 2 Characters required";
      crossCheck(check);
      signupForm.LastName.focus();
    }
  } else {
    crossCheck(check);
    signupForm.LastName.focus();
  }
}

// ---------------onblur and onfocus for Email------------

function onFocusEmail() {
  const err = document.getElementById("errorEmail");
  const check = document.getElementById("checkEmail");
  const email = signupForm.Email.value;

  if (email.length === 0) {
    err.innerHTML = "Email Id is required";
    crossCheck(check);
    signupForm.Email.focus();
  }
}

function onBlurEmail() {
  const err = document.getElementById("errorEmail");
  const check = document.getElementById("checkEmail");
  const email = signupForm.Email.value;

  if (email.length > 0) {
    if (email.length >= 10) {
      if (email.match(emailRegex)) {
        err.innerHTML = "";
        rightCheck(check);
        return true;
      } else {
        signupForm.Email.focus();
        signupForm.Email.value = "";
        err.innerHTML = "please enter correct email address";
        crossCheck(check);
      }
    } else {
      err.innerHTML = "minimum 10 Characters required";
      crossCheck(check);
      signupForm.Email.focus();
    }
  } else {
    crossCheck(check);
    signupForm.Email.focus();
  }
}

// ---------------onblur and onfocus for password------------

function onFocusPassword() {
  const err = document.getElementById("errorPassword");
  const check = document.getElementById("checkPassword");
  const password = signupForm.Password.value;

  if (password.length === 0) {
    err.innerHTML = "Password is required";
    crossCheck(check);
    signupForm.Password.focus();
  }
}

function onBlurPassword() {
  const err = document.getElementById("errorPassword");
  const check = document.getElementById("checkPassword");
  const password = signupForm.Password.value;

  if (password.length > 0) {
    if (password.length >= 8) {
      if (password.match(passwordRegex)) {
        err.innerHTML = "";
        rightCheck(check);
        return true;
      } else {
        signupForm.Password.focus();
        signupForm.Password.value = "";
        err.innerHTML =
          "password must contain at least one character, number and symbol";
        crossCheck(check);
      }
    } else {
      err.innerHTML = "password is too short. minimum length is 8";
      crossCheck(check);
      signupForm.Password.focus();
    }
  } else {
    crossCheck(check);
    signupForm.Password.focus();
  }
}

// ---------------onblur and onfocus for conform password------------

function onFocusConPassword() {
  const err = document.getElementById("errorConPassword");
  const check = document.getElementById("checkConPassword");
  const confPass = signupForm.ConfPass.value;

  if (confPass.length === 0) {
    err.innerHTML = "please enter password again";
    crossCheck(check);
    //signupForm.ConfPass.focus();
  }
}

function onBlurConPassword() {
  const err = document.getElementById("errorConPassword");
  const check = document.getElementById("checkConPassword");
  const confPass = signupForm.ConfPass.value;
  const password = signupForm.Password.value;

  if (confPass.length > 0) {
    if (confPass === password) {
      err.innerHTML = "";
      rightCheck(check);
      return true;
    } else {
      signupForm.ConfPass.value = "";
      err.innerHTML = "password must be same";
      crossCheck(check);
      signupForm.ConfPass.focus();
    }
  } else {
    crossCheck(check);
   // signupForm.ConfPass.focus();
  }
}

// ---------------onblur and onfocus for mobile number------------

function onFocusMobile() {
  const err = document.getElementById("errorMobile");
  const check = document.getElementById("checkMobile");
  const mobile = signupForm.Mobile.value;

  if (mobile.length === 0) {
    err.innerHTML = "mobile number is required";
    crossCheck(check);
    signupForm.Mobile.focus();
  }
}

function onBlurMobile() {
  const err = document.getElementById("errorMobile");
  const check = document.getElementById("checkMobile");
  const mobile = signupForm.Mobile.value;

  if (mobile.length > 0) {
    if (mobile.length === 10) {
      if (mobile.match(mobileRegex)) {
        err.innerHTML = "";
        rightCheck(check);
        return true;
      } else {
        signupForm.Mobile.focus();
        signupForm.Mobile.value = "";
        err.innerHTML = "please enter correct mobile number";
        crossCheck(check);
      }
    } else {
      err.innerHTML = "10 digits must be required";
      crossCheck(check);
      signupForm.Mobile.focus();
    }
  } else {
    crossCheck(check);
    signupForm.Mobile.focus();
  }
}

// ---------------onblur and onfocus for birth date------------

function onFocusBirth() {
  const err = document.getElementById("errorBirth");
  const check = document.getElementById("checkBirth");
  const birth = signupForm.BirthDate.value;
  // console.log("b="+birth);
  if (birth.length === 0) {
    err.innerHTML = "age is required";
    crossCheck(check);
    signupForm.BirthDate.focus();
  }
}

function onBlurBirth() {
  const err = document.getElementById("errorBirth");
  const check = document.getElementById("checkBirth");
  const birth = signupForm.BirthDate.value;

  if (birth.length > 0) {
    const year = birth.substring(0, 4);
    const date = new Date();
    const NewYear = date.getFullYear();
    const age = NewYear - year;

    if (age >= 18) {
      err.innerHTML = "";
      rightCheck(check);
      return true;
    } else {
      signupForm.BirthDate.focus();
      signupForm.BirthDate.value = "";
      err.innerHTML = "your age is less than 18. you are not eligible.";
      crossCheck(check);
    }
  } else {
    crossCheck(check);
    signupForm.BirthDate.focus();
  }
}

// ---------------function to check gender------------

function checkGender() {
  var count = 0;
  const gender = document.querySelectorAll('input[name="Gender"]');

  const err = document.getElementById("errorGender");
  const check = document.getElementById("checkGender");

  for (const gen of gender) {
    if (gen.checked) {
      // console.log("check")
      count++;
    }
  }
  if (count > 0) {
    err.innerHTML = "";
    rightCheck(check);
    return true;
  } else {
    err.innerHTML = "select gender";
    crossCheck(check);
    return false;
  }
}
// checkGender();

// ---------------function to fav anime------------

function favAnime() {
  var count = 0;
  const Animies = document.getElementsByName("Anime");

  const err = document.getElementById("errorAnime");
  const check = document.getElementById("checkAnime");

  for (let i = 0; i < Animies.length; i++) {
    if (Animies[i].checked) {
      count++;
    }
  }

  if (count > 0) {
    // console.log("cnt="+count)
    err.innerHTML = "";
    rightCheck(check);
    return true;
  } else {
    // console.log("nnot selected")
    err.innerHTML = "Atleast one selected";
    crossCheck(check);
    return false;
  }
}

// favAnime()

// -----------check all field at submit--------------

function submitSignUpForm() {
  // alert("hello")

  if (onBlurFirst()) {
    if (onBlurLast()) {
      if (onBlurEmail()) {
        if (onBlurPassword()) {
          if (onBlurConPassword()) {
            if (onBlurMobile()) {
              if (onBlurBirth()) {
                if (checkGender()) {
                  // const popupDiv = document.getElementById("CreateAccBtn");
                  // popupDiv.addEventListener("click", funPopup);
                  const changeName= document.querySelector(".welcome-h1");
                  changeName.innerHTML=`Hi ${signupForm.FirstName.value}. Sign up successful.`
                  signUp(event);
                  console.log("form successfull")
                  return true;
                } else {
                  console.log("form unsucceeesful")
                  checkGender();
                  return false;
                }
              } else {
                signupForm.BirthDate.focus();
                return false;
              }
            } else {
              signupForm.Mobile.focus();
              return false;
            }
          } else {
            signupForm.ConfPass.focus();
            return false;
          }
        } else {
          signupForm.Password.focus();
          return false;
        }
      } else {
        signupForm.Email.focus();
        return false;
      }
    } else {
      signupForm.LastName.focus();
      return false;
    }
  } else {
    signupForm.FirstName.focus();
    return false;
  }
}
// -------for popup massage--------
function funPopup(){
  // alert("success");
  const signUp_Form = document.querySelector(".main-div");
  signUp_Form.classList.add("hide-item");

  const welcomePopup = document.querySelector(".welcome");
  welcomePopup.classList.remove("hide-item");
}

function duplicateEmail(){
  const signUp_Form = document.querySelector(".main-div");
  signUp_Form.classList.add("hide-item");

  const duplicate = document.querySelector(".duplicate");
  duplicate.classList.remove("hide-item");
}


// --------------close welcome popup page after click on close button----------
// const welcomeClsBtn = document.getElementById("welcomeClose");
// welcomeClsBtn.addEventListener("click", () =>{
//   const welcomePopup = document.querySelector(".welcome");
//   welcomePopup.classList.add("hide-item");
// })

//-------------------submit form after click on popup button-------------
const welcomeClsBtn = document.getElementById("welcomeClose");
welcomeClsBtn.addEventListener("click", () =>{
  document.querySelector(".main-div").submit();
})


// ----------show signup form after click on duplicate email btn--------
const duplicateClose = document.getElementById("duplicateClose");
duplicateClose.addEventListener("click", () =>{
  const signUp_Form = document.querySelector(".main-div");
  signUp_Form.classList.remove("hide-item");

  const duplicate = document.querySelector(".duplicate");
  duplicate.classList.add("hide-item");
})
