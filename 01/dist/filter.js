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
    const categoryMenuList = document.querySelector(".category-menu");

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
    
    

    function fetchIsDone() {
        finishedFetching++;
        if (finishedFetching == timerCounts) {
            console.log("proceed");
            // her må jeg kalde mine hjælpefunktioner mm...
            // når categoryName er tomt = må den loope alle producter [dette er min egen regel]
            filterByCategory("empty");

            // categoryMenuList.addEventListener('click', function(){
            //     filterByCategory(event.target.innerHTML);
            // });

            let categoryMenuLinksArray = categoryMenuList.querySelectorAll("a");
            categoryMenuLinksArray.forEach(link => {
                console.log(link.dataset.categoryid);
                link.addEventListener('click', function(){
                    // console.log("har klikket på et link")
                    filterByCategory(link.dataset.categoryid);
                });
            });
        }
    }

    function filterByCategory(categoryID){
        console.log(categoryID);
        console.log("kører filterByCategory");
        // console.log(event);
            // console.log(event.target.innerHTML);
        filteredProducts = [];

        // genererer nyt array, filtrerer produkterne 
        categories.forEach((category) => {
            if(categoryID == "empty" || category.id == categoryID) {
                console.log("har fundet kategori" + category.name);
                // loop data1.category
                allProducts.forEach(item => {
                    // console.log(item);
                    if(categoryID == "empty" || item.category == category.id) {
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
            listItemElement.classList.add("category-product-item");
            let linkElement = document.createElement("a");
            linkElement.setAttribute('href', product.image_path);
            linkElement.classList.add("category-product-link");
            let imageElement = document.createElement("img");
            imageElement.classList.add("category-product-image");
            // appending to UL.
            linkElement.appendChild(imageElement);
            listItemElement.appendChild(linkElement);
            allProductsGalleryElement.appendChild(listItemElement);
            imageElement.src = product.image_path;

        });

        // appendImage();
        // console.log(filteredProducts);
    }

});