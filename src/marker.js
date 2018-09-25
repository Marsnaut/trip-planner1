const mapboxgl = require('mapbox-gl');

function buildMarker(icon, coordinateArray) {

  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';

  const iconURLS = {
    hotel: 'http://i.imgur.com/D9574Cu.png',
    activity: 'http://i.imgur.com/WbMOfMl.png',
    restaurant: 'http://i.imgur.com/cqR6pUI.png'
  }

  markerDomEl.style.backgroundImage = `url(${iconURLS[icon]})`;

  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinateArray)
}

module.exports = buildMarker;