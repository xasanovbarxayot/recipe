import Vue from "vue"
import Router from "vue-router"
import Home from "../views/homeComp.vue";
import Recipe from "../views/recipeComp.vue";

Vue.use(Router)
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

const router = new Router({
    routes: routes,
    mode: "history"
})
export default router;