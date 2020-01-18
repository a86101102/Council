var express = require('express');
var router = express.Router();
var db = require('../models/db');

router.get('/:delibrationID', function (req, res) {
    var id = req.params.delibrationID;
    let col = ['提案單位'];
    db.FindbyColumn('proposal', col, {
        'delibrationID': id
    }, function (result, err) {
        if (result.length == 0) {
            res.send('No data');
        } else {
            res.json(result[0]);
        }
    })
})

router.post('/voteResults', function (req, res) {
    var CID = req.body.caseID;
    db.Query('SELECT result FROM `vote` WHERE caseID=' + CID, function (votes, err) {
        if (err) {
            console.log(err);
        } else {
            var agree = 0,
                disagree = 0,
                total = 0;
            for (let n in votes) {
                total = total + 1;
                if (votes[n] == 1) {
                    agree = agree + 1;
                }
                if (votes[n] == 2) {
                    disagree = disagree + 1;
                }
            }
            var rate = Math.round(agree / total * 100) + "%";
            var vote_result;
            if (agree > disagree) {
                vote_result = "同意";
            } else if (agree == disagree) {
                vote_result = "重新投票";
            } else {
                vote_result = "反對";
            }
            db.Query('SELECT cName FROM `case` WHERE caseID=' + CID, function (result) {
                var data = {
                    "caseName": result[0],
                    "result": vote_result,
                    "vote": total + "票",
                    "percent": rate
                }
                res.json(data);
            })
        }
    })
})

router.post('/resultsList', function (req, res) {
    var CID = req.body["caseID"];
    db.Query('SELECT studentID, result FROM `vote` WHERE caseID=' + CID, function (votesInfo, err) {
        if (err) {
            console.log(err);
        } else {
            data = []
            for (let n in votesInfo) {
                // console.log(votesInfo[n])

                var column = ['department', 'uName'];
                db.FindbyColumn('user', column, {
                    "studentID": votesInfo[n]["studentID"]
                }, function (userinfo) {
                    studentVoteInfo = {
                        "index": parseInt(n) + 1,
                        "department": userinfo[0]["department"],
                        "name": userinfo[0]["uName"],
                        "voteResult": votesInfo[n]["result"]
                    }
                    // console.log("PPP: ", studentVoteInfo)
                    data.push(studentVoteInfo)

                    if (n == votesInfo.length - 1)
                        res.send(data)

                })
            }
        }
    })
})



module.exports = router;