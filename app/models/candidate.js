var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var candidateSchema = new Schema({
  firstName : 'string',
  lastName: 'string'
});

module.exports = mongoose.model('candidate',candidateSchema);
