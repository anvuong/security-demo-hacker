var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Credential.findAll().then(function(credentials) {
    res.render('index', {
      title: 'Credentials',
      credentials,
    });
  });
});

module.exports = router;
