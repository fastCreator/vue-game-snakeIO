import Vue from 'vue'
import * as types from '../mutation-types'

const state =
{
    my: {
        direction: 1,
        width:20,
        header: {
            x: 100,
            y: 100,
        },
        body: [
            {
                x: 100,
                y: 110,
            },
            {
                x: 100,
                y: 120
            },
            {
                x: 109,
                y: 130
            },
            {
                x: 100,
                y: 140
            },
            {
                x: 109,
                y: 150
            }
        ]
    }
}
const distance = 10;
const mutations = {
    [types.SNAKER_MOVE] (state) {
        var header = state.my.header, body = state.my.body;
        body.pop();
        body.unshift({x: header.x, y: header.y,});
        switch (state.my.direction) {
            case 1:
                header.y -= distance;
                break;
            case 2:
                header.x += distance;
                break;
            case 3:
                header.y += distance;
                break;
            case 4:
                header.x -= distance;
                break;
            default:
                console.error('方向传递错误', distance);
        }
    },
    [types.SNAKER_TURN] (state, direction) {
        state.my.direction = direction
    }
}

export default {
    state,
    mutations
}