var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET presencial page. */
router.get('/presencial', function(req, res, next) {
  res.render('presencial', { title: 'presencial' });
});

/* GET online page. */
router.get('/online', function(req, res, next) {
  res.render('online', { title: 'online' });
});

/* GET missao page. */
router.get('/missao', function(req, res, next) {
  res.render('missao', { title: 'missao' });
});

/* GET duvidas page. */
router.get('/duvidas', function(req, res, next) {
  res.render('duvidas', { title: 'duvidas' });
});

/* GET equipe page. */
router.get('/equipe', function(req, res, next) {
  res.render('equipe', { title: 'equipe' });
});
module.exports = router;
