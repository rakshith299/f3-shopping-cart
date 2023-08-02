let signUpBtnEle = document.getElementById("signup-btn");
let loginBtnEle = document.getElementById("login-btn");


signUpBtnEle.addEventListener("click", function(){
    window.location.href = "./signup";
})

loginBtnEle.addEventListener("click", function(){
    window.location.href = "./login";
})