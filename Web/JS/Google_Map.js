
var map, infoWindow,latitude,longitude, gMarker = null;
function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 6
    });
    infoWindow = new google.maps.InfoWindow;
    if (checkCookie()!==""){
        var fixedPos=checkCookie();
        console.log(fixedPos);

        let pos1 = {
            lat: parseFloat(fixedPos[0]),
            lng: parseFloat(fixedPos[1])
        };

        console.log(pos1);
        infoWindow.setPosition(pos1);
        alert("baca1");
        infoWindow.setContent('Your Location.');
        infoWindow.open(map);
        map.setCenter(pos1);
        console.log("MAKO");
    }
    else {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position);
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                console.log("MAKO3");
                console.log(pos);
                infoWindow.setPosition(pos);
                infoWindow.setContent('Your Location.');
                infoWindow.open(map);
                map.setCenter(pos);
            }, function () {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            alert("You must set your position, because your browser doesn't support geolocation or you haven't allowed us to know your location");
            infoWindow.open(map);
        }
    }
}
function ChangePosition(marker_count){
    google.maps.event.addListener(map, 'click', function(event) {
        document.getElementById("MapButton").style.visibility="visible";
        latitude = event.latLng.lat();
        longitude = event.latLng.lng();

        if (gMarker == null) {
            gMarker = new google.maps.Marker({
                position:   {lat: latitude, lng: longitude},
                map:map
            });
        } else {
            if (marker_count === 0) {
                gMarker.setMap(null);
            }
            gMarker = new google.maps.Marker({
                position:   {lat: latitude, lng: longitude},
                map:map
            });
        }
    });
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ';SameSite=None; ' + expires + ';path=/';
    document.cookie = cname + "=" + cvalue + ';SameSite=None; ' + expires + ';path=/';
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("Co1");
    var user2 = getCookie("Co2");
    if (user !== "undefined"&& user2!=="undefined"&&user!==""&&user2!=="") {
        document.getElementById("MapButtonNot").style.visibility="hidden";
        document.getElementById("MapButton").style.visibility="hidden";
        return [user, user2];
    } else {
            setCookie("Co1", latitude, 30);
            setCookie("Co2",longitude , 30);
    }
}
