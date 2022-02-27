<template>
  <div>
    <div id="nav" class = "shadow-sm p-3 mb-2 bg-body rounded h-10">
      <router-link to="/">Home</router-link> |
      <router-link to="/facts">Facts</router-link>
    </div>
    <div class="container shadow p-3 mb-5 bg-body rounded h-100">
    <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
</style>
