<template>
  <div>
    <h3>Uso de mapas con leaflet nativo | (sin usar vue-leaflet)</h3>
    <div class="container-grid">
      <div id="mapA" class="maps"></div>
      <div id="mapB" class="maps"></div>
      <div id="mapC" class="maps"></div>
    </div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
export default {
  name: "HomeView",
  data() {
    return {
      mapA: "",
      mapB: "",
      mapC: "",
      center: [-33.4395004, -70.6511933],
      zoom: 12,
    };
  },
  mounted() {
    this.startMapA();
    this.startMapB();
    this.startMapC();
  },
  methods: {
    startMapA() {
      const self = this;

      var tileLayers = this.setTileLayers();

      this.mapA = L.map("mapA", {
        center: self.center,
        zoom: self.zoom,
        layers: tileLayers.map,
      });

      var baseMaps = tileLayers.base_map;

      var myIcon = L.icon({
        iconUrl: "leaf-green.png",
        shadowUrl: "leaf-shadow.png",
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76],
      });

      L.marker(
        [-33.4395004, -70.6511933],

        {
          icon: myIcon,
        }
      ).addTo(this.mapA);

      L.control.layers(baseMaps).addTo(this.mapA);
    },
    startMapB() {
      const self = this;

      var tileLayers = this.setTileLayers();

      this.mapB = L.map("mapB", {
        center: self.center,
        zoom: self.zoom - 3,
        layers: tileLayers.map,
      });

      this.mapB.pm.addControls({
        position: "topleft",
        drawCircle: false,
      });

      var baseMaps = tileLayers.base_map;

      var LeafIcon = L.Icon.extend({
        options: {
          shadowUrl: "leaf-shadow.png",
          iconSize: [38, 95],
          shadowSize: [50, 64],
          iconAnchor: [22, 94],
          shadowAnchor: [4, 62],
          popupAnchor: [-3, -76],
        },
      });

      var greenIcon = new LeafIcon({ iconUrl: "leaf-green.png" }),
        redIcon = new LeafIcon({ iconUrl: "leaf-red.png" }),
        orangeIcon = new LeafIcon({ iconUrl: "leaf-orange.png" });

      var littleton = L.marker([-33.4527754, -70.7545602], { icon: greenIcon })
        .addTo(this.mapB)
        .bindPopup("I am a green leaf.");
      var denver = L.marker([-33.4676873, -70.8037841], { icon: redIcon })
        .addTo(this.mapB)
        .bindPopup("I am a red leaf.");
      var aurora = L.marker([-33.4826551, -70.8189128], { icon: orangeIcon })
        .addTo(this.mapB)
        .bindPopup("I am an orange leaf.");

      var cities = L.layerGroup([littleton, denver, aurora]);
      var cities_two = L.layerGroup([littleton, aurora]);

      var overlayMaps = {
        Cities: cities,
        cities_two,
      };
      L.control.layers(baseMaps, overlayMaps).addTo(this.mapB);
    },
    startMapC() {
      const self = this;

      var tileLayers = this.setTileLayers();

      this.mapC = L.map("mapC", {
        center: self.center,
        zoom: self.zoom,
        layers: tileLayers.map,
      });

      this.mapC.pm.addControls({
        position: "topleft",
        drawCircle: false,
      });

      var baseMaps = tileLayers.base_map;

      var circle = L.circle([-33.4395004, -70.6511933], {
        color: "red",

        fillColor: "#f03",

        fillOpacity: 0.5,
        radius: 500,
      }).addTo(this.mapC);

      var polygon = L.polygon([
        [-33.4395004, -70.6411933],
        [-33.4495004, -70.6511933],
        [-33.4895004, -70.6611933],
        [-33.4695004, -70.6511933],

        [-33.4495004, -70.6611933],
      ]).addTo(this.mapC);

      circle.bindPopup("I am a circle.");
      polygon.bindPopup("I am a polygon.");

      L.control.layers(baseMaps).addTo(this.mapC);

      //rectangulo
      // define rectangle geographical bounds
      // var bounds = [
      //   [54.559322, -5.767822],
      //   [56.1210604, -3.02124],
      // ];

      // create an orange rectangle
      // L.rectanRFRJ´{J    BB gle(bounds, { color: "blue", weight: 1 }).addTo(this.mapC);

      // zoom the map to the rectangle bounds
      // this.mapC.fitBounds(bounds);

      // var latlngs = [
      //   [37, -109.05],
      //   [41, -109.03],
      //   [38, -107.07],
      //   [41, -102.05],
      //   [37, -102.04],
      // ];

      // var polygon2 = L.polygon(latlngs, { color: "red" }).addTo(this.mapC);

      // zoom the this.mapC to the polygon
      // this.mapC.fitBounds(polygon2.getBounds());
    },
    setTileLayers() {
      var openstreetmap = L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 20,
        }
      );
      var OpenTopoMap = L.tileLayer(
        "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
        {
          maxZoom: 17,
          attribution:
            'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
        }
      );

      var cyclosm = L.tileLayer(
        "https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
          minZoom: 0,
          maxZoom: 20,
        }
      );

      return {
        map: [openstreetmap],
        base_map: {
          openstreetmap,
          OpenTopoMap,
          cyclosm,
        },
      };
    },
  },
};
</script>

<style>
.maps {
  width: 100%;
  height: 500px;
}
.container-grid {
  margin-top: 20px;
  display: grid;
  gap: 1rem;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
}
</style>
