function fun() {
  // alert("form Submitted");
  submitForm.classList.remove("hide-item");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const submitForm = document.querySelector(".submit");

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
  submitForm.classList.add("hide-item");
  form.submit();
});

// ------------contact me form --------------------

function setData() {
  let formData = JSON.parse(localStorage.getItem("formData")) || [];

  JSON.parse(localStorage.getItem("formData")).some((data, index) =>
    console.log(data.email + "index=" + index)
  );
}

// -----------------------------contact us form predifine value-------------------

let formData = JSON.parse(localStorage.getItem("formData"));
let userCredential = JSON.parse(localStorage.getItem("userCredential"));
let userNumber;

let findUserId =
  formData.length &&
  JSON.parse(localStorage.getItem("formData")).some((data, index) => {
    if (data.email == userCredential[0].email) {
      userNumber = index;
    }
  });

const Name = document.querySelector("#name");
const email = document.querySelector("#email");
const mobile = document.querySelector("#mobile");

function setUserData() {
  Name.value = formData[userNumber].fname + " " + formData[userNumber].lname;
  email.value = formData[userNumber].email;
  mobile.value = formData[userNumber].mobile;
}

setUserData();
