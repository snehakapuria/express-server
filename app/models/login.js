var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LoginSchema = new Schema({
  userName: 'string',
  password: 'string'
});

module.exports = mongoose.model('login', LoginSchema);
