<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    html,body,#app{
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: #626262;
    }
    body {
        font-size: 2rem;
        font-family: -apple-system, BlinkMacSystemFont,
        'avenir next', avenir,
        helvetica, 'helvetica neue',
        Ubuntu,
        'segoe ui', arial,
        sans-serif;
    }

    .fl{
     float: left;
    }
    .fr{
        float: right;
    }
</style>
