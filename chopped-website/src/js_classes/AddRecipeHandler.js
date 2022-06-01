export default class AddRecipeHandler {
  handle_add() {
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
  }
}
