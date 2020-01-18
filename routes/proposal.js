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

router.get('/createVote', function(req, res){
    var cName = req.body.cName;
    var dID = req.body.delibrationID;
    var pID = req.body.proposalID;
    db.Query('INSERT case (cName,delibrationID,proposalID) VALUES (' + cName + ',' + dID + ',' + pID + ')', function(result){
        res.send({
            caseID: result.insertID,
            cName: cName
        });
    })
})