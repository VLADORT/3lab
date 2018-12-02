menu.onclick = function myFunction() {
    var x = document.getElementById('Topnav');

    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function Slide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var highlights = document.getElementsByClassName("highlight");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < highlights.length; i++) {
        highlights[i].className = highlights[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    highlights[slideIndex - 1].className += " active";
}