// Nav
const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const que = document.querySelector(".que")
const ques = document.querySelectorAll(".que")
const queBtn = document.querySelector(".que button")
const queBtns = document.querySelectorAll(".que button")

menuBtn.onclick = () => {
    items.classList.add("active");
    menuBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}
cancelBtn.onclick = () => {
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    cancelBtn.style.color = "#ff3d00";
}

// queBtn.addEventListener("click", function(){
//     que.classList.toggle("show")
// })

// queBtns.forEach(function(btn){
//     btn.addEventListener("click", function(){
//         que.classList.toggle("show")
//     })
// })
console.log(queBtn.parentElement.parentElement.nextElementSibling)

for (var i = 0; i < queBtns.length; i++) {
    queBtns[i].onclick = function() {
    //   this.classList.toggle("active");
      this.parentElement.parentElement.nextElementSibling.classList.toggle("show");
    };
  }
