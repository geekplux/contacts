var express = require('express');
var loginData = require('./temp_data/login.json');
var bodyParser = require("body-parser");


var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.route('/login')
  .post(function (req, res) {
    if (req.body.username && req.body.password)
      res.send(loginData);
  });

app.use('/', function (req, res) {
  console.log('arrived');
});

var server = app.listen(8000, function () {
  console.log('listening 8000 port now');
});
