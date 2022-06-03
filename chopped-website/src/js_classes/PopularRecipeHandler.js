export default class PopularRecipeHandler {
  constructor() {
    this.pop_recipes = [];
    this.count1 = 0;
    this.count2 = 0;
    this.count3 = 0;
    this.count4 = 0;
    this.count5 = 0;
  }

  get_popular_recipes() {
    console.log("working");
    fetch("http://localhost:3001/api")
      .then((response) => response.json())
      .then((data) => this.display_recipes(data));
  }

  display_recipes(dict) {
    var arr = [];
      for(var i in dict){
        arr.push(dict[i]);
      }
      // console.log(dict);

      arr.sort((a,b) => {
        let arat = a.rating;
        let brat = b.rating;

        if(arat > brat){
          return -1;
        }

        if(arat < brat){
          return 1;
        }

        return 0;
      })

      console.log(arr);
      // for (var key in dict) {
      //   if ("rating" in dict[key]) {
      //     this.pop_recipes.push(dict[key]);
      //   }
      // }
      for(let j = 0; j < 5; j++){
        console.log(arr[j]);
        this.pop_recipes.push(arr[j]);
      }
    const parent_object = document.getElementsByClassName("pop-recipe");
    [...parent_object].forEach((parent, i) => {
      if (this.pop_recipes[i].rating != undefined) {
        var recipe_rating = parseInt(this.pop_recipes[i].rating);
      }
  
      if (this.pop_recipes[i].count != undefined) {
        console.log("If");
        var recipe_count = parseInt(this.pop_recipes[i].count);
      } else {
        console.log("Else");
        var recipe_count = 1;
      }
      let avg = this.calc_avg(recipe_rating, recipe_count);
      parent.innerHTML = `
            <h2>
            ${this.pop_recipes[i].name}
            </h2>
            <p>Rating:
            ${avg}
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
            `;
    });
  }

  calc_avg(rating, count) {
    console.log(rating);
    console.log(count);
    let avg = rating / count;
    return avg.toFixed(2);
  }

  submit(event, num, rating) {
    var recipe_id = this.pop_recipes[num].id;
    var recipe_name = this.pop_recipes[num].name;
    var recipe_desc = this.pop_recipes[num].description;
    var recipe_time = this.pop_recipes[num].minutes;
    var recipe_ingredients = this.pop_recipes[num].ingredients;
    var recipe_steps = this.pop_recipes[num].steps;

    if (this.pop_recipes[num].rating != undefined) {
      var recipe_rating = parseInt(this.pop_recipes[num].rating) + rating;
    } else {
      var recipe_rating = rating;
    }

    if (this.pop_recipes[num].count != undefined) {
      console.log("If");
      var recipe_count = parseInt(this.pop_recipes[num].count) + 1;
    } else {
      console.log("Else");
      var recipe_count = 2;
    }
    let recipe_index = num + 1;
    let change_recipe = document.getElementById(
      "popular-recipe-" + recipe_index.toString()
    );

    let avg = this.calc_avg(recipe_rating, recipe_count);
    change_recipe.innerHTML = "";
    change_recipe.innerHTML = `
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
      steps: recipe_steps,
      rating: recipe_rating,
      count: recipe_count,
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
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        for (var key in data) {
          if (data[key].id === recipe_id) {
            this.pop_recipes[num] = data[key];
          }
        }
      });
  }
}
