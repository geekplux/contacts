var express = require('express');

var app = express();

app.use('/', function (req, res) {
  res.send('Contacts');
});

var server = app.listen(8000, function () {
  console.log('listening 8000 port now');
});
