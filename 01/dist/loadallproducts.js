document.addEventListener('DOMContentLoaded', () => {
 
    // fetch("data/products.json")
    // // mellem-then() skal altid skrives på denne/samme måde
    // .then((response)=>{
    //     // console.log(response);
    //     return response.json();
    // })
    // .then((data2)=>{
    //     // console.log(data);

    //     let unorderedList = document.querySelector(".all-products-gallery");
    //     let dataLoaded = data2;

    //     for (i = 0; i < dataLoaded.length; i++) {

    //         function createElementWithContent(tags, klasser, parentElement){
    //             let createdElement = document.createElement(tags);
    //             createdElement.classList.add(klasser);
    //             parentElement.appendChild(createdElement);
    //             // console.log(createdElement);
    //             return createdElement;
    //         }
       
    //         function createListItemWithContent(tag, klasse, id){
    //             let createdElement = document.createElement(tag);
    //             createdElement.classList.add(klasse);
    //             createdElement.setAttribute("id", id);
    //             unorderedList.appendChild(createdElement);
    //             // console.log(createdElement);
    //             return createdElement;
    //         }

    //         let listElement = createListItemWithContent("li", "all-products__listitem", dataLoaded[i].id);
            
    //         let linkElement = createElementWithContent("a", "test", listElement);
    //         let imageElement = createElementWithContent("img", "test", linkElement);
    //         let headingElement = createElementWithContent("h4", "test", listElement);
    //         let paragraphElement = createElementWithContent("p", "test", listElement);
    //         let spanElement = createElementWithContent("span", "test", paragraphElement);

    //         let listItemArray = document.querySelectorAll(".all-products__listitem");
    //         console.log(listItemArray);

    //         // listItemArray.forEach(listitem => {
    //         //     if(listitem.id === dataLoaded[i].id) {
    //         //         console.log("super");
    //         //     }      
    //         // });

    //     }


    
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
        }
        
        // måske skal dette (i) fjernes?
        function generateImage(i){
            let element = document.createElement('a');
            element.classList.add("test");
            element.setAttribute('href', productsData[i].image_path);
            return element
        }
        
        for (let i = 0; i< productsData.length; i++){
            let Id = productsData[i].id;
            galleryListElement.appendChild(generateListItem(Id, ".noget"));
        }
        
        
        // måske skal der tilføjes index i foreach-løkken?
        function appendImageToListItem(klasse) {
            let array = document.querySelectorAll(klasse);
            array.forEach(element => {
                element.appendChild(generateImage());       
            });
        }

        appendImageToListItem(listItemClassName);

    });

});

