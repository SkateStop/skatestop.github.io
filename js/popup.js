/* import {isUserLoggedIn} from '../server.js' */

function openLocationForm() {
  document.getElementById("locationForm").style.display = "inline";
}
  
function closeLocationForm() {
  document.getElementById("locationForm").style.display = "none";
}

function openLoginForm(){
  document.getElementById("loginForm").style.display = "inline";
}

function closeLoginForm(){
  document.getElementById("loginForm").style.display = "none";
}

function opensignupForm(){
  document.getElementById("signupForm").style.display = "inline";
}

function closesignupForm(){
  document.getElementById("signupForm").style.display = "none";
}

function showLogOutBtn(){
  if(isUserLoggedIn()){
    
  }
}

