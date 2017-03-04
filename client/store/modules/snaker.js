import Vue from 'vue'
import * as types from '../mutation-types'
import {buildColor} from 'utils/buildData'
var config = require('../../config/game');
var width = config.window.width, height = config.window.height;
var distance = 6;

var data = getinitData();
const state =
{
  my: {
    direction: 1,
    width: 20,
    score: 0,
    header: data.header,
    body: data.body,
    color:buildColor()
  },
  enemy:{

  }
}
data = null;
const mutations = {
  [types.SNAKER_MOVE] (state) {
    var header = state.my.header, body = state.my.body,i;
    for(i=body.length-1;i>0;i--){
      body[i]=body[i-1];
    }
    body[0]={x: header.x, y: header.y,id:id++}
    //body.pop();
    //body.unshift({x: header.x, y: header.y,});
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
    var data = getinitData()
    state.my.header = data.header;
    state.my.body = data.body;
  }
}

export default {
  state,
  mutations
}
var id=0;
function getinitData() {
  var x = Math.random() * (width - 300) + 150, y = Math.random() * (height - 300) + 250;
  x=100,y=500;
  var header = {
    x: x,
    y: y,
    id:id++
  }, body = [];
  for (var i = 0; i < 8; i++) {
    body.push([x, y + distance]);
  }
  return {
    header: header,
    body: body
  }
}
