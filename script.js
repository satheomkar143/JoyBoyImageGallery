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

const showPopup =(item)=>{
  let popup = document.querySelector(".img-popup-window");
  const downloadBtn = document.querySelector(".download-btn");
  const closeBtn = document.querySelector(".close-btn");
  const image= document.querySelector(".large-img");

  popup.classList.remove("hidden");
  downloadBtn.href = item.links.html;
  image.src = item.urls.regular;

  closeBtn.addEventListener("click",()=>{
    popup.classList.add("hidden");
  })
}

const preBtn = document.querySelector(".pre-btn");
const nextBtn = document.querySelector(".next-btn");

preBtn.addEventListener("click",()=>{
  if(currentImage>0){
    currentImage--;
    showPopup(allImages[currentImage]) ;
  }
})

nextBtn.addEventListener("click",()=>{
  if(currentImage<allImages.length-1){
    currentImage++;
    showPopup(allImages[currentImage]) ;
  }
})

getImages()
