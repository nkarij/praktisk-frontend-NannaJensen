document.addEventListener('DOMContentLoaded' function(){

let slideIndex = 0;
let slideImageArray =  images;

function hideslides(){
    for (i = 0; i < slides.length; i++) {
        slideImageArray[i].style.display = "none"; 
    }
}

setTimeout(showfeaturedslide, 2000);

function showfeaturedslide() {
    // ikke sikker på at den skal stå her...
    hideslides();
    // lægger 1 til slideIndex
    slideIndex++;
    slideImageArray.forEach(slideImage => {
        if(slideIndex == slideImage && slideIndex < slideImageArray.length) {
            slide.style.display = "block"
        }
        // her skal være en regel som sørger for at stille slideIndex = 0, 
        // hvis slideimageArray.lenght -1
    });
}
// hideslides();

// showFeaturedSlide();





var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    // det her forstår jeg ikke en skid af...
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
    
    }
});