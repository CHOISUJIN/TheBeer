import Vue from 'vue'
import Vuex from 'vuex'
import {fetchBeerList, fetchBeer} from '../api/index.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        beers : {},
        beer: [],
    },
    getters : {
        fetchBeerList(state) {
            return state.beers;
        },
        fetchBeer(state){
            return state.beer;
        }
    },
    mutations : {
        SET_BEERS(state, beers) {
            state.beers = beers;
        },
        SET_BEER(state, beer) {
            state.beer = beer;
        }
    },
    actions : {
        async FETCH_BEERS({commit}) {
           const response = await fetchBeerList();
           commit("SET_BEERS", response.data);
           return response;
        },
        async FETCH_BEER({commit}, id) {
            const response = await fetchBeer(id);
            commit("SET_BEER", response.data);
            return response;
        }
    }
})