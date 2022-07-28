import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/homeComp.vue";
import Recipe from "@/views/recipeComp.vue";
const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/recipe/:slug",
        name: "Recipe",
        component: Recipe,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;