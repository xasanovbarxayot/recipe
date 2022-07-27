<template>
  <div id="app">
    <homeComp v-if="!$store.state.isOpen"></homeComp>
    <recipecomp v-if="$store.state.isOpen"> </recipecomp>
  </div>
</template>

<script>
import homeComp from "@/views/homeComp.vue";
import recipecomp from "./views/recipeComp.vue"
export default {
  name: "App",
  components: {
    homeComp,
    recipecomp
    
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
}
body {
  background: #030e1b;
  color: #fff;
}
a {
  color: #20eb74;
  text-decoration: none;
}
button {
  appearance: none;
  border: none;
  background: none;
  cursor: pointer;
  background-color: #2aeb74;
  font-size: 1.125rem;
  color: #030e1b;
  padding: 0.5rem 1rem;
}
</style>
