var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  candidate_id: String,
  question1: String
});

module.exports = mongoose.model('question', QuestionSchema);
