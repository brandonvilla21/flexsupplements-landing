function initMap() {
    var uluru = { lat: 19.705686, lng: -103.465367 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru,
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}