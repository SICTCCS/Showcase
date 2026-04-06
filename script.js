let slideIndex = [0];
let slideIndex2 = [0];
let slideIndex3 = [0];
let slideIndex4 = [0];
let slideIndex5 = [0];
let slideIndex6 = [0];
let slideIndex7 = [0];
let LBModSlideIndex = [0];
showSlides();
showSlides2();
showSlides3();
showSlides4();
showSlides5();
showSlides6();
showSlides7();
showSlidesLBMod();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4500); // Every 1000 counts as a second
}

function showSlides2() {
  let i;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("dot2");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {slideIndex2 = 1}    
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";  
  dots2[slideIndex2-1].className += " active";
  setTimeout(showSlides2, 4500); // Every 1000 counts as a second
}

function showSlides3() {
  let i;
  let slides3 = document.getElementsByClassName("mySlides3");
  let dots3 = document.getElementsByClassName("dot3");
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";  
  }
  slideIndex3++;
  if (slideIndex3 > slides3.length) {slideIndex3 = 1}    
  for (i = 0; i < dots3.length; i++) {
    dots3[i].className = dots3[i].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";  
  dots3[slideIndex3-1].className += " active";
  setTimeout(showSlides3, 4500); // Every 1000 counts as a second
}

function showSlides4() {
  let i;
  let slides4 = document.getElementsByClassName("mySlides4");
  let dots4 = document.getElementsByClassName("dot4");
  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";  
  }
  slideIndex4++;
  if (slideIndex4 > slides4.length) {slideIndex4 = 1}    
  for (i = 0; i < dots4.length; i++) {
    dots4[i].className = dots4[i].className.replace(" active", "");
  }
  console.log(slides4[slideIndex4-1]);
  slides4[slideIndex4-1].style.display = "block";  
  dots4[slideIndex4-1].className += " active";
  setTimeout(showSlides4, 4500); // Every 1000 counts as a second
}

function showSlidesLBMod() {
  let i;
  let slidesLBMod = document.getElementsByClassName("mySlidesLBMod");
  console.log(slidesLBMod)
  let dots2 = document.getElementsByClassName("dotLBMod");
  for (i = 0; i < slidesLBMod.length; i++) {
    slidesLBMod[i].style.display = "none";  
  }
  LBModSlideIndex++;
  if (LBModSlideIndex > slidesLBMod.length) {LBModSlideIndex = 1}    
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  console.log(slidesLBMod[LBModSlideIndex-1])
  console.log(LBModSlideIndex-1);
  slidesLBMod[LBModSlideIndex-1].style.display = "block";  
  dots2[LBModSlideIndex-1].className += " active";
  setTimeout(showSlidesLBMod, 4500); // Every 1000 counts as a second
}
function showSlides5() {
  let i;
  let slides5 = document.getElementsByClassName("mySlides5");
  let dots5 = document.getElementsByClassName("dot5");
  for (i = 0; i < slides5.length; i++) {
    slides5[i].style.display = "none";  
  }
  slideIndex5++;
  if (slideIndex5 > slides5.length) {slideIndex5 = 1}    
  for (i = 0; i < dots5.length; i++) {
    dots5[i].className = dots5[i].className.replace(" active", "");
  }
  slides5[slideIndex5-1].style.display = "block";  
  dots5[slideIndex5-1].className += " active";
  setTimeout(showSlides5, 4500); // Every 1000 counts as a second
}
function showSlides6() {
  let i;
  let slides6 = document.getElementsByClassName("mySlides6");
  let dots6 = document.getElementsByClassName("dot6");
  for (i = 0; i < slides6.length; i++) {
    slides6[i].style.display = "none";  
  }
  slideIndex6++;
  if (slideIndex6 > slides6.length) {slideIndex6 = 1}    
  for (i = 0; i < dots6.length; i++) {
    dots6[i].className = dots6[i].className.replace(" active", "");
  }
  slides6[slideIndex6-1].style.display = "block";  
  dots6[slideIndex6-1].className += " active";
  setTimeout(showSlides6, 4500); // Every 1000 counts as a second
}
function showSlides7() {
  let i;
  let slides7 = document.getElementsByClassName("mySlides7");
  let dots7 = document.getElementsByClassName("dot7");
  for (i = 0; i < slides7.length; i++) {
    slides7[i].style.display = "none";  
  }
  slideIndex7++;
  if (slideIndex7 > slides7.length) {slideIndex7 = 1}    
  for (i = 0; i < dots7.length; i++) {
    dots7[i].className = dots7[i].className.replace(" active", "");
  }
  slides7[slideIndex7-1].style.display = "block";  
  dots7[slideIndex7-1].className += " active";
  setTimeout(showSlides7, 4500); // Every 1000 counts as a second
}