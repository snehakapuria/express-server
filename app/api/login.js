var logInModel = require('../models/login');

module.exports.logInUser = function(req,res){
  var login = new logInModel(req.body.login);

  if(login.userName === 'admin' && login.password === 'banking'){
    res.send({
      'content-type': 'application/json',
      'success': true
    });
  } else {
    res.status(422).end();
  }
}
