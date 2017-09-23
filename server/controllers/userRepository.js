let mongoose = require('mongoose');
const bcrypt = require('bcrypt');
let User = mongoose.model('User');

module.exports = {
    registerAUser: (req, res) => {
        console.log('server registering user');
        let newUserId = 0;
        User.find({}).sort('-createdAt').exec((error, users) => {
            if (error) {
                console.log('something went wrong');
            } else {
                if(users && users.length > 0) {
                    console.log('users true, got all users, now updating newUser id');
                    newUserId = users[0].userId + 1;
                }
                req.body.userId = newUserId;
            }

            let newUser = new User(req.body);
            console.log(newUser);
            newUser.save((error, savedUser) => {
                if (error) {
                    console.log('error registering user');
                    res.json(error);
                } else {
                    console.log('success registering user');
                    res.json(savedUser);
                }
            });

        });
    },
    loginUser: (req, res) => {
        console.log('server logging in user');
        User.findOne({username:req.body.username}, function(err, foundUser){
            if(err) {
                console.log('error loggin user in');
                console.log(err);
            }
            else {
                if(foundUser == null){
                res.json(false);
                }
                else if(bcrypt.compareSync(req.body.password, foundUser.password)){
                    console.log('login success, adding user to session')
                    req.session.currentUser = foundUser;
                    res.json(true);
                }
                else{
                console.log('LOGIN FAILED!');
                    res.json(false);
                }
            }
        })
    },
    getCurrentUser: (req, res) => {
        console.log('server getting current user');
        if(req.session.currentUser) {
            User.findOne({_id: req.session.currentUser._id})
                .populate('friends favoriteSongs joinedRooms ownedRooms')
                .exec((error, foundUser) => {
                    if (foundUser) {
                        console.log('found current User');
                        res.json(foundUser);
                    } else {
                        console.log('not found current User');
                        res.json(false);
                    }
                });
        } else {
            console.log('server did not find a user in session');
            res.json(false);
        }
    },
    logoutUser: (req, res) => {
        console.log('server logging out user');
        delete req.session.currentUser;
        res.json(true);
    },
    getUserByUserId: (req, res) => {
        console.log('server getting user by id');
        User.findOne({userId: req.params.id})
            .populate('friends favoriteSongs joinedRooms ownedRooms')
            .exec((error, foundUser) => {
                if(error){
                    console.log('server error getting user');
                    console.log(error);
                } else {
                    console.log('server success getting user');
                    res.json(foundUser);
                }
            });
    },
    getAllUsers: (req, res) => {
        console.log('server getting all users');
        User.find({})
            .populate('friends favoriteSongs joinedRooms ownedRooms')
            .exec((error, foundUsers) => {
                if(error){
                    console.log('server error getting user');
                    console.log(error);
                } else {
                    console.log('server success getting user');
                    res.json(foundUsers);
                }
            });
    },
    addAFriendToCurrentUser: (req, res) => {
        console.log('server adding a friend to user');
    },
    getAllFriendsOfCurrentUser: (req, res) => {
        console.log('server getting all friends of user');
    },
    sendInviteToUserById: (req, res) => {
        console.log('server current user sending invite to user');
        User.findOneAndUpdate({userId: req.body.userId}, {$push: {received_invites: req.session.currentUser._id}}, {new: true}, 
                    (error, updatedUser) => {
                        if(error) {
                            console.log('server error sending invite');
                            res.json(error);
                        } else {
                            console.log('server success sending invite');
                            if (updatedUser) {
                                console.log('before pushing to sent_invites')
                                console.log(updatedUser);
                                User.findOneAndUpdate({_id: req.session.currentUser._id}, {$push: {sent_invites: updatedUser._id}}, {new: true}, 
                                            (error, updatedCurrentUser) => {
                                                if (error) {
                                                    console.log('server error updating current user sent invite');
                                                    res.json(error);
                                                } else {
                                                    console.log('server success updating current user sent invite');
                                                    console.log(updatedCurrentUser);
                                                    res.json(updatedCurrentUser);
                                                }
                                            });
                            }
                        }
                    });
    },
}