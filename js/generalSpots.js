import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';
import { collection, query, where, getDocs , getFirestore} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js"; 

const firebaseConfig = {
    apiKey: "AIzaSyCa9n0xUYZX0ZbKG3MoB1K8mh4Cz1eg7XI",
    authDomain: "skatestop-faba8.firebaseapp.com",
    projectId: "skatestop-faba8",
    storageBucket: "skatestop-faba8.appspot.com",
    messagingSenderId: "978090226239",
    appId: "1:978090226239:web:4b3678213b950868c27e8a",
    measurementId: "G-SHSFDD5QK7"
    };
function getGenSpots(){
    const app = initializeApp(firebaseConfig);
    const db = getFirestore();

    const q = query(collection(db, "genspots"), where("name", "!=", null));
    const querySnapshot = getDocs(q).then(
        querySnapshot =>{
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
                var data=doc.data();
                console.log(typeof data.lat);
                var coord={lat: data.lat, lng: data.long};
                console.log(coord)
                addMarker(coord, map);
            }
    )});
}

getGenSpots();