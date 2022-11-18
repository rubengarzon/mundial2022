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
      path: "/iran",
      name: "Iran",
      component: () => import("../views/IranView.vue"),
    },
    {
      path: "/camerun",
      name: "Camerun",
      component: () => import("../views/CamerunView.vue"),
    },
    {
      path: "/canada",
      name: "Canada",
      component: () => import("../views/CanadaView.vue"),
    },
    {
      path: "/holanda",
      name: "Holanda",
      component: () => import("../views/HolandaView.vue"),
    },
  ],
});

export default router;
