const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const crypto = require('crypto');

const UserSchema = new Schema({
	username: String,
	password: String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = UserSchema;
