let allCardsContEle = document.getElementById("all-cards-cont");

let mensClothingContEle = document.getElementById("mens-clothing-cont");
let womensClothingContEle = document.getElementById("womens-clothing-cont");
let jewelleryContEle = document.getElementById("jewellery-cont");
let electronicsContEle = document.getElementById("electronics-cont");

let displayMenCards = document.getElementById("display-men-cards");
let displayWomenCards = document.getElementById("display-women-cards");
let displayjeweleryCards = document.getElementById("display-jewelery-cards");
let displayelectronicsCards = document.getElementById("display-electronics-cards");

let allTabEle = document.getElementById("all-tab");
let menTabEle = document.getElementById("mens-tab");
let womenTabEle = document.getElementById("women-tab");
let jeweleryTabEle = document.getElementById("jewelery-tab");
let electronicsTabEle = document.getElementById("electronic-tab");

let menHeadingEle = document.getElementById("men-heading");
let womenHeadingEle = document.getElementById("women-heading")
let electronicsHeadingEle = document.getElementById("electronics-heading");
let jewelleryHeadingEle = document.getElementById("jewellery-heading");

let rangeInputEle = document.getElementById("rangeInput");
let checkBox1 = document.getElementById("checkbox-1");
let checkBox2 = document.getElementById("checkbox-2");
let checkBox3 = document.getElementById("checkbox-3");
let checkBox4 = document.getElementById("checkbox-4");

let colorCheckBox1 = document.getElementById("color-checkbox-1");
let colorCheckBox2 = document.getElementById("color-checkbox-2");
let colorCheckBox3 = document.getElementById("color-checkbox-3");
let colorCheckBox4 = document.getElementById("color-checkbox-4");
let colorCheckBox5 = document.getElementById("color-checkbox-5");

let sizeCheckbox1 = document.getElementById("size-checkbox-1");
let sizeCheckbox2 = document.getElementById("size-checkbox-2");
let sizeCheckbox3 = document.getElementById("size-checkbox-3");
let sizeCheckbox4 = document.getElementById("size-checkbox-4");


let filterBtnEle = document.getElementById("filter-btn");



let searchEle = document.getElementById("search-input");

let selectedTab = "all";
let coloursArr = ["red", "blue", "green", "black", "white"];
let sizesArr = ["s", "m", "l", "xl"];
let searchedString = "";

let checkboxArr = [false, false, false, false];
let priceRangeArr = [[0,25],[25,50],[50,100],[100,9999999]];

let colorCheckBoxArr = [false, false, false, false, false];

let sizeCheckboxArr = [false, false, false, false];


let productsArr = [];


window.onload = function(){
    let userObj = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if(userObj === null){
        window.location.href = "../index.html";
    }
}


// display On Tab Selection 

