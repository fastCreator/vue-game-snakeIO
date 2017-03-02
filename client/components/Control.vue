<template>
    <div class="control"></div>
</template>

<script type="es6">
    import Vue from 'vue'
    import { mapState, mapActions, mapGetters } from 'vuex'
    import {buildKey,getFoodsRange,hasIntersect,dieWall} from 'utils/buildData'
    export default {
        name: 'Control',
        mounted(){
            var that = this;
            var my=that.$store.state.snaker.my;
            var foods=that.$store.state.food.foods;
            onkeydown(that);
            //onkeyup(that);
          setInterval(function(){
            automove(that);
            isdie(that,my);
            eat(my,foods);
          },100)
        }
    }

    function onkeydown(that) {
        window.onkeydown = function (e) {
            switch (e.keyCode) {
                case 38:
                    that.$store.commit('SNAKER_TURN', 1);
                    break;
                case 39:
                    that.$store.commit('SNAKER_TURN', 2);
                    break;
                case 40:
                    that.$store.commit('SNAKER_TURN', 3);
                    break;
                case 37:
                    that.$store.commit('SNAKER_TURN', 4);
                    break;
                //case 32:
                //    that.$store.commit('SNAKER_SPEED');
                //    break;
            }
        }
    }
    function onkeyup(that) {
      window.onkeyup = function (e) {
        switch (e.keyCode) {
          case 37:
            that.$store.commit('SNAKER_speed');
            break;
        }
      }
    }
    function automove(that){
            that.$store.commit('SNAKER_MOVE');
    }

    function eat(my,foods){
      var foodRange=getFoodsRange(buildKey(my.header,my.width),foods);
      for(var key in foodRange){
        var item=foodRange[key];
        for(var i in item){
          var food=item[i]
          if(hasIntersect(my.body[0],food , my.width)){
             Vue.delete(foods[key],i);
             my.score+=food.size;
             grow(my);
          }
        }
      }
    }

    function grow(my){
      //加长
        if(my.score>=my.width/2){
          var len=my.body.length;
          my.score-=my.width/2;
          my.body.push(my.body[len-1]);
        }
    }

  function isdie(that,my){
     if(dieWall(my.header.x,my.header.y)){
       console.log('撞墙了')
       that.$store.commit('SNAKER_INIT');
     }
  }
</script>


