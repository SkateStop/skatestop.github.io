import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';
import { collection, query, where, getDocs , getFirestore} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js"; 
import { getStorage, ref, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js";

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

    let marker;

    const q = query(collection(db, "genspots"), where("name", "!=", null));
    const querySnapshot = getDocs(q).then(
        querySnapshot =>{
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
                var data=doc.data();
                //console.log(typeof data.lat);
                var coord={lat: data.lat, lng: data.long};
                //console.log(coord)
                marker = addMarker(coord, map);

                marker.addListener("click", () =>{
                    document.getElementById("locationTitle").innerText = data.name;
                    document.getElementById("locationNavbar").style.display = "block";
                    document.getElementById("dirBtn").setAttribute("href", data.dir);
                    getImages(document.getElementById("locationTitle").innerText);
                });
            }
    )});
}

function getImages(data){
    const storage = getStorage();
    const imgRef = ref(storage, data + "/img");

    content.innerHTML = "";

    listAll(imgRef) //lists every image for park
    .then((res) => {
        res.items.forEach((itemRef) => { // All the items under imgRef.
            //console.log(itemRef._location.path_);

            getDownloadURL(itemRef)
            .then((url) => {
                //console.log("url is " + url);
                content.innerHTML += "<img src=" + url + " class='spotPhoto'>";
            })
            .catch((error) => {
                console.log(error);
            });
        });
    }).catch((error) => {
        console.log(error);
    });

}

function getVideos(data){
    const storage = getStorage();
    const videoRef = ref(storage, data + "/video");

    content.innerHTML = "";
    listAll(videoRef) //lists every video for park
    .then((res) => {
        res.items.forEach((itemRef) => { // All the items under videoRef.
            //console.log(itemRef._location.path_);

            getDownloadURL(itemRef)
            .then((url) => {
                content.innerHTML += "<video class='spotPhoto' src=" + url + " controls muted>";
            })
            .catch((error) => {
                console.log(error);
            });
        });
    }).catch((error) => {
        console.log(error);
    });
}

clipBtn.addEventListener('click', () => {
    content.innerHTML = getVideos(document.getElementById("locationTitle").innerText);
});

picBtn.addEventListener('click', () => {
    content.innerHTML = getImages(document.getElementById("locationTitle").innerText);
});

getGenSpots();