function displayOnTab(){
    if(selectedTab === "all"){
        mensClothingContEle.classList.remove("display-none");
        womensClothingContEle.classList.remove("display-none");
        jewelleryContEle.classList.remove("display-none");
        electronicsContEle.classList.remove("display-none");

        if(document.getElementById("empty-msg") === null){
            if(displayMenCards.innerText === "" && displayWomenCards.innerText === "" && displayjeweleryCards.innerText === "" && displayelectronicsCards.innerText === ""){
                let errorMsg = document.createElement("div");
                errorMsg.id = "empty-msg";
                errorMsg.style.width = "100%";
                errorMsg.style.textAlign = "center";
                errorMsg.innerHTML = `
                <p>Sorry, Product you are looking for is not available!</p>
                <img src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/pensive-face_1f614.gif" width = "50px" height = "50px">`

                displayWomenCards.appendChild(errorMsg);
            }
        }
    }else if(selectedTab === "men's clothing"){
        mensClothingContEle.classList.remove("display-none");
        electronicsContEle.classList.add("display-none");
        womensClothingContEle.classList.add("display-none");
        jewelleryContEle.classList.add("display-none");

        if(document.getElementById("empty-msg") === null){
            if(displayMenCards.innerText === ""){
                let errorMsg = document.createElement("div");
                errorMsg.id = "empty-msg";
                errorMsg.style.width = "100%";
                errorMsg.style.textAlign = "center";
                errorMsg.innerHTML = `
                <p>Sorry, Product you are looking for is not available!</p>
                <img src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/pensive-face_1f614.gif" width = "50px" height = "50px">`

                displayMenCards.appendChild(errorMsg);
            }
        }

        
    }else if(selectedTab === "women's clothing"){
        womensClothingContEle.classList.remove("display-none");
        mensClothingContEle.classList.add("display-none");
        jewelleryContEle.classList.add("display-none");
        electronicsContEle.classList.add("display-none");

        if(document.getElementById("empty-msg") === null){
            if(displayWomenCards.innerText === ""){
                let errorMsg = document.createElement("div");
                errorMsg.id = "empty-msg";
                errorMsg.style.width = "100%";
                errorMsg.style.textAlign = "center";
                errorMsg.innerHTML = `
                <p>Sorry, Product you are looking for is not available!</p>
                <img src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/pensive-face_1f614.gif" width = "50px" height = "50px">`

                displayWomenCards.appendChild(errorMsg);
            }
        }


    }else if(selectedTab === "jewelery"){
        jewelleryContEle.classList.remove("display-none");
        mensClothingContEle.classList.add("display-none");
        womensClothingContEle.classList.add("display-none");
        electronicsContEle.classList.add("display-none");

        if(document.getElementById("empty-msg") === null){
            if(displayjeweleryCards.innerText === ""){
                let errorMsg = document.createElement("div");
                errorMsg.id = "empty-msg";
                errorMsg.style.width = "100%";
                errorMsg.style.textAlign = "center";
                errorMsg.innerHTML = `
                <p>Sorry, Product you are looking for is not available!</p>
                <img src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/pensive-face_1f614.gif" width = "50px" height = "50px">`

                displayjeweleryCards.appendChild(errorMsg);
            }
        }


    }else if(selectedTab === "electronics"){
        electronicsContEle.classList.remove("display-none");
        mensClothingContEle.classList.add("display-none");
        womensClothingContEle.classList.add("display-none");
        jewelleryContEle.classList.add("display-none");


        if(document.getElementById("empty-msg") === null){
            if(displayelectronicsCards.innerText === ""){
                let errorMsg = document.createElement("div");
                errorMsg.id = "empty-msg";
                errorMsg.style.width = "100%";
                errorMsg.style.textAlign = "center";
                errorMsg.innerHTML = `
                <p>Sorry, Product you are looking for is not available!</p>
                <img src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/pensive-face_1f614.gif" width = "50px" height = "50px">`

                displayelectronicsCards.appendChild(errorMsg);
            }
        }


    }



}

// all tab
allTabEle.addEventListener("click", function(){
    selectedTab = "all";

    allTabEle.classList.add("filter-tab", "tab-selected");
    menTabEle.classList.remove("tab-selected");
    womenTabEle.classList.remove("tab-selected");
    jeweleryTabEle.classList.remove("tab-selected");
    electronicsTabEle.classList.remove("tab-selected");


    displayOnTab();   
})

// men tab
menTabEle.addEventListener("click", function(){
    selectedTab = "men's clothing";


    menTabEle.classList.add("filter-tab", "tab-selected");
    allTabEle.classList.remove("tab-selected");
    womenTabEle.classList.remove("tab-selected");
    jeweleryTabEle.classList.remove("tab-selected");
    electronicsTabEle.classList.remove("tab-selected");
   
    displayOnTab()    
})

// women tab
womenTabEle.addEventListener("click", function(){
    selectedTab = "women's clothing";


    womenTabEle.classList.add("filter-tab", "tab-selected");
    allTabEle.classList.remove("tab-selected");
    menTabEle.classList.remove("tab-selected");
    jeweleryTabEle.classList.remove("tab-selected");
    electronicsTabEle.classList.remove("tab-selected");
    
    displayOnTab()
})


// jewelry tab
jeweleryTabEle.addEventListener("click", function(){
    selectedTab = "jewelery";


    jeweleryTabEle.classList.add("filter-tab", "tab-selected");
    allTabEle.classList.remove("tab-selected");
    menTabEle.classList.remove("tab-selected");
    electronicsTabEle.classList.remove("tab-selected");
    womenTabEle.classList.remove("tab-selected");
    
    displayOnTab()
    
})

// electronics tab

