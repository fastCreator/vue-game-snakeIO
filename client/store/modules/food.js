import Vue from 'vue'
import * as types from '../mutation-types'

var config = require('../../config/game');
const color = ['#FCEDD6', '#A921C6', '#1F9B7C', '#E3DC2D', '#19A580'];
const distance=30;
const state =
{
    foods: {},
    length: 0
}

const mutations = {
    [types.FOOD_CREATE] (state) {
        if (state.length < 500) {
            var food = {
                x: Math.random() * (config.window.width - 10) + 5,
                y: Math.random() * (config.window.height - 10) + 5,
                size: Math.random() * 10 + 5,
                color: color[Math.round(Math.random() * (color.length - 1))]
            }
            var key =  Math.floor(food.x/distance)+'t'+Math.floor(food.y/distance);
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