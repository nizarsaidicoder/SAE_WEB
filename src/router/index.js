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
      component: () =>
        import("@/router/views/Documentation/BoulesMax/BoulesMaxView.vue"),
    },
    {
      path: "/boules-maximales/:algo",
      props: true,
      component: () => import("@/router/views/Documentation/DocView.vue"),
    },
    {
      path: "/carte-distance",
      name: "carte-distance",

      component: () =>
        import(
          "@/router/views/Documentation/CarteDistance/CarteDistanceView.vue"
        ),
    },
    {
      path: "/carte-distance/:algo",
      props: true,
      component: () => import("@/router/views/Documentation/DocView.vue"),
    },
    {
      path: "/reconstruction",
      name: "reconstruction",
      component: () =>
        import(
          "@/router/views/Documentation/Reconstruction/ReconstructionView.vue"
        ),
    },
    {
      path: "/reconstruction/:algo",
      props: true,
      component: () => import("@/router/views/Documentation/DocView.vue"),
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
