<script>
import EditRecipeHandler from "../js_classes/EditRecipeHandler";

export default {
  data() {
    return {
      edit_handler: new EditRecipeHandler(),
    };
  },
};
</script>

<template>
  <div class="edit-recipes">
    <div class="edit">
      <h2>Edit a Recipe:</h2>
      <form @submit.prevent="this.edit_handler.handle_edit">
        <label for="recipeid">Recipe ID:</label><br />
        <input type="text" id="recipeid" name="recipeid" /><br />
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
      <div id="update"></div>
    </div>
  </div>
</template>

<style scoped>
.edit {
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
