import Vue from 'vue'
import Vuex from 'vuex'
import {fetchBeerList} from '../api/index.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        beer : {}
    },
    getters : {
        fetchBeerList(state) {
            return state.beer
        }
    },
    mutations : {
        SET_BEER(state, beer) {
            state.beer = beer;
        }
    },
    actions : {
        async FETCH_BEER({commit}) {
           const response = await fetchBeerList();
           commit("SET_BEER", response.data);
           return response;
        }
    }
})