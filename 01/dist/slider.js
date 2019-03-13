document.addEventListener('DOMContentLoaded', function(){


var slideIndex = 0;
let sliderContainerElement = document.querySelector(".slider-container");

    fetch("data/sliderimages.json")
    // mellem-then() skal altid skrives på denne/samme måde
    .then((response)=>{
        // console.log(response);
        return response.json();
    })
    .then((imagefolderdata)=>{
        // console.log(imagefolderdata);

        let imageFolder = imagefolderdata;
        // for-loop imagefolder[i].
        // for hvert i:
        // create divs med class slide
        // create imgs med class slide__image
        // sæt img.src = imagefolder[i];
        // append img to divs
        
        createSliderShowMarkup(imageFolder);
        function createSliderShowMarkup(imagefolder){
            for (i = 0; i < imagefolder.length; i++) {
                const imagePath = imageFolder[i];
                // console.log(imagePath);
                let slideWrapperElement = document.createElement("div");
                slideWrapperElement.classList.add("slide");
                let slideImageElement = document.createElement("img");
                slideImageElement.classList.add("slide__image");
                slideImageElement.src = imagePath;
                // console.log(slideImageElement.src);
                slideWrapperElement.appendChild(slideImageElement);
                sliderContainerElement.insertAdjacentElement('beforeend', slideWrapperElement);
            }
            // console.log(sliderContainerElement);
        }; 


        // Change image every 3 seconds
        setInterval(showFeaturedSlide, 3000); 

        function showFeaturedSlide() {
            let slideArray = document.querySelectorAll(".slide");
            slideIndex++;
            // console.log(slideIndex);
            if (slideIndex >= slideArray.length) {
                slideIndex = 0;
                } 
                hideAllSlides(slideArray);
                slideArray[slideIndex].style.display = "block"; 
        }

        function hideAllSlides(array){
            for (i = 0; i < array.length; i++) {
                array[i].style.display = "none"; 
                }
            }
    });

});


// <!-- let slideIndex = 0;
// let slideImageArray =  images;

// function hideslides(){
//     for (i = 0; i < slides.length; i++) {
//         slideImageArray[i].style.display = "none"; 
//     }
// }

// setTimeout(showfeaturedslide, 2000);

// function showfeaturedslide() {
//     // ikke sikker på at den skal stå her...
//     hideslides();
//     // lægger 1 til slideIndex
//     slideIndex++;
//     slideImageArray.forEach(slideImage => {
//         if(slideIndex == slideImage && slideIndex < slideImageArray.length) {
//             slide.style.display = "block"
//         }
//         // her skal være en regel som sørger for at stille slideIndex = 0, 
//         // hvis slideimageArray.lenght -1
//     });
// }
// hideslides();

// showFeaturedSlide(); -->





// var slideIndex = 0;
// showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"; 
//     }
//     slideIndex++;
//     // det her forstår jeg ikke en skid af...
//     if (slideIndex > slides.length) {slideIndex = 1} 
//     slides[slideIndex-1].style.display = "block"; 
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
    
//     }
