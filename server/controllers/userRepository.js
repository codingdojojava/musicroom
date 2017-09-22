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
                if (users) {
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
        User.findOne({userId: req.body.userId})
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
    addAFriendToCurrentUser: (req, res) => {
        console.log('server adding a friend to user');
    },
    getAllFriendsOfCurrentUser: (req, res) => {
        console.log('server getting all friends of user');
    },
}