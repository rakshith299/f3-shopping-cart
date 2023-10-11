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


let givenData = [
    {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
    "rate": 3.9,
    "count": 120
    }
    },
    {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
    "rate": 4.1,
    "count": 259
    }
    },
    {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
    "rate": 4.7,
    "count": 500
    }
    },
    {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
    "rate": 2.1,
    "count": 430
    }
    },
    {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
    "rate": 4.6,
    "count": 400
    }
    },
    {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
    "rate": 3.9,
    "count": 70
    }
    },
    {
    "id": 7,
    "title": "White Gold Plated Princess",
    "price": 9.99,
    "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
    "rate": 3,
    "count": 400
    }
    },
    {
    "id": 8,
    "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
    "price": 10.99,
    "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
    "rate": 1.9,
    "count": 100
    }
    },
    {
    "id": 9,
    "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    "price": 64,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "rating": {
    "rate": 3.3,
    "count": 203
    }
    },
    {
    "id": 10,
    "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "rating": {
    "rate": 2.9,
    "count": 470
    }
    },
    {
    "id": 11,
    "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "price": 109,
    "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    "rating": {
    "rate": 4.8,
    "count": 319
    }
    },
    {
    "id": 12,
    "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "price": 114,
    "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    "rating": {
    "rate": 4.8,
    "count": 400
    }
    },
    {
    "id": 13,
    "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    "price": 599,
    "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    "rating": {
    "rate": 2.9,
    "count": 250
    }
    },
    {
    "id": 14,
    "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    "price": 999.99,
    "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "rating": {
    "rate": 2.2,
    "count": 140
    }
    },
    {
    "id": 15,
    "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    "price": 56.99,
    "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "rating": {
    "rate": 2.6,
    "count": 235
    }
    },
    {
    "id": 16,
    "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    "price": 29.95,
    "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    "rating": {
    "rate": 2.9,
    "count": 340
    }
    },
    {
    "id": 17,
    "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    "price": 39.99,
    "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    "rating": {
    "rate": 3.8,
    "count": 679
    }
    },
    {
    "id": 18,
    "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
    "price": 9.85,
    "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "rating": {
    "rate": 4.7,
    "count": 130
    }
    },
    {
    "id": 19,
    "title": "Opna Women's Short Sleeve Moisture",
    "price": 7.95,
    "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "rating": {
    "rate": 4.5,
    "count": 146
    }
    },
    {
    "id": 20,
    "title": "DANVOUY Womens T Shirt Casual Cotton Short",
    "price": 12.99,
    "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    "rating": {
    "rate": 3.6,
    "count": 145
    }
    }
    ]


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
    if(dataArr){
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
    
    addingColorAndSize(givenData)
    
    console.log(productsArr, "products arr");
    
    productsArr.forEach((eachCard) => {
        makeCards(eachCard)
    })


}

getAllProducts()





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