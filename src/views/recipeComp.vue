<template>
  <div class="recipe">
    <router-link to="/" @click="$store.state.isOpen = false"> &lt; Back </router-link>
    <h1>{{ recipe.title }}</h1>
    <hr />
    <div class="ingredients">
      <h3>Ingredients</h3>
      <br>
      {{ currentItem }}
      <ul>
        <li v-for="(ingredient, i) in recipe.ingredients" :key="i">
          {{ ingredient.ingredients }}
        </li>
      </ul>
    </div>
    <div class="method">
      <h3>Method</h3>
      <ol>
        <li v-for="(step, j) in recipe.method" :key="j">
          {{ step }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"
export default {
  computed: {
    recipe() {
      let recipes = this.$store.state.recipes.filter(
        (recipe) => recipe.slug == this.$route.params.slug
      );
      return recipes;
    },
    ...mapState(['currentItem'])
  },
  methods:{
    ...mapMutations(['SET_CURRENT'])
  },
  mounted(){
    let slug = this.$route.params.slug
    this.SET_CURRENT(slug)
  }
  
};
</script>

<style>
.recipe {
  padding: 1rem;
  max-width: 768px;
  margin: 0 auto;
}
.desc {
  font-size: 1.125;
  line-height: 1.4;
  margin-bottom: 1rem;
}
hr {
  margin-bottom: 1rem;
}
h3 {
  margin-bottom: 1rem;
}
.ingredients {
  padding: 1rem;
  background-color: #081c33;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
}
.ingredients ul li {
  list-style-position: inside;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.method ol li {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  list-style-position: inside;
  border-bottom: 1px solid #eee;
}
</style>
