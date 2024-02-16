const passwordShowButton = document.querySelector('[data-js ="eye-button"]');
const passwordText = document.querySelector(".passwordField");
const form = document.querySelector("form");


passwordShowButton.addEventListener("click",()=>{
if(passwordText.type==="password"){
    passwordText.type="text";
    
}
else{
passwordText.type="password";
}
})


form.addEventListener('submit', function (e) {
e.preventDefault();
});