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

    inputName = document.getElementById('#inputName').value;
    email = document.getElementById('#inputEmail').value;
    username = document.getElementById('#inputUserName').value;
    password = document.getElementById('#inputPassword').value;
    
    //validate input fields
    validate_email(email);
    validate_password(password);

    console.log("hello!!");

    event.preventDefault();

}


function validate_email(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
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
