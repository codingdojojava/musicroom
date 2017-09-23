var musicroom = require('../controllers/musicroom.js');
var userRepo = require('../controllers/userRepository.js');
let path = require('path');
module.exports = function(app) {
  app.get('/api', musicroom.index);

  // Users
  app.post('/api/users/register', userRepo.registerAUser);
  app.post('/api/users/login', userRepo.loginUser);
  app.get('/api/users/current', userRepo.getCurrentUser);
  app.get('/api/users/logout', userRepo.logoutUser);
  app.get('/api/users', userRepo.getAllUsers);
  app.post('/api/users/invite', userRepo.sendInviteToUserById);
  app.post('/api/users/invite/accept', userRepo.addFriendAndUpdateReceivedInvite);
  app.post('/api/users/invite/reject', userRepo.deleteInviteAndUpdateUsers);
  app.post('/api/users/friends/remove', userRepo.removeFriendFromCurrentUser);
  app.get('/api/users/:id', userRepo.getUserByUserId);

  app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./musicroom/dist/index.html"))
  });

}
