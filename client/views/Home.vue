<template>
    <div class="page"  :style="{left:clientWidth2-my.header.x+'px',top:clientHeight2-my.header.y+'px'}">
        <Snaker v-bind="my" class="mySnaker"></Snaker>
        <Food></Food>
        <Control></Control>
    </div>
</template>

<script type="es6">
    import { mapState, mapActions, mapGetters } from 'vuex'

    import Snaker from 'components/Snaker'
    import Food from 'components/Food'
    import Control from 'components/Control'

    export default {
        components: {
            Snaker,
            Food,
            Control
        },
        data(){
          return {
            clientWidth2:document.body.clientWidth/2,
            clientHeight2:document.body.clientHeight/2,
          }
        },
        computed: {
            ...mapState({
                my: state=> {
                    return {
                        header:state.snaker.my.header,
                        body:state.snaker.my.body,
                        direction:state.snaker.my.direction,
                        color:'#FF5858'
                    }
                }
            })
        }
    }
</script>
<style scoped>
.page{
  width: 3000px;
  height: 3000px;
  overflow: hidden;
  position: absolute;
  background-color: #EBEBF3;
}
</style>
