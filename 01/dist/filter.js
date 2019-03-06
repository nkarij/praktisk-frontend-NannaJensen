document.addEventListener('DOMContentLoaded', () => {
  
    // LAV ET FILTER, SOM KUN VISER DE FOTOS SOM HØRER TIL CATEGORIES
    // her skal hentes 2 x fetch, fra hhv. loadallproducts + category.
    // husk at lave en async timer-betingelse.
    // on click (category menu item) if (event.target.className == class {
    //  if data1.category == data2.name >
    // listitems.innerHtml = "" + vis elementer
    // her skrives globale variabler
    let finishedFetching = 0;
    let timerCounts = 0;
    let allProducts;
    let categories;
    let filteredProducts  = [];
    const allProductsGalleryElement = document.querySelector(".all-products-gallery");

    // her henter jeg mine fetches.
    fetch("data/products.json")
    // mellem-then() skal altid skrives på denne/samme måde
    .then((response)=>{
        // console.log(response);
        return response.json();
    })
    .then((data)=>{
        allProducts = data;
        // console.log(data1);
        fetchIsDone();
    });
    timerCounts++;
    

    fetch("data/categories.json")
    // mellem-then() skal altid skrives på denne/samme måde
    .then((response)=>{
        // console.log(response);
        return response.json();
    })
    .then((data)=>{
        categories = data;
        // console.log(data2);
        fetchIsDone();
    });
    timerCounts++;
    
    const categoryMenuList = document.querySelector(".category-menu");

    function fetchIsDone() {
        finishedFetching++;
        if (finishedFetching == timerCounts) {
            console.log("proceed");
            // her må jeg kalde mine hjælpefunktioner mm...
            // når categoryName er tomt = må den loope alle producter [dette er min egen regel]
            // filterByCategory(""); 

            categoryMenuList.addEventListener('click', function(){
                filterByCategory(event.target.innerHTML);
            });
        }
    }

    function filterByCategory(categoryName){
        console.log("kører filterByCategory");
        // console.log(event);
            // console.log(event.target.innerHTML);
        filteredProducts = [];

        // genererer nyt array, filtrerer produkterne 
        categories.forEach((category) => {
            if(categoryName == "" || category.name == categoryName) {
                console.log("har fundet kategori" + category.name);
                // loop data1.category
                allProducts.forEach(item => {
                    // console.log(item);
                    if(categoryName == "" || item.category == category.id) {
                        // console.log(item);
                        filteredProducts.push(item);
                        // her kan jeg evt sende item.image_path osv med i en createBlaBlaBla.
                        
                    }
                });
            }
        });

        // rydder galleriet for elementer/andet
        allProductsGalleryElement.innerHTML = "";

        // generer html-elementer vha det nye array (filtered products)
        filteredProducts.forEach(product => {
            // console.log(product);
            let listItemElement = document.createElement("li");
            // element.classList.add("link");
            let linkElement = document.createElement("a");
            // linkElement.setAttribute('href', product.image_path);
                     // element.classList.add("link");
            let imageElement = document.createElement("img");

            linkElement.appendChild(imageElement);

            listItemElement.appendChild(linkElement);

            allProductsGalleryElement.appendChild(listItemElement);

            imageElement.src = product.image_path;

        });

        // appendImage();
        // console.log(filteredProducts);
    }



    function appendImage() {
        // find links-klasse i loadall-products.js
        let productLinksArray = document.querySelectorAll(".link");
        // console.log(productLinksArray);
        productLinksArray.forEach(link => {
            link.innerHTML = "";
            // console.log(link);
            appendChild(link);
            
            function appendChild(productlinkElement) {
            
                // for (let i = 0; i < newData1Array.length; i++){
                //     console.log(i);
                    //productLinkElement.appendChild(createNewImage("img", ".newclass"));
                    console.log(productlinkElement);
                // }
            }

        }); 
    }


    function createNewImage(tags, klasse){
        filteredProducts.forEach(object => {
            // generate new image
            let element = document.createElement(tags);
            element.classList.add(klasse);
            element.setAttribute('src', object.image_path);
            return element;
        });
    }

});