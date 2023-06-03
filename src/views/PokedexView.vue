<template>
  <div>
    <div>
      <h1>Listado de pokemón</h1>
    </div>
    <div class="container-grid">
      <div v-for="(pokemon, kpok) of pokemons" :key="kpok">
        <div>
          <div>#{{ pokemon.id }} {{ pokemon.name }}</div>
          <img
            :src="pokemon.sprites.front_default"
            alt=""
            width="100"
            @click="openModalDetail(pokemon)"
          />
        </div>
      </div>
      <button @click="getMorePokemon()">ver más</button>
    </div>
    <modal
      name="pokemon-modal"
      width="600"
      height="400"
      style="background-color: #00000000"
    >
      <div
        class="pokemon-modal-content"
        style="background-color: #d30a40"
      ></div>
    </modal>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PokedexView",
  data() {
    return {
      id_pokemon: 1,
      data: "",
      range: [1, 24],
      pokemons: [],
      pokemon_selected: "",
    };
  },
  created() {},
  mounted() {
    this.getPokemons();
  },
  methods: {
    getMorePokemon() {
      this.range[0] = this.range[0] + 24;
      this.range[1] = this.range[1] + 24;
      this.getPokemons();
    },
    getPokemons() {
      const self = this;
      for (var i = this.range[0]; i <= this.range[1]; i++) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then((result) => {
          self.pokemons.push(result.data);
          self.pokemons.sort((a, b) => a.id - b.id);
        });
      }
    },
    openModalDetail(pokemon) {
      this.pokemon_selected = pokemon;
      this.$modal.show("pokemon-modal");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-grid {
  padding: 1rem 12rem;
  margin-top: 20px;
  display: grid;
  gap: 1rem;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}

.pokemon-modal {
  overflow-y: auto;
  max-height: 600px;
}
.pokemon-modal-content {
  background-size: 600px 400px;
  background-repeat: no-repeat;
  height: 100%;
}
</style>
