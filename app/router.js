// app/router.js
var questions = require('./api/questions');
var logInApi =require('./api/login');

 module.exports = function(router) {

   router.route('/api/login').post(function(req,res){
      logInApi.logInUser(req,res);
   });

   router.route('/api/questions').post(function(req, res) {
       console.log('request is',req.body);
       questions.addQuestion(req,res);
    });

    router.route('*').get(function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};
