import { createUserWithEmailAndPassword } from "@firebase/auth";

const signUp = document.getElementById('#signUp');
/* signUp.addEventListener(signUp, (e) => {
    e.preventDefault();

    inputName = document.getElementById('inputName').value;
    email = document.getElementById('inputEmail').value;
    username = document.getElementById('inputUserName').value;
    password = document.getElementById('inputPassword').value;
    
    //validate input fields
    validate_email(email);
    validate_password(password);

    if(email && password){
        console.log(email, password);
    }
    
}); */
// set up register Function

function register (event) {
    //Get all input fields

    inputName = document.querySelector('inputName').value;
    email = document.querySelector('inputEmail').value;
    username = document.querySelector('inputUserName').value;
    password = document.querySelector('inputPassword').value;
    
    //validate input fields
    if (validate_email(email) == false || validate_password(password) == false){
        alert("Email or password dont work")
        return
    }

    createUser(email, password, inputName, username)
    console.log("hello!!")

    event.preventDefault()

}


function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true){
        return true
    }
    else {
        return false
    }
}

function validate_password (password) {
    if (password < 6) {
        return false
    } else {
        return true
    }
}
if(signUp){
    signUp.addEventListener('submit', register);
}
