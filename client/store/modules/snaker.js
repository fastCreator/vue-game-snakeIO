import Vue from 'vue'
import * as types from '../mutation-types'

const state =
{
  my: {
    direction: 1,
    width: 20,
    score: 0,
    header: {
      x: 100,
      y: 100,
    },
    body: [
      {
        x: 100,
        y: 410,
      },
      {
        x: 100,
        y: 420
      },
      {
        x: 109,
        y: 430
      },
      {
        x: 100,
        y: 440
      },
      {
        x: 109,
        y: 450
      }
    ]
  }
}
var distance =10;
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
  //[types.SNAKER_SPEED] (state) {
  //  distance=10;
  //},
  //[types.SNAKER_UP] (state) {
  //  distance=1;
  //},
  [types.SNAKER_TURN] (state, direction) {
    state.my.direction = direction
  },
  [types.SNAKER_INIT] (state) {
    state.my.header = {
      x: 100,
      y: 400,
    }
    state.my.body = [
      {
        x: 100,
        y: 410,
      },
      {
        x: 100,
        y: 420
      },
      {
        x: 109,
        y: 430
      },
      {
        x: 100,
        y: 440
      },
      {
        x: 109,
        y: 450
      }
    ];
  }
}

export default {
  state,
  mutations
}
