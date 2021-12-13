import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js';
import { collection, query, where, getDocs , getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js"; 
import { getStorage, ref, listAll, getDownloadURL, uploadBytesResumable } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js";

//Firebase constant for holding data about the firebase
const firebaseConfig = {
    apiKey: "AIzaSyCa9n0xUYZX0ZbKG3MoB1K8mh4Cz1eg7XI",
    authDomain: "skatestop-faba8.firebaseapp.com",
    projectId: "skatestop-faba8",
    storageBucket: "skatestop-faba8.appspot.com",
    messagingSenderId: "978090226239",
    appId: "1:978090226239:web:4b3678213b950868c27e8a",
    measurementId: "G-SHSFDD5QK7"
};

//Function for getting all the general spots held in the firebase
function getGenSpots(){
    //Initialize the database and store in variable
    const app = initializeApp(firebaseConfig);
    const db = getFirestore();

    //Marker variable for holding created markers
    let marker;

    //Query the database for genspots that have a name
    const q = query(collection(db, "genspots"), where("name", "!=", null));
    //For every spot
    const querySnapshot = getDocs(q).then(
        querySnapshot =>{
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data());
                //Variable to hold the data
                var data=doc.data();
                //console.log(typeof data.lat);
                //Hold the coordinates for adding to the map
                var coord={lat: data.lat, lng: data.long};
                //console.log(coord)
                //Call addMarker function from index.js to add to the map
                marker = addMarker(coord, map);

                //Create a listener for onclick for the added marker. This is for loading media
                marker.addListener("click", () =>{
                    document.getElementById("locationTitle").innerText = data.name;
                    document.getElementById("locationNavbar").style.display = "block";
                    //document.getElementById("dirBtn").setAttribute("href", data.dir);
                    getImages(document.getElementById("locationTitle").innerText);
                });
            }
    )});
}

//Downloads images from DB and concatenates a string of img tags that contain the URL's of the images to display
function getImages(data){
    const storage = getStorage();
    const imgRef = ref(storage, data + "/img");
    
    //resets list of images/videos
    content.innerHTML = "";

    listAll(imgRef)  //lists every image for park
    .then((res) => {
        res.items.forEach((itemRef) => {  // All the items under imgRef.

            getDownloadURL(itemRef)
            .then((url) => {
                content.innerHTML += "<img src=" + url + " class='spotPhoto'>";
            })
            .catch((error) => {
                console.log(error);
            });
        });
    }).catch((error) => {
        console.log(error);
    });
    return null;
}

//Downloads videos from DB and concatenates a string of img tags that contain the URL's of the images to display
function getVideos(data){
    const storage = getStorage();
    const videoRef = ref(storage, data + "/video");

    //resets list of images/videos
    content.innerHTML = "";

    listAll(videoRef) //lists every video for park
    .then((res) => {
        res.items.forEach((itemRef) => { // All the items under videoRef.
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
    return null;
}

//runs when file state is changed in the input type file tag. uploads file to DB in its respective directory
function onFileChange(e){
    let data = document.getElementById("locationTitle").innerText;
    let storageRef;
    const file = e.target.files[0];
    const storage = getStorage();
    const extension = file.name.split(".").pop();

    //finding the right directory in the DB to upload file
    if(extension == 'mp4' || extension == 'm4a' || extension == 'mov'){ 
        storageRef = ref(storage, data + "/video/" + file.name);
    }else if(extension == 'jpg' || extension == 'png'){ 
        storageRef = ref(storage, data + "/img/" + file.name);
    }
    
    //uploading file
    uploadBytesResumable(storageRef, file).then(() => {
        console.log("Uploaded file", file.name, "to", storageRef);
        document.getElementById('upload-confirmation').style.display = 'block';
        setTimeout(() => {  document.getElementById('upload-confirmation').style.display = 'none'; }, 2000);
        

    });
}

// After user clicks, function gets user inputs and also converts those inputs into longitude, latitude numbers. 
// Then those numbers are send to the firestore and saved into a collection
document.getElementById("addLoc").addEventListener('click', function(){
    const db = getFirestore();
    // gets user input values
    var streetaddress = document.getElementById("streetaddy").value;
    var cityaddress = document.getElementById("cityaddy").value;
    var state = document.getElementById("state").value;
    var zipcode = document.getElementById("zipcode").value;
    var fulladdress =  (streetaddress +", " + cityaddress + ", "+ state +" "+zipcode);
  
    var geocoder = new google.maps.Geocoder();
    
    // converts user address input into lat, long numbers
    geocoder.geocode( {'address': fulladdress}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();
        // sends those numbers to the database 
        setDoc(doc(db, "genspots", streetaddress), {
          lat: latitude,
          long: longitude,
          name: streetaddress
        }).catch((error) => {
          console.log(error);
        });
        
        getGenSpots();
      } 
    });
  });
  

//EVENT LISTENERS
clipBtn.addEventListener('click', () => {
    content.innerHTML = getVideos(document.getElementById("locationTitle").innerText);
});

picBtn.addEventListener('click', () => {
    content.innerHTML = getImages(document.getElementById("locationTitle").innerText);
});

fileInput.addEventListener('change', (file) => {
    onFileChange(file);
});

//run on load of website to get all spots in DB onto map
getGenSpots();
