// app/router.js

 var questions = require('./api/question');
 module.exports = function(router) {
   router.route('/questions').post(function(req, res) {
       console.log(req.body); questions.addquestion(req,res);
    });

    router.route('*').get(function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file

    });

};
