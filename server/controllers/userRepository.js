let mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
let User = mongoose.model('User');
let Message = mongoose.model('Message');
let Comment = mongoose.model('Comment');

module.exports = {
    registerAUser: (req, res) => {
        let newUserId = 1;
        User.find({}).sort('-createdAt').exec((error, users) => {
            if (error) {
            } else {
                if(users && users.length > 0) {
                    newUserId = users[0].userId + 1;
                }
                req.body.userId = newUserId;
            }

            let newUser = new User(req.body);
            newUser.save((error, savedUser) => {
                if (error) {
                    res.json(error);
                } else {
                    res.json(savedUser);
                }
            });

        });
    },
    loginUser: (req, res) => {
        User.findOne({username:req.body.username}, function(err, foundUser){
            if(err) {
            }
            else {
                if(foundUser == null){
                res.json(false);
                }
                else if(bcrypt.compareSync(req.body.password, foundUser.password)){
                    User.findOneAndUpdate({_id: foundUser._id}, {isLoggedIn: true}, {new: true}, (err, updatedUser) => {
                        req.session.currentUser = updatedUser;
                        res.json(updatedUser);
                    });
                }
                else{
                    res.json(false);
                }
            }
        })
    },
    getCurrentUser: (req, res) => {
        if(req.session.currentUser) {
            User.findOne({_id: req.session.currentUser._id})
                .populate('friends favoriteSongs _messages joinedRooms ownedRooms received_invites sent_invites onlineFriends')
                .exec((error, foundUser) => {
                    if (foundUser) {
                        res.json(foundUser);
                    } else {
                        res.json(false);
                    }
                });
        } else {
            res.json(false);
        }
    },
    logoutUser: (req, res) => {
        User.findOneAndUpdate({_id:req.session.currentUser._id}, {isLoggedIn: false}, {new: true}, (err, updatedUser) => {
            res.json(updatedUser)
        })
        delete req.session.currentUser;
    },
    getUserByUserId: (req, res) => {
        User.findOne({userId: req.params.id})
            .populate('friends favoriteSongs joinedRooms ownedRooms received_invites sent_invites')
            .exec((error, foundUser) => {
                if(error){
                } else {
                    res.json(foundUser);
                }
            });
    },
    getAllUsers: (req, res) => {
        User.find({})
            .populate('friends favoriteSongs joinedRooms ownedRooms')
            .exec((error, foundUsers) => {
                if(error){
                } else {
                    res.json(foundUsers);
                }
            });
    },
    sendInviteToUserById: (req, res) => {
        User.findOneAndUpdate({userId: req.body.userId}, {$push: {received_invites: req.session.currentUser._id}}, {new: true}, 
                    (error, updatedUser) => {
                        if(error) {
                            res.json(error);
                        } else {
                            if (updatedUser) {
                                User.findOneAndUpdate({_id: req.session.currentUser._id}, {$push: {sent_invites: updatedUser._id}}, {new: true}, 
                                            (error, updatedCurrentUser) => {
                                                if (error) {
                                                    res.json(error);
                                                } else {
                                                    res.json(updatedCurrentUser);
                                                }
                                            });
                            }
                        }
                    });
    },

    addFriendAndUpdateReceivedInvite: (req, res) => {
        User.findOneAndUpdate({_id: req.session.currentUser._id}, 
                              {$push: {friends: req.body.inviteId},
                               $pull: {received_invites: req.body.inviteId}}, 
                              {new: true}, 
                              (error, updatedUser) => {
                                    if(error) {
                                        res.json(error);
                                    } else {
                                        User.findOneAndUpdate({_id: req.body.inviteId},
                                                             {$push: { friends: updatedUser._id},
                                                              $pull: { sent_invites: updatedUser._id}},
                                                              {new: true},
                                                              (error, tUpdateduser) => {
                                                                  if (error) {
                                                                  } else {
                                                                    res.json(tUpdateduser);
                                                                  }
                                                              });
                                    }
                                });
    },

    deleteInviteAndUpdateUsers: (req, res) => {
        User.findOneAndUpdate({_id: req.session.currentUser._id}, {$pull: {received_invites: req.body.inviteId}}, {new: true}, 
                                (error, updatedUser) => {
                                    if(error) {
                                    } else {
                                        User.findOneAndUpdate({_id: req.body.inviteId}, {$pull: {sent_invites: updatedUser._id}}, {new: true}, 
                                                                (error, tUpdatedUser) => {
                                                                    if(error) {
                                                                    } else {
                                                                        res.json(tUpdatedUser);
                                                                    }
                                                                })
                                    }
                                })
    },

    removeFriendFromCurrentUser : (req, res) => {
        User.findOneAndUpdate({_id: req.session.currentUser._id}, {$pull: {friends: req.body.friendId}}, {new: true}, 
                                (error, updatedUser) => {
                                    if (error) {
                                    } else {
                                        User.findOneAndUpdate({_id: req.body.friendId}, {$pull: {friends: updatedUser._id}}, {new: true},
                                                                (error, tUpdateduser) => {
                                                                    if(error) {
                                                                    } else {
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
                                  } else {
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
                    res.json([]);
                }else{
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
                } else {
                    if(messages && messages.length > 0) {
                        newMessageId = messages[0].messageId + 1;
                    }
                    req.body.messageId = newMessageId;
                }
            });

            let newMessage = new Message(req.body);
            newMessage._sender = req.session.currentUser._id;
            newMessage.save((error, savedMessage) => {
                if(error) {
                } else {
                    User.findOneAndUpdate({_id: req.session.currentUser._id}, {$push: {_sent_messages: savedMessage._id}}, {new: true}, 
                            (error, updatedUser) => {
                                if (error) {
                                } else {
                                    // res.json(updatedUser);
                                }
                            });

                    User.findOneAndUpdate({_id: req.session.currentUser._id}, {$push: {_messages: savedMessage._id}}, {new: true}, 
                            (error, updatedUser) => {
                                if (error) {
                                } else {
                                    res.json(updatedUser);
                                }
                            });
                }
            });
        } else {
            res.json(false);
        }
    },

    addCommentToMessage: (req, res) => {
        if(req.session.currentUser) {
            let newCommentId = 1;
            Comment.find({}).sort('-createdAt').exec((error, comments) => {
                if (error) {
                } else {
                    if(comments && comments.length > 0) {
                        newCommentId = comments[0].commentId + 1;
                    }
                    req.body.commentId = newCommentId;
                }
            });

            let newComment = new Comment(req.body);
            newComment.save((err, savedComment) => {
                if (err) {
                    res.json(false);
                } else{
                    User.findOneAndUpdate({_id: req.body.owner}, {$push: {_comments: savedComment._id}}, {new: true}, 
                        (err, updatedUser) => {
                            if(err) {
                            } else {
                            }
                        });
                    User.findOneAndUpdate({_id: req.body.sender}, {$push: {_sent_comments: savedComment._id}}, {new: true}, 
                        (err, updatedUser) => {
                            if(err) {
                            } else {
                            }
                        });
                    Message.findOneAndUpdate({_id: req.body._message}, {$push: {_comments: savedComment._id}}, {new: true},
                        (err, updatedMessage) => {
                            if(err) {
                                res.json(false);
                            } else {
                                res.json(updatedMessage);
                            }
                        })
                }
            });
        } else {
            res.json(false);
        }
    },

    getMessagesAndCommentsOfCurrUser: (req, res) => {
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
                } else {
                    res.json(messages);
                }
            });
    },

    addLike: (req,res) => {
        Message.findOne({_id: req.body.messageId}, (err, message) => {
            if(err) {
            } else [
                Message.update({_id: message._id}, {likes: message.likes + 1},
                        (err, updatedMessage)=> {
                            if(err) {
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
                } else {
                    if(messages && messages.length > 0) {
                        newMessageId = messages[0].messageId + 1;
                    }
                    req.body.messageId = newMessageId;
                }
            });

            let newMessage = new Message(req.body);
            newMessage._sender = req.session.currentUser._id;
            newMessage.save((error, savedMessage) => {
                if(error) {
                } else {
                    User.findOneAndUpdate({_id: req.session.currentUser._id}, {$push: {_sent_messages: savedMessage._id}}, {new: true}, 
                            (error, updatedUser) => {
                                if (error) {
                                } else {
                                }
                            });
                    User.findOneAndUpdate({_id: savedMessage._owner}, {$push: {_messages: savedMessage._id}}, {new: true}, 
                            (error, updatedUser) => {
                                if (error) {
                                } else {
                                    res.json(updatedUser);
                                }
                            });
                }
            });
        } else {
            res.json(false);
        }
    },

    getMessagesAndCommentsOfTargetUser: (req, res) => {
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
                } else {
                    res.json(messages);
                }
            });
    },
}