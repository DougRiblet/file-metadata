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

app.post('/info', upload.single('datafile'), function(req, res) {
  res.json({
    "file_name": req.file.originalname,
    "file_type": req.file.mimetype,
    "file_size_bytes": req.file.size
  });
});

app.listen(port, function () {
  console.log('App listening on port ' + port);
});
