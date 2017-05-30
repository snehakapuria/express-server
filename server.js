var express = require('express');
var app = express();

//set port
var port = process.env.PORT || 3000;

//set static file
app.use(express.static(__dirname + '/public'));
app.listen(port);

exports = module.export = app;
