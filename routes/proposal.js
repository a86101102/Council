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
                spoil = 0,
                total = 0;
            for (let n in votes) {
                console.log(votes[n])
                total = total + 1;
                if (votes[n]["result"] == 1) {
                    agree = agree + 1;
                }
                if (votes[n]["result"] == 2) {
                    disagree = disagree + 1;
                }
                if (votes[n]["result"] == 3) {
                    spoil = spoil + 1;
                }
            }
            var agree_rate = Math.round(agree / total * 100) + "%";
            var disagree_rate = Math.round(disagree / total * 100) + "%";
            var spoil_rate = Math.round(spoil / total * 100) + "%";
            db.Query('SELECT cName FROM `case` WHERE caseID=' + CID, function (name) {
                var data = {
                    "agree":{
                        "caseName": name[0]["result"],
                        "result": "同意",
                        "vote": agree + "票",
                        "percent": agree_rate
                    },
                    "disagree":{                
                        "caseName": name[0]["result"],
                        "result": "不同意",
                        "vote": disagree + "票",
                        "percent": disagree_rate
                    },
                    "void":{
                        "caseName": name[0]["result"],
                        "result": "廢票",
                        "vote": spoil + "票",
                        "percent": spoil_rate
                    }
                };
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