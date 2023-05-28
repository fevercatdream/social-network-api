const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        userName: {
            type: String,
            required: true,
        },
        reactions:[reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
);

// creates virtual property
thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    });

// Initialize Thought model
const Thought = model('thought', thoughtSchema);

 module.exports.Thought = Thought;
 module.exports.thoughtSchema = thoughtSchema;