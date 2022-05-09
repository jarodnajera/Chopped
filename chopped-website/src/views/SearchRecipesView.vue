<script>
export default {
  data() {
    return {
      recipe_searched: "",
      recipe_name: "",
      recipe_desc: "",
      potential_searches: "",
    };
  },
  methods: {
    handle_submit() {
      let search = document.getElementById("recipename").value;
      fetch("http://localhost:3001/api")
        .then((response) => response.json())
        .then((data) => this.displayRecipe(data, search));
    },
    displayRecipe(dict, query) {
      this.recipe_searched = query;
      const has_key = query in dict;
      let exact_match = false;
      if (has_key) {
        let recipe = dict[query];
        this.recipe_name = recipe.name;
        this.recipe_desc = recipe.description;
        exact_match = true;
      } else {
        this.potential_searches = "";
        for (var key in dict) {
          if (key.includes(query)) {
            this.potential_searches += key + ", ";
          }
        }
      }

      if (exact_match) {
        document.getElementById("query").innerHTML =
          "<h3>Recipe: " +
          this.recipe_name +
          "</h3><h3>Description: " +
          this.recipe_desc +
          "</h3>";
      } else {
        document.getElementById("query").innerHTML =
          "<h2>Did you mean: </h2><h3>" + this.potential_searches + "?</h3>";
      }
    },
  },
};
</script>

<template>
  <div class="search-recipes">
    <div class="search">
      <h2>Search for a Recipe</h2>
      <form @submit.prevent="handle_submit">
        <label for="recipename">Recipe Name:</label><br />
        <input type="text" id="recipename" name="recipename" /><br />
      </form>
      <br />
      <h2>You Searched For:</h2>
      <p>{{ recipe_searched }}</p>
      <div id="query"></div>
    </div>
  </div>
</template>

<style scoped>
.search {
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
