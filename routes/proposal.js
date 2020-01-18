var express = require('express');
var router = express.Router();

router.get('/proposal/:delibrationID',function(req, res){
    var id = req.params.delibrationID;
    let col = ['提案單位'];
    db.FindbyColumn('proposal', col, {'delibrationID':id}, function(result, err){
        if(result.length == 0){
            res.send('No data');
        }else{
            res.json(result[0]);
        }
    })
});

router.post('/proposal/vote', function(req, res){
    var caseID = req.body.caseID;
    var studentID = req.body.studentID;
    var result = req.body.result;
    var voteResultSql = "INSERT INTO vote(caseID, studentID, vote) VALUES ( " + caseID + "," + studentID + "," + result + ")";
    db.Query(voteResultSql, function(voteResult){
        if(voteResult.insertID.length == 0){
            res.send("vote fail");
        } else {
            res.send("vote success");
        }
    });
});
module.exports = router;