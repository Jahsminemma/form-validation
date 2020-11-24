//name the DOM parameters

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const psw = document.getElementById("psw")
const psw2 = document.getElementById("psw2");


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkInputValue()
    
});
let checkInputValue = ()=> {
const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const pswValue = psw.value.trim();
const psw2Value = psw2.value.trim();
const mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const charFormat = '(?=.*[0-9])(?=.*[!@#$%^&*])'

//for username
if(usernameValue === ""){
    //set error message and error class
    setErrorFor(username, 'Name cannot be blank')
}
else {
    //set success message and success class
    setSuccessFor(username)
}

//for email

if(emailValue.match(mailFormat)){
    setSuccessFor(email)
}
else if(emailValue ===""){
    setErrorFor(email, 'Email cannot be blank')
}
else{
    setErrorFor(email, 'Enter a valid email address')
}

 //for password
    if(pswValue === ""){
        setErrorFor(psw, 'password cannot be blank')
    }
    else if(pswValue.length < 6){
        setErrorFor(psw, 'password must be more than 6 characters ')
    }

    else{
        setSuccessFor(psw)
    }

//for password2

if(pswValue === ""){
    setErrorFor(psw2, 'confirm password cannot be blank')
}

else if(psw2Value !== pswValue) {
    setErrorFor(psw2, 'Password must be the same')
}
else {
    setSuccessFor(psw2)
};


}

// error and success function
let setErrorFor = (input, errorMessage) =>{
    //get the input parent element
   const  formGroup = input.parentElement;

   const small = formGroup.querySelector("small")

   //set the error class
   formGroup.className = "form-group error"
   small.innerText = errorMessage
};

let setSuccessFor = (input)=>{
 formGroup = input.parentElement;
 //set the success class
 formGroup.className = 'form-group success'
}


