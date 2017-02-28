<template>
    <div class="page">
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
