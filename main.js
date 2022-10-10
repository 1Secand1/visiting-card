var offerBtn = document.getElementsByClassName('offer__btn');
var sectionBtn = document.getElementsByClassName('section__btn');
var par = document.getElementsByClassName('blur');
offerBtn[0].onclick = function() {
  par[0].classList.remove("inactive");
}
sectionBtn[0].onclick = function() {
  par[0].classList.add("inactive");
}








var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('slide');
  var dots = document.getElementsByClassName('dot');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

  }
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
var i = 1;
  setInterval(function(){
  currentSlide(i)
  i++;
  if(i == 5)
  {
   i = 1;
  }
},3000)