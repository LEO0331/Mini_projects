//https://leafletjs.com/reference-1.6.0.html#map-example
//https://quip.com/vdqYAiFHHkaV; https://codepen.io/liao/pen/poJoqmz
var map = L.map('map', {
    center: [-34.921230,138.599503],
    zoom: 20
});
var greenIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
//what map info
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
//data
var data = [
	{'name':'center', lat:-34.921230, lng:138.599503},
	{'name':'UoA', lat:-34.919159, lng:138.60414}
]
//add a marker with its coordinates
for(let i=0; i<data.length; i++){ //L.marker([22.604799,120.2976256], {icon: greenIcon})
	L.marker([data[i].lat, data[i].lng]).addTo(map).bindPopup(`<h1>${data[i].name}</h1>`); //'<h1>'+ data[i].name +'</h1>'
}
