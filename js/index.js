// Initialize variables
//const auth = firebase.auth();
//const database = firebase.database()


// Gets the elements in the document, assigning them to a variable
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');
 
// When the DOM is loaded on the window, 
// sets timeouts for the skatestop logo
window.addEventListener('DOMContentLoaded', () =>{
 setTimeout(() => {
  
   logoSpan.forEach((span, idx) =>{
    
    // sets timeout and loads the skatestop text
     setTimeout(()=>{
     
       span.classList.add('active');
     }, (idx + 1) * 400)
   });
 
   //sets timeout for the active skatestop text, then fades it with a transition.
   setTimeout(() => {
     logoSpan.forEach((span, idx) =>{
 
       setTimeout(() =>{
         span.classList.remove('active');
         span.classList.add('fade');
       }, (idx + 1) * 50)
 
     })
   }, 2000);
 
   // fades out into the welcome page 
   setTimeout(() => {
     intro.style.top = '-100vh';
   }, 2300)
 
 })
})

//Variable to hold map and window for errors
let map, infoWindow;

//Initialize map function necessary for google maps API to work
function initMap() {
  //Initialize map centered on Newark DE as default with specified zoom out. Showed in the div labeled 'map'
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.679811832086635, lng: -75.75088279192195 },
    zoom: 12,
    zoom: 12,
      styles: [ //style sheet for night mode on map
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
        },
      ],
  });
  //Create a geocoder object instance for the address lookup
  geocoder=new google.maps.Geocoder();

  // Try HTML5 geolocation through the internet navigator
  if (navigator.geolocation) {
    //Get the current position and sets the map center to the corrdinates
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        map.setCenter(pos);
      },
      //If theres an error, handle the location error using the map and infowindow
      () => {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
    //Event listener to make simple UI changes when viewer clicks on map
    map.addListener("click", () =>{
      content.innerHTML = '';
      document.getElementById("locationTitle").innerText = "Select a marker";
      document.getElementById("locationNavbar").style.display = "none";
    });
  //Else if the navigator doesn't show location, handle the error
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

//Function for handling location error. Prints the error on the map and moves on
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}
//Function for adding marker. Accepts the map to be placed and the coordinates of the new marker.
//Returns the marker instance that has been created and placed on the map
function addMarker(coordinates,placeMap){
  mark = new google.maps.Marker({
    position: coordinates,
    map: placeMap,
  });
  return mark
}

function buttonthing(){
  console.log("button triggered");
  var data = "{\"email\": \"one\",\"name\": \"two\",\"password\": \"three\",\"uersname\": \"four\" }";
  var xhttp = new XMLHttpRequest();
  //xhttp.open("POST", "/api/getUsers", true);
  //xhttp.send();
} 
//Function for pulling geocode info. Queries the geocoder with the input request and then sets the map center on the result.
//If nothing returned from Geocode then sends an error alert.
function geocode(request){
  console.log(request);
  geocoder
    .geocode(request)
    .then((result) => {
      const { results } = result;

      map.setCenter(results[0].geometry.location);
      return results;
    })
    .catch((e) => {
      alert("Geocode was not successful for the following reason: " + e);
    });

    document.getElementById('search').value = "";
}


var x = window.matchMedia("(max-width: 700px)")

//hide and show search bar on click of the icon
document.onclick = function(e){
  searchInput = document.getElementById('search');
  if(e.target.id == 'searchicon' || e.target.id == 'search'){
    if(x.matches){
      searchInput.style.width = '25vw';
    }else{
      searchInput.style.width = '12vw';
    }
    searchInput.focus();
  }else if(e.target.id !== 'searchicon' || e.target.id == 'search'){
    searchInput.style.width = '0';
  }
};


//hide welcome page
let welcomeButton = document.getElementById('welcome-btn');

welcomeButton.addEventListener("click", () => {
  document.getElementById('showcase').style.display = "none";
  document.getElementById('page-wrapper').style.display = "block";
})