<template>
  <div>
    <h3>Uso de mapas con leaflet nativo | (sin usar vue-leaflet)</h3>
    <div id="map"></div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
export default {
  name: "HomeView",
  data() {
    return {
      map: "",
      center: [-33.4395004, -70.6511933],
      zoom: 12,
    };
  },
  mounted() {
    this.startmap();
  },
  methods: {
    startmap() {
      const self = this;

      var openstreetmap = L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 16,
        }
      );
      var streets = L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          maxZoom: 12,
        }
      );

      this.map = L.map("map", {
        center: self.center,
        zoom: self.zoom,
        layers: [streets, openstreetmap],
      });
    },
  },
};
</script>

<style>
#map {
  width: 100%;
  height: 650px;
}
</style>
