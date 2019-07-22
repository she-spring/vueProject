var express = require('express');
var router = express.Router();
var Kind = require('./../sql/kinds');
var sql = require('./../sql/index');

//查找
router.get('/', function (req, res, next) {
  sql.find(Kind, {}, { _id: 0 }).then((data) => {
    res.send(data);
  })
});

module.exports = router;