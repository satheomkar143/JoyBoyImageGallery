// -----------------new sign up data----------------------

const signUp = (e) => {
    let fname = signupForm.FirstName.value,
    lname = signupForm.LastName.value,
    email = signupForm.Email.value,
    pwd = signupForm.Password.value,
    mobile = signupForm.Mobile.value,
    birthDate = signupForm.BirthDate.value;

    var ele = document.getElementsByName("Gender");
    var gender;

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) gender = ele[i].value;
    }

    let formData = JSON.parse(localStorage.getItem("formData")) || [];

    let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
        (data) =>
            data.email == email
    );

    if (!exist) {
    formData.push({ fname, lname, email, pwd, mobile, birthDate, gender});
    localStorage.setItem("formData", JSON.stringify(formData));
  
    console.log("Account Created.\n\nPlease Sign In using the link below.");
    // const popupDiv = document.getElementById("CreateAccBtn");
    // popupDiv.addEventListener("click", funPopup);
    funPopup();
  } else {
    console.log("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
    duplicateEmail();
  }
  e.preventDefault();
};

// --------------------sign in with existing user------------------------

function signIn(e) {
  let email = loginForm.EmailId.value,
    pwd = loginForm.password.value;
  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.email == email && data.pwd == pwd
    );
  if (!exist) {
    // alert("Incorrect login credentials");
    const formCred = document.querySelector(".credential");
    formCred.classList.remove("hide-item");
    const formSign = document.querySelector(".content");
    formSign.classList.add("hide-item");
  } else {
    userId();
    location.href = "website.html";
  }
  e.preventDefault();
}


// -------------------------store sign in user email and password--------------

function userId(){
  let email = loginForm.EmailId.value,
    pwd = loginForm.password.value;
  
    let userCredential = [];

    userCredential.push({email, pwd});
    localStorage.setItem("userCredential", JSON.stringify(userCredential));
    console.log("user data fetched successfully")
}