electronicsTabEle.addEventListener("click", function(){
    selectedTab = "electronics";


    electronicsTabEle.classList.add("filter-tab", "tab-selected");
    allTabEle.classList.remove("tab-selected");
    menTabEle.classList.remove("tab-selected");
    jeweleryTabEle.classList.remove("tab-selected");
    womenTabEle.classList.remove("tab-selected");
    
    displayOnTab()
})


//on apply filter button

filterBtnEle.addEventListener("click", function(){

    document.getElementById("left-cont").classList.remove("left-cont-full");
    document.getElementById("right-cont").classList.remove("display-none-right-cont");

    document.getElementById("left-cont").style.display = "none";
    document.getElementById("right-cont").style.display = "block";
    document.getElementById("right-cont").style.width = "100%";






    let specifiedRating = rangeInputEle.value;

    // for prices
    if(checkBox1.checked === true){
        checkboxArr[0] = true;
    }else{
        checkboxArr[0] = false;
    }

    if(checkBox2.checked === true){
        checkboxArr[1] = true;
    }else{
        checkboxArr[1] = false;
    }

    if(checkBox3.checked === true){
        checkboxArr[2] = true;
    }else{
        checkboxArr[2] = false;
    }

    if(checkBox4.checked === true){
        checkboxArr[3] = true;
    }else{
        checkboxArr[3] = false;
    }




    // for colors

    if(colorCheckBox1.checked === true){
        colorCheckBoxArr[0] = true;
    }else{
        colorCheckBoxArr[0] = false;
    }

    if(colorCheckBox2.checked === true){
        colorCheckBoxArr[1] = true;
    }else{
        colorCheckBoxArr[1] = false;
    }

    if(colorCheckBox3.checked === true){
        colorCheckBoxArr[2] = true;
    }else{
        colorCheckBoxArr[2] = false;
    }

    if(colorCheckBox4.checked === true){
        colorCheckBoxArr[3] = true;
    }else{
        colorCheckBoxArr[3] = false;
    }

    if(colorCheckBox5.checked === true){
        colorCheckBoxArr[4] = true;
    }else{
        colorCheckBoxArr[4] = false;
    }

    // for sizes

    if(sizeCheckbox1.checked === true){
        sizeCheckboxArr[0] = true;
    }else{
        sizeCheckboxArr[0] = false;
    }

    if(sizeCheckbox2.checked === true){
        sizeCheckboxArr[1] = true;
    }else{
        sizeCheckboxArr[1] = false;
    }

    if(sizeCheckbox3.checked === true){
        sizeCheckboxArr[2] = true;
    }else{
        sizeCheckboxArr[2] = false;
    }

    if(sizeCheckbox4.checked === true){
        sizeCheckboxArr[3] = true;
    }else{
        sizeCheckboxArr[3] = false;
    }


    // checking if any price checkbox is checked  

    let priceflag = false;
    for(let i = 0; i < checkboxArr.length; i++){
        if(checkboxArr[i] === true){
            priceflag = true;
            break;
        }
    }

    // checking if any color checkbox is checked

    let colorFlag = false;
    for(let i = 0; i < colorCheckBoxArr.length; i++){
        if(colorCheckBoxArr[i] === true){
            colorFlag = true;
        }
    }

    // checking if any size checkbox is checked
    
    let sizeFlag = false;
    for(let i = 0; i < sizeCheckboxArr.length; i++){
        if(sizeCheckboxArr[i] === true){
            sizeFlag = true;
        }
    }

    console.log("price flag = ", priceflag);
    console.log("color flag = ", colorFlag);
    console.log("size flag = ", sizeFlag);

    console.log("color checkbox arr = ", colorCheckBoxArr);



    let filteredOnBtnArr = productsArr.filter((eachCard => {
        let productsRating = eachCard.rating.rate;
        let productColoursArr = eachCard.colours;
        let productSizeArr = eachCard.sizes;
        let productPrice = eachCard.price;

        console.log("each card ", eachCard);


        function filterOnPrice(){
            for(let i = 0; i < checkboxArr.length; i++){
                if(checkboxArr[i] === true){
                    if(productPrice >= priceRangeArr[i][0] && productPrice < priceRangeArr[i][1]){
                        return true;
                    }
                }
            }
        }

        function filterOnColor(){
            for(let i = 0; i < colorCheckBoxArr.length; i++){
                if(colorCheckBoxArr[i] === true){
                    if(productColoursArr.includes(coloursArr[i]) === true){
                        return true;
                    }
                }
            }
        }

        function filterOnSize(){
            for(let i = 0; i < sizeCheckboxArr.length; i++){
                if(sizeCheckboxArr[i] === true){
                    if(productSizeArr.includes(sizesArr[i]) === true){
                        return true;
                    }
                }
            }
        }

        function filterOnRate(){
            if(productsRating >= specifiedRating){
                return true;
            }
        }

        let receivedAfterPriceFilter = filterOnPrice();
        console.log("received after price true or false ", receivedAfterPriceFilter);

        let receivedAfterColourFilter = filterOnColor();
        console.log("received after color true or false ", receivedAfterColourFilter);

        let receivedAfterSiizeFilter = filterOnSize();

        let receivedAfterRateFilter = filterOnRate();
        console.log("received after rate true or false ", receivedAfterRateFilter);

        

        if((priceflag === true && receivedAfterPriceFilter === true) && (colorFlag === true && receivedAfterColourFilter === true) && (sizeFlag === true && receivedAfterSiizeFilter === true) && receivedAfterRateFilter === true){
             return eachCard;

        }else if((colorFlag === true && receivedAfterColourFilter === true) && sizeFlag === false && priceflag === false && receivedAfterRateFilter === true) {
            return eachCard;

        }else if((colorFlag === true && receivedAfterColourFilter === true) && (sizeFlag === true && receivedAfterSiizeFilter === true) && priceflag === false && receivedAfterRateFilter === true){
            return eachCard;

        }else if((colorFlag === true && receivedAfterColourFilter === true) && (priceflag === true && receivedAfterPriceFilter === true) && sizeFlag === false && receivedAfterRateFilter === true){
            console.log("received on color and price filter = ", eachCard)
            return eachCard;

        }else if((sizeFlag === true && receivedAfterSiizeFilter === true) && colorFlag === false && priceflag === false && receivedAfterRateFilter === true){
            return eachCard;

        }else if((sizeFlag === true && receivedAfterSiizeFilter === true) && (priceflag === true && receivedAfterPriceFilter === true) && colorFlag === false && receivedAfterRateFilter === true){
            console.log("received on size and price filter = ", eachCard)
            return eachCard;

        }else if((priceflag === true && receivedAfterPriceFilter === true) && colorFlag === false && sizeFlag === false && receivedAfterRateFilter === true){
            console.log("received on price filter = ", eachCard)
            return eachCard

        }else if(colorFlag === false && priceflag === false && sizeFlag === false){
            if(receivedAfterRateFilter === true){
                return eachCard;
            }
        }

        

    }))


    console.log("filter on button Arrayy = ", filteredOnBtnArr)

    clearCards()

    for(let i = 0; i < filteredOnBtnArr.length; i++){
        makeCards(filteredOnBtnArr[i])
    }

    checkForEmptyCategory()


})


