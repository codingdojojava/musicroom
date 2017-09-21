var mongoose = require('mongoose');
var bcrypt = require('bcrypt'); 

module.exports = {
  index: function(req, res) {
    res.render('index');
  },
}
