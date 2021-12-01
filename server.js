import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js"; 
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

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
document.getElementById("signUpBtn").addEventListener('click', function(){
  const email = document.getElementById("inputEmail").value
  const password = document.getElementById("inputPassword").value
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      console.log("created user")
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode + errorMessage);
  });
})




/* function serverTest(){
    console.log("button triggered");
    
  }  */