// adding item to cart

function addToCart(id){

    let matchedProduct = productsArr.find((eachProduct) => {
        return eachProduct.id === id
    })

    let cartArr = JSON.parse(localStorage.getItem("cart"));
    
    if(cartArr === null){
        cartArr = [];
    }

    cartArr.push(matchedProduct);

    localStorage.setItem("cart", JSON.stringify(cartArr));  
    
    alert("Item has been added to cart");
    
}

//checking for empty category on search

function checkForEmptyCategory(){
    if(displayelectronicsCards.innerText === ""){
        electronicsHeadingEle.style.display = "none";
    }else{
        electronicsHeadingEle.style.display = "block";
    }

    if(displayWomenCards.innerText === ""){
        womenHeadingEle.style.display = "none";
    }else{
        womenHeadingEle.style.display = "block";
    }

    if(displayMenCards.innerText === ""){
        menHeadingEle.style.display = "none";
    }else{
        menHeadingEle.style.display = "block";
    }

    if(displayjeweleryCards.innerText === ""){
        jewelleryHeadingEle.style.display = "none";
    }else{
        jewelleryHeadingEle.style.display = "block";
    }


    if(displayMenCards.innerText === "" && displayWomenCards.innerText === "" && displayjeweleryCards.innerText === "" && displayelectronicsCards.innerText === ""){
        if(document.getElementById("empty-msg") === null){
            let errorMsg = document.createElement("div");
            errorMsg.id = "empty-msg";
            errorMsg.style.width = "100%";
            errorMsg.style.textAlign = "center";
            errorMsg.innerHTML = `
            <p>Sorry, Product you are looking for is not available!</p>
            <img src = "https://em-content.zobj.net/source/animated-noto-color-emoji/356/pensive-face_1f614.gif" width = "50px" height = "50px">`

            allCardsContEle.appendChild(errorMsg);
        }
        
    }else{
         let ele = document.getElementById("empty-msg");
         if(ele !== null){
            //ele.style.display = "none";
            allCardsContEle.removeChild(ele);
         }
        
    }
}


