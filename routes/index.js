var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET admin layout. */
router.get('/admin', function(req, res, next) {
  res.render('index', { title: 'Express', layout: 'layout-admin' });
});
 

module.exports = router;
