// app/router.js
var questions = require('./api/questions');
var logInApi = require('./api/login');
var candidateApi = require('./api/candidates');

module.exports = function(router) {

router.route('/api/login').post(function(req,res){
  logInApi.logInUser(req,res);
});

router.route('/api/questions').get(function(req,res){
  questions.getAllQuestions(req,res);
});

router.route('/api/questions/:id').get(function(req,res){
  questions.getQuestionsByCandidateId(req,res);
});

router.route('/api/questions').post(function(req, res) {
   questions.addQuestion(req,res);
});

router.route('/api/questions/:id').put(function(req, res) {
   questions.addQuestion(req,res);
});

router.route('/api/candidates/').put(function(req,res){
  candidateApi.addCandidate(req,res);
});

router.route('/api/candidates/:id').put(function(req,res){
  candidateApi.addCandidate(req,res);
});

router.route('/api/candidates/:id').delete(function(req,res){
  candidateApi.deleteCandidate(req,res);
});

router.route('/api/candidates/').get(function(req,res){
  candidateApi.getAllCandidates(res,res);
});

router.route('*').get(function(req, res) {
    res.sendfile('./public/index.html'); // load our public/index.html file
});

};
