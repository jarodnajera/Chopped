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
        parent.innerHTML =`
          <h2>
          ${this.pop_recipes[i].name}
          </h2>
          <p>Rating:
          ${this.pop_recipes[i].rating}
          </p>
          <p>Ingredients:
          ${this.pop_recipes[i].ingredients}
          </p>
          <p>Description:
          ${this.pop_recipes[i].description}
          </p>
          <p>Instructions:
          ${this.pop_recipes[i].steps}
          </p>
          `
      });
    },
    calc_avg(rating, count){
      console.log(rating);
      console.log(count);
      return rating/count;
    },
    submit(event, num, rating) {
      var recipe_id = this.pop_recipes[num].id;
      var recipe_name = this.pop_recipes[num].name;
      var recipe_desc = this.pop_recipes[num].description;
      var recipe_time = this.pop_recipes[num].minutes;
      var recipe_ingredients = this.pop_recipes[num].ingredients;

      if(this.pop_recipes[num].rating != undefined){
        var recipe_rating = parseInt(this.pop_recipes[num].rating) + rating;
      }
      else{
        var recipe_rating = rating;
      }

      if(this.pop_recipes[num].count != undefined){
        console.log('If');
        var recipe_count = parseInt(this.pop_recipes[num].count) + 1;
      }
      else{
        console.log('Else');
        var recipe_count = 2;
      }
      // this.pop_recipes[num].rating = rating;
      // console.log(this.pop_recipes[num].rating);
      // alert("changed rating to " + rating);
      let recipe_index = num + 1;
      let change_recipe = document.getElementById(
        "popular-recipe-" + recipe_index.toString()
      );

      let avg = this.calc_avg(recipe_rating, recipe_count);
      change_recipe.innerHTML = "";
      change_recipe.innerHTML =`
          <h2>
          ${this.pop_recipes[num].name}
          </h2>
          <p>Average Rating:
          ${avg}
          </p>
          <p>Ingredients:
          ${this.pop_recipes[num].ingredients}
          </p>
          <p>Description:
          ${this.pop_recipes[num].description}
          </p>
          <p>Instructions:
          ${this.pop_recipes[num].steps}
          </p>
          `;
        
      var new_entry = {
        name: recipe_name,
        id: recipe_id,
        minutes: recipe_time,
        description: recipe_desc,
        ingredients: recipe_ingredients,
        rating: recipe_rating,
        count: recipe_count
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

        fetch("http://localhost:3001/api", {
          method: "GET"
        })
        .then((response) => response.json())
        .then((data) => {
          for(var key in data){
            if(data[key].id === recipe_id){
              this.pop_recipes[num] = data[key];
            }
          }
      });
    },
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
        <button type = "button" @click = "count1++" :disabled="count1 === 5"> ▲ </button>
        <p className = "votecounter">{{count1}}</p>
        <button  type = "button" @click = "count1--" :disabled="count1 === 0"> ▼ </button>
      </div>
      <div class = "submit">
        <button type="submit" @click="submit($event, 0, count1)">submit</button>
      </div>
    </div>
    <div class="pop-recipe-container">
      <div class="pop-recipe" id="popular-recipe-2"></div>
      <div class = "upvote">
        <br><br>
        <button type = "button" @click = "count2++" :disabled="count2 === 5"> ▲ </button>
        <p className = "votecounter">{{count2}}</p>
        <button  type = "button" @click = "count2--" :disabled="count2 === 0"> ▼ </button>
      </div>
      <div class = "submit">
        <button type="submit" @click="submit($event, 1, count2)">submit</button>
      </div>
    </div>
    <div class="pop-recipe-container">
      <div class="pop-recipe" id="popular-recipe-3"></div>
      <div class = "upvote">
        <br><br>
        <button type = "button" @click = "count3++" :disabled="count3 === 5"> ▲ </button>
        <p className = "votecounter">{{count3}}</p>
        <button  type = "button" @click = "count3--" :disabled="count3 === 0"> ▼ </button>
      </div>
      <div class = "submit">
        <button type="submit" @click="submit($event, 2, count3)">submit</button>
      </div>
    </div>
    <div class="pop-recipe-container">
      <div class="pop-recipe" id="popular-recipe-4"></div>
      <div class = "upvote">
        <br><br>
        <button type = "button" @click = "count4++" :disabled="count4 === 5"> ▲ </button>
        <p className = "votecounter">{{count4}}</p>
        <button  type = "button" @click = "count4--" :disabled="count4 === 0"> ▼ </button>
      </div>
      <div class = "submit">
        <button type="submit" @click="submit($event, 3, count4)">submit</button>
      </div>
    </div>
    <div class="pop-recipe-container">
      <div class="pop-recipe" id="popular-recipe-5" ></div>
      <div class = "upvote">
        <br><br>
        <button type = "button" @click = "count5++" :disabled="count5 === 5"> ▲ </button>
        <p className = "votecounter">{{count5}}</p>
        <button  type = "button" @click = "count5--" :disabled="count5 === 0"> ▼ </button>
      </div>
      <div class = "submit">
        <button type="submit" @click="submit($event, 4, count5)">submit</button>
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
