var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8000;
var dbUri = process.env.MONGOLAB_URI || 'mongodb://localhost/festivalfinder';

var app = express();

var festivalRouter = require('./routers/festivalRouter');

mongoose.connect(dbUri);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.json({message: 'Hack Reactor Festival Finder API'});
});

// TODO: Use the characterRouter as middleware on the '/api/characters' route
app.use('/api/festivals', festivalRouter);

app.listen(port, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('HR Festival Finder API listening on ' + port);
});  

module.exports = app;