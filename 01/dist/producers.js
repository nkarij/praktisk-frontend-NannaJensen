document.addEventListener("DOMContentLoaded", ()=>{
    // alert("Fedtmule");

    // se categories.js for pseudo-kode.
    
    const producerMenuListElement = document.querySelector(".producer-menu");
    const expandMenuButton = document.querySelector(".producer-menu-expand");

    fetch("data/producers.json")
    // mellem-then() skal altid skrives på denne/samme måde
    .then((response)=>{
        // console.log(response);
        return response.json();
    })
    .then((producerdata)=>{
        // console.log(producerdata);

        let producerDataFromFetch = producerdata;

        for (i = 0; i < 4; i++) {
            let producerNames = producerDataFromFetch[i].name;
            createMenu(producerNames);
        }

        let expandMenuLength = function(event){
            let it = 0;

            if(event.type === "click") {
                it = producerDataFromFetch.length;
                console.log(event.type);
            } else {
                it = 4
            }

            producerMenuListElement.innerHTML = "";
            event.preventDefault();
            for (i = 0; i < it; i++) {
                let producerNames = producerDataFromFetch[i].name;
                createMenu(producerNames);
            }
        }

        expandMenuButton.addEventListener('click', expandMenuLength);


        function createMenu(textNode){
            let listItemElement = document.createElement("li");
            let linkElement = document.createElement("a");
            linkElement.innerHTML = textNode;
            listItemElement.appendChild(linkElement);
            producerMenuListElement.appendChild(listItemElement);
        }
        
    });

})