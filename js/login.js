import {logInUser} from '../server.js';

// Event Listner for the login button to log user in
document.getElementById("signIn").addEventListener('click', function(){
    console.log("inside function")
    const email = document.getElementById("inputEmailLogin").value
    const password = document.getElementById("inputPasswordLogin").value
    logInUser(email, password)
  })