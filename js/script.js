var open = document.querySelector(".search-button");
var searchbox =  document.querySelector(".search-box");

if (searchbox) {
  searchbox.classList.add("hide");
};
  open.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchbox.classList.toggle("hide");
  searchbox.classList.toggle("show");
});

function init_map(){
  var myOptions = {
    zoom:10,
    center:new google.maps.LatLng(34.8697395,-111.76098960000002),
    zoomControlOptions: {position: google.maps.ControlPosition.LEFT_TOP},
    mapTypeId: google.maps.MapTypeId.ROADMAP};
  map = new google.maps.Map(document.getElementById("gmap"), myOptions);
  marker = new google.maps.Marker({
  map: map,position: new google.maps.LatLng(34.8697395,-111.76098960000002)});
  infowindow = new google.maps.InfoWindow({content:'Sedona'});
  google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});
  infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);
