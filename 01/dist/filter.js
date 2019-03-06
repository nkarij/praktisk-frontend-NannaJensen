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
    let data1;
    let data2;
    let newData1Array  = [];

    // her henter jeg mine fetches.
    fetch("data/products.json")
    // mellem-then() skal altid skrives på denne/samme måde
    .then((response)=>{
        // console.log(response);
        return response.json();
    })
    .then((data)=>{
        data1 = data;
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
        data2 = data;
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
            categoryMenuList.addEventListener('click', filterByCategory);
        }
    }

    function filterByCategory(){
        console.log("kører filterByCategory");
        // console.log(event);
            // console.log(event.target.innerHTML);
            newData1Array = [];
        data2.forEach((object) => {
            if(object.name == event.target.innerHTML) {
                console.log("har fundet kategori" + object.name);
                // loop data1.category
                data1.forEach(item => {
                    // console.log(item);
                    if(item.category == object.id) {
                        // console.log(item);
                        newData1Array.push(item);
                        // her kan jeg evt sende item.image_path osv med i en createBlaBlaBla.
                        
                    }
                });
            }
        });
        appendImage();
        // console.log(newData1Array);
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
        newData1Array.forEach(object => {
            // generate new image
            let element = document.createElement(tags);
            element.classList.add(klasse);
            element.setAttribute('src', object.image_path);
            return element;
        });
    }

});