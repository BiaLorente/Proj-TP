var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET online page. */
router.get('/online', function(req, res, next) {
  res.render('online', { title: 'online' });
});


module.exports = router;
