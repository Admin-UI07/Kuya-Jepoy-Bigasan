// navbar

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".navi");
    navBar.classList.toggle("active");
}

// image slider

const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId = null;

// initializeSlide();

document.addEventListener("DOMContentLoaded", initializeSlide);

function initializeSlide() {
    if(slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 2000);
    }
}

function showSLide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSLide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSLide(slideIndex);
}