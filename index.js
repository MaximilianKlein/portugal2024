const key = 'i0jipSy3K8wG4dcfZqZ5';

const map = L.map('map').setView([50, 20], 4);
// const mtLayer = L.maptilerLayer({
//   apiKey: key,
//   style: L.MaptilerStyle.OUTDOOR, // optional
// }).addTo(map);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// document.getElementById('buttons').addEventListener('click', function (event) {
//   let style = L.MaptilerStyle.STREETS;
//   // Retrieve basemap style based on button id
//   switch (event.target.id) {
//     case "streets":
//       style = L.MaptilerStyle.STREETS;
//       break;
//     case "outdoor":
//       style = L.MaptilerStyle.OUTDOOR;
//       break;
//     case "dark":
//       style = L.MaptilerStyle.DATAVIZ.DARK;
//       break;
//     case "light":
//       style = L.MaptilerStyle.DATAVIZ.LIGHT;
//       break;
//   }
//   mtLayer.setStyle(style);
// });