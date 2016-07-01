function initGoogleMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 41.844, lng: -87.62},
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: {lat: 41.844, lng: -87.62},
        map: map,
        icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FE7569',
        title: 'SPICE CASTLE'
    });
    var infowindow = new google.maps.InfoWindow({
        content: 'SPICE CASTLE'
    });
    marker.addListener('click', function() {
        infowindow.open(marker.get('map'), marker);
    });
}