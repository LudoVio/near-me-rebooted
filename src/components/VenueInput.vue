<template>
  <form class="venue-input form-inline" @submit.prevent="search">
    <div>
      <input 
        type="text" 
        class="form-control mr-sm-2 input" 
        placeholder="I'm looking for..."
        maxlength="200"
        autocomplete="off"
        v-model="value"
        @focus="onFocus"
        @blur="onBlur"
        @input="handleInput">
        
      <ul v-if="value && hasFocus" class="list-group suggestions">
        <li v-for="suggestion in suggestions" :key="suggestion.id" class="list-group-item" @click="selectSuggestion(suggestion)">
          {{ suggestion.name }}
        </li>
      </ul>
    </div>

    <button class="btn btn-success">Search</button>
  </form>
</template>

<script>
import FoursquareService from "@/services/FoursquareService";
import { mapActions } from "vuex";

export default {
  name: 'VenueInput',
  data() {
    return {
      value: "",
      suggestions: [],
      hasFocus: false,
      willLostFocusHash: null
    }
  },
  methods: {
    handleInput() {
      this.hasFocus = true;
      FoursquareService.get("venues/search", { query: this.value, limit: 5 })
        .then(data => {
          this.suggestions = data.venues;
        });
    },

    onFocus() {
      this.hasFocus = true;
      this.willLostFocusHash = null;
    },

    onBlur() {
      const random = Math.random();
      this.willLostFocusHash = random;

      setTimeout(() => {
        if (this.willLostFocusHash == random) {
          this.hasFocus = false;
          this.willLostFocusHash = null;
        }
      }, 100);
    },

    selectSuggestion(suggestion) {
      this.value = suggestion.name;
      this.hasFocus = false;
    },

    search() {
      console.log("Search: ", this.value);
      this.hasFocus = false;
      this.fetchVenues({query: this.value});
    },
    ... mapActions(["fetchVenues"]),
  },
}
</script>

<style lang="scss" scoped>
.input {
  width: 300px !important;
}

.suggestions {
    position: absolute;
    width: 300px;
    z-index: 1;
    cursor: pointer;
}
</style>