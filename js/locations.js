// Translates address input from user to lat and long
document.getElementById("addLoc").addEventListener('click', function(){
  //geocoder = new google.maps.Geocoder();                              

   // Selecting the input element and get its value 
  // var parkname = document.getElementById("parkn").value;
   var streetaddress = document.getElementById("streetaddy").value;
   var cityaddress = document.getElementById("cityaddy").value;
   var state = document.getElementById("state").value;
   var zipcode = document.getElementById("zipcode").value;
   
   // Displaying the value (will be removed once adding locations work)
   //alert(parkname);
   /* console.log(streetaddress);
   console.log(cityaddress);
   alert(state);
   alert(zipcode); */

 geocoder.geocode( {'address': streetaddress +", " + cityaddress + ", "+ state +" "+zipcode}, {function(results, status) {
   if (status == 'OK') {
     /* alert(results[0].geometry.location);
     alert(results[0].geometry.location.latitude);
     alert(results[0].geometry.location.longitude); */


     /* map.setCenter(results[0].geometry.location);
     var marker = new google.maps.Marker({
         map: map,
         position: results[0].geometry.location
     }); */
   } else {
     alert('Geocode was not successful for the following reason: ' + status);
   }
 }});
});
