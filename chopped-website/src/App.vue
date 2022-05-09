<script setup>
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div id="landing">
    <nav class="navbar fixed-top navbar-expand-lg navbar-custom">
      <div class="container-fluid">
        <RouterLink id="logo" to="/"
          ><img
            id="logo"
            src="./assets/chopped_logo.png"
            alt="logo"
            width="65"
            height="65"
        /></RouterLink>

        <h1 id="title">CHOPPED</h1>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink
                id="home"
                class="nav-link px-5 active"
                aria-current="page"
                to="/"
                >Home</RouterLink
              >
            </li>
            <li class="nav-item px-5">
              <RouterLink
                id="about"
                class="nav-link"
                aria-current="page"
                :to="{ name: 'about' }"
                >About</RouterLink
              >
            </li>
            <li class="nav-item px-5 dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Recipes
              </a>
              <ul
                id="ddmenu"
                class="dropdown-menu"
                aria-labelledby="navbarDropdown"
              >
                <li class="ddentry">
                  <RouterLink class="dropdown-item" to="/popular-recipes"
                    >Popular Recipes</RouterLink
                  >
                </li>
                <li class="ddentry">
                  <RouterLink class="dropdown-item" to="/search-recipes"
                    >Search for a Recipe</RouterLink
                  >
                </li>
                <li class="ddentry">
                  <RouterLink class="dropdown-item" to="/add-recipes"
                    >Add a Recipe</RouterLink
                  >
                </li>
                <li class="ddentry">
                  <RouterLink class="dropdown-item" to="/edit-recipes"
                    >Edit a Recipe</RouterLink
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,300;0,500;1,300&family=Cabin&family=Chau+Philomene+One&family=Signika:wght@600&family=Tinos:ital,wght@1,700&display=swap");

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

.nav-link {
  font-size: 20px;
  font-family: "Chau Philomene One", sans-serif;
}

.navbar-custom {
  background-color: black;
}

.dropdown-item {
  font-family: "Chau Philomene One", sans-serif;
}

#logo {
  margin-left: 20px;
  margin-right: 30px;
}

#title {
  margin-top: 5px;
  font-family: "Chau Philomene One", sans-serif;
  color: #ff5757;
  font-size: 50px;
}

#home {
  color: white;
}

#home:hover {
  color: #ff5757;
}

#about {
  color: white;
}

#about:hover {
  color: #ff5757;
}

#navbarDropdown {
  color: white;
}

#navbarDropdown:hover {
  color: #ff5757;
}
</style>
