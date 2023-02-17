let slideIndex2 = 1;
showslides(slideIndex2);

// Next/previous controls
function plusslides(n) {
    showslides(slideIndex2 += n);
  }

// Thumbnail image controls
function currentSlide(n) {
  showslides(slideIndex2 = n);
}

function showslides(n) {
  let a;
  let slides2 = document.getElementsByClassName("proj_galery");
  let dots2 = document.getElementsByClassName("proj__dots_item");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (a = 0; a < slides2.length; a++) {
    slides2[a].style.display = "none";
  }
  for (a = 0; a < dots2.length; a++) {
    dots2[a].className = dots2[a].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "grid";
  dots2[slideIndex2-1].className += " active";
}