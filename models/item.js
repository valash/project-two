const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// import CommentSchema

const ItemSchema = new Schema({
    name: String,
    description: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }
    // comment: [CommentSchema]
});

module.exports = ItemSchema;
