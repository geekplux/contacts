var express = require('express');
var bodyParser = require("body-parser");

var loginData = require('./temp_data/login.json');
var contacts = require('./temp_data/contacts.json');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/login', function (req, res) {
  if (req.body.username && req.body.password)
    res.send(loginData);
});

app.get('/contacts', function (req, res) {
  var contactsList = [];
  for (k in contacts) {
    contactsList.push(contacts[k]);
  }
  res.send(contactsList);
});

app.use('/', function (req, res) {
  console.log('arrived');
});

var server = app.listen(8000, function () {
  console.log('listening 8000 port now');
});
