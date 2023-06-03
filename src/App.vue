<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div id="app">
        <div style="display: flex">
          <div class="app-menu">
            <div v-for="(menu, kmn) of menus" :key="kmn" class="item-menu">
              <router-link :to="menu.url"
                ><img :src="menu.icon" alt="" height="25" />{{
                  menu.name
                }}</router-link
              >
            </div>
          </div>
          <div class="app-content">
            <router-view />
          </div>
        </div>
      </div>
    </body>
  </html>
</template>
<script>
export default {
  name: "AppView",
  data() {
    return {
      menus: [
        {
          name: "Inicio",
          url: "/",
          icon: "leaf-green.png",
        },
        {
          name: "Recetas",
          url: "/kitchen",
          icon: "cocinando.png",
        },
        {
          name: "Coctel",
          url: "/cocktails",
          icon: "coctel.png",
        },
        {
          name: "Marte",
          url: "/mars-2",
          icon: "mars.png",
        },
        {
          name: "Tiempo",
          url: "/weather",
          icon: "sol.png",
        },
        {
          name: "Pokedex",
          url: "/pokedex",
          icon: "pokedex.png",
        },
        {
          name: "Leaflet",
          url: "/leaflet",
          icon: "leaf-green.png",
        },
      ],
    };
  },
  mounted() {
    console.log(this.$route.path);
  },
  methods: {},
};
</script>
<style>
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-menu {
  padding: 4rem 5rem;
  margin: -1rem 0 !important;
  width: 20%;
  background-color: #fff;
  border-right: #40b480 solid 2px;
}

.app-content {
  padding: 1rem 5rem;
  width: 80%;
  min-height: 120rem;
}

.item-menu {
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin: 1px;
  border-radius: 1rem;
  transition: ease-in-out 0.3s;
}

.item-menu:hover {
  background-color: #32475b;
  color: #fff;
  padding: 0.5rem 1rem;
  margin: 1px;
  border-radius: 1rem;
}

.item-menu-selected {
  background-color: #40b480;
  color: #fff;
  padding: 0.5rem 1rem;
  margin: 1px;
  border-radius: 1rem;
}
</style>
