import { createRouter, createWebHistory } from "vue-router";

import Home from "../../views/home.vue";
import About from "../../views/about.vue";
import Restaurant from "../../views/restaurant.vue";
import Tent from "../../views/tent.vue";
import Attraction from "../../views/attraction.vue";
import Contactus from "../../views/contactus.vue";
import Reservations from "../../views/reservations.vue";
import SignIn from "../../views/signIn.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/restaurant",
      name: "Restaurant",
      component: Restaurant,
      
    },
    {
      path: "/reservations",
      name: "Reservations",
      component: Reservations,
      
    },
    {
      path: "/tent",
      name: "Tent",
      component: Tent,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/attraction",
      name: "Attraction",
      component: Attraction,
    },
    {
      path: "/contactus",
      name: "ContactUs",
      component: Contactus,
    },
    {
      path: "/signIn",
      name: "SignIn",
      component: SignIn,
    },
  ],
});

export default router;