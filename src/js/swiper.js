export const swiper =
    () => `Sensible webpack 5 boilerplate using Babel and PostCSS with a hot dev server 
  and an optimized production build.`
let bg = document.querySelector(".swiper_wrapper");
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("wrapper_dot");

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        dots[0].addEventListener("click", () => {currentSlide(1)
            bg.style.background = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(../assets/bg_1.jpg)";
        });
        dots[1].addEventListener("click", () => {currentSlide(2)
            bg.style.background = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(../assets/bg_1.jpg)";
        });
        dots[2].addEventListener("click", () => {currentSlide(3)
            bg.style.background = "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../assets/bg_3.jpg)"
        });
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}