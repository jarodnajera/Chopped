<script>
import SearchRecipeHandler from "../js_classes/SearchRecipeHandler";

export default {
  data() {
    return {
      search_handler: new SearchRecipeHandler(),
    };
  },
};
</script>

<template>
  <div class="search-recipes">
    <div class="search">
      <div class="user-search">
        <h3>Search for a Recipe</h3>
        <form @submit.prevent="this.search_handler.handle_search">
          <label for="recipename">Recipe Name:</label><br />
          <input type="text" id="recipename" name="recipename" /><br />
        </form>
      </div>
      <div class="user-entry">
        <h3>You Searched For:</h3>
        <p>{{ this.search_handler.recipe_searched }}</p>
      </div>
    </div>
    <div id="results">
      <div class="pop-recipe-container">
        <div class="pop-recipe"></div>
        <div class="upvote"></div>
        <div class="submit"></div>
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

.pop-recipe {
  float: left;
  max-block-size: 1000px;
}

.upvote {
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
