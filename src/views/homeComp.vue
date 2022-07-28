<template>
  <div class="home">
    <h1>My recipes</h1>
    <div class="home">
      <button @click="$store.commit('TOOGLE_POPUP')">Add new recipe</button>
      <div class="recipes">
        <div
          class="card"
          v-for="recipe in $store.state.recipes"
          :key="recipe.slug"
        >
          <h2>{{ recipe.title }}</h2>
          <p>{{ recipe.description }}</p>
          <router-link :to="`/recipe/${recipe.slug}`">
            <button @click="$store.state.isOpen = true">View recipe</button>
          </router-link>
        </div>
      </div>
      <div class="add_recipe_popup" v-if="$store.state.popupOpen">
        <div class="popup_content">
          <h2>Add new recipe</h2>
          <form @submit.prevent="addNewRecipe()">
            <div class="group">
              <label> Title</label>
              <input v-model="recipe.title" type="text" />
            </div>
            <div class="group">
              <label>Description</label>
              <textarea v-model="recipe.description"> </textarea>
            </div>
            <div class="group">
              <label>Ingredients</label>
              <div
                class="ingredient"
                v-for="i in $store.state.ingredientRows"
                :key="i"
              >
                <!-- <input type="text" v-model="$store.state.ingredients[i - 1]" /> -->
                <input type="text" v-model="recipe.ingredients[i - 1]" />
              </div>
              <button type="button" @click="addNewIngredient()">
                Add ingredient
              </button>
            </div>
            <div class="group">
              <label>Method</label>
              <div
                class="method"
                v-for="i in $store.state.methodsRows"
                :key="i"
              >
                <!-- <textarea v-model="$store.state.method[i - 1]"> </textarea> -->
                <textarea v-model="recipe.method[i - 1]"> </textarea>
              </div>
              <button type="button" @click="addNewStep()">Add step</button>
            </div>
            <button type="submit">Add recipe</button>
            <button type="button" @click="$store.commit('TOOGLE_POPUP')">
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: {
        slug: "",
        title: "",
        description: "",
        ingredients: [],
        method: [],
      },
      ingredient: "",
    };
  },
  methods: {
    addNewIngredient() {
      this.$store.commit("ADD_NEW_INGREDIENT");
    },
    addNewStep() {
      this.$store.commit("ADD_NEW_STEP");
    },

    addNewRecipe() {
      console.log(this.recipe);
      if (this.recipe.title == "") {
        alert("Avval ");
        return;
      }
      this.$store.commit("ADD_Recipe", this.recipe);
    },
  },
};
</script>

<style>
.home {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  font-size: 3rem;
  margin-bottom: 32px;
}
.recipes {
  display: flex;
  margin: 15px auto;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
}
.recipes .card {
  width: 25%;
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem;
  background: #081c33;
}
.recipes .card h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.recipes .card p {
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}
.add_recipe_popup {
  position: absolute;
  top: 50px;
  left: 30%;
  width: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.add_recipe_popup .popup_content {
  background-color: #081c33;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 768px;
}
.popup_content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.popup_content .group {
  margin-bottom: 1rem;
}
.popup_content .group label {
  display: block;
  margin-bottom: 0.5rem;
}
.popup_content .group input,
.popup_content .group textarea {
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
.popup_content .group textarea {
  height: 100px;
  resize: none;
}
.popup_content button[type="submit"] {
  margin-right: 1rem;
}
</style>
