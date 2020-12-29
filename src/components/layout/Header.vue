<template>
    <div class="nav">
      <header>
          <router-link to="/" class="logo">Maulik Shah</router-link>
      </header>
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/about">about</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
}
</script>

<style>
.nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: baseline;
}

.logo{
    box-shadow: none;
    text-decoration: none;
    color: #3b4287;
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 1.1;
}

.nav-list {
  list-style: none;
  display: flex;
  font-size: 20px;
  text-decoration: none;
}

.nav-item a {
  color: #3b4287;
  transition: 0.3s;
} 

.nav-item a:hover {
  color: #928f8f;
  text-decoration: none;
} 
</style>