var musicroom = require('../controllers/musicroom.js');
let path = require('path');
module.exports = function(app) {
  app.get('/', musicroom.index);

  app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./musicroom/dist/index.html"))
  });

}
