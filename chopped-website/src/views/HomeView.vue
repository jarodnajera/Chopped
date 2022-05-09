<script setup>
import HomeVideo from "../components/HomeVideo.vue";
</script>

<template>
  <div id="home-page">
    <home-video></home-video>
    <div class="info">
      <h1>Welcome to Chopped!</h1>
      <h2>Cooking Made Easy</h2>
      <p>Click "Get Started" to browse our recipes!</p>
      <form action="/popular-recipes">
        <button id="myBtn" type="submit">Get Started</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,300;0,500;1,300&family=Cabin&family=Chau+Philomene+One&family=Signika:wght@600&family=Tinos:ital,wght@1,700&display=swap");
.info {
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
  border-radius: 2rem;
}

#myBtn {
  width: 200px;
  font-size: 18px;
  padding: 10px;
  border: none;
  border-radius: 0.5rem;
  background: #ff5757;
  color: #fff;
  cursor: pointer;
}

#myBtn:hover {
  background: #ddd;
  color: black;
}
</style>
