var bodyParser = require('body-parser');
var express = require('express');
var request =  require('request');
var config = require('./config');
var app = module.exports = express();

//middleware
app.use(bodyParser.urlencoded({extended: true}));

var playlists = require('./routes/playlists');

//Routes
app.use('/playlists', playlists);

app.listen(config.port, function () {
  console.log('Soundcloud app listening on port:'+ config.port)
});
