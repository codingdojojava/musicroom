let mongoose = require('mongoose');
const Schema = mongoose.Schema;
var CommentSchema = new mongoose.Schema({
    commentId: {
        type: Number
    },
    content: {
        type: String
    },
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    _message: {type: Schema.Types.ObjectId, ref: 'Message'},
}, {timestamps: true})

var Comment = mongoose.model('Comment', CommentSchema);