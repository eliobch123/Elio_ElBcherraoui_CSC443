let map;
let longi = -34.397;
let lati = 150.644;

$("#dis").on("click", function(){
    lati = parseFloat($("#lat").val());
    longi = parseFloat($("#long").val());
    initMap();
});
$("#location").on("click", function(){

    getLocation()
    initMap();
})
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } 
}
function showPosition(position){
    lati = position.coords.latitude;
    longi = positon.coords.longitude;
}

function initMap() {
    const loc ={ lat: lati, lng: longi };
     map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: loc,
  });
  const mark = new google.maps.Marker({
      position: loc,
      map: map,
  });
}
