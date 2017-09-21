let mongoose = require('mongoose');
const Schema = mongoose.Schema;
var MusicRoomSchema = new mongoose.Schema({
    roomId: {
        type: Number
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [2, 'Title must have at least 2 characters']
    },
    description: {
        type: String
    },
    public: {
        type: Boolean
    },
    chatlog: [
        {user: {type: Schema.Types.ObjectId, ref: 'User'}, message: {type: String}}
        ],
    playlist: [{type: Schema.Types.ObjectId, ref: 'Song'}],
    _roomMembers: [{type: Schema.Types.ObjectId, ref: 'User'}],
    _owner: {type: Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true})

var MusicRoom = mongoose.model('MusicRoom', MusicRoomSchema);