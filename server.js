var express = require("express");
var path = require("path");
var session = require('express-session');
var bcrypt = require('bcrypt-nodejs');
// create the express app
var app = express();
// require bodyParser since we need to handle post data for adding a user
app.use(session({secret:'shhhhhhhbasdkfakdnfkadnflk'}));
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// static content 
app.use(express.static(path.join(__dirname, "./musicroom/dist")));
app.use(express.static(path.join(__dirname, "./musicroom/assets")));
// setting up ejs and our views folder
require('./server/config/mongoose');

var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);
// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
  console.log("listening on port 8000");
 });
var savedMessages = [];
var io = require('socket.io').listen(server);
io.on('connection', (client)=>{
  client.on("msg", (data)=>{
    io.emit("msg"+data);
  })

  client.on("login", (currentUser) => {
    for(let friend of currentUser.friends) {
      client.broadcast.emit("online"+friend._id);
    }
  })

  client.on("logout", (currentUser) => {
    for(let friend of currentUser.friends) {
      client.broadcast.emit("offline"+friend);
    }
  })
})

