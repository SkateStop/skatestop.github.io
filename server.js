import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js"; 
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
const firebaseConfig = {
apiKey: "AIzaSyCa9n0xUYZX0ZbKG3MoB1K8mh4Cz1eg7XI",
authDomain: "skatestop-faba8.firebaseapp.com",
projectId: "skatestop-faba8",
storageBucket: "skatestop-faba8.appspot.com",
messagingSenderId: "978090226239",
appId: "1:978090226239:web:4b3678213b950868c27e8a",
measurementId: "G-SHSFDD5QK7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const user = auth.currentUser;

function isUserLoggedIn(){
  if(user != null){
    return true
  } else {
    return false
  }
}

/* function user(email, name, username){
  this.email = email;
  this.name = name;
  this.username = username;
} */

/* const database = app.database();
 *//* const db = d
 */
/* import express from 'express';
const e_app = express();
const port = process.env.PORT || 3000;

import path from 'path';

e_app.use(express.static('public'));

e_app.get('/api/getUsers', function(req, res) {
    res.send("hello world!");
});

e_app.post('/api/addUser', function(req, res){
    const usersRef = doc(db, 'users', 'default');
    setDoc(usersRef, { 
      email: "one",
       name: "two",
      password: "three",
      uersname: "four" 
    });
});

e_app.post('/api/addMedia', function(req, res){
    
});

e_app.post('/api/addLocation', function(req, res){

});

e_app.listen(port, () => {console.log(`listening at http://localhost:${port}`);});
 */
// Sign Up - Add user to firebase authentication


function createUserAccount(email, password, username){
  console.log("created user")

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: username
        }).then(() => {
          // Profile updated!
          // ...
          console.log('profile updated')
        }).catch((error) => {
          // An error occurred
          // ...
    
          const errorCode = error.code;
          const errorMessage = error.message;
    
          console.log(errorCode + errorMessage);
        });
      // ...
      console.log("created user")
      alert("Signed In!!")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode + errorMessage);
    });
    
}

function logInUser(email, password){
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      
      console.log(user.displayName)
      console.log(user.email)
      console.log("user logged in")
      alert("Signed In!!")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode + errorMessage);
    });
  }

export {createUserAccount, logInUser, isUserLoggedIn};
/* function serverTest(){
    console.log("button triggered");
    
  }  */