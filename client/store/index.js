import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import food from './modules/food'
import snaker from './modules/snaker'

const state = {
}

const mutations = {
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    }
}

const actions = {
    incrementAsync({commit}) {
        setTimeout(() => {
            commit('INCREMENT')
        }, 200)
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    modules: {
        food,
        snaker
    },
})

export default store
