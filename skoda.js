let slideIndex = 1;
showSlides(slideIndex, "modelSlide", "dotSwitch");
showSlides(slideIndex,"complectationSlide", "complectationSwitch");

window.onload = function () {
    window.setTimeout(function () {
        document.body.classList.add('loaded');
    }, 2500);
}

function plusSlides(n) {
    showSlides(slideIndex += n, "modelSlide", "dotSwitch");
}

function currentSlide(n, slide, switcher) {
    showSlides(slideIndex = n, slide, switcher);
}

function showSlides(n, slide, switcher) {
    let i;
    let slides = document.getElementsByClassName(slide);
    let dots = document.getElementsByClassName(switcher);
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