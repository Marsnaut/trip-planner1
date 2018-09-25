const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker.js')

mapboxgl.accessToken = 'pk.eyJ1Ijoiamh1YW5nNTEzMiIsImEiOiJjam1pNnc1cG0wMWkzM2ttb2txazV3b2NzIn0.Thiw7P_wmZMGjXBKG-u2lw';
const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10'
});

buildMarker('activity', [-74.009, 40.705]).addTo(map);