//clearing cards 

function clearCards(){
    displayMenCards.innerText = "";
    displayWomenCards.innerText = "";
    displayjeweleryCards.innerText = "";
    displayelectronicsCards.innerText = "";
}

//searching func
function search(inputString){
    return productsArr.filter((each) => {
        return each.title.toLowerCase().startsWith(inputString)
                    
    })
}

//search bar 
searchEle.addEventListener("keyup", function(event){
    searchedString = event.target.value.trim();
    
    
        searchedString = searchedString.toLowerCase();
    
        
    
        let filteredOnSearch = search(searchedString);

        clearCards();
    
        for(let i = 0; i < filteredOnSearch.length; i++){
            makeCards(filteredOnSearch[i])
        }


        checkForEmptyCategory()

})

/* making each card and adding */

function makeCards(eachCard){
    
    // displayMenCards.innerHTML = "";
    // displayWomenCards.innerHTML = "";
    // displayjeweleryCards.innerHTML = "";
    // displayelectronicsCards.innerHTML = "";


    let card = document.createElement("div");
    card.classList.add("card");

    let imageHref = eachCard.image;
    let sizeArr = eachCard.sizes;
    let colorArr = eachCard.colours;
    let rating = Math.floor(eachCard.rating.rate);
    let title = eachCard.title;
    let id = eachCard.id;
    let category = eachCard.category;
    let price = eachCard.price;


    let imgDiv = document.createElement("div");
    imgDiv.classList.add("img-div");

    let imgEle = document.createElement("img");
    imgEle.setAttribute("src", `${imageHref}`);
    imgEle.classList.add("img");
    imgDiv.appendChild(imgEle);

    // indfo cont 
    let infoCont = document.createElement("div");
    infoCont.classList.add("info-cont");

    // rate span cont
    let rateSpanContEle = document.createElement("div");
    rateSpanContEle.classList.add("rate-size-cont");

    let rateSpan = document.createElement("span");
    rateSpan.innerText = `$${price}`;
    rateSpanContEle.appendChild(rateSpan);

    let sizeSpanCont = document.createElement("span");
    sizeSpanCont.innerText = sizeArr;
    rateSpanContEle.appendChild(sizeSpanCont);

    // color name 
    let colorCont = document.createElement("div");
    colorCont.classList.add("colour-cont");

    let colorName = document.createElement("span");
    colorName.innerText = "Colors : ";
    colorCont.appendChild(colorName);

    let roundColorCont = document.createElement("div");
    roundColorCont.classList.add("round-colors-cont");

    for(let i = 0; i < colorArr.length; i++){
        let temp = colorArr[i];

        let span = document.createElement("div");
        span.classList.add(`${temp}`);

        roundColorCont.appendChild(span);
    }

    colorCont.appendChild(roundColorCont);

    // rating name 

    let ratingCont = document.createElement("div");
    ratingCont.classList.add("colour-cont");

    let rateName = document.createElement("span");
    rateName.innerText = "Rating : ",
    ratingCont.appendChild(rateName);

    let starCont = document.createElement("div");
    starCont.classList.add("round-colors-cont");

    for(let i = 0; i < rating; i++){
        let span = document.createElement("span");
        span.classList.add("star");

        span.innerHTML = `<i class="fa-solid fa-star"></i>`;

        starCont.appendChild(span);

    }

    ratingCont.appendChild(starCont);

    // button

    let button = document.createElement("button");
    button.classList.add("add-btn");
    button.innerText = "Add To Cart";
    button.setAttribute("onclick", `addToCart(${id})`);

    //title

    let titleEle = document.createElement("h3");

    title = title.substring(0, 30);
    titleEle.innerText = title + `...`;

    infoCont.appendChild(titleEle);
    infoCont.appendChild(rateSpanContEle);
    infoCont.appendChild(colorCont);
    infoCont.appendChild(ratingCont);
    infoCont.appendChild(button);

    card.appendChild(imgDiv);
    card.appendChild(infoCont);


    if(category === `men's clothing`){      
        displayMenCards.appendChild(card);
    }else if(category === `women's clothing`){
        displayWomenCards.appendChild(card);
    }else if(category === `jewelery`){
        displayjeweleryCards.appendChild(card);
    }else if(category === `electronics`){
        displayelectronicsCards.appendChild(card);
    }
    
}

/* Adding color and size arr */

function addingColorAndSize(dataArr){
    dataArr.map((each) => {
        let cArr = [];

        for(let i = 0; i <= 3; i++){
            let randomIndex = Math.floor(Math.random() * 5);
            cArr.push(coloursArr[randomIndex]);
        }

        let cSet = new Set(cArr);
        cArr = Array.from(cSet);

        let sArr = [];

        for(let i = 0; i <= 3; i++){
            let randomIndex = Math.floor(Math.random() * 4);
            sArr.push(sizesArr[randomIndex]);

        }

        let sSet = new Set(sArr);
        sArr = Array.from(sSet); 

        each.colours = cArr;
        each.sizes = sArr;
        
        productsArr.push(each);
    })
}

/* open side bar onclick */

window.addEventListener("resize", function(){

    if(window.innerWidth > 768 && window.innerWidth < 1000){



        document.getElementById("left-cont").style.display = "block";
        document.getElementById("left-cont").style.width = "28%";
        document.getElementById("left-cont").style.backgroundColor = "black";
        document.getElementById("left-cont").style.color = "white";
        document.getElementById("left-cont").style.height = "100%";
        document.getElementById("left-cont").style.padding = "15px";
        document.getElementById("left-cont").style.overflowY = "auto";
    
        document.getElementById("right-cont").style.display = "inline";
        document.getElementById("right-cont").style.width = "72%";
    }else if(window.innerWidth > 1000){

        document.getElementById("left-cont").style.display = "block";
        document.getElementById("left-cont").style.width = "20%";
        document.getElementById("left-cont").style.backgroundColor = "black";
        document.getElementById("left-cont").style.color = "white";
        document.getElementById("left-cont").style.height = "100%";
        document.getElementById("left-cont").style.padding = "15px";
        document.getElementById("left-cont").style.overflowY = "auto";
    
        document.getElementById("right-cont").style.display = "inline";
        document.getElementById("right-cont").style.width = "80%";


    }else{

        document.getElementById("left-cont").style.display = "none";
        document.getElementById("right-cont").style.display = "block";
        document.getElementById("right-cont").style.width = "100%";

        document.getElementById("all-cards-cont").style.marginTop = "50px";
    }
    
})


function opensidebar(){

    if(window.innerWidth < 768){

        document.getElementById("left-cont").style.display = "block";
        document.getElementById("left-cont").style.width = "100%";
        document.getElementById("left-cont").style.backgroundColor = "black";
        document.getElementById("left-cont").style.color = "white";
        document.getElementById("left-cont").style.height = "100%";
        document.getElementById("left-cont").style.padding = "15px";
        document.getElementById("left-cont").style.overflowY = "auto";
    
        document.getElementById("right-cont").style.display = "none";
    }

}


async function getAllProducts(){
   let url = 'https://fakestoreapi.com/products';

    let received = await fetch(url)
    .then(res => res.json())
    .then(data => addingColorAndSize(data)) 

    console.log(productsArr);
    
    productsArr.forEach((eachCard) => {
        makeCards(eachCard)
    })
    
}



getAllProducts();




/*


if(priceflag === true){

    let productPrice = eachCard.price;

    for(let i = 0; i < checkboxArr.length; i++){
        if(checkboxArr[i] === true){
            if(productPrice >= priceRangeArr[i][0] && productPrice < priceRangeArr[i][1] && productsRating >= specifiedRating){
                return eachCard
            }
        }
    }
}else{
    if(productsRating >= specifiedRating){
        return eachCard;
    }
}


 */