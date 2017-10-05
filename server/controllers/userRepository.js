let mongoose = require('mongoose');
const bcrypt = require('bcrypt');
let User = mongoose.model('User');
let Message = mongoose.model('Message');
let Comment = mongoose.model('Comment');

module.exports = {
    registerAUser: (req, res) => {
        // console.log('server registering user');
        let newUserId = 1;
        User.find({}).sort('-createdAt').exec((error, users) => {
            if (error) {
                console.log('something went wrong');
            } else {
                if(users && users.length > 0) {
                    // console.log('users true, got all users, now updating newUser id');
                    newUserId = users[0].userId + 1;
                }
                req.body.userId = newUserId;
            }

            let newUser = new User(req.body);
            // console.log(newUser);
            newUser.save((error, savedUser) => {
                if (error) {
                    console.log('error registering user');
                    res.json(error);
                } else {
                    console.log('success registering user');
                    // console.log(savedUser);
                    res.json(savedUser);
                }
            });

        });
    },
    loginUser: (req, res) => {
        // console.log('server logging in user');
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
                    // console.log('login success, adding user to session')
                    User.findOneAndUpdate({_id: foundUser._id}, {isLoggedIn: true}, {new: true}, (err, updatedUser) => {
                        User.update({friends: updatedUser._id}, {$push: {onlineFriends: updatedUser._id}}, (err, friendUser)=> console.log(friendUser));
                        req.session.currentUser = updatedUser;
                        console.log(updatedUser);
                        res.json(updatedUser);
                    });
                }
                else{
                // console.log('LOGIN FAILED!');
                    res.json(false);
                }
            }
        })
    },
    getCurrentUser: (req, res) => {
        // console.log('server getting current user');
        if(req.session.currentUser) {
            User.findOne({_id: req.session.currentUser._id})
                .populate('friends favoriteSongs _messages joinedRooms ownedRooms received_invites sent_invites onlineFriends')
                .exec((error, foundUser) => {
                    if (foundUser) {
                        // console.log('found current User');
                        res.json(foundUser);
                    } else {
                        // console.log('not found current User');
                        res.json(false);
                    }
                });
        } else {
            // console.log('server did not find a user in session');
            res.json(false);
        }
    },
    logoutUser: (req, res) => {
        // console.log('server logging out user');
        User.findOneAndUpdate({_id:req.session.currentUser._id}, {isLoggedIn: false}, {new: true}, (err, updatedUser) => {
            res.json(updatedUser)
        })
        delete req.session.currentUser;
    },
    getUserByUserId: (req, res) => {
        // console.log('server getting user by id');
        User.findOne({userId: req.params.id})
            .populate('friends favoriteSongs joinedRooms ownedRooms received_invites sent_invites')
            .exec((error, foundUser) => {
                if(error){
                    console.log('server error getting user');
                    console.log(error);
                } else {
                    // console.log('server success getting user');
                    res.json(foundUser);
                }
            });
    },
    getAllUsers: (req, res) => {
        // console.log('server getting all users');
        User.find({})
            .populate('friends favoriteSongs joinedRooms ownedRooms')
            .exec((error, foundUsers) => {
                if(error){
                    console.log('server error getting user');
                    console.log(error);
                } else {
                    // console.log('server success getting user');
                    res.json(foundUsers);
                }
            });
    },
    sendInviteToUserById: (req, res) => {
        // console.log('server current user sending invite to user');
        User.findOneAndUpdate({userId: req.body.userId}, {$push: {received_invites: req.session.currentUser._id}}, {new: true}, 
                    (error, updatedUser) => {
                        if(error) {
                            console.log('server error sending invite');
                            res.json(error);
                        } else {
                            // console.log('server success sending invite');
                            if (updatedUser) {
                                // console.log('before pushing to sent_invites')
                                // console.log(updatedUser);
                                User.findOneAndUpdate({_id: req.session.currentUser._id}, {$push: {sent_invites: updatedUser._id}}, {new: true}, 
                                            (error, updatedCurrentUser) => {
                                                if (error) {
                                                    console.log('server error updating current user sent invite');
                                                    res.json(error);
                                                } else {
                                                    // console.log('server success updating current user sent invite');
                                                    // console.log(updatedCurrentUser);
                                                    res.json(updatedCurrentUser);
                                                }
                                            });
                            }
                        }
                    });
    },

    addFriendAndUpdateReceivedInvite: (req, res) => {
        // console.log('server adding friend and updating received invite list');
        User.findOneAndUpdate({_id: req.session.currentUser._id}, 
                              {$push: {friends: req.body.inviteId},
                               $pull: {received_invites: req.body.inviteId}}, 
                              {new: true}, 
                              (error, updatedUser) => {
                                    if(error) {
                                        console.log('server error adding friend to user');
                                        console.log(error);
                                        res.json(error);
                                    } else {
                                        // console.log('server success adding friend to user');
                                        // console.log(updatedUser);
                                        User.findOneAndUpdate({_id: req.body.inviteId},
                                                             {$push: { friends: updatedUser._id},
                                                              $pull: { sent_invites: updatedUser._id}},
                                                              {new: true},
                                                              (error, tUpdateduser) => {
                                                                  if (error) {
                                                                    console.log('error adding current user to target user friend list');
                                                                    console.log(error);
                                                                  } else {
                                                                    // console.log('success adding current user to target user friend list');
                                                                    res.json(tUpdateduser);
                                                                  }
                                                              });
                                    }
                                });
    },

    deleteInviteAndUpdateUsers: (req, res) => {
        // console.log('server deleting invite on curr and target users');
        User.findOneAndUpdate({_id: req.session.currentUser._id}, {$pull: {received_invites: req.body.inviteId}}, {new: true}, 
                                (error, updatedUser) => {
                                    if(error) {
                                        console.log('error deleting invite on curr Users received invite list')
                                        console.log(error);
                                    } else {
                                        // console.log('success deleting invite on curr Users received invite list')
                                        // console.log(updatedUser);
                                        User.findOneAndUpdate({_id: req.body.inviteId}, {$pull: {sent_invites: updatedUser._id}}, {new: true}, 
                                                                (error, tUpdatedUser) => {
                                                                    if(error) {
                                                                        console.log('error deleting invite on target user sent invite list')
                                                                        console.log(error);    
                                                                    } else {
                                                                        // console.log('success deleting invite on curr Users received invite list')
                                                                        // console.log(tUpdatedUser);
                                                                        res.json(tUpdatedUser);
                                                                    }
                                                                })
                                    }
                                })
    },

    removeFriendFromCurrentUser : (req, res) => {
        // console.log('server removing friend from current user');
        User.findOneAndUpdate({_id: req.session.currentUser._id}, {$pull: {friends: req.body.friendId}}, {new: true}, 
                                (error, updatedUser) => {
                                    if (error) {
                                        console.log('error removing friend from current user');
                                        console.log(error);
                                    } else {
                                        // console.log('success removing friend from current user');
                                        // console.log(updatedUser);
                                        User.findOneAndUpdate({_id: req.body.friendId}, {$pull: {friends: updatedUser._id}}, {new: true},
                                                                (error, tUpdateduser) => {
                                                                    if(error) {
                                                                        console.log('error removing current user from friendlist of removed friend');
                                                                        console.log(error);
                                                                    } else {
                                                                        // console.log('error removing current user from friendlist of removed friend');
                                                                        // console.log(tUpdateduser);
                                                                        res.json(tUpdateduser); 
                                                                    }
                                                                });
                                    }
                                });
    },

    editCurrentUser: (req, res) => {
        User.findOneAndUpdate({_id: req.session.currentUser._id}, 
                              { email: req.body.email,
                                firstName: req.body.firstName,
                                lastName: req.body.lastName,
                                description: req.body.description,
                                profileImageUrl: req.body.profileImageUrl}, 
                              { new: true},
                              (error, updatedUser) => {
                                  if (error) {
                                      console.log('error updating current user');
                                      console.log(error);
                                  } else {
                                    //   console.log('success updating current user');
                                    //   console.log(updatedUser);
                                      req.session.currentUser = updatedUser;
                                      res.json(req.session.currentUser);
                                  }
                              });
    },

    saveLastFmSessionTokenAndSigToUserInSession: (req, res) => {
        User.findOneAndUpdate({_id: req.session.currentUser._id},
                              { lastfmSessionToken: req.body.lastFmSession, lastfmSessionSig: req.body.lastFmSessionSig},
                              { new: true},
                              (error, updatedUser) => {
                                  if (error) {
                                      console.log('error saving session token');
                                      console.log(error);
                                      res.json(false);
                                  } else {

                                      req.session.currentUser = updatedUser;
                                      res.json(updatedUser);
                                  }
                              });
    },

    getLoggedInFriends: (req,res)=>{
        if(req.session.currentUser) {
            let startTime = Date.now();
            User.find({_id: {$in:[req.session.currentUser.friends]}, isLoggedIn:true}).populate('friends')
            .exec((err, onlineFriends)=>{
                if(err){
                    console.log("you dun goofed");
                    res.json([]);
                }else{
                    console.log("found online friends");
                    console.log("Took "+(Date.now()-startTime)+ " milliseconds to finish the query");
                    res.json(onlineFriends);
                }
            })
        }
    },

    addMessageToCurrUser: (req, res) => {
        if(req.session.currentUser) {
             let newMessageId = 1;
            Message.find({}).sort('-createdAt').exec((error, messages) => {
                if (error) {
                    console.log('something went wrong');
                } else {
                    if(messages && messages.length > 0) {
                        // console.log('users true, got all users, now updating newUser id');
                        newMessageId = messages[0].messageId + 1;
                    }
                    req.body.messageId = newMessageId;
                }
            });

            let newMessage = new Message(req.body);
            newMessage._sender = req.session.currentUser._id;
            newMessage.save((error, savedMessage) => {
                if(error) {
                    console.log('error saving message');
                    console.log(error);
                } else {
                    // console.log('success saving message');
                    // console.log(savedMessage);
                    User.findOneAndUpdate({_id: req.session.currentUser._id}, {$push: {_sent_messages: savedMessage._id}}, {new: true}, 
                            (error, updatedUser) => {
                                if (error) {
                                    console.log('error updating user with saved message');
                                    console.log(error);
                                } else {
                                    console.log('success updating sender user with saved message')
                                    console.log(updatedUser);
                                    // res.json(updatedUser);
                                }
                            });

                    User.findOneAndUpdate({_id: req.session.currentUser._id}, {$push: {_messages: savedMessage._id}}, {new: true}, 
                            (error, updatedUser) => {
                                if (error) {
                                    console.log('error updating user with saved message');
                                    console.log(error);
                                } else {
                                    // console.log('success updating owner user with saved message')
                                    // console.log(updatedUser);
                                    res.json(updatedUser);
                                }
                            });
                }
            });
        } else {
            console.log('no user session found');
            res.json(false);
        }
    },

    addCommentToMessage: (req, res) => {
        console.log('repo adding comment to message');
        if(req.session.currentUser) {
            let newCommentId = 1;
            Comment.find({}).sort('-createdAt').exec((error, comments) => {
                if (error) {
                    console.log('something went wrong');
                } else {
                    if(comments && comments.length > 0) {
                        // console.log('users true, got all users, now updating newUser id');
                        newCommentId = comments[0].commentId + 1;
                    }
                    req.body.commentId = newCommentId;
                }
            });

            let newComment = new Comment(req.body);
            newComment.save((err, savedComment) => {
                if (err) {
                    console.log('error saving new comment');
                    console.log(err);
                    res.json(false);
                } else{
                    console.log('success saving new comment');
                    console.log(savedComment);
                    User.findOneAndUpdate({_id: req.body.owner}, {$push: {_comments: savedComment._id}}, {new: true}, 
                        (err, updatedUser) => {
                            if(err) {
                                console.log('error updating message with comment');
                                console.log(err);
                            } else {
                                // console.log('success updating message with comment');
                                console.log(updatedUser);
                            }
                        });
                    User.findOneAndUpdate({_id: req.body.sender}, {$push: {_sent_comments: savedComment._id}}, {new: true}, 
                        (err, updatedUser) => {
                            if(err) {
                                console.log('error updating message with comment');
                                console.log(err);
                            } else {
                                // console.log('success updating message with comment');
                                console.log(updatedUser);
                            }
                        });
                    Message.findOneAndUpdate({_id: req.body._message}, {$push: {_comments: savedComment._id}}, {new: true},
                        (err, updatedMessage) => {
                            if(err) {
                                console.log('error updating message with comment');
                                console.log(err);
                                res.json(false);
                            } else {
                                // console.log('success updating message with comment');
                                // console.log(updatedMessage);
                                res.json(updatedMessage);
                            }
                        })
                }
            });
        } else {
            console.log('no user session found');
            res.json(false);
        }
    },

    getMessagesAndCommentsOfCurrUser: (req, res) => {
        console.log('server getting messages and comments');
        Message.find({_owner: req.session.currentUser._id})
            .populate([{
                path: '_comments',
                populate: { path: 'sender' }
            },{
                path: '_sender',
                select: 'firstName lastName profileImageUrl'
            }])
            .exec((err, messages) => {
                if (err) {
                    console.log('error getting messsages from current user');
                    console.log(err);
                } else {
                    console.log('success getting messsages from current user');
                    res.json(messages);
                }
            });
    },

    addLike: (req,res) => {
        Message.findOne({_id: req.body.messageId}, (err, message) => {
            if(err) {
                console.log('error finding message to like');
                console.log(err);
            } else [
                Message.update({_id: message._id}, {likes: message.likes + 1},
                        (err, updatedMessage)=> {
                            if(err) {
                                console.log('error updating message likes');
                                console.log(err);
                            } else {
                                res.json(updatedMessage);
                            }
                        })
            ]
        });
    },

    addMessageToTargetUser: (req, res) => {
        if(req.session.currentUser) {
             let newMessageId = 1;
            Message.find({}).sort('-createdAt').exec((error, messages) => {
                if (error) {
                    console.log('something went wrong');
                } else {
                    if(messages && messages.length > 0) {
                        // console.log('users true, got all users, now updating newUser id');
                        newMessageId = messages[0].messageId + 1;
                    }
                    req.body.messageId = newMessageId;
                }
            });

            let newMessage = new Message(req.body);
            newMessage._sender = req.session.currentUser._id;
            newMessage.save((error, savedMessage) => {
                if(error) {
                    console.log('error saving message');
                    console.log(error);
                } else {
                    console.log('success saving message');
                    console.log(savedMessage);
                    User.findOneAndUpdate({_id: req.session.currentUser._id}, {$push: {_sent_messages: savedMessage._id}}, {new: true}, 
                            (error, updatedUser) => {
                                if (error) {
                                    console.log('error updating user with saved message');
                                    console.log(error);
                                } else {
                                    console.log('success updating sender user with saved message')
                                    console.log(updatedUser);
                                }
                            });
                    User.findOneAndUpdate({_id: savedMessage._owner}, {$push: {_messages: savedMessage._id}}, {new: true}, 
                            (error, updatedUser) => {
                                if (error) {
                                    console.log('error updating owner user with saved message');
                                    console.log(error);
                                } else {
                                    // console.log('success updating user with saved message')
                                    // console.log(updatedUser);
                                    res.json(updatedUser);
                                }
                            });
                }
            });
        } else {
            console.log('no user session found');
            res.json(false);
        }
    },

    getMessagesAndCommentsOfTargetUser: (req, res) => {
        console.log('server getting messages and comments');
        Message.find({_owner: req.params.id})
            .populate([{
                path: '_comments',
                populate: { path: 'sender' }
            },{
                path: '_sender',
                select: 'firstName lastName profileImageUrl'
            }])
            .exec((err, messages) => {
                if (err) {
                    console.log('error getting messsages from current user');
                    console.log(err);
                } else {
                    console.log('success getting messsages from current user');
                    res.json(messages);
                }
            });
    },
}