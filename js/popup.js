/* import {isUserLoggedIn} from '../server.js' */

// open location form popup
function openLocationForm() {
  document.getElementById("locationForm").style.display = "inline";
}
// close location form popup
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

