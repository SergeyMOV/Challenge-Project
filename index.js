const passwordShowButton = document.querySelector('[data-js ="eye-button"]');
const passwordText = document.querySelector(".passwordField");
const form = document.querySelector("form");

passwordShowButton.classList.add("fa", "fa-eye-slash");

passwordShowButton.addEventListener("click",()=>{
if(passwordText.type ==="password"){
    passwordText.type="text";
    passwordShowButton.classList.remove("fa-eye-slash");
    passwordShowButton.classList.add("fa-eye");
}
else{
passwordText.type ="password";
passwordShowButton.classList.remove("fa-eye");
passwordShowButton.classList.add("fa-eye-slash");
}
});


form.addEventListener('submit', function (e) {
e.preventDefault();
});