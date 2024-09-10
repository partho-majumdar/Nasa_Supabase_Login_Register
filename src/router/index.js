import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/sign-in",
      // path: "https://nasa-orrery24-project.vercel.app/sign-in",
      name: "sign in",
      component: () => import("../views/SignIn.vue"),
    },
    {
      path: "/sign-up",
      // path: "https://nasa-orrery24-project.vercel.app/sign-up",
      name: "sign up",
      component: () => import("../views/SignUp.vue"),
    },
    {
      path: "/",
      name: "front page",
      component: () => import("../views/FrontPage.vue"),
    },
  ],
});

export default router;
