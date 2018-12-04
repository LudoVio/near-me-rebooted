import Vue from 'vue'
import Vuex from 'vuex'

import VenueService from "@/services/VenueService";

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
      VenueService.getVenues(
        venues => {
          commit("setError", false);
          commit("setVenues", venues);
          commit("setLoading", false);
        },
        error => {
          commit("setError", error);
          commit("setVenues", []);
          commit("setLoading", false);
        }
      );
    }
  }
})
