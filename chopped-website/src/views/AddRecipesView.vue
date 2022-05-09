<script>
export default {
  methods: {
    handle_submit() {
      var recipe_name = document.getElementById("recipename").value;
      var recipe_desc = document.getElementById("recipedesc").value;
      var recipe_time = document.getElementById("recipetime").value;
      var recipe_ingredients = document.getElementById("recipeingr").value;
      var recipe_author = document.getElementById("recipeauthor").value;
      var recipe_id = Math.floor(Math.random() * 90000) + 10000;
      recipe_id = recipe_id.toString();

      document.getElementById("new-id").innerHTML = "";
      document.getElementById("new-id").innerHTML =
        "<h3>Added a new recipe!</h3><h3>Use this ID to edit it: " +
        recipe_id +
        "</h3>";

      var new_entry = {
        name: recipe_name,
        id: recipe_id,
        minutes: recipe_time,
        author: recipe_author,
        description: recipe_desc,
        ingredients: recipe_ingredients,
      };

      fetch("http://localhost:3001/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(new_entry),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("error: ", error));
    },
  },
};
</script>

<template>
  <div class="add-recipes">
    <div class="add">
      <h2>Add a Recipe:</h2>
      <form @submit.prevent="handle_submit">
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
