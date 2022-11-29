import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/partidos",
      name: "Partidos",
      component: () => import("../views/MatchesView.vue"),
    },
    {
      path: "/selecciones",
      name: "Selecciones",
      component: () => import("../views/NationalTeamsView.vue"),
    },
    {
      path: "/estadios",
      name: "Estadios",
      component: () => import("../views/StadiumView.vue"),
    },
    {
      path: "/iran",
      name: "Iran",
      component: () => import("../views/NationalTeamsViews/IranView.vue"),
    },
    {
      path: "/polonia",
      name: "Polonia",
      component: () => import("../views/NationalTeamsViews/PoloniaView.vue"),
    },
    {
      path: "/canada",
      name: "Canada",
      component: () => import("../views/NationalTeamsViews/CanadaView.vue"),
    },
    {
      path: "/australia",
      name: "Australia",
      component: () => import("../views/NationalTeamsViews/AustraliaView.vue"),
    },
    {
      path: "/serbia",
      name: "serbia",
      component: () => import("../views/NationalTeamsViews/SerbiaView.vue"),
    },
    {
      path: "/ghana",
      name: "ghana",
      component: () => import("../views/NationalTeamsViews/GhanaView.vue"),
    },
    {
      path: "/uruguay",
      name: "uruguay",
      component: () => import("../views/NationalTeamsViews/UruguayView.vue"),
    },
    {
      path: "/spain",
      name: "españa",
      component: () => import("../views/NationalTeamsViews/SpainView.vue"),
    },
    {
      path: "/suiza",
      name: "suiza",
      component: () => import("../views/NationalTeamsViews/SuizaView.vue"),
    },
    {
      path: "/japon",
      name: "japon",
      component: () => import("../views/NationalTeamsViews/JaponView.vue"),
    },
    {
      path: "/brasil",
      name: "brasil",
      component: () => import("../views/NationalTeamsViews/BrasilView.vue"),
    },
    {
      path: "/camerun",
      name: "camerun",
      component: () => import("../views/NationalTeamsViews/CamerunView.vue"),
    },
    {
      path: "/argentina",
      name: "argentina",
      component: () => import("../views/NationalTeamsViews/ArgentinaView.vue"),
    },
    {
      path: "/portugal",
      name: "portugal",
      component: () => import("../views/NationalTeamsViews/PortugalView.vue"),
    },
    {
      path: "/marruecos",
      name: "marruecos",
      component: () => import("../views/NationalTeamsViews/MarruecosView.vue"),
    },
    {
      path: "/croacia",
      name: "croacia",
      component: () => import("../views/NationalTeamsViews/CroaciaView.vue"),
    },
    {
      path: "/tunez",
      name: "tunez",
      component: () => import("../views/NationalTeamsViews/TunezView.vue"),
    },
    {
      path: "/arabia",
      name: "Arabia Saudí",
      component: () => import("../views/NationalTeamsViews/ArabiaView.vue"),
    },
    {
      path: "/francia",
      name: "Francia",
      component: () => import("../views/NationalTeamsViews/FranciaView.vue"),
    },
    {
      path: "/dinamarca",
      name: "dinamarca",
      component: () => import("../views/NationalTeamsViews/DinamarcaView.vue"),
    },
    {
      path: "/alemania",
      name: "alemania",
      component: () => import("../views/NationalTeamsViews/AlemaniaView.vue"),
    },
  ],
});

export default router;
