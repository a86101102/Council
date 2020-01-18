var express = require('express');
var router = express.Router();

router.get('/:delibrationID', function(req, res){
    var id = req.params.delibrationID;
    db.Query('SELECT pName FROM proposal WHERE delibrationID =' + id, function(result){
        if(result.length == 0){
            res.send("None");
        }
        else{
            res.json(result);
        }
    })
})

router.get('/isVote', function(req, res){
    var userId = req.body.studentID;
    var delId = req.body.delibrationID;
    var isTime = req.body.isTime;
    db.Query('SELECT chair FROM delibration WHERE delibrationID =' + delId, function(chair){
        if(userID === chair){
            res.send("success");
        }
    })
})