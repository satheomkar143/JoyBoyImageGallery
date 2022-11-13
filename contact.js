function fun(){
  // alert("form Submitted");
  submitForm.classList.remove("hide-item");
  
};

form.addEventListener('submit', (e) => {
e.preventDefault();
});

const submitForm = document.querySelector(".submit");

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click",()=>{
  submitForm.classList.add("hide-item");
  form.submit()
})


// ------------contact me form --------------------

function setData(){
  let formData = JSON.parse(localStorage.getItem("formData")) || [];

  JSON.parse(localStorage.getItem("formData")).some(
    (data,index) =>
      
      console.log(data.email + "index=" + index)
  );
}
