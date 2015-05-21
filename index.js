var app = require('express')();
var http = require('http').Server(app);

var server = require('http').createServer(app).listen(process.env.PORT || 8080);
var io = require('socket.io').listen(server);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//connect and disconnect
io.on('connection', function(socket){
  socket.on('color', function(msg){
    io.emit('color',msg);
  });

});

http.listen(process.env.PORT, function(){
  console.log('listening on *:' + process.env.PORT);
});
