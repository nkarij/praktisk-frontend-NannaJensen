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
        // console.log(data);
        let dataFromFetch = data;

        for (i = 0; i < dataFromFetch.length; i++) {
           let categoryName = dataFromFetch[i].name;
            //  parameter nr 2 definerer value af dataset/href
           createMenu(categoryName, dataFromFetch[i].id);
        }

        function createMenu(textNode, categoryid){
            let listItemElement = document.createElement("li");
            listItemElement.classList.add("category-menu__item");
            let linkElement = document.createElement("a");
            linkElement.classList.add("category-menu__link");
            linkElement.innerHTML = textNode;
            // her sættes href = ?id
            linkElement.href = "?id=" + categoryid;
            listItemElement.appendChild(linkElement);
            categoryMenuListElement.appendChild(listItemElement);
        }

        // LAV ET FILTER, SOM KUN VISER DE FOTOS SOM HØRER TIL CATEGORIES
        
    });



})