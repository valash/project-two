const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// import CommentSchema

const CommentSchema = new Schema({
    comment: String
});

const ItemSchema = new Schema({
    name: String,
    description: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [CommentSchema]
});

module.exports = ItemSchema;
