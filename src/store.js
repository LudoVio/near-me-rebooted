import Vue from 'vue'
import Vuex from 'vuex'

import VenueService from "@/services/VenueService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    venues: []
  },
  mutations: {
    setVenues(state, venues) {
      state.venues = venues;
    }
  },
  actions: {
    fetchVenues({ commit }) {
      VenueService.getVenues(
        venues => {
          commit("setVenues", venues);
        },
        error => {
          console.log("There was an error: ", error); 
        }
      );
    }
  }
})
