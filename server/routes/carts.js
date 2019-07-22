var express = require('express');
var router = express.Router();
var Prolist = require('./../sql/prolists');
var sql = require('./../sql/index');

//查找
router.get('/', function (req, res, next) {
  sql.find(Prolist, {}, { _id: 0 }).then((data) => {
    res.send(data);
  }).catch(err=>{
    res.send(err)
  })
});

module.exports = router;
