
let map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 42.502787, lng: 27.452733},
        zoom: 8
    });
}
var marker = new google.maps.Marker({
    position:   {lat: 42.548326, lng: 27.407177},
    title:"Hello World!"
});
marker.setMap(map);
google.maps.event.addListener(marker, "click", function (event) {
    var latitude = event.latLng.lat();
    var longitude = event.latLng.lng();
    console.log( latitude + ', ' + longitude );
});