import {createUserAccount} from "../server.js"
/* import { user } from "./login.js" */

document.getElementById("signIn").addEventListener('click', function(){
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

