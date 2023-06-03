<template>
  <div>
    <h1>Marte</h1>
    <div>
      <select v-model="rover" @change="getPhotoMars()">
        <option value="curiosity">Curiosity</option>
        <option value="opportunity">Opportunity</option>
        <option value="spirit">Spirit</option>
      </select>
    </div>
    <div>
      <input type="date" v-model="date" @change="getPhotoMars()" />
    </div>
    <div v-if="data">
      <div v-if="data.photos.length > 0">
        <h3>
          Rover {{ data.photos[0].rover.name }} [{{
            data.photos[0].rover.status
          }}]
        </h3>
        <div>ID rover : {{ data.photos[0].rover.id }}</div>
        <div>Llegada a marte : {{ data.photos[0].rover.landing_date }}</div>
        <div>Lanzamiento : {{ data.photos[0].rover.launch_date }}</div>
      </div>

      <div v-viewer="options_viewer" class="container-grid">
        <div v-for="(ph, kphot) of data.photos" :key="kphot">
          <div style="font-size: 0.7rem">ID: {{ ph.id }}</div>
          <div style="font-size: 0.7rem">{{ ph.earth_date }}</div>
          <div style="font-size: 0.7rem">QTY: {{ ph.sol }}</div>
          <img :src="ph.img_src" class="image" width="50" />
          <div style="font-size: 0.6rem">ID cámara : {{ ph.camera.id }}</div>
          <div style="font-size: 0.6rem">Nombre : {{ ph.camera.name }}</div>
          <div style="font-size: 0.6rem">
            Rover id : {{ ph.camera.rover_id }}
          </div>
          <div style="font-size: 0.6rem">Nombre: {{ ph.camera.full_name }}</div>
        </div>
      </div>
    </div>

    <pre>{{ data }}</pre>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MarsView",
  data() {
    return {
      api_key: "pXKqBkxT50y7eyo2KWnXwBzXa2N4ukFxJpzw2mzT",
      rover: "curiosity",
      date: "12-12-2020",
      qty_photos: 100,
      data: "",
      options_viewer: { fullscreen: true, keyboard: true },
    };
  },
  created() {},
  mounted() {},
  methods: {
    getPhotoMars() {
      const self = this;
      var url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.rover}/photos?earth_date=${this.date}&api_key=${this.api_key}`;
      axios.get(url).then((result) => {
        self.data = result.data;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-grid {
  margin-top: 20px;
  display: grid;
  gap: 1rem;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}
</style>
