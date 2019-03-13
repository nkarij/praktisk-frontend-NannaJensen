document.addEventListener('DOMContentLoaded', () => {


    let finishedFetching = 0;
    let timerCounts = 0;
    // VARIABLEN HENTER DATA FRA PRODUCTS.JSON
    let allProducts;
    // VARIABLEN HENTER DATA FRA CATEGORIES.JSON
    let categoryData;
    // TOMT ARRAY
    let filteredProducts  = [];
    // her er mine URL-variabler tomme, dvs at jeg sender start-URL med
    let categoryURLids = "empty";
    // her tjekker jeg først at min URL ikke er tom, dvs at der er en id-variabel
    // og så overskriver jeg min categoryURLids med min get parameter funktion.
    // denne overskrivning sker v tryk på menulink m href (fordi siden reloader)
    let allURLParameters = getAllUrlParams();
    if(typeof allURLParameters.id !== "undefined") {
        categoryURLids = allURLParameters.id;
    }
    let valutaType = " $"

    // QUERY VARIABLER
    const allProductsGalleryElement = document.querySelector(".all-products-gallery");
    const categoryMenuList = document.querySelector(".category-menu");
    const urlStringSingleProductPage = "shop-singleproductview.html?id=";

    // her henter jeg alle producter.
    fetch("data/products.json")

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
    
    // her henter jeg kategorierne.
    fetch("data/categories.json")
   
    .then((response)=>{
        // console.log(response);
        return response.json();
    })
    .then((data)=>{
        categoryData = data;
        fetchIsDone();
    });
    timerCounts++;
    
    

    function fetchIsDone() {
        finishedFetching++;
        if (finishedFetching == timerCounts) {
            console.log("proceed");
            // her må jeg kalde mine hjælpefunktioner mm...

            // når filterByCategory() parametre er tom = må fun loope alle producter [dette er min egen regel]
            filterByCategory(categoryURLids);
        }
    }

    function filterByCategory(categoryURL){
        // console.log(categoryURL);
        filteredProducts = [];

        // genererer nyt array/categoryarray
        categoryData.forEach((category) => {
            // "empty" betyder at url er tom og derfor passes alle produkter
            if(categoryURL == "empty" || category.id == categoryURL) {
            // looper alle produkter || categoriens produkter
                allProducts.forEach(singleProduct => {
                    // console.log(singleProduct);
                    if(singleProduct.category == category.id) {
                        // console.log(singleProduct);
                        filteredProducts.push(singleProduct);
                        // console.log("produkt tilføjet");
                        // her kan jeg evt sende item.image_path osv med i en createBlaBlaBla.
                    }
                });
            }
        });

        // rydder galleriet for elementer/andet
        allProductsGalleryElement.innerHTML = "";

        // console.log(allProductsGalleryElement);

        // generer html-elementer vha det nye array (filtered products)
        filteredProducts.forEach(product => {
            let productItem = product;
            let listItemElement = document.createElement("li");
            listItemElement.classList.add("category-product");
            let linkElement = document.createElement("a");
            // her sender jeg productID til url...
            linkElement.setAttribute('href', product.id);
            linkElement.classList.add("category-product__link");
            // dette skulle sende product id til URLen? den refresher????
            linkElement.href = urlStringSingleProductPage + product.id;
            let imageElement = document.createElement("img");
            imageElement.classList.add("category-product__image");
            imageElement.src = product.image_path;
            // appending to UL.
            linkElement.appendChild(imageElement);
            listItemElement.appendChild(linkElement);
            allProductsGalleryElement.appendChild(listItemElement);
            // her kaldes funktioner som indsætter navn + pris + button.
            setAllProductsName(productItem, listItemElement);
            setAllProductsPrice(productItem, listItemElement);
            addToCartButton(listItemElement);
        });

        function setAllProductsName(productItem, listItemElement){
            let productNameElement = document.createElement("p");
            productNameElement.classList.add("category-product__name");
            productNameElement.innerHTML = productItem.name;
            listItemElement.insertAdjacentElement('beforeend', productNameElement);
        }

        function setAllProductsPrice(productItem, listItemElement) {
            let productPriceElement = document.createElement("span");
            productPriceElement.classList.add("category-product__price");
            productPriceElement.innerHTML = productItem.price + valutaType;
            listItemElement.insertAdjacentElement('beforeend', productPriceElement);
        }

        function addToCartButton(listItemElement) {
            let toCartButtonElement = document.createElement("button");
            toCartButtonElement.classList.add("category-product__button");
            toCartButtonElement.innerHTML = "Add To Cart";
            listItemElement.insertAdjacentElement('beforeend', toCartButtonElement);
        }

    }

});