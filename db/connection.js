const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/manage');

mongoose.Promise = Promise;

module.exports = mongoose;
