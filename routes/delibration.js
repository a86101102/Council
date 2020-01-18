var express = require('express');
var router = express.Router();

router.get('/entry',function(req, res){
    var id = req.body.delibrationID;
    var now = myDate.toLocaleString();
    db.Query('SELECT semester,period,name,startTime,position FROM delibration WHERE delibrationID =' + id, function(result){
        if(now >= result.startTime){
             res.json(result);
        }
        else{
           res.send("fail");
        }
    })
})