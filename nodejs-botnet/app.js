// var app = require('express')();
// var http = require('http').Server(app);
// // var io = require('socket.io')(http);
// // io.on('connection', function (socket) {
// //     var clientIp = socket.request.connection.remoteAddress;
// //     console.log('a user connected: ' + clientIp);
// //     socket.on('disconnect', function () {
// //         console.log('user ' + clientIp + ' disconnected');
// //     });
// // });
// app.get('/node', function (req, res) {
//     // res.send('Example app started!'+__dirname);
//     res.sendFile(__dirname + '/index.html');
// });
http.listen(process.env.ALWAYSDATA_HTTPD_PORT, process.env.ALWAYSDATA_HTTPD_IP, function () {
    console.log('listening on *:3000');
})

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/node', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// io.on('connection', function(socket){
//     console.log('a user connected');
// });

http.listen(process.env.ALWAYSDATA_HTTPD_PORT, process.env.ALWAYSDATA_HTTPD_IP, function(){
    console.log('listening on *:3000');
});