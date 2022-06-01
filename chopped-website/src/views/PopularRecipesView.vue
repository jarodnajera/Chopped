<script>
import PopularRecipeHandler from "../js_classes/PopularRecipeHandler";

export default {
  data() {
    return {
      popular_handler: new PopularRecipeHandler(),
    };
  },
  mounted() {
    this.popular_handler.get_popular_recipes();
  },
};
</script>

<template>
  <div onload="get_popular_recipes" class="popular-recipes">
    <h1 id="title">Popular Recipes</h1>
    <div class="pop-recipe-container">
      <div class="pop-recipe" id="popular-recipe-1"></div>
      <div class="upvote">
        <br /><br />
        <button
          type="button"
          @click="this.popular_handler.count1++"
          :disabled="this.popular_handler.count1 === 5"
        >
          ▲
        </button>
        <p className="votecounter">{{ this.popular_handler.count1 }}</p>
        <button
          type="button"
          @click="this.popular_handler.count1--"
          :disabled="this.popular_handler.count1 === 0"
        >
          ▼
        </button>
      </div>
      <div class="submit">
        <button
          type="submit"
          @click="
            this.popular_handler.submit($event, 0, this.popular_handler.count1)
          "
        >
          submit
        </button>
      </div>
    </div>
    <div class="pop-recipe-container">
      <div class="pop-recipe" id="popular-recipe-2"></div>
      <div class="upvote">
        <br /><br />
        <button
          type="button"
          @click="this.popular_handler.count2++"
          :disabled="this.popular_handler.count2 === 5"
        >
          ▲
        </button>
        <p className="votecounter">{{ this.popular_handler.count2 }}</p>
        <button
          type="button"
          @click="this.popular_handler.count2--"
          :disabled="this.popular_handler.count2 === 0"
        >
          ▼
        </button>
      </div>
      <div class="submit">
        <button
          type="submit"
          @click="
            this.popular_handler.submit($event, 1, this.popular_handler.count2)
          "
        >
          submit
        </button>
      </div>
    </div>
    <div class="pop-recipe-container">
      <div class="pop-recipe" id="popular-recipe-3"></div>
      <div class="upvote">
        <br /><br />
        <button
          type="button"
          @click="this.popular_handler.count3++"
          :disabled="this.popular_handler.count3 === 5"
        >
          ▲
        </button>
        <p className="votecounter">{{ this.popular_handler.count3 }}</p>
        <button
          type="button"
          @click="this.popular_handler.count3--"
          :disabled="this.popular_handler.count3 === 0"
        >
          ▼
        </button>
      </div>
      <div class="submit">
        <button
          type="submit"
          @click="
            this.popular_handler.submit($event, 2, this.popular_handler.count3)
          "
        >
          submit
        </button>
      </div>
    </div>
    <div class="pop-recipe-container">
      <div class="pop-recipe" id="popular-recipe-4"></div>
      <div class="upvote">
        <br /><br />
        <button
          type="button"
          @click="this.popular_handler.count4++"
          :disabled="this.popular_handler.count4 === 5"
        >
          ▲
        </button>
        <p className="votecounter">{{ this.popular_handler.count4 }}</p>
        <button
          type="button"
          @click="this.popular_handler.count4--"
          :disabled="this.popular_handler.count4 === 0"
        >
          ▼
        </button>
      </div>
      <div class="submit">
        <button
          type="submit"
          @click="
            this.popular_handler.submit($event, 3, this.popular_handler.count4)
          "
        >
          submit
        </button>
      </div>
    </div>
    <div class="pop-recipe-container">
      <div class="pop-recipe" id="popular-recipe-5"></div>
      <div class="upvote">
        <br /><br />
        <button
          type="button"
          @click="this.popular_handler.count5++"
          :disabled="this.popular_handler.count5 === 5"
        >
          ▲
        </button>
        <p className="votecounter">{{ this.popular_handler.count5 }}</p>
        <button
          type="button"
          @click="this.popular_handler.count5--"
          :disabled="this.popular_handler.count5 === 0"
        >
          ▼
        </button>
      </div>
      <div class="submit">
        <button
          type="submit"
          @click="
            this.popular_handler.submit($event, 4, this.popular_handler.count5)
          "
        >
          submit
        </button>
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

.upvote {
  text-align: center;
  align-content: center;
  vertical-align: middle;
  justify-content: center;
  max-height: 100px;
}

.pop-recipe-container {
  display: flex;
  flex-direction: row;
}
</style>
