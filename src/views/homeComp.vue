<template>
  <div class="home">
    <h1>My recipes</h1>
    <div class="home">
      <button @click="$store.commit('TOOGLE_POPUP')">Add new recipe</button>
      <div class="recipes"></div>
      <div class="add_recipe_popup" v-if="$store.state.popupOpen">
        <div class="popup_content">
          <h2>Add new recipe</h2>
          <form @submit.prevent="">
            <div class="group">
              <label> Title</label>
              <input type="text" />
            </div>
            <div class="group">
              <label>Description</label>
              <textarea> </textarea>
            </div>
            <div class="group">
              <label>Ingredients</label>
              <div class="ingredient">
                <input type="text" />
              </div>
              <button type="button">Add ingredient</button>
            </div>
            <div class="group">
              <label>Method</label>
              <div class="method">
                <textarea> </textarea>
              </div>
              <button type="button">Add step</button>
            </div>
            <button type="submit">Add recipe</button>
            <button type="button" @click="$store.commit('TOOGLE_POPUP')">Close</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
      

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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.recipes .card {
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
