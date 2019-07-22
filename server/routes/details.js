var express = require('express');
var router = express.Router();
var Detail = require('./../sql/details');
var sql = require('./../sql/index');


router.get('/', function (req, res, next) {
  const {id} = req.query
  sql.find(Detail, {"id":id}, {_id:0}).then((data) => {
    res.send(data);
  }).catch(err=>{
    res.send(err)
  })
});

module.exports = router;