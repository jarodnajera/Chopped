import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import PopularRecipesView from "../views/PopularRecipesView.vue";
import SearchRecipesView from "../views/SearchRecipesView.vue";
import AddRecipesView from "../views/AddRecipesView.vue";
import EditRecipesView from "../views/EditRecipesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/popular-recipes",
      name: "popular-recipes",
      component: PopularRecipesView,
    },
    {
      path: "/search-recipes",
      name: "search-recipes",
      component: SearchRecipesView,
    },
    {
      path: "/add-recipes",
      name: "add-recipes",
      component: AddRecipesView,
    },
    {
      path: "/edit-recipes",
      name: "edit-recipes",
      component: EditRecipesView,
    },
  ],
});

export default router;
