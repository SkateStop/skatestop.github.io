// Initialize variables
//const auth = firebase.auth();
//const database = firebase.database()



let map, infoWindow, barnes,phillips,glasgow,handloff,geocoder;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.679811832086635, lng: -75.75088279192195 },
    zoom: 12,
    zoom: 12,
      styles: [
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
  infoWindow = new google.maps.InfoWindow();
  geocoder=new google.maps.Geocoder();

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent("Location found.");
        infoWindow.open(map);
        map.setCenter(pos);
      },
      () => {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );

    phillips= addMarker({lat :  39.66985532533391,lng : -75.7577820185161}, map);
    glasgow= addMarker({lat :  39.608109531466724,lng : -75.73057593704098}, map);
    handloff= addMarker({lat :  39.679362282770924,lng : -75.77111988050964}, map);
    barnes= addMarker({lat :  39.683215263915216,lng : -75.7497534599226}, map);
    
    //clears sidebar when you click on anything but a marker
    map.addListener("click", () =>{
      content.innerHTML = '';
      document.getElementById("locationTitle").innerText = "Select a marker";
      document.getElementById("locationNavbar").style.display = "none";
    });

    //HARD CODED SPOTS
    glasgow.addListener("click", () =>{
      content.innerHTML = '<img src="images/glasgow/glasgow1.jpg" class="spotPhoto"><img src="images/glasgow/glasgow2.jpg" class="spotPhoto"><img src="images/glasgow/glasgow3.jpg" class="spotPhoto"><img src="images/glasgow/glasgow5.jpg" class="spotPhoto"><img src="images/glasgow/glasgow4.jpg" class="spotPhoto">';
      document.getElementById("locationTitle").innerText = "Glasgow Park";
      document.getElementById("locationNavbar").style.display = "block";
    });
    phillips.addListener("click", () =>{
      content.innerHTML = '<img src="images/phillips/phillips1.jpg" class="spotPhoto"><img src="images/phillips/phillips2.jpg" class="spotPhoto">';
      document.getElementById("locationTitle").innerText = "Phillips Park";
      document.getElementById("locationNavbar").style.display = "block";
    });
    handloff.addListener("click", () =>{
      content.innerHTML = '<img src="images/handloff/handloff1.jpg" class="spotPhoto"><img src="images/handloff/handloff2.jpg" class="spotPhoto"><img src="images/handloff/handloff3.jpg" class="spotPhoto">';
      document.getElementById("locationTitle").innerText = "Handloff Park";
      document.getElementById("locationNavbar").style.display = "block";
    });
    barnes.addListener("click", () =>{
      content.innerHTML = '<img src="images/barnes/barnes1.jpg" class="spotPhoto"><img src="images/barnes/barnes3.jpg" class="spotPhoto">';
      document.getElementById("locationTitle").innerText = "Barnes & Noble";
      document.getElementById("locationNavbar").style.display = "block";
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

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
