var express = require('express');
var router = express.Router();
var db = require('../models/db');

router.get('/:delibrationID', function (req, res) {
    var id = req.params.delibrationID;
    db.Query('SELECT pName FROM proposal WHERE delibrationID =' + id, function (result) {
        if (result.length == 0) {
            res.send("None");
        } else {
            res.json(result);
        }
    })
})

router.get('/createVote', function (req, res) {
    var cName = req.body.cName;
    var dID = req.body.delibrationID;
    var pID = req.body.proposalID;
    db.Query('INSERT case (cName,delibrationID,proposalID) VALUES (' + cName + ',' + dID + ',' + pID + ')', function (result) {
        res.send({
            caseID: result.insertID,
            cName: cName
        });
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
                    "agree": {
                        "caseName": name[0]["result"],
                        "result": "同意",
                        "vote": agree + "票",
                        "percent": agree_rate
                    },
                    "disagree": {
                        "caseName": name[0]["result"],
                        "result": "不同意",
                        "vote": disagree + "票",
                        "percent": disagree_rate
                    },
                    "void": {
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
router.get("/proposal/:delibrationID/:proposalID", function (req, res) {
    var condition = {
        "delibrationID": req.body["delibrationID"],
        "proposalID": req.body["proposalID"]
    };

    var cols = ["dept", "reason", "description", "discussion"];

    db.FindbyColumn("proposal", cols, condition, function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send("fail");
        } else {
            console.log("success");
            res.status(200).send("sucess");
            res.send(result);
        }
    })
})

router.post('/resultsList', function (req, res) {
    var CID = req.body["caseID"];
    db.Query('SELECT studentID, result FROM `vote` WHERE caseID=' + CID, function (votesInfo, err) {
        if (err) {
            console.log(err);
            res.sendStatus(400)
        } else {
            data = []
            for (let n in votesInfo) {
                // console.log(votesInfo[n])

                var column = ['department', 'uName'];
                db.FindbyColumn('user', column, {
                    "studentID": votesInfo[n]["studentID"]
                }, function (userinfo, err) {
                    if (err) {
                        console.log(err);
                        res.sendStatus(400)
                    } else {
                        studentVoteInfo = {
                            "index": parseInt(n) + 1,
                            "department": userinfo[0]["department"],
                            "name": userinfo[0]["uName"],
                            "voteResult": votesInfo[n]["result"]
                        }
                        // console.log("PPP: ", studentVoteInfo)
                        data.push(studentVoteInfo)

                        if (n == votesInfo.length - 1)
                            // res.send(data)
                            res.status(200).send(data)
                    }

                })
            }
        }
    })
})

router.post('/vote', function (req, res) {
    var caseID = req.body.caseID;
    var studentID = req.body.studentID;
    var result = req.body.result;
    var voteResultSql = "INSERT INTO vote (caseID, studentID, result) VALUES ( " + caseID + ", '" + studentID + "', " + result + ")";
    db.Query(voteResultSql, function (voteResult, err) {
        if(err){
            console.log(err);
            res.sendStatus(400);
        } else {
            res.status(200).send("vote success");
        }
    });
});

router.post('/createProposal', function (req, res) {

    if (req.body["delibrationID"] && req.body["dept"]) {
        var data = {
            "delibrationID": req.body["delibrationID"],
            "dept": req.body["dept"],
            "reason": req.body["reason"],
            "description": req.body["description"],
            "discussion": req.body["discussion"],
        }

        db.Insert('proposal', data, function (err, result) {
            if (err) {
                console.log(err);
                // res.send({
                //     create: "fail"
                // });
                res.sendStatus(403)

            } else {
                res.sendStatus(201)
            }
        })
    } else {
        res.sendStatus(400)
    }
})

router.post('/saveEditDelibration/:id', function (req, res) {

    user_id = req.params.id

    var data_delibration = {
        //"id": req.body["delibrationID"],
        "dName":req.body["name"],
        "createTime":req.body["createTime"],
        "startTime":req.body["startTime"],
        "endTime":req.body["endTime"],
        "position":req.body["position"],
        "semester":req.body["semester"],
        "period":req.body["period"]
    }

    var proposals = req.body["proposal"]

    db.FindbyColumn('user',["position"],{"id":user_id} ,function(result){

        if (result[0]["position"] == "leader") {

            db.Update('delibration', data_delibration, {"id":req.body["delibrationID"]} ,function(err){
                if (err) {
                    console.log(err);
                    res.sendStatus(403)
                }
            })

            for (var data in proposals) {
                
                var data_proposal = {
                    "dept": proposals[data]["dept"],
                    "reason": proposals[data]["reason"],
                    "description": proposals[data]["description"],
                    "discussion": proposals[data]["discussion"]
                }

                db.Update('proposal', data_proposal, {"delibrationID":req.body["delibrationID"]} ,function(err){
                    if (err) {
                        console.log(err);
                        res.sendStatus(403)
                    }
                })
            }
            res.sendStatus(201)
        } else {
            res.sendStatus(400)
        }
    })
})


module.exports = router;