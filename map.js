const express = require('express');

const bodyParser = require('body-parser');

var map;
function initMap() {
  var mapOptions = {
    zoom: 16,
    draggable: false,

    center: new google.maps.LatLng(39.9334, 32.8597),
    styles: [{ "featureType": "administrative.province", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.province", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "color": "#c5e3bf" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "lightness": 100 }, { "visibility": "simplified" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#D1D1B8" }] }, { "featureType": "road.highway", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.arterial", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry.fill", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "color": "#4c6455" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#e9e9e9" }, { "visibility": "on" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "invert_lightness": true }, { "lightness": "-100" }] }]
  };

  var mapElement = document.getElementById('map');

  map = new google.maps.Map(mapElement, mapOptions);

}

const expressServer = express();
expressServer.use(bodyParser.json());

expressServer.post('/marker', (req, res) => {
    //req.body.lat, req.body.lon
    var marker = new google.maps.Marker({
        position: req.body.position,
        map: map,
        title: 'Hello World!'
      });
    return res.send('{"Status":"OK"}');
  });

expressServer.listen(3000, ()=>{
    console.log("Starting listener server");
})