const editBtn = document.querySelector(".edit-info");
const saveBtn = document.querySelector(".save-info");
const displayDiv = document.querySelector(".display-info");
const editDiv = document.querySelector(".edit-Info");

editBtn.addEventListener("click", () => {
  saveBtn.classList.remove("hide-info");
  displayDiv.classList.add("hide-info");
  editDiv.classList.remove("hide-info");
});

saveBtn.addEventListener("click", ()=>{
  displayDiv.classList.remove("hide-info");
  editDiv.classList.add("hide-info");
  saveBtn.classList.add("hide-info");
})