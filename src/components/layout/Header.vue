<template>
      <nav>
        <div class="container container--vertically-center">
          <div class="nav__brand">
              <router-link to="/" class="logo">maulik</router-link>
          </div>
          <ul class="nav__list">
            <li class="nav__list-item">
              <router-link to="/about">about</router-link>
            </li>
          </ul>
        </div>
      </nav>
</template>

<script>
export default {
}
</script>

<style>
#header {
  position: fixed;
  width: 100%;
  background: rgb(250, 250, 250);
  z-index: 100;
}

nav {
  position: relative;
  padding: 3em 0 0.5em;
  align-items: center;
  z-index: 100;
}

.container {
  flex-flow: row wrap;
  width: 90%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
}

.hero-component{
  margin-top: 3%;
  margin-left: 13%;
}

.nav__brand a.logo{
  float: left;
  font-weight: 400;
  font-size: 1.4rem;
  text-decoration: none;
  color: #3b4287;
  margin-left: 20px;
}

.nav__list {
  flex: 1 1 0;
  margin: 0;
  padding: 0;
  float: right;
}

.nav__list-item {
  display: inline-block;
  padding: 0 30px;
  letter-spacing: 0.5px;
  font-size: 1.4rem;
  transition: color 250ms ease;
  font-weight: 400;
}

.nav__list-item a {
  color: #3b4287;
  transition: 0.3s;
}

nav ul.nav__list li a:hover {
  color: #928f8f;
  text-decoration: none;
}

</style>