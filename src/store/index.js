import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: "",
        description: "",
        ingredients: [],
        method: [],
        ingredientRows: 1,
        methodsRows: 1,
        popupOpen: false,
        isOpen: false,
        recipes: [{
                slug: "katsu-curry",
                title: "Katsu Curry",
                description: "A delicious curry made with chicken, potatoes and special sauce",
                ingredients: [
                    "1 tablespoon olive oil",
                    "1 onion, chopped ",
                    "2 clove garlic, chopped ",
                    "1 tablespoon curry powder ",
                ],
                method: [
                    "Heat oil in a large skillet over ",
                    "Heat onion in a large skillet over ",
                    "Heat oil in a large skillet over ",
                ],
            },
            {
                slug: "onion-curry",
                title: "Katsu Curry",
                description: "A delicious curry made with chicken, potatoes and special sauce",
                ingredients: [
                    "1 tablespoon olive oil",
                    "1 onion, chopped ",
                    "2 clove garlic, chopped ",
                    "1 tablespoon curry powder ",
                ],
                method: [
                    "Heat oil in a large skillet over ",
                    "Heat onion in a large skillet over ",
                    "Heat oil in a large skillet over ",
                ],
            },
        ],
    },
    getters: {},
    mutations: {
        TOOGLE_POPUP(state) {
            state.popupOpen = !state.popupOpen;
        },
        ADD_Recipe(state, recipe) {
            state.recipes.push(recipe);
        },
        ADD_NEW_INGREDIENT(state) {
            state.ingredientRows++;
        },
        ADD_NEW_STEP(state) {
            state.methodsRows++;
        },
    },
    actions: {},
    modules: {},
});