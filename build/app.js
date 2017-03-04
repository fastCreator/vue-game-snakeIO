var express=require('express')
var path=require('path')
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
app.use('/', express.static(path.join(__dirname, '../dist')));

io.on('connection', function (client) {
    var clientId = client.id;
    client.emit('createId', clientId);
    console.log('客户端连接了', clientId);
    client.on('move', function (data) {
         client.broadcast.emit('move', data);
         client.broadcast.conn.flush()
    });
    client.on('disconnect', function () {
        console.log('客户端退出链接了', clientId);
        io.sockets.emit('enemyOut', clientId);
    });
});
server.listen(3000);
console.log('3000端口开启了啊')
