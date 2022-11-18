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
  ],
});

export default router;
