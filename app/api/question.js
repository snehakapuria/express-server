var Question = require('../models/Question');

module.exports.addQuestion = function(req,res) {
    var question = new Question(req.body.Question);
    question.save(function(err) {
        if (err) {
            res.send(err);

        }
        res.json({question: question});
    });
};
