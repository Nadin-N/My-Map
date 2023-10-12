var map = L.map('map').setView([48.5, 31, 7], 6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent('You clicked the map at ' + e.latlng.toString())
    .openOn(map);
}

map.on('click', onMapClick);

var markerDnipro = L.marker([48.27, 35.01], {
  color: 'yellow',
  fillColor: 'yellow',
  fillOpacity: 0.5,
  radius: 12000,
  draggable: true,
}).addTo(map);

var circleKhmelnytskyi = L.circle([49.42, 26.98], {
  color: 'red',
  fillColor: 'red',
  fillOpacity: 0.5,
  radius: 12000,
}).addTo(map);

var polygonKiev = L.polygon(
  [
    [50.3, 30.15], //latitude/longitude
    [50.3, 30.9],
    [50.6, 30.9],
    [50.6, 30.15],
  ],
  {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.5,
    radius: 10000,
  }
).addTo(map);

polygonKiev.bindPopup('<b>Work is done</b>').openPopup();
markerDnipro.bindPopup('<b>The work is being performed</b>');
circleKhmelnytskyi.bindPopup('<b>The work has not yet started</b>');
