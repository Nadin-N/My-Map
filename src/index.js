// define zoomSize
let zoomSize = 1;
const windowWidth = window.screen.width;

if (windowWidth > 1210) {
  zoomSize = 6.5;
} else if (windowWidth > 1060) {
  zoomSize = 6.3;
} else if (windowWidth > 890) {
  zoomSize = 6;
} else if (windowWidth > 710) {
  zoomSize = 5.7;
} else if (windowWidth > 640) {
  zoomSize = 5.5;
} else if (windowWidth > 550) {
  zoomSize = 5.3;
} else if (windowWidth > 478) {
  zoomSize = 5;
} else if (windowWidth > 400) {
  zoomSize = 4.8;
} else if (windowWidth > 320) {
  zoomSize = 4.5;
}
// initialize map
const map = L.map('map', {
  zoomSnap: 0.1,
}).setView([48.6, 31.2], zoomSize);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  minZoom: 1,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// initialize pop up on random map click including coordinates
const randomClickPopup = L.popup();

function onMapClick(e) {
  randomClickPopup
    .setLatLng(e.latlng)
    .setContent('You clicked the map at ' + e.latlng.toString())
    .openOn(map);
}

map.on('click', onMapClick);

// create markers
function createMarker(e) {
  const lat = e.latlng.lat;
  const lng = e.latlng.lng;
  const marker = L.marker([lat, lng]).addTo(map);
}

map.on('click', createMarker);

// // initialize markers,circles, polygons

// var markerDnipro = L.marker([48.27, 35.01], {
//   color: 'yellow',
//   fillColor: 'yellow',
//   fillOpacity: 0.5,
//   radius: 12000,
//   draggable: true,
// }).addTo(map);

// var circleKhmelnytskyi = L.circle([49.42, 26.98], {
//   color: 'red',
//   fillColor: 'red',
//   fillOpacity: 0.5,
//   radius: 12000,
// }).addTo(map);

// var polygonKiev = L.polygon(
//   [
//     [50.3, 30.15], //latitude/longitude
//     [50.3, 30.9],
//     [50.6, 30.9],
//     [50.6, 30.15],
//   ],
//   {
//     color: 'green',
//     fillColor: 'green',
//     fillOpacity: 0.5,
//     radius: 10000,
//   }
// ).addTo(map);

// polygonKiev.bindPopup('<b>Work is done</b>').openPopup();
// markerDnipro.bindPopup('<b>The work is being performed</b>');
// circleKhmelnytskyi.bindPopup('<b>The work has not yet started</b>');
