//var Realtime = require('leancloud-realtime').Realtime;
//var TextMessage = require('leancloud-realtime').TextMessage;
//
//var realtime = new Realtime({
//  appId: 'w4wPKGSFVMUmr6eliXyXSCUk-gzGzoHsz',
//  region: 'cn', //美国节点为 "us"
//});
//
//
//


var config = require('../config/game');
var socket = io(config.server);
import Vue from 'vue';

export const startSocket=function(snaker){
  socket.on('connect', function(){
      console.log('链接',config.server);
  });
  socket.on('createId', function(id){
    snaker.my.id=id;
  });
  socket.on('move', function(data){
      Vue.set(snaker.enemy,data.id,data);
  });
  socket.on('enemyOut', function(id){
    Vue.delete(snaker.enemy,id);
  });
  socket.on('disconnect', function(){
    console.log('服务端断开');
  });
  return socket;
}


//import Vue from 'vue';
//var w = new WebSocket('ws://localhost:3000');
//var mw={
//  emit:function(type,data){
//   // w.send(JSON.stringify({type:type,data:data}));
//    w.send(data);
//  }
//}
//export const startSocket = function (snaker) {
//  //w.onopen = function () {
//  //  w.send("send message");
//  //}
//  w.onmessage = function (e) {
//    console.dir(e)
//    console.log(e.data+',客户端返回时间:'+new Date().getTime());
//    //if(!e.data) return;
//    //var data=JSON.parse(e.data);
//    //var id=data.id;
//    //var msg=JSON.parse(data.msg);
//    //switch (msg.type){
//    //  case 'move':
//    //    console.log(id);
//    //    //Vue.set(snaker.enemy,id,msg.data);
//    //        break;
//    //  case 'enemyOut':
//    //    Vue.delete(snaker.enemy,id);
//    //        break;
//    //  case 'createId':
//    //    snaker.my.id=id;
//    //        break;
//    //}
//  }
//  w.onclose = function (e) {
//    console.log("closed");
//  }
//  w.onerror = function (e) {
//    console.log("error");
//  }
//  return mw;
//}
