const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Comment = require('./comment.js');

const ItemSchema = new Schema({
    name: String,
    description: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [Comment]
});

module.exports = ItemSchema;
