let mongoose = require('mongoose');
const Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
    messageId: {
        type: Number
    },
    content: {
        type: String
    },
    likes: {
        type: Number
    },
    _owner: {type: Schema.Types.ObjectId, ref: 'User'},
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
}, {timestamps: true})

var Message = mongoose.model('Message', MessageSchema);