const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/<insert name>");

mongoose.Promise = Promise;

module.exports = mongoose;