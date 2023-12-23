import { createRouter, createWebHistory } from "vue-router";
import AccueilViewVue from "@/router/views/AccueilView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "accueil",
      component: AccueilViewVue,
    },
    {
      path: "/boules-maximales",
      name: "boules-maximales",
      component: () => import("@/router/views/BoulesMaxView.vue"),
    },
    {
      path: "/carte-distance",
      name: "carte-distance",

      component: () => import("@/router/views/CarteDistanceView.vue"),
    },
    {
      path: "/reconstruction",
      name: "reconstruction",
      component: () => import("@/router/views/ReconstructionView.vue"),
    },
    {
      path: "/a-propos",
      name: "a-propos",
      component: () => import("@/router/views/AProposView.vue"),
    },
    {
      path: "/a-propos/:name",
      props: true,
      component: () => import("@/router/views/AboutMeView.vue"),
    },
  ],
});

export default router;
