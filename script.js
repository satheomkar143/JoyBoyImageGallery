// unsplash api
// documentation get random photo

const access_key = "rNVwC0_oge_yeUsY4qrMIPsRztIj8yTVI-sezUu4LxM";
const random_photo_URL = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=50`;

const gallery = document.querySelector(".gallery");
let allImages;
let currentImage=0;

const getImages = () => {
  fetch(random_photo_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      allImages = data;
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
    img.addEventListener("click",()=>{
      currentImage = index;
      showPopup(item);
    })
  });
};

getImages()
