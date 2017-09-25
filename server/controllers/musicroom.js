var mongoose = require('mongoose');
var bcrypt = require('bcrypt'); 
let Room = mongoose.model('MusicRoom')
module.exports = {
  create: function(req, res){
    Room.find({}).sort('-createdAt').exec(function(err, rooms){
      var id = 0;
      if(rooms.length == 0)
        id = 1;
      else{
        id = rooms[0].roomId + 1;
      }
      req.body._owner = req.session.currentUser;
      if(req.body.public == "false"){
        req.body.public = false;
        req.body.password = null;
      }
      else
        req.body.public = true;
      req.body.chatlog = [];
      req.body.playlist = [];
      req.body._roomMembers = [];
      req.body.roomId = id;
      newRoom = new Room(req.body);
      newRoom.save(function(err){
        console.log("SAVE ERR");
        console.log(err);
        if(err)
          res.json(err);
        else
          res.json(true);
      })
    })
  },

  allRooms: function(req, res){
    Room.find(function(err, rooms){
      res.json(rooms);
    });
  },

  getRoomById: function(req, res){
    Room.findOne({roomId: req.params.id}, function(err, room){
      res.json(room);
    })
  },

  newMessage: function(req, res){
    console.log("AHFAHSDBFLAFKDNA");
    console.log(req.body.message);
    Room.findOne({roomId: req.params.id}, function(err, room){
      console.log("HERE");
      room.chatlog.push({user: req.session.currentUser.username, message: req.body.message, id: req.session.currentUser.userId})
      room.save(function(err){
        if(err)
          res.json(false);
        else
          res.json(true);
      })
    })
  },

  joinRoom: function(req, res){
    Room.findOne({roomId: req.params.id}, function(err, room){
      room._roomMembers.push(req.session.currentUser);
      room.save(function(err){
        if(err)
          res.json(err);
        else
          res.json(true);
      })
    })
  }

}
