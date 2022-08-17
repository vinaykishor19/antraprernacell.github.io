'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}





/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});



var myindex = 0;
carousel();
function carousel() {

  var x = document.getElementsByClassName("mySlides");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none"
  }
  myindex++;
  if (myindex > x.length) { myindex = 1 }
  x[myindex - 1].style.display = "block";
  setTimeout(carousel, 2000);
}


document.addEventListener("DOMContentLoaded", function (event) {
  jQuery('#example3_2402').sliderPro({
    //width
    width: 360,

    //height
    height: 270,

    //autoplay
    autoplay: true,
    autoplayOnHover: 'none',
    autoplayDelay: 5000,


    arrows: true,
    buttons: true,
    smallSize: 500,
    mediumSize: 1000,
    largeSize: 3000,
    fade: false,

    //thumbnail
    thumbnailArrows: true,
    thumbnailWidth: 120,
    thumbnailHeight: 120,
    thumbnailsPosition: 'bottom',
    centerImage: true,
    imageScaleMode: 'cover',
    allowScaleUp: true,
    startSlide: 0,
    loop: true,
    slideDistance: 5,
    autoplayDirection: 'normal',
    touchSwipe: true,
    fullScreen: true,
  });
});
