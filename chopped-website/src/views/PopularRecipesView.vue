<script>
export default {
  data() {
    return {
      pop_recipes: [],
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0,
      count5: 0
    };
  },
  methods: {
    get_popular_recipes() {
      console.log("working");
      fetch("http://localhost:3001/api")
        .then((response) => response.json())
        .then((data) => this.display_recipes(data));
    },
    display_recipes(dict) {
      for (var key in dict) {
        if ("rating" in dict[key]) {
          this.pop_recipes.push(dict[key]);
        }
      }
      const parent_object = document.getElementsByClassName("pop-recipe");
      [...parent_object].forEach((parent, i) => {
        parent.innerHTML =
          "<h2>" +
          this.pop_recipes[i].name +
          "</h2>" +
          "<p>Rating: " +
          this.pop_recipes[i].rating +
          "</p>";
      });
    }
  },
  mounted() {
    this.get_popular_recipes();
  },
};
</script>

<template>
  <div onload="get_popular_recipes" class="popular-recipes">
    <h1 id="title">Popular Recipes</h1>
    <div class="pop-recipe-container">
      <div class="pop-recipe" id="popular-recipe-1"></div>
      <div class = "upvote">
        <br><br>
        <button type = "button" @click = "count1++"> ▲ </button>
        <p className = "votecounter">{{count1}}</p>
        <button  type = "button" @click = "count1--"> ▼ </button>
        <p></p>
      </div>
    </div>
    <div class="pop-recipe-container">
      <div class="pop-recipe" id="popular-recipe-2"></div>
      <div class = "upvote">
        <br><br>
        <button type = "button" @click = "count2++"> ▲ </button>
        <p className = "votecounter">{{count2}}</p>
        <button  type = "button" @click = "count2--"> ▼ </button>
      </div>
    </div>
    <div class="pop-recipe-container">
      <div class="pop-recipe" id="popular-recipe-3"></div>
      <div class = "upvote">
        <br><br>
        <button type = "button" @click = "count3++"> ▲ </button>
        <p className = "votecounter">{{count3}}</p>
        <button  type = "button" @click = "count3--"> ▼ </button>
      </div>
    </div>
    <div class="pop-recipe-container">
      <div class="pop-recipe" id="popular-recipe-4"></div>
      <div class = "upvote">
        <br><br>
        <button type = "button" @click = "count4++"> ▲ </button>
        <p className = "votecounter">{{count4}}</p>
        <button  type = "button" @click = "count4--"> ▼ </button>
      </div>
    </div>
    <div class="pop-recipe-container">
      <div class="pop-recipe" id="popular-recipe-5"></div>
      <div class = "upvote">
        <br><br>
        <button type = "button" @click = "count5++"> ▲ </button>
        <p className = "votecounter">{{count5}}</p>
        <button  type = "button" @click = "count5--"> ▼ </button>
      </div>
    </div>
    <!-- <div class="pop-recipe" id="popular-recipe-2"></div>
    <div class="pop-recipe" id="popular-recipe-3"></div>
    <div class="pop-recipe" id="popular-recipe-4"></div>
    <div class="pop-recipe" id="popular-recipe-5"></div> -->
  </div>
</template>

<style scoped>
#title {
  font-family: "Chau Philomene One", sans-serif;
  color: black;
  padding-top: 55px;
  margin: auto;
}

.popular-recipes {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-gap: 20px;
}

.pop-recipe {
  background: rgba(0, 0, 0, 0.5);
  padding: 60px;
  font-family: "Chau Philomene One", sans-serif;
  color: white;
  min-width: 1000px;
}

.upvote{
  text-align: center;
  align-content: center;
  vertical-align: middle;
  justify-content: center;
  max-height: 100px;
}

.pop-recipe-container{
  display: flex;
  flex-direction: row;
}
</style>
