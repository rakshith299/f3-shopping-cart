let firstNameEle = document.getElementById("first-name");
let lastNameEle = document.getElementById("last-name");

let oldPasswordEle = document.getElementById("old-password");
let newPasswordEle = document.getElementById("new-password");
let confirmPasswordEle = document.getElementById("confirm-password");

let updateBtnEle = document.getElementById("update-btn");
let logOutBtnEle = document.getElementById("log-out-btn");


// no direct access 
window.onload = function(){
    let currentUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if(!currentUser){
        window.location.href = "../index.html";
    }
}


//user details update func 

function updateUserProfile(firstName, lastName, newPassword, confirmPassword){
    let userObj = JSON.parse(sessionStorage.getItem("loggedInUser"));

    let usersArr = JSON.parse(localStorage.getItem("users"));


    let gotUserObj = usersArr.find((each) => {
        return each.email === userObj.email;
    })

    // updating in local storage

    gotUserObj.fName = firstName;
    gotUserObj.lName = lastName;
    gotUserObj.password = newPassword;


    // updating for session storage 

    userObj.fName = firstName;
    userObj.lName = lastName;
    userObj.password = newPassword;

    //storing 

    localStorage.setItem("users", JSON.stringify(usersArr));
    sessionStorage.setItem("loggedInUser", JSON.stringify(userObj));

    alert("User details has been updated succesfully");

}


// fetching old password 
let user = JSON.parse(sessionStorage.getItem("loggedInUser"));

oldPasswordEle.value = user.password;


// logout button 

logOutBtnEle.addEventListener("click", function(){
    let response = confirm("Are you sure you want to exit?");

    if(response){

        sessionStorage.clear();
        window.location.href = "../index.html";
    }
})

// update btn 
updateBtnEle.addEventListener("click", function(){
    let firstName = firstNameEle.value.trim();
    let lastName = lastNameEle.value.trim();
    let oldPassword = oldPasswordEle.value;
    let newPassword = newPasswordEle.value.trim();
    let confirmPassword = confirmPasswordEle.value.trim();

    if(firstName === "" || lastName === "" || newPassword === "" || confirmPassword === ""){
        alert("All fields are mandatory to fill")
    }else{

         // check for password validy 
    
        let passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        let newPassCheck = passRegex.test(newPassword);

        if(newPassCheck === false){
            alert("Password should contain 8 characters including one letter and one number");
            newPasswordEle.value = "";
            confirmPasswordEle.value = "";
        }

        // checking for password equal

        let pEqual = false;
        if(newPassword !== confirmPassword){
            alert("Password and confirm password are not matching");
            newPasswordEle.value = "";
            confirmPasswordEle.value = "";
        }else{
            pEqual = true;
        }

        // check for name validity 

        let nameRegex = /^[a-zA-Z ]+$/;

        let fNameCheck = nameRegex.test(firstName);
        let lNameCheck = nameRegex.test(lastName);



        if(fNameCheck === true && lNameCheck === true && pEqual === true && newPassCheck === true){
            updateUserProfile(firstName, lastName, newPassword, confirmPassword)
        }
    }
})


