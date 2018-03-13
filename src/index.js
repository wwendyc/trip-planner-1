const mapboxgl = require("mapbox-gl")
const marker =  require("./marker")

mapboxgl.accessToken = "pk.eyJ1IjoiZWx6YS1hYiIsImEiOiJjamVxMnhsamQ1dmkxMzJsbnMweTJueTIzIn0.FvJGBmsdzyFwjiez0MLjrQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

marker("hotel", [-74.009151, 40.705086]).addTo(map);



