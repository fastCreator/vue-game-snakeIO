<template>
    <div class="foods">
        <template v-for="(arr, key) in foods">
            <template v-for="(item, index) in arr">
                <div class="food" v-absolute="item" :style="{width:item.size+'px',height:item.size+'px',backgroundColor:item.color}"></div>
            </template>
        </template>
    </div>
</template>

<script type="es6">
    import Vue from 'vue'
    import { mapState, mapActions, mapGetters } from 'vuex'

    export default {
        name: 'Food',
        computed: {
            ...mapState({
                foods: state=> {
                    return state.food.foods
                }
            })
        },
        mounted(){
            var that = this;
            setInterval(function () {
                that.$store.commit('FOOD_CREATE');
            },1000);
        }
    }


</script>

<style lang="less" scoped>
    .foods{
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    .food {
        border-radius: 100%;
        position: absolute;
    }
</style>
