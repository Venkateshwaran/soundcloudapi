var express = require('express');
var request =  require('request');
var bodyparser = require('body-parser');
var config = require('../config').soundcloud;
var router = express.Router();
var base_url = 'http://api.soundcloud.com' + '/users/'+config.userID+'/playlists';
router.get('/', function(req,res){
  request(base_url+ '?client_id=' + config.clientID + '&order=' + config.sortOrder   , function(error, response, body) {
      if (!error && response.statusCode === 200) {
        res.json(JSON.parse(body));
      } else {
        res.json(error);
      }
    });
  });
module.exports = router;
