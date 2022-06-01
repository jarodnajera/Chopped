export default class EditRecipeHandler {
  handle_edit() {
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
  }
}
