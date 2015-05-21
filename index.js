var app = require('express')();
var http = require('http').Server(app);

var server = require('http').createServer(app).listen(PORT);
var io = require('socket.io').listen(server);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.set('transports', ['xhr-polling']);
io.set('polling duration', 10);

//connect and disconnect
io.on('connection', function(socket){
  socket.on('color', function(msg){
    io.emit('color',msg);
  });

});

http.listen(process.env.PORT, function(){
  console.log('listening on *:' + process.env.PORT);
});
