var express = require('express');
var router = express.Router();
var models = require('../models/index');

/* GET users listing. */
router.get('/', function (req, res, next) {
  models.User.findAll({}).then(function (user) {
    res.json(user);
  }, function (error) {
    res.json(error);
  });
});

router.get('/:id', function (req, res) {
  models.User.find({
    where: {
      userID: req.params.id
    }
  }).then(function (user) {
    res.json(user);
  }, function (error) {
    res.json(error);
  });
});

router.post('/add', function (req, res) {
  models.User.create({
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address
  }).then(function (user) {
    res.json(user);
  }, function (error) {
    res.json(error);
  });
});

router.put('/:id', function (req, res) {
  models.User.find({
    where: {
      userID: req.params.id
    }
  }).then(function (user) {
    if (user) {
      user.updateAttributes({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address
      }).then(function (user) {
        res.send(user);
      }, function (error) {
        res.json(error);
      });
    }
  });
});

router.delete('/:id', function (req, res) {
  models.User.destroy({
    where: {
      userID: req.params.id
    }
  }).then(function (user) {
    res.json(user);
  }, function (error) {
    res.json(error);
  });
});

module.exports = router;
