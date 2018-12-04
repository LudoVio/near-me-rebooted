<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-dark bg-primary">
      <div class="container">
        <router-link class="navbar-brand" to="/"><fa icon="coffee" /> NearMe</router-link>
      </div>
    </nav>

    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";

#nav {
  margin-bottom: 30px;
}
</style>
