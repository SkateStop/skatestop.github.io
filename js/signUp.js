// set up register Function

function register () {
    //Get all input fields

    inputName = document.getElementById('inputName').value;
    email = document.getElementById('inputEmail').value;
    username = document.getElementById('inputUserName').value;
    password = document.getElementById('inputPassword').value;
    
    //validate input fields

}

function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/.test(str);
    if (expression.test(email) == true){
        // email is good
        return true
    } else {
        // Email is not good
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

function validate_field(field)