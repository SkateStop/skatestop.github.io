import {createUserAccount} from "../server.js"
/* import { user } from "./login.js" */


function validate_email(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validate_password (password) {
    if (password < 6) {
        return false
    } else {
        return true
    }
}


document.getElementById("signUpBtn").addEventListener('click', function(){
    console.log("inside function")
    const email = document.getElementById("inputEmailSignup").value
    const password = document.getElementById("inputPasswordSignup").value
    const name = document.getElementById("inputName").value
    const username = document.getElementById("inputUserName").value

    if (validate_email(email) && validate_password(password)){
        createUserAccount(email, password, name, username)
    }
    else{
        return
    }
})


