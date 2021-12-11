// TODO: add error pages (404 etc...)

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import About from "../views/About.vue";
import ViewProfile from "../components/ViewProfile.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: '/profile/:user_id',
    name: "ViewProfile",
    component: ViewProfile
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
