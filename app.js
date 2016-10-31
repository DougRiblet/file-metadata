var express = require("express");
var path    = require("path");
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express();
var port = process.env.PORT || 8120;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/favicon.ico', function(req, res) {
  res.sendStatus(200);
});

app.get('/', function(req, res) {
});

app.listen(port, function () {
  console.log('App listening on port ' + port);
});
