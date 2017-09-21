let mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    userId: {
        type: Number
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        minlength: [5, 'Username must have at least 5 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: {
          validator: ( value ) => {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( value );
          },
          message: "Please enter a valid Email"
        }
    },
    firstName: {
        type: String,
        required: [true, 'First Name is required'],
        minlength: [2, 'First name must have at least 2 characters']
        
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required'],
        minlength: [2, 'Last name must have at least 2 characters']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Last name must have at least 8 characters']
    },
    favoriteSongs: [{type: Schema.Types.ObjectId, ref: 'Song'}],
    joinedRooms: [{type: Schema.Types.ObjectId, ref: 'MusicRoom'}],
    ownedRooms: [{type: Schema.Types.ObjectId, ref: 'MusicRoom'}],
    friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
}, {timestamps: true});

var User = mongoose.model('User', UserSchema);