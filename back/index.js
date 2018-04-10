var express = require('express');
var http = require('http')
var socketio = require('socket.io');
var socketioJwt = require('socketio-jwt');
var jwt = require('jsonwebtoken');
var app = express();
var server = http.Server(app);
var router = express.Router();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://betonix:beto2525@cluster0-vvu2w.mongodb.net/test";
var db = null;
MongoClient.connect(url, function(err, ddb) {
  if (err) throw err;
  var dbo = ddb.db("test");
  console.log("Database created!");
  db = dbo;
});

var websocket = socketio(server.listen(3000));


// The event will be called when a client is connected.
console.log("porta 3000.")
/*websocket.set('authorization', socketioJwt.authorize({
  secret: "xxx",
  handshake: true
}));*/

app.post('/create', function (req, res) {

  // TODO: validate the actual user user
  console.log(req.body);

  var user = {
    first_name: 'John',
    username :'betonix',
    email: 'john@doe.com'
  };

  db.collection('users').save(user, function(err, records) {
    if (err) throw err;
    console.log("record added");
    //res.send({COD: "OK"});
  });

  db.collection('users').find({}).toArray(function(err,result){
    res.json(result)
  })
});

app.post('/login', function (req, res) {

    // TODO: validate the actual user user

    console.log(req);

    var profile = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@doe.com',
      id: 123
    };
  
    // we are sending the profile in the token
    var token = jwt.sign(profile, 'xxx');
  
    res.json({token: token});
});


var rooms = {}
var movies = [

    {title:'Blade Runner 2049',foto:'/mVr0UiqyltcfqxbAUcLl9zWL8ah.jpg'},
    {title:'Blade Runner 2049',foto:'/mVr0UiqyltcfqxbAUcLl9zWL8ah.jpg'},
    {title:'Blade Runner 2049',foto:'/mVr0UiqyltcfqxbAUcLl9zWL8ah.jpg'},
    {title:'Blade Runner 2049',foto:'/mVr0UiqyltcfqxbAUcLl9zWL8ah.jpg'},
    {title:'Blade Runner 2049',foto:'/mVr0UiqyltcfqxbAUcLl9zWL8ah.jpg'}

]
websocket.on('connection', (socket) => {
  console.log('A client just joined on', socket.id);

  socket.on('joinRoom', (data) => {
    // Save the message document in the `messages` collection.
    rooms[data] = ( typeof rooms[data] != 'undefined' && rooms[data] instanceof Array ) ? rooms[data] : []
    rooms[data].push({id:socket.id})
    socket.join("room-"+data);

  });

  socket.on('message', (data) => {
    // Save the message document in the `messages` collection.
    websocket.sockets.in('room-resta1').emit('message', websocket.sockets.adapter.rooms);
    
  });

  socket.on('disconnect', function() {

    socket.leave(socket.rooms);

 });

});



function sendMovie(room){
    
    

}