import { initializeApp } from 'firebase/app';
import { doc, setDoc } from "firebase/firestore"; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
const auth = getAuth();

import express from 'express';
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


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


function serverTest(){
    console.log("button triggered");
    
  } 