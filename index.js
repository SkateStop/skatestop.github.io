let map, infoWindow, barnes,phillips,glasgow,handloff;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
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