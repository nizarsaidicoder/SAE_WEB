import { createRouter, createWebHistory } from "vue-router";
import AccueilViewVue from "@/views/AccueilView.vue";

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/BoulesMaxView.vue"),
    },
    {
      path: "/carte-distance",
      name: "carte-distance",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CarteDistanceView.vue"),
    },
    {
      path: "/reconstruction",
      name: "reconstruction",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ReconstructionView.vue"),
    },
    {
      path: "/a-propos",
      name: "a-propos",
      component: () => import("../views/AProposView.vue"),
    },
  ],
});

export default router;
