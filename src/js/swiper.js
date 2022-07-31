export const swiper =
    () => `Sensible webpack 5 boilerplate using Babel and PostCSS with a hot dev server 
  and an optimized production build.`

let slideIndex = 1;
showSlides(slideIndex);

document.querySelector(".prev").addEventListener("click", () => {
    plusSlides(-1)
});
document.querySelector(".next").addEventListener("click", () => {
    plusSlides(-1)
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

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
        dots[0].addEventListener("click", () => {currentSlide(1)})
        dots[1].addEventListener("click", () => {currentSlide(2)})
        dots[2].addEventListener("click", () => {currentSlide(3)})
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}