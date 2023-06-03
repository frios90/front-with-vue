<template>
  <div>
    <h1>Recetas de cocina</h1>
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
      <div v-for="(meal, kmealot) of data.meals" :key="kmealot">
        <div
          style="font-size: 1.2rem !important; cursor: pointer"
          @click="openModalDetail(meal)"
        >
          {{ meal.strMeal }}
        </div>
        <img :src="meal.strMealThumb" class="image" width="300" />
      </div>
    </div>
    <modal name="mail-modal" width="1200" height="700">
      <div v-if="meal_selected" class="mail-modal-content">
        <h2>{{ meal_selected.strMeal }}</h2>
        <img :src="meal_selected.strMealThumb" class="image" width="300" />

        <div><strong>Categoría</strong> : {{ meal_selected.strCategory }}</div>
        <div><strong>Tags</strong> : {{ meal_selected.strTags }}</div>
        <div style="display: flex; gap: 2rem">
          <div style="width: 50%">
            <h3>Preparación</h3>
            {{ meal_selected.strInstructionsES }}
            <br />
            {{ meal_selected.strInstructions }}
          </div>
          <div>
            <h3>Ingredientes</h3>
            <ul>
              <template v-for="(ni, kin) in 20">
                <li v-if="meal_selected[`strIngredient${ni}`]" :key="kin">
                  {{ meal_selected[`strIngredient${ni}`] }} [
                  {{ meal_selected[`strMeasure${ni}`] }} ]
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
      base_api: "https://www.themealdb.com/api/json/v1/1",
      data: "",
      name: "",
      ingre: "",
      meal_selected: false,
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
      axios.get(url).then((result) => {
        self.data = result.data;
      });
    },
    setUrl(type, value) {
      switch (type) {
        case "name":
          return `${this.base_api}/search.php?s=${this.name}`;
        case "f_letter":
          return `${this.base_api}/search.php?f=${value}`;
      }
    },
    openModalDetail(drink) {
      this.meal_selected = drink;
      this.$modal.show("mail-modal");
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
.mail-modal-content {
  overflow-y: auto;
  max-height: 600px;
}
</style>
