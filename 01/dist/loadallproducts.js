document.addEventListener('DOMContentLoaded', () => {
 
   
    // LOAD ALLE PRODUKTER TIL SIDEN
    // gem gallery-listen: .all-products-gallery
    // fetch data fra JSON.
    // loop data.ID fra JSON 
    // for hvert ID:   
        // ny function som opretter card:
        // listitems - m id = ID
            // links
                // med image = image-path
            // h4 = data.navn
            // p-tag = data.pris
                // med span = kr

// PSEUDO-KODE

fetch("data/products.json")
    // mellem-then() skal altid skrives på denne/samme måde
    .then((response)=>{
        // console.log(response);
        return response.json();
    })
    .then((productsdata)=>{

        let productsData = productsdata;  
        let galleryListElement = document.querySelector(".all-products-gallery");
        let listItemClassName = ".noget"

        function generateListItem(productId, klasse){
            let element = document.createElement('li');
            element.id = productId;
            element.classList.add(klasse);
            console.log(element);
            return element;
        }

        function generateLinkElement(i, tags, klasse) {
            let element = document.createElement(tags);
            element.classList.add(klasse);
            element.setAttribute('href', productsData[i].image_path);
            // console.log(productsData[i]);
            return element;
        }
        

        function generateImage(i, tags, klasse) {
            let element = document.createElement(tags);
            element.classList.add(klasse);
            element.setAttribute('src', productsData[i].image_path);
            // console.log(productsData[i]);
            return element;
        }
        
        for (let i = 0; i < productsData.length; i++){
            let Id = productsData[i].id;
            let listItemelement = generateListItem(Id, listItemClassName);
            let linkElement = generateLinkElement(i, "a", ".link");
            listItemelement.appendChild(linkElement);
            linkElement.appendChild(generateImage(i, "img", ".test"));
            galleryListElement.appendChild(listItemelement);
        }

    });

});

