<template>
  <div class="body-pokedex">
    <h1>Tiempo</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PokedexView",
  data() {
    return {
      base_api: "http://api.weatherapi.com/v1",
      data: "",
    };
  },
  created() {},
  methods: {
    getWeather() {
      const self = this;
      axios.get(`${this.base_api}/current.json`).then((result) => {
        self.data = result.data;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body-pokedex {
  background-color: #fd5051;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
