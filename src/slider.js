let slideIndex = 1;

let navOpen = () => {};

let stylesControl = (control) => {
  showSlide((slideIndex += control));
};

let currentSlide = (number) => {
  showSlide(slideIndex);
};

function showSlide(number) {
  let slide = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (number > slide.length) {
    slideIndex = 1;
  }
  if (number < 1) {
    slideIndex = slide.length;
  }
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";
  slide[slideIndex - 1].style.display = "block";
}

function dotControl(dotNumber) {
  slideIndex = dotNumber;
  showSlide(slideIndex);
}

showSlide(slideIndex);
