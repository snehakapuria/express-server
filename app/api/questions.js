var Question = require('../models/question');

module.exports.getAllQuestions = function(req,res) {
  Question.find(function(err,questions){
    res.json({questions:questions});
  });
};

module.exports.addQuestion = function(req,res) {
    var question = new Question(req.body.question);

    question.save(function(err) {
      console.log('saving');
        if (err) {
            res.send(err);
        }
        res.json({question: question});
    });
};
