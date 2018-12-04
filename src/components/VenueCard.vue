<template>
  <div class="venue-card card">
    <div class="card-body">
      <h5 class="card-title">{{ venue.name }}</h5>
      <h6 v-if="venue.categories" class="card-subtitle mb-2 text-muted">
        {{ venue.categories[0].name }}
      </h6>

      <p class="card-text font-italic">{{ venue.location.address }}</p>

      <p v-if="venue.location.distance < 1000" class="card-text font-weight-bold">{{ venue.location.distance }}m</p>
      <p v-else class="card-text font-weight-bold">{{ Math.round(venue.location.distance * 100) / 100000 }}km</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VenueCard',
  props: {
    venue: Object
  }
}
</script>

<style scoped lang="scss">
</style>
