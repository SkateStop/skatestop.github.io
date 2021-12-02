import {logInUser} from '../server.js';

function user(email, name, username){
  this.email = email;
  this.name = name;
  this.username = username;
}
export {user};

document.getElementById("signIn").addEventListener('click', function(){
    console.log("inside function")
    const email = document.getElementById("inputEmailLogin").value
    const password = document.getElementById("inputPasswordLogin").value
    logInUser(email, password)
  })