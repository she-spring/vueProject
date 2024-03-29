var express = require('express');
var router = express.Router();
var User = require('./../sql/users');
var sql = require('./../sql/index');


router.get('/', function (req, res, next) {
  sql.find(User, {}, { _id: 0 }).then((data) => {
    res.send(data);
  })
});

module.exports = router;
