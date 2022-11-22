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
      component: () => import("../views/IranView.vue"),
    },
    {
      path: "/polonia",
      name: "Polonia",
      component: () => import("../views/PoloniaView.vue"),
    },
    {
      path: "/canada",
      name: "Canada",
      component: () => import("../views/CanadaView.vue"),
    },
    {
      path: "/australia",
      name: "Australia",
      component: () => import("../views/AustraliaView.vue"),
    },
    {
      path: "/serbia",
      name: "serbia",
      component: () => import("../views/SerbiaView.vue"),
    },
    {
      path: "/ghana",
      name: "ghana",
      component: () => import("../views/GhanaView.vue"),
    },
  ],
});

export default router;
