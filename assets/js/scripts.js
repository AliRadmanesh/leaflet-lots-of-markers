var map = L.map("map");
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png").addTo(map);

map.setView([32.4279, 53.6880], 6);

var markerRenderer = L.canvas({ padding: 0.5 });

for (var i = 0; i < 100000; i += 1) { // Add 100k points to map!
  L.circleMarker(getRandomLatLng(), {
    renderer: markerRenderer,
    radius: 5
  }).addTo(map).bindPopup('marker ' + i);
}

function getRandomLatLng() {
  return [
    -90 + 180 * Math.random(),
    -180 + 360 * Math.random()
  ];
}
