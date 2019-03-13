fetch("data/products.json")
// mellem-then() skal altid skrives på denne/samme måde
.then((response)=>{
    // console.log(response);
    return response.json();
})
.then((searchdata)=>{
    // console.log(searchdata);
    const searchData = searchdata;
    // const input = document.querySelector("#searhbar-input");
    let textValue;
    let inputValue = "";
    let allParameters = getAllUrlParams();
    let searchbarURL = allParameters.searchbarinput;
    const searchResultList = document.querySelector(".searchresult-list")
    // console.log(searchbarURL);
    if(typeof searchbarURL !== "undefined" || typeof searchbarURL !== "null"  ) {
        console.log("url er ikke tom eller undefined");
        inputValue = searchbarURL;
        inputValue.toUpperCase();
        // console.log(inputValue);
        searchProducts(searchData);
    }

    function searchProducts(searchData){
        // vigtigt med overskrivelsen her.
        inputValue = inputValue.toUpperCase();
        // console.log(inputValue);
        let inputRegex = "+";
        let cleanInputValue = inputValue.replace(inputRegex, " ");
        // console.log(cleanInputValue);
        
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < searchData.length; i++) {

            let productName = searchData[i].name;

            productName = productName.toUpperCase();
            // console.log(textValue);
            if(productName.indexOf(cleanInputValue) > -1) {
                // output result
                createSearchResultMarkup(productName)
                //console.log(productName);
            }
        }
    }

    function createSearchResultMarkup(productname){
        let listItemElement = document.createElement("li");
        listItemElement.classList.add("searchresult__item");
        let linkElement = document.createElement("a");
        linkElement.classList.add("searchresult__textcontent");
        linkElement.innerHTML = productname;
        listItemElement.appendChild(linkElement);
        searchResultList.appendChild(listItemElement);
    }

});