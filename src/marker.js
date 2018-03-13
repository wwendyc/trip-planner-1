const mapboxgl = require("mapbox-gl")

const hotelImage = "url( http://i.imgur.com/WbMOfMl.png)";
const activityImage = "url( http://i.imgur.com/D9574Cu.png)"
const restImage =  "url(http://i.imgur.com/cqR6pUI.png)"
const image = {
  hotel: "url( http://i.imgur.com/WbMOfMl.png)",
  activityImage: "url( http://i.imgur.com/D9574Cu.png)",
  restImage: "url(http://i.imgur.com/cqR6pUI.png)"
}
function marker(type, coordinates){
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage  = image[type];
  return new mapboxgl.Marker(markerDomEl)
    .setLngLat(coordinates)
}

module.exports = marker;
// cons markHotel = marker("hotel"){ }
