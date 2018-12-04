import Vue from 'vue'
import Vuex from 'vuex'

import VenueService from "@/services/VenueService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    venues: [],
    loading: true
  },
  mutations: {
    setVenues(state, venues) {
      state.venues = venues;
    },
    setLoading(state, value) {
      state.loading = value;
    }
  },
  actions: {
    fetchVenues({ commit }) {
      commit("setLoading", true);
      VenueService.getVenues(
        venues => {
          console.log(venues);
          commit("setVenues", venues);
          commit("setLoading", false);
        },
        error => {
          commit("setVenues", []);
          commit("setLoading", false);
          console.log("There was an error: ", error); 
        }
      );
    }
  }
})
