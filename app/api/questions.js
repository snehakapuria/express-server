var Question = require('../models/question');

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
