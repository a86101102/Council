var express = require('express');
var router = express.Router();
var db = require('../models/db');

router.get('/delibration', function(req, res){
    var sql = 'SELECT * FROM delibration'
    db.Query(sql, function(delibration){
        if(delibration.length==0){
            res.send("fail");
        } else {
            res.send(delibration);
        }
    });
})
module.exports = router;