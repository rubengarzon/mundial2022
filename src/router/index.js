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
  ],
});

export default router;
