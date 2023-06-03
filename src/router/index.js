import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/leaflet",
    name: "leaflet",
    component: () => import("../views/LeafletView.vue"),
  },
  {
    path: "/pokedex",
    name: "pokedex",
    component: () => import("../views/PokedexView.vue"),
  },
  {
    path: "/weather",
    name: "weather",
    component: () => import("../views/WeatherView.vue"),
  },
  {
    path: "/mars-2",
    name: "mars-2",
    component: () => import("../views/Mars2View.vue"),
  },
  {
    path: "/mars",
    name: "mars",
    component: () => import("../views/MarsView.vue"),
  },
  {
    path: "/cocktails",
    name: "cocktails",
    component: () => import("../views/CocktailView.vue"),
  },
  {
    path: "/kitchen",
    name: "kitchen",
    component: () => import("../views/KitchenView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
