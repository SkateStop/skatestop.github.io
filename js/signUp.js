

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

