let map, infoWindow, barnes,phillips,glasgow,handloff;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.679811832086635, lng: -75.75088279192195 },
    zoom: 12,
  });
  infoWindow = new google.maps.InfoWindow();
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
      document.getElementById("locationTitle").innerText = "Click a marker to get started";
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
  mark= new google.maps.Marker({
    position: coordinates,
    map: placeMap,
  });
  return mark
}
