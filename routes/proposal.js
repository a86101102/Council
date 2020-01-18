var express = require('express');
var router = express.Router();

router.get('/:delibrationID',function(req, res){
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

router.post('/voteResults',function(req, res){
    var DID = req.body.delibrationID;
    var PID = req.body.proposalID;
    db.Query('SELECT result FROM `vote` WHERE delibrationID='+ DID + ' and proposalID='+ PID , function(votes, err){
        if(err) {
            console.log(err);
        }
        else{
            var agree=0,disagree=0,total=0;
            for (let n in votes){
                total=total+1;
                if(votes[n]==1){
                    agree=agree+1;
                }
                if(votes[n]==2){
                    disagree=disagree+1;
                }
            }
            var rate=agree/total;
            var vote_result;
            if(agree>disagree){
                vote_result="同意";
            }
            else if(agree==disagree){
                vote_result="重新投票";
            }
            else{
                vote_result="反對";
            }
            var data={
                "proposalID": DID,
                "result": vote_result,
                "vote": total,
                "persent": rate
            }
        }
        res.json(data);
    })
})

module.exports = router;