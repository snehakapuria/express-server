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

module.exports.deleteCandidate = function(req,res){
  var candidateId = req.param('id');
console.log('delete', candidateId);
  candidateModel.remove(function(error,candidate){
    if(error){
      res.send('error');
    }

    res.status(204).end();

  });



};
