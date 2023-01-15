let slideIndex = 1;

const user = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
}

function login() {
  window.localStorage.setItem('email', JSON.stringify(document.getElementById("emaili").innerText));
  this.user.email = 'lorikmanaj';
  //window.localStorage.setItem('password', JSON.stringify(password));
  console.log(user.email);
};

function loadDefaults() {


document.getElementById("user").innerHTML = localStorage.getItem(email); 
}

function register() {

}

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}