var config = require('../config/game');
var width = config.window.width, height = config.window.height;

const color = ['#FCEDD6', '#A921C6', '#1F9B7C', '#E3DC2D', '#19A580'];


export const hasIntersect = function (snaker, food, snakerWidth) {
  return Math.sqrt(Math.pow(snaker.x - food.x, 2) + Math.pow(snaker.y - food.y, 2)) <= snakerWidth + food.size;
}
export const buildKey = function (food, size) {
  return Math.floor((food.x + size / 2) / 30) + 't' + Math.floor((food.y + size / 2) / 30);
}
export const buildX = function () {
  return Math.random() * (width - 20);
}
export const buildY = function () {
  return Math.random() * (height - 20);
}
export const buildColor = function () {
  return color[Math.round(Math.random() * (color.length - 1))]
}
export const buildFood = function () {
  return {
    x: buildX(),
    y: buildY(),
    size: parseInt(Math.random() * 20 + 10),
    color: buildColor()
  }
}

export const getFoodsRange = function (key, foods) {
  var keys = key.split('t');
  var arr = [], foodsRange = {};
  for (var i = -1; i <= 1; i++) {
    for (var j = -1; j <= 1; j++) {
      arr.push([keys[0] - i, keys[1] - j]);
    }
  }
  for (var item of arr) {
    var key = item.join('t')
    var food = foods[key];
    if (food) {
      foodsRange[key] = food;
    }
  }
  return foodsRange;
}

export const dieWall = function (x, y) {
  return !(x > 0 && y > 0 && x < width-10 && y < height-20)
}
