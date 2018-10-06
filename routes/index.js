var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Dploy' });
});

router.get('/users', function(req, res, next) {
  res.render('userList', { title: 'User List' });
});

router.get('/user/add', function(req, res, next) {
  res.render('userAdd', { title: 'User Add' });
});

router.get('/user/edit/:id', function(req, res, next) {
  res.render('userAdd', { title: 'User Edit' });
});

router.get('/app', function(req, res, next) {
  res.render('app', { title: 'App' });
});
module.exports = router;
