var candidateModel = require('../models/candidate');

module.exports.getAllCandidates = function(req,res){
  candidateModel.find(function(error,candidates){
    res.json({candidates: candidates});
  });
};

module.exports.addCandidate = function(req,res){
  var candidate = new candidateModel(req.body.candidate);

  candidate.save(function(error){
    if(error){
      res.send('error');
    }

    res.json({candidate: candidate});
  });
};
