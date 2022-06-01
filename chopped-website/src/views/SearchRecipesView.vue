<script>
export default {
  data() {
    return {
      possible_recipes: [],
      recipe_searched: "",
      recipe_name: "",
      recipe_desc: "",
      potential_searches: "",
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0,
      count5: 0
    };
  },
  methods: {
    handle_submit() {
      this.possible_recipes = [];
      const rec_container = document.getElementById('results');
      while(rec_container.firstChild){
        rec_container.removeChild(rec_container.firstChild);
      }
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
      

      this.possible_recipes.forEach(element => {
        var rec = document.createElement('div');
        rec.id = "outer";
        rec.innerHTML =`
        <div class="pop-recipe-container" style = "display:flex; flex-direction: row">
          <div class="pop-recipe" style = "width: 1000px; ">
          <h2>
          ${element.name}
          </h2>
          <p>ID:
          ${element.id}
          </p>
          <p>Average Rating:
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
          <div id = "upvote" style = "max-width: 200px; float: right">
            <input type="number" id="rating" name="rating" /><br /> 
          </div>
        </div>
        `;
        document.getElementById('results').appendChild(rec);

        var btn = document.createElement('button')
        btn.innerHTML = "submit";
        btn.onclick = function () {
          var rat = document.getElementById("rating").value;
          console.log(rat);
        };
        document.getElementById('results').appendChild(btn);
      });
      },

      handle_rating(){
        console.log(document.getElementById("rating"));
        console.log("hello");
      },
  },
};
</script>

<template>
  <div class="search-recipes">
    <div class="search">
      <div class="user-search">
        <h3>Search for a Recipe</h3>
        <form @submit.prevent="handle_submit">
          <label for="recipename">Recipe Name:</label><br />
          <input type="text" id="recipename" name="recipename" /><br />
        </form>
      </div>
      <div class="user-entry">
        <h3>You Searched For:</h3>
        <p>{{ recipe_searched }}</p>
      </div>
    </div>
    <div id="results">
      <div class="pop-recipe-container">
          <div class="pop-recipe">
          </div>
          <div class = "upvote">
          </div>
          <div class = "submit">
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.search {
  position: relative;
  background: rgb(255, 99, 99);
  color: black;
  width: 40%;
  min-height: 150px;
  padding: 20px;
  border-radius: 0.8rem;
  font-family: "Chau Philomene One", sans-serif;
}

.results {
  display: flex;
  flex-direction: column;
}

.pop-recipe-container {
  width: 450px;
  height: 100%;
  display: flex;
  flex-direction: row;
}

.pop-recipe{
  float: left;
  max-block-size: 1000px;
}

.upvote{
  float: right;
  max-width: 100px;
}

.search-recipes {
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  width: 100%;
}

.user-search {
  float: left;
}

.user-entry {
  float: right;
  text-align: center;
}
</style>
