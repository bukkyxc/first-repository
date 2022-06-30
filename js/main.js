const openMenu = document.querySelector(".ri-menu-line")
const closeMenu = document.querySelector(".ri-close-circle-line")
const navBar = document.querySelector(".list")

openMenu.addEventListener("click", function(){
  navBar.style.right = "0"
})

closeMenu.addEventListener("click", function(){
  navBar.style.right = "-200px"
})

//Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.style.top = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}