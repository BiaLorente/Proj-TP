var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/online', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/public/online.html'));
});

module.exports = router;
