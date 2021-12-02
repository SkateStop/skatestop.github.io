import {createUser} from "../server.js"

document.getElementById("signIn").addEventListener('click', function(){
    console.log("inside function")
    const email = document.getElementById("inputEmail").value
    const password = document.getElementById("inputPassword").value

    if (validate_email(email) && validate_password(password)){
        createUser(email, password)
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

