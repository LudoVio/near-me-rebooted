<template>
  <div class="home">
    <div v-if="loading" class="loader">
      <fa icon="sync" class="fa-spin fa-10x" />
    </div>

    <div v-else-if="!error" class="card-columns">
      <VenueCard v-for="venue in venues" :venue="venue" :key="venue.id" />
    </div>

    <div v-else class="alert alert-danger" role="alert">
      {{ error }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import VenueCard from "../components/VenueCard";

export default {
  name: 'home',
  components: {
    VenueCard
  },
  methods: mapActions(["fetchVenues"]),
  computed: mapState(["venues", "loading", "error"]),
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
