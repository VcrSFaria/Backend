const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/todo", { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;