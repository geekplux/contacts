var express = require('express');

var app = express();

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.use('/', function (req, res) {
  res.send('Contacts');
});

app.use('/login', function (req, res) {
  res.send('userId');
});


var server = app.listen(8000, function () {
  console.log('listening 8000 port now');
});
