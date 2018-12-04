<template>
  <div class="home">
    <div v-if="loading" class="loader">
      <fa icon="sync" class="fa-spin fa-10x" />
    </div>

    <div v-else class="card-columns">
      <div class="card" v-for="venue in venues" :key="venue.id">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">{{ venue }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: 'home',
  components: {
    
  },
  methods: mapActions(["fetchVenues"]),
  computed: mapState(["venues", "loading"]),
  created() {
    this.fetchVenues();
  }
}
</script>

<style lang="scss">
  @import "../../node_modules/bootstrap/scss/functions";
  @import "../../node_modules/bootstrap/scss/variables";
  @import "../../node_modules/bootstrap/scss/mixins";

  .loader {
    text-align: center;
    padding-top: 30px;
  }

  .card-columns {
    @include media-breakpoint-only(sm) {
      column-count: 1;
    }
    @include media-breakpoint-only(md) {
      column-count: 2;
    }
    @include media-breakpoint-only(lg) {
      column-count: 3;
    }
  }
</style>
