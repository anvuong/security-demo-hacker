var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/', function(req, res) {
  models.Credential.bulkCreate(req.body).then(function() {
    res.send('Credential(s) created');
  });
});

module.exports = router;
