// app/router.js

 var questions = require('./api/questions');
 module.exports = function(router) {

   router.route('/api/questions').post(function(req, res) {
       console.log('request is',req.body);
       questions.addQuestion(req,res);
    });

    router.route('*').get(function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};
