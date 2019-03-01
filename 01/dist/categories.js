document.addEventListener("DOMContentLoaded", ()=>{
    // alert("Fedtmule");

    // TILFØJ EN DYNAMISK MENU med innerHTML
    // save menu-UL
    // fetch data/categories
    // loop category names (category.name)
    // foreach category name:
        // new function:
        // create list-item
        // create link
        // set links innerHTML = category.name 
        // NB lav - generisk parameter, så funktionen kan genbruges til produkter.
        // append link to list-item
        // append list-item to menu-UL

    const categoryMenuListElement = document.querySelector(".category-menu");

    fetch("data/categories.json")
    // mellem-then() skal altid skrives på denne/samme måde
    .then((response)=>{
        // console.log(response);
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        let dataFromFetch = data;

        for (i = 0; i < dataFromFetch.length; i++) {
           let categoryNames = dataFromFetch[i].name;
           createMenu(categoryNames);
        }

        function createMenu(textNode){
            let listItemElement = document.createElement("li");
            let linkElement = document.querySelector("a");
            linkElement.innerHTML = textNode;
            listItemElement.appendChild(linkElement);
            categoryMenuListElement.appendChild(listItemElement);
        }
        
    });

})