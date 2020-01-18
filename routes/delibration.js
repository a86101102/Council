var express = require('express');
var router = express.Router();
var db = require('../models/db');

router.get('/', function(req, res){
    var sql = 'SELECT * FROM delibration'
    db.query(sql, function(delibration){
        if(delibration.length==0){
            res.send("fail");
        } else {
            res.send(delibration);
        }
    });
})

router.get('/entry',function(req, res){
    var id = req.body.delibrationID;
    var now = myDate.toLocaleString();
    db.Query('SELECT semester,period,dName,startTime,position FROM delibration WHERE delibrationID =' + id, function(result){
        if(now >= result.startTime){
             res.json(result);
        }
        else{
           res.send("fail");
        }
    })
})
module.exports = router;