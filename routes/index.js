var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET online page. */
app.get('/online', function(req, res, next) {
  res.render('online', { title: 'Express' });
});


module.exports = router;
