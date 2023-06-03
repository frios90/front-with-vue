<template>
  <div>
    <h1>Coctel</h1>
    <input type="text" v-model="name" />
    <button @click="getList('name', false)">buscar por nombre</button>
    <div
      style="display: flex; justify-content: space-between; margin-top: 2rem"
    >
      <div v-for="(letter, klet) of abc" :key="klet">
        <strong @click="getList('f_letter', letter)" style="cursor: pointer">{{
          letter.toUpperCase()
        }}</strong>
      </div>
    </div>
    <div v-viewer="options_viewer" class="container-grid">
      <div v-for="(drink, kdrinkot) of data.drinks" :key="kdrinkot">
        <div
          style="font-size: 1.2rem !important; cursor: pointer"
          @click="openModalDetail(drink)"
        >
          {{ drink.strDrink }}
        </div>
        <img :src="drink.strDrinkThumb" class="image" width="300" />
      </div>
    </div>
    <modal name="cocktail-modal" width="1200" height="700">
      <div v-if="cocktail_selected">
        <h2>{{ cocktail_selected.strDrink }}</h2>
        <img :src="cocktail_selected.strDrinkThumb" class="image" width="300" />
        <div>
          <strong>Categoría</strong> : {{ cocktail_selected.strCategory }}
        </div>
        <div><strong>Copa</strong> : {{ cocktail_selected.strGlass }}</div>
        <div style="display: flex; gap: 2rem">
          <div style="width: 50%">
            <h3>Preparación</h3>
            {{ cocktail_selected.strInstructionsES }}
            <br />
            {{ cocktail_selected.strInstructions }}
          </div>
          <div>
            <h3>Ingredientes</h3>
            <ul>
              <template v-for="(ni, kin) in 20">
                <li v-if="cocktail_selected[`strIngredient${ni}`]" :key="kin">
                  {{ cocktail_selected[`strIngredient${ni}`] }} [
                  {{ cocktail_selected[`strMeasure${ni}`] }} ]
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PokedexView",
  data() {
    return {
      base_api: "https://www.thecocktaildb.com/api/json/v1/1",
      data: "",
      name: "",
      ingre: "",
      cocktail_selected: false,
      options_viewer: {},
      abc: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "ñ",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ],
    };
  },
  created() {},
  mounted() {
    this.getList("f_letter", "a");
  },
  methods: {
    getList(type, value) {
      const self = this;
      var url = this.setUrl(type, value);
      console.log(url);
      axios.get(url).then((result) => {
        self.data = result.data;
      });
    },
    setUrl(type, value) {
      console.log(type);
      switch (type) {
        case "name":
          return `${this.base_api}/search.php?s=${this.name}`;
        case "f_letter":
          return `${this.base_api}/search.php?f=${value}`;
      }
    },
    openModalDetail(drink) {
      this.cocktail_selected = drink;
      this.$modal.show("cocktail-modal");
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
</style>
