let slideIndex = 1;
let prevSlide;
let isAnimating = false;

let stylesControl = (control) => {
  if (!isAnimating) {
    isAnimating = true;
    prevSlide = slideIndex;
    slideIndex += control;
    changeSlide_btn(prevSlide, -control);
    setTimeout(() => {
      isAnimating = false;
    }, 700);
  }
};

function dotControl(dotNumber) {
  if (!isAnimating) {
    isAnimating = true;
    prevSlide = slideIndex;
    slideIndex = dotNumber;
    changeSlide(slideIndex);
    changeSlide(prevSlide);
    setTimeout(() => {
      isAnimating = false;
    }, 700);
  }
}

function changeSlide(number) {
  let slide = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (slideIndex > slide.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slide.length;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  dots[slideIndex - 1].className += " active";
  let start = Date.now();

  let right;
  if (slideIndex > number) {
    right = -1;
  } else {
    right = 1;
  }

  let timer = setInterval(() => {
    let timePased = Date.now() - start;
    slide[number - 1].style.left = right * (timePased / 3) + "%";

    if (timePased > 400) {
      slide[number - 1].style.display = "none";
      slide[number - 1].style.left = "0";

      slide[slideIndex - 1].style.display = "block";
      slide[slideIndex - 1].style.left =
        -1 * right * 100 + (right * (timePased - 400)) / 3 + "%";
      if (timePased > 700) {
        slide[slideIndex - 1].style.left = 0;
        clearInterval(timer);
      }
    }
  }, 20);
}

function changeSlide_btn(number, right) {
  let slide = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (slideIndex > slide.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slide.length;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  dots[slideIndex - 1].className += " active";
  let start = Date.now();

  let timer = setInterval(() => {
    let timePased = Date.now() - start;
    slide[number - 1].style.left = right * (timePased / 3) + "%";

    if (timePased > 400) {
      slide[number - 1].style.display = "none";
      slide[number - 1].style.left = "0";

      slide[slideIndex - 1].style.display = "block";
      slide[slideIndex - 1].style.left =
        -1 * right * 100 + (right * (timePased - 400)) / 3 + "%";
      if (timePased > 700) {
        slide[slideIndex - 1].style.left = 0;
        clearInterval(timer);
      }
    }
  }, 20);
}
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

showSlide(slideIndex);
