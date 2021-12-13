import {createUserAccount} from "../server.js"
/* import { user } from "./login.js" */

// check to see if the user input a valid email
function validate_email(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// checks to see if the user put in a valid password
function validate_password (password) {
    if (password < 6) {
        return false
    } else {
        return true
    }
}

// takes user info and creates a new user in Firebase
document.getElementById("signUpBtn").addEventListener('click', function(){
    const email = document.getElementById("inputEmailSignup").value
    const password = document.getElementById("inputPasswordSignup").value
    const username = document.getElementById("inputUserName").value
    // check to see of the user imputed a valid email and password
    if (validate_email(email) && validate_password(password)){
        // create a new user
        createUserAccount(email, password, username)
    }
    else{
        return
    }
})


