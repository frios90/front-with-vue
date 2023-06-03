<template>
  <div>
    <h1>Tiempo</h1>
    <div v-if="data" style="display: flex; gap: 1rem">
      <div>
        <h3>Temperatura actual</h3>
        <div>{{ data.current.last_updated_epoch }}</div>
        <div>{{ data.current.last_updated }}</div>
        <div>
          <strong style="font-size: 2rem">{{ data.current.temp_c }}°c</strong>
        </div>
        <div>{{ data.current.temp_f }}°f</div>
        <div>{{ data.current.is_day }}</div>
        <div>{{ data.current.last_updated_epoch }}</div>
        <div>{{ data.current.condition.text }}</div>
        <div>
          <img :src="data.current.condition.icon" alt="" width="150" />
        </div>
      </div>
      <div>
        <h3>Ubicaión</h3>
        <div>Nombre : {{ data.location.name }}</div>
        <div>Región : {{ data.location.region }}</div>
        <div>País : {{ data.location.country }}</div>
        <div>Lat : {{ data.location.lat }}</div>
        <div>Lon : {{ data.location.lon }}</div>
        <div>TZID : {{ data.location.tz_id }}</div>
        <div>Epoch : {{ data.location.localtime_epoch }}</div>
        <div>Fecha Consulta : {{ data.location.localtime }}</div>
      </div>
      <div>
        <div>{{ data.current.condition.code }}</div>

        <div>
          Velocidad del viento en millas/hora : {{ data.current.wind_mph }}m/h
        </div>
        <div>
          Velocidad del viento en kilometros/hora{{ data.current.wind_kph }}k/h
        </div>
        <div>
          Grados de inclinación del viento : {{ data.current.wind_degree }}°
        </div>
        <div>Dirección del viento : {{ data.current.wind_dir }}</div>
        <div>pressure_mb : ?{{ data.current.pressure_mb }}</div>
        <div>pressure_in: ?{{ data.current.pressure_in }}</div>
        <div>precip_mm : {{ data.current.precip_mm }}</div>
        <div>precip_in : {{ data.current.precip_in }}</div>
        <div>humidity : {{ data.current.humidity }}</div>
        <div>cloud : {{ data.current.cloud }}</div>
        <div>cloud : {{ data.current.cloud }}</div>
        <div>feelslike_c : {{ data.current.feelslike_c }}</div>
        <div>feelslike_f : {{ data.current.feelslike_f }}</div>
        <div>vis_km : {{ data.current.vis_km }}</div>
        <div>vis_miles : {{ data.current.vis_miles }}</div>
        <div>uv : {{ data.current.uv }}</div>
        <div>gust_mph : {{ data.current.gust_mph }}</div>
        <div>gust_kph : {{ data.current.gust_kph }}</div>
      </div>
    </div>

    <pre>{{ data }}</pre>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PokedexView",
  data() {
    return {
      base_api: "http://api.weatherapi.com/v1",
      api_key: "246b3ed8e4d846929a751958230106",
      data: "",
      center: [-33.4395004, -70.6511933],
    };
  },
  created() {},
  mounted() {
    this.getWeather();
  },
  methods: {
    getWeather() {
      const self = this;
      var q = `${this.center[0]},${this.center[1]}`;
      const url = `${this.base_api}/current.json?key=${this.api_key}&q=${q}&lang=Spanish&country=Chile`;
      axios.get(url).then((result) => {
        self.data = result.data;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
