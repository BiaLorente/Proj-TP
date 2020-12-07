var express = require("D:\tp\exercícios\projeto_final\projeto_final_site\public\aulas.html");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
