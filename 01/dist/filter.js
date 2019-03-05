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
        // console.log(event);
        let newArray  = [];
            // console.log(event.target.innerHTML);
            data2.forEach((object) => {
                if(object.name == event.target.innerHTML) {
                    // loop data1.category
                    data1.forEach(item => {
                        if(item.category == object.id) {
                            newArray.push(item);
                            // her kan jeg evt sende item.image_path osv med i en createBlaBlaBla.
                        }
                    });
                }
            });
            console.log(newArray);
        }
    // }

});