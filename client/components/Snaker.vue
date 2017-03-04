<template>
    <div class="snaker">
        <div class="snaker-header" :class="'direction'+direction"
             :style="{backgroundColor : color } " v-absolute="header">
            <div class="snaker-eyes fl"></div>
            <div class="snaker-eyes fr"></div>
        </div>
        <template v-for="(item, index) in body">
            <div class="snaker-body" v-absolute="item" :style="{backgroundColor : color }" :key="item.id"></div>
        </template>
    </div>
</template>

<script type="es6">
    const width = 20;
    import Vue from 'vue'

    export default {
        name: 'Snaker',
        props: ['color','header','body','direction'],
    }
</script>

<style lang="less" scoped>
    @snaker-width :20px;
    @snaker-eye-width :@snaker-width /2;
    .snaker-header {
        display: inline-block;
        width: @snaker-width;
        height: @snaker-width;
        border-radius: 100% 100% 0 0;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        transform-origin: 50% 50%;

        &.direction1 {
            transform: rotate(0deg)
        }

        &.direction2 {
            transform: rotate(90deg)
        }

        &.direction3 {
            transform: rotate(180deg)
        }

        &.direction4 {
            transform: rotate(270deg)
        }

    }

    .snaker-body {
        width: @snaker-width;
        height: @snaker-width;
        position: absolute;
        border-radius: 100%;
    }

    .snaker-eyes {
        position: relative;
        width: @snaker-eye-width;
        height: @snaker-eye-width;
        background: #000;
        border-radius: 100%;
        border: @snaker-eye-width / 4 solid #fff;
        box-sizing: border-box;
        overflow: hidden;
        &:after {
            content: '';
            width: @snaker-eye-width / 4;
            height: @snaker-eye-width / 4;
            background: #fff;
            border-radius: 100%;
            position: absolute;
            right: 0px;
        }
    }
</style>
