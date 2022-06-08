export default class SearchRecipeHandler {
  constructor() {
    this.possible_recipes = [];
    this.recipe_searched = "";
    this.recipe_name = "";
    this.recipe_desc = "";
    this.potential_searches = "";
    this.count1 = 0;
    this.count2 = 0;
    this.count3 = 0;
    this.count4 = 0;
    this.count5 = 0;
  }

  handle_search() {
    this.possible_recipes = [];
    const rec_container = document.getElementById("results");
    while (rec_container.firstChild) {
      rec_container.removeChild(rec_container.firstChild);
    }
    let search = document.getElementById("recipename").value;
    fetch("http://localhost:3001/api")
      .then((response) => response.json())
      .then((data) => this.displayRecipe(data, search));
  }

  displayRecipe(dict, query) {
    this.recipe_searched = query;
    const has_key = query in dict;
    if (has_key) {
      let recipe = dict[query];
      this.recipe_name = recipe.name;
      this.recipe_desc = recipe.description;
      this.possible_recipes.push(dict[key]);
    } else {
      this.potential_searches = "";
      for (var key in dict) {
        if (key.includes(query)) {
          this.potential_searches += key + ", ";
          this.possible_recipes.push(dict[key]);
        }
      }
    }

    this.possible_recipes.forEach((element) => {
      var rec = document.createElement("div");
      rec.id = "outer";
      rec.innerHTML = `
          <div class="pop-recipe-container" style = "display:flex; flex-direction: row">
            <div class="pop-recipe" style = "width: 1000px; ">
            <h2>
            ${element.name}
            </h2>
            <p>ID:
            ${element.id}
            </p>
            <p>Rating:
            ${element.rating}
            </p>
            <p>Ingredients:
            ${element.ingredients}
            </p>
            <p>Description:
            ${element.description}
            </p>
            <p>Instructions:
            ${element.steps}
            </p>
            </div>
            <div id = "results">
            </div>
          </div>
          `;
      document.getElementById("results").appendChild(rec);

      var btn = document.createElement("button");
      btn.innerHTML = "delete";
      btn.onclick = function () {
        console.log("what");
        fetch("http://localhost:3001/api", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(element),
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("error: ", error));
      };
      document.getElementById("results").appendChild(btn);
    });
  }

  handle_rating() {
    console.log(document.getElementById("rating"));
    console.log("hello");
  }
}
