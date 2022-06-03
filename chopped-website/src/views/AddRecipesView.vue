<script>
import AddRecipeHandler from "../js_classes/AddRecipeHandler";

export default {
  data() {
    return {
      add_handler: new AddRecipeHandler(),
    };
  },
};
</script>

<template>
  <div class="add-recipes">
    <div class="add">
      <h2>Add a Recipe:</h2>
      <form @submit.prevent="this.add_handler.handle_add">
        <label for="recipename">Recipe Name:</label><br />
        <input type="text" id="recipename" name="recipename" /><br />
        <label for="recipedesc">Recipe Description:</label><br />
        <input type="text" id="recipedesc" name="recipedesc" /><br />
        <label for="recipetime">Time to Cook (mins):</label><br />
        <input type="text" id="recipetime" name="recipetime" /><br />
        <label for="recipeingr">Recipe Ingredients:</label><br />
        <input type="text" id="recipeingr" name="recipeingr" /><br />
        <label for="recipeauthor">Author:</label><br />
        <input type="text" id="recipeauthor" name="recipeauthor" /><br />
        <label for="recipesteps">Steps:</label><br />
        <input type="text" id="recipesteps" name="recipesteps" /><br />
        <button type="submit">Send</button>
      </form>
      <br />
      <div id="new-id"></div>
    </div>
  </div>
</template>

<style scoped>
.add {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 40%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 100px;
  text-align: center;
  font-family: "Chau Philomene One", sans-serif;
}
</style>
