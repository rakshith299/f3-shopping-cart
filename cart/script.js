let itemsContEle = document.getElementById("items-cont");
let checkoutContEle = document.getElementById("checkout-cont");

let errorMsgContEle = document.getElementById("error-msg-cont");


let grandTotal = 0;

window.onload = function(){
    let user = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if(user === null){
        alert("You need to sign in to view this page");
        window.location.href = "../index.html";
    }
}

// making payment function

function makePayment(event){
    event.preventDefault();


    var options = {
        key: "rzp_test_xV39ZNbgU1Du4V", 
        amount: `${grandTotal}`,
        currency: "USD",
        name: "MeShop.",
        description: "This is your order", 
        theme: {
            color: "#14bee0",
        },
        image: "https://cdn-icons-png.flaticon.com/128/891/891419.png",
        handler: function () { 
            window.location.href = "../shop";
        },
        options: {
            checkout: {
            method: {
                netbanking: 0,
                card: 0,
                upi: 1,
                wallet: 0,
            },
            },
        },
    };

    var razorpayInstance =  new Razorpay(options);
    razorpayInstance.open();

    
}

// oncheckout 

function onCheckout(){

    alert("Payment Successfull");
    alert("Items are Purchased");

    window.location.href = "../shop";
}

//checking for empty cart 

function checkForEmptycart(){
    if(itemsContEle.innerText === ""){
        console.log("yes");
        checkoutContEle.innerText = "";

    }
}

// clearing cart total func

function clearCartTotal(){
    checkoutContEle.innerText = "";
}


//remove item from cart 


function removefromCart(id){

    let yes = confirm("Are you sure, you want to remove this item?");
    
    if(yes){
        let cartArr = JSON.parse(localStorage.getItem("cart"));

        let foundItem = cartArr.find((each) => each.id === id);

        let foundIndex = cartArr.indexOf(foundItem);

        cartArr.splice(foundIndex, 1);

        localStorage.setItem("cart", JSON.stringify(cartArr));

        clearCards();

        clearCartTotal();

        
        for(let i = 0; i < cartArr.length; i++){
            makeCards(cartArr[i])
        }
        
        cartTotalPrice();

        checkForEmptycart();
    }

}



// getting cart total price 

function cartTotalPrice(){
    let cartArr = JSON.parse(localStorage.getItem("cart"));

    let totalContEle = document.createElement("div");
    totalContEle.classList.add("total-cont");
    checkoutContEle.appendChild(totalContEle);


    let h3Ele = document.createElement("h3");
    h3Ele.style.fontSize = "22px";
    h3Ele.style.color = "white";
    h3Ele.style.fontWeight = "bold";
    h3Ele.innerText = "Your Cart Total";

    totalContEle.appendChild(h3Ele);

    let olEle = document.createElement("ol");
    olEle.classList.add("ol");
    olEle.setAttribute("type", "number");

    let totalAmt = 0;

    for(let i = 0; i < cartArr.length; i++){
        let eachObj = cartArr[i];
        let itemName = eachObj.title;
        itemName = itemName.substring(0,18) + "...";

        let itemPrice = eachObj.price;

        totalAmt = totalAmt + itemPrice;

        let liEle = document.createElement("li");
        liEle.classList.add("li");

        let span1Ele = document.createElement("span");
        span1Ele.innerText = `${itemName}`;

        let span2Ele = document.createElement("span");
        span2Ele.innerText = `$${itemPrice}`; 

        liEle.appendChild(span1Ele);
        liEle.appendChild(span2Ele);

        olEle.appendChild(liEle);
        let line = document.createElement("hr");
        line.classList.add("line");

        olEle.appendChild(line);

        totalContEle.appendChild(olEle);

    }


    let totalAmtContEle = document.createElement("div");
    totalAmtContEle.classList.add("total-amt-cont");

    let totalName = document.createElement("span");
    totalName.innerText = "Total Price : ";

    let totalPrice = document.createElement("span");
    totalAmt = totalAmt.toFixed(2);
    grandTotal = parseInt(totalAmt * 100);
    totalPrice.innerText = `$${totalAmt}`;

    totalAmtContEle.appendChild(totalName);
    totalAmtContEle.appendChild(totalPrice);

    totalContEle.appendChild(totalAmtContEle);

    let paymentBtnEle = document.createElement("button");
    paymentBtnEle.classList.add("payment-btn");
    paymentBtnEle.innerText = "Proceed to Pay";
    paymentBtnEle.setAttribute("onclick", "makePayment(event)");

    totalContEle.appendChild(paymentBtnEle);

    let checkoutBtnEle = document.createElement("button");
    checkoutBtnEle.classList.add("checkout-btn");
    checkoutBtnEle.innerText = "Checkout";
    checkoutBtnEle.setAttribute("onclick", "onCheckout()");

    totalContEle.appendChild(checkoutBtnEle);

    
    
}

// clear cards

function clearCards(){
    itemsContEle.innerText = "";
}

// making each card 

function makeCards(eachCard){



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
    button.innerText = "Remove from Cart";
    button.setAttribute("onclick", `removefromCart(${id})`);

    //title

    let titleEle = document.createElement("h3");

    title = title.substring(0, 40);
    titleEle.innerText = title + `...`;

    infoCont.appendChild(titleEle);
    infoCont.appendChild(rateSpanContEle);
    infoCont.appendChild(colorCont);
    infoCont.appendChild(ratingCont);
    infoCont.appendChild(button);

    card.appendChild(imgDiv);
    card.appendChild(infoCont);


    itemsContEle.appendChild(card);
    
}


// getting cart items from local storage 

function getCartItems(){
    let cartArray = JSON.parse(localStorage.getItem("cart"));

    if(cartArray.length !== 0){
        errorMsgContEle.classList.remove("error-msg-cont");
        errorMsgContEle.style.display = "none";


        
        clearCards();

        for(let i = 0; i < cartArray.length; i++){
            makeCards(cartArray[i])
        }

        cartTotalPrice();
    }
}




getCartItems();




