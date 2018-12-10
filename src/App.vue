<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-sm navbar-dark bg-primary">
      <div class="container">
        <router-link class="navbar-brand" to="/"><fa icon="coffee" /> NearMe</router-link>
          
        <VenueInput />
      </div>
    </nav>

    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import VenueInput from "./components/VenueInput";

export default {
  name: 'home',
  components: {
    VenueInput
  }
}
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";

#nav {
  margin-bottom: 30px;
}
</style>
