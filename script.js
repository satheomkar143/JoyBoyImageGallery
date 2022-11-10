// unsplash api
// documentation get random photo

let = searchParam = location.search.split("=").pop();
const access_key = "rNVwC0_oge_yeUsY4qrMIPsRztIj8yTVI-sezUu4LxM";
const random_photo_URL = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=60`;
let search_photo_URL = `https://api.unsplash.com/search/photos?client_id=${access_key}&query=${searchParam}&per_page=60`;

const gallery = document.querySelector(".gallery");

let allImages;
let currentImage = 0;

const getImages = () => {
  fetch(random_photo_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      allImages = data;
      makeImages(allImages);
    });
};

const searchImages = () => {
  fetch(search_photo_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      allImages = data.results;
      makeImages(allImages);
    });
};

const makeImages = (data) => {
  data.forEach((item, index) => {
    console.log(item);

    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = item.urls.regular;
    img.className = "gallery-img";
    div.appendChild(img);
    gallery.appendChild(div);

    // popup image
    img.addEventListener("click", () => {
      currentImage = index;
      showPopup(item);
    });
  });
};

const showPopup = (item) => {
  let popup = document.querySelector(".img-popup-window");
  const downloadBtn = document.querySelector(".download-btn");
  const closeBtn = document.querySelector(".close-btn");
  const image = document.querySelector(".large-img");

  popup.classList.remove("hidden");
  downloadBtn.href = item.links.html;
  image.src = item.urls.regular;

  closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
  });
};

const preBtn = document.querySelector(".pre-btn");
const nextBtn = document.querySelector(".next-btn");

preBtn.addEventListener("click", () => {
  if (currentImage > 0) {
    currentImage--;
    showPopup(allImages[currentImage]);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentImage < allImages.length - 1) {
    currentImage++;
    showPopup(allImages[currentImage]);
  }
});

if (searchParam == "") {
  getImages();
} else {
  searchImages();
}

// --------------create clock-----------
const clock = document.getElementById('clock');
const day= ['sun','mon','tue','wed','thu','fri','sat'];
function start() {
  interval = setInterval(function () {
    var d = new Date();
    var time = d.toLocaleTimeString();
    let getday = d.getDay();
    clock.innerHTML = day[getday]+' '+ time;
  }, 1000);
}
start();


//------------default search-----------
// const Experimental = document.getElementById("Experimental");
// Experimental.addEventListener("click", () => {
//   input = document.getElementById("search-input2");
//   alert("ok");
//    input.value="car";
//    //gallery.innerHTML="";
//  // searchParam="food";
//   // searchImages();
//    console.log()
//     // document.getElementById("main-form").submit();
// });




