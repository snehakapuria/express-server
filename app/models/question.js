var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  candidate_id: String,
  question1: String,
  question2: String,
  question3: String,
  quetsion4: String,
  question5: String
});

module.exports = mongoose.model('question', QuestionSchema);
