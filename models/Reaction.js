const { Schema, ObjectId } = require('mongoose');

// Schema to create Reaction
const reactionSchema = new Schema(
    {
        reactionId: ObjectId,
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }
);

module.exports = reactionSchema;