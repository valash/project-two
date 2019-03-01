const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
	name: String,
	description: String,
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
});

module.exports = ItemSchema;
