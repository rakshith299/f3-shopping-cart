let emailEle = document.getElementById("email");
let passwordEle = document.getElementById("password");
let loginBtnEle = document.getElementById("login");

let errorMsgEle = document.getElementById("error-msg");

errorMsgEle.style.display = "none";


window.onload = function(){
    let user = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if(user){
        window.location.href = "../shop";
    }
}

//email
emailEle.addEventListener("focus", function(){
    errorMsgEle.style.display = "none";
})

//password
passwordEle.addEventListener("focus", function(){
    errorMsgEle.style.display = "none";
})



// checking for user 

function checkForUser(email, password){
    let usersArr = JSON.parse(localStorage.getItem("users"));

    let matchFound = false;

    if(usersArr === null){
        alert("You have not signed up! Please Sign in");

        window.location.href = "../signup";

    }else{

        //getting user object
        let userMatch = usersArr.find((eachUser) => {
            return eachUser.email === email;
        })

        // if user object found matching email 
        if(userMatch){
            
            //password check 

            if(userMatch.password !== password){
                alert("Password is not matching!, retry");
                passwordEle.value = "";
            }else{
                // email and password found 

                sessionStorage.setItem("loggedInUser", JSON.stringify(userMatch));

                alert("Login Successful!, You are now redirected to our shop Page");

                window.location.href = "../shop";

            }
        }else{
            alert("You are not signed up, Please sign up to continue");

            window.location.href = "../signup";
        }
    }

    return matchFound;
}

// on login 
loginBtnEle.addEventListener("click", function(){
    let email = emailEle.value.trim();
    let password = passwordEle.value.trim();

    //check for empty input 

    if(emailEle.value.trim() === "" || passwordEle.value.trim() === ""){
        errorMsgEle.style.display = "block";
    }else{

        //email validity 

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
        }

        if(emailCheck === true && passCheck === true){
            
            checkForUser(email,password)

            
        }
    }
})
