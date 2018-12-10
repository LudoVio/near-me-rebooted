import Vue from 'vue'
import Vuex from 'vuex'

import FoursquareService from "@/services/FoursquareService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    venueSearch: "",
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
    fetchVenues({ commit }, params = {}) {
      commit("setLoading", true);
      FoursquareService.get("venues/explore", params)
        .then(data => {
          const venues = data.groups[0].items.map(item => item.venue);
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
