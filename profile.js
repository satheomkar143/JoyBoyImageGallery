const editBtn = document.querySelector(".edit-info");
const saveBtn = document.querySelector(".save-info");
const displayDiv = document.querySelector(".display-info");
const editDiv = document.querySelector(".edit-Info");

editBtn.addEventListener("click", () => {
  saveBtn.classList.remove("hide-info");
  displayDiv.classList.add("hide-info");
  editDiv.classList.remove("hide-info");
});

saveBtn.addEventListener("click", () => {
  displayDiv.classList.remove("hide-info");
  editDiv.classList.add("hide-info");
  saveBtn.classList.add("hide-info");
});

// ---------------------------set user card data------------------------------

let formData = JSON.parse(localStorage.getItem("formData"));
let userCredential = JSON.parse(localStorage.getItem("userCredential"));
let userNumber;

let findUserId =
formData.length &&
JSON.parse(localStorage.getItem("formData")).some(
    (data,index) =>
        {if(data.email == userCredential[0].email){
          userNumber=index;
        }}
);

const firstName = document.querySelector(".first-name-disp");
const LastName = document.querySelector(".last-name-disp");
const email = document.querySelector(".email-disp");
const password = document.querySelector(".password-disp");
const mobile = document.querySelector(".mobile-disp");
const birthDate = document.querySelector(".birthdate-disp");

// --------------set user data------------

const userName  = document.querySelector(".user-name");
userName.innerHTML = formData[userNumber].fname;

const photo = document.querySelector(".photo");

if(formData[userNumber].gender == 'Male'){
  photo.innerHTML =  `<i class="fa-solid fa-user-tie"></i>`
}else{
  photo.innerHTML = `<i class="fa-solid fa-user"></i>`
}

firstName.innerHTML = formData[userNumber].fname;
LastName.innerHTML = formData[userNumber].lname;
email.innerHTML = formData[userNumber].email;
password.innerHTML = formData[userNumber].pwd;
mobile.innerHTML = formData[userNumber].mobile;
birthDate.innerHTML = formData[userNumber].birthDate;

// --------------set user data end------------











// -------------------------------------------------
// ----------------carousel----------------
const access_key = "rNVwC0_oge_yeUsY4qrMIPsRztIj8yTVI-sezUu4LxM";
const random_photo_URL = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=20`;

let currentImage = 0;
const carasol = document.querySelector(".img-carasol");
let allImages;

const getImages = () => {
  fetch(random_photo_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      allImages = data;
      // makeImages(allImages);
    });
};

const makeImages = (data) => {

    // console.log(data);

    let img = document.createElement("img");
    img.src = data.urls.regular;
    img.className = "large-img";
    carasol.innerHTML = "";
    carasol.appendChild(img);

};

function update() {
  if (currentImage < allImages.length - 1) {
    currentImage++;
    console.log("in update" + currentImage);
    makeImages(allImages[currentImage]);
  } else {
    currentImage = 0;
  }
}

getImages();
var interval;

function start() {
  interval = setInterval(update, 3000);
  console.log("in function update");
}
// start();

function stop() {
  console.log("stopping");
  clearInterval(interval);
}

const clickBtn = document.querySelector(".clickme");
const stopBtn = document.querySelector(".stopme");

clickBtn.addEventListener("click", () => {
  // alert("click me!");
  start();
  clickBtn.classList.add("hide-info");
  stopBtn.classList.remove("hide-info");
});

stopBtn.addEventListener("click", () => {
  // alert("click me!");
  stop();
  carasol.innerHTML = "";
  clickBtn.classList.remove("hide-info");
  stopBtn.classList.add("hide-info");
});
