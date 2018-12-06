import Vue from 'vue'
import Vuex from 'vuex'

import FoursquareService from "@/services/FoursquareService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    venues: [],
    loading: true,
    error: false
  },
  mutations: {
    setVenues(state, venues) {
      state.venues = venues;
    },
    setLoading(state, value) {
      state.loading = value;
    },
    setError(state, value) {
      state.error = value;
    }
  },
  actions: {
    fetchVenues({ commit }) {
      commit("setLoading", true);
      FoursquareService.get("venues/explore")
        .then(venues => {
          commit("setError", false);
          commit("setVenues", venues);
          commit("setLoading", false);
        })
        .catch(error => {
          commit("setError", error);
          commit("setVenues", []);
          commit("setLoading", false);
        });
    }
  }
})
