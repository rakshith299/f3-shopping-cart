let firstNameEle  = document.getElementById("first-name");
let lastNameEle = document.getElementById("last-name");
let emailEle = document.getElementById("email");
let passwordEle = document.getElementById("password");
let cPasswordEle = document.getElementById("confirm-password");
let formEle = document.getElementById("form");

let errorMsgEle = document.getElementById("error-msg");

errorMsgEle.style.display = "none";

let randomCharArr = ["a","b","c","d","%", "&","o","%","_","5","8", "9","6","2","$","z"];

firstNameEle.addEventListener("focus", function(){
    errorMsgEle.style.display = "none";
})

lastNameEle.addEventListener("focus", function(){
    errorMsgEle.style.display = "none";
})

emailEle.addEventListener("focus", function(){
    errorMsgEle.style.display = "none";
})

passwordEle.addEventListener("focus", function(){
    errorMsgEle.style.display = "none";
})

cPasswordEle.addEventListener("focus", function(){
    errorMsgEle.style.display = "none";
})


// logged in user cant sign up 

window.onload = function(){
    let response = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if(response){
        window.location.href = "../shop";
    }
}



// checking user exist 

function checkForUser(email){
    let usersArr = JSON.parse(localStorage.getItem("users"));

    let found = usersArr.find((eachUser) => {
        return eachUser.email === email
    })

    if(found === true){
        return true;
    }else{
        return false;
    }

    
}


//save user function 

function saveUserFunc(fName,lName,email,password,confirmPass){
    
    let randomToken = "";

    for(let i = 0; i < 16; i++){
        randomToken = randomToken + randomCharArr[Math.floor(Math.random() * 16)];
    }

    let userObj = {
        fName: fName,
        lName: lName,
        email: email,
        password: password,
        token: randomToken
    }

    let usersArr = JSON.parse(localStorage.getItem("users"));

    if(usersArr === null){
        usersArr = [];
    }

    usersArr.push(userObj);

    localStorage.setItem("users", JSON.stringify(usersArr));
    sessionStorage.setItem("loggedInUser", JSON.stringify(userObj));

    firstNameEle.value = "";
    lastNameEle.value = "";
    emailEle.value = "";
    passwordEle.value = "";
    cPasswordEle.value = "";

    alert("Sign up Successfull! Redirecting to our Shop Page");

    window.location.href = "../shop";

}

//on form submit

formEle.addEventListener("submit",function(event){
    event.preventDefault();

    let fName = firstNameEle.value.trim();
    let lName = lastNameEle.value.trim();
    let email = emailEle.value.trim();
    let password = passwordEle.value.trim();
    let confirmPass = cPasswordEle.value.trim();

    //check for empty input fields

    if(firstNameEle.value.trim() === "" ||  lastNameEle.value.trim() === "" || emailEle.value.trim() === "" ||  passwordEle.value.trim() === "" || cPasswordEle.value.trim() === ""){
        errorMsgEle.style.display = "block";
    }

    // check for email validity 

    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let emailCheck = regex.test(email);

    if(emailCheck === false){
        alert("Enter valid Email!");
        emailEle.value = "";
    }

    // check for password validy 
    
    let passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    let passCheck = passRegex.test(password);

    if(passCheck === false){
        alert("Password should contain 8 characters including one letter and one number");
        passwordEle.value = "";
        cPasswordEle.value = "";
    }

    // checking for password equal

    let pEqual = false;
    if(password !== confirmPass){
        alert("Password and confirm password are not matching");
        passwordEle.value = "";
        cPasswordEle.value = "";
    }else{
        pEqual = true;
    }

    // check for name validity 

    let nameRegex = /^[a-zA-Z ]+$/;

    let fNameCheck = nameRegex.test(fName);
    let lNameCheck = nameRegex.test(lName);

    if(fNameCheck === false || lNameCheck === false){
        alert("Enter valid name");
        firstNameEle.value = "";
        lastNameEle.value = "";
    }

    // if all checks validate

    if(fNameCheck === true && lNameCheck === true && emailCheck === true && passCheck === true && pEqual === true){
        let usersArr = localStorage.getItem("users");
        if(usersArr === null){
            saveUserFunc(fName,lName,email,password,confirmPass)
        }else{
            let found = checkForUser(email)

            if(found === false){
                saveUserFunc(email)
            }else{
                alert("Entered Email already exist, Please enter another");
                emailEle.value = "";
            }
        }
    }


})
