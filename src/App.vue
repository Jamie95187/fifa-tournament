<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Tournaments' }">Tournaments</router-link> |
    <router-link :to="{ name: 'Players' }">Players</router-link>
  </div>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@900&display=swap");

#app {
  font-family: "Zen Old Mincho", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

button {
  padding: 15px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  background-color: darkseagreen;
  color: #2c3e50;
  cursor: pointer;
}
</style>
