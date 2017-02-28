<template>
    <div class="control"></div>
</template>

<script type="es6">
    import Vue from 'vue'
    import { mapState, mapActions, mapGetters } from 'vuex'

    export default {
        name: 'Control',
        mounted(){
            var that = this;
            onkeydown(that)
            automove(that);
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
            }
        }
    }
    function automove(that){
        setInterval(function(){
            that.$store.commit('SNAKER_MOVE');
        },200)
    }

    function iseat(snaker,food,width){
        return Math.sqrt(Math.pow(snaker.x-food.x,2)+Math.pow(snaker.y-food.y,2))<=width+food.size
    }
</script>

<style lang="less" scoped>
</style>
