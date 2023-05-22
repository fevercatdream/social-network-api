const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            // regex to validate email
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        },
        thoughts: [thoughtSchema],
        friends: [userSchema],
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
);

// creates virtual property
userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
    });

    // Initialize User model
    const User = model('user', userSchema);

    module.exports = User;