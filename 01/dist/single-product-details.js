
fetch("data/products.json")
// mellem-then() skal altid skrives på denne/samme måde
.then((response)=>{
    // console.log(response);
    return response.json();
})
.then((data)=>{

// URLparameter,sendt med fra filter.js > filteredProducts.foreach =>.

let URLid = getAllUrlParams().id;
console.log(URLid);
let productArray = data;
const thumbnailListElement = document.querySelector(".single-thumbnails");
const featuredImage = document.querySelector(".single-image__src");
const priceElement = document.querySelector(".single-shop-price");
const valutaSymbol = "$";

    productArray.forEach(product => {
        if(URLid == product.id) {
            setPrice(priceElement, product.price, valutaSymbol);
            setImage(featuredImage, product.image_path);
            createThumbnailElements(product.thumbnail_array);
        }
    });

    setThumbnails();

    function createThumbnailElements(thumbnailArray){
        // let thumbnailArray = thumbnailArray;
        for(i in thumbnailArray) {
            let listItemElement = document.createElement("li");
            listItemElement.classList.add("single-thumbnails__item");
            let linkElement = document.createElement("a");
            linkElement.setAttribute('href', thumbnailArray[i]);
            linkElement.classList.add("single-thumbnails__link");
            let imageElement = document.createElement("img");
            imageElement.classList.add("single-thumbnail__image");
            imageElement.src = thumbnailArray[i];
            // appending to UL.
            linkElement.appendChild(imageElement);
            listItemElement.appendChild(linkElement);
            thumbnailListElement.appendChild(listItemElement);
        };

        // TODO: Her kunne jeg udskrive hovedbilledet som thumbnail
    }

    function setPrice(tag, price, valuta){
        tag.innerHTML = price + valuta;
    }

    function setImage(tag, imageSrc) {
        tag.src = imageSrc;
    }

    // denne virker rigtigt når der er 2 billeder. skal have fat i array

    function setThumbnails(){
        let thumbnailArray = document.querySelectorAll(".single-thumbnail__image");
        thumbnailArray.forEach(thumbnail => {
            thumbnail.addEventListener('click', function(event){
                event.preventDefault();
                // console.log(event);
                // console.log(thumbnail.src);
                changeImageByThumbnail(featuredImage, thumbnail.src);
            }, true);
        });
    }

    function changeImageByThumbnail(tag, imageSrc) {
        tag.src = imageSrc;
    }



    
});





