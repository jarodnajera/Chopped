<script>
export default {
  methods: {
    handle_submit() {
      var recipe_id = document.getElementById("recipeid").value;
      var recipe_name = document.getElementById("recipename").value;
      var recipe_desc = document.getElementById("recipedesc").value;
      var recipe_time = document.getElementById("recipetime").value;
      var recipe_ingredients = document.getElementById("recipeingr").value;
      var recipe_author = document.getElementById("recipeauthor").value;
      var found_recipe = false;

      fetch("http://localhost:3001/api")
        .then((response) => response.json())
        .then((data) => {
          console.log(recipe_id);
          for (var key in data) {
            if (data[key].id == recipe_id) {
              found_recipe = true;
              console.log(found_recipe);
            }
          }
        });

      if (this.found_recipe == false) {
        document.getElementById("update").innerHTML = "";
        document.getElementById("update").innerHTML =
          "<h3>Sorry, invalid recipe ID!</h3>";
        return;
      }

      document.getElementById("update").innerHTML = "";
      document.getElementById("update").innerHTML = "<h3>Recipe edited!</h3>";

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
  <div class="edit-recipes">
    <div class="edit">
      <h2>Edit a Recipe:</h2>
      <form @submit.prevent="handle_submit">
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
