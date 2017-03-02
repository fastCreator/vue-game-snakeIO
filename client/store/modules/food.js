import Vue from 'vue'
import * as types from '../mutation-types'

import {buildKey,buildFood} from 'utils/buildData'

const state =
{
  foods: {},
  length: 0
}

const mutations = {
  [types.FOOD_CREATE] (state) {
    if (state.length < 500) {
      var food = buildFood();
      var key = buildKey(food, food.size);
      var arr = state.foods[key];
      arr ? (arr.push(food)) : (Vue.set(state.foods, key, [food]));
      state.length++;
    }
  },
  [types.FOOD_EAT] (state, index) {
    Vue.delete(state.foods, index);
  }
}

export default {
  state,
  mutations
}
