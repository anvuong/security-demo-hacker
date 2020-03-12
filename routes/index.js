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

router.get('/csrf', function(req, res) {
  res.render('csrf');
});

module.exports = router;
