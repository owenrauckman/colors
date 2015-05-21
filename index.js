var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

//connect and disconnect
io.on('connection', function(socket){
  socket.on('color', function(msg){
    io.emit('color',msg);
  });

});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
