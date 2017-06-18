var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  question1: String
});

module.exports = mongoose.model('question', QuestionSchema);
