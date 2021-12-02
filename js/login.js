import {logInUser} from '../server.js';

document.getElementById("signIn").addEventListener('click', function(){
    console.log("inside function")
    const email = document.getElementById("inputEmail").value
    const password = document.getElementById("inputPassword").value
    logInUser(email, password)
  })