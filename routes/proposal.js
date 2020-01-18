var express = require('express');
var router = express.Router();

router.get('/:delibrationID', function(req, res){
    var id = req.params.delibrationID;
    let col = ['提案單位'];
    db.FindbyColumn('proposal', col, {'delibrationID':id}, function(result, err){
        if(result.length == 0){
            res.send('No data');
        }else{
            res.json(result[0]);
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