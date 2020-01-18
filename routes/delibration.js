var express = require('express');
var router = express.Router();
var db = require('../models/db');

router.get('/', function (req, res) {
    var sql = 'SELECT * FROM delibration'
    db.Query(sql, function (delibration) {
        if (delibration.length == 0) {
            res.send("fail");
        } else {
            res.send(delibration);
        }
    });
})

router.get('/entry', function (req, res) {
    var id = req.body.delibrationID;
    var now = myDate.toLocaleString();
    db.Query('SELECT semester,period,dName,startTime,position FROM delibration WHERE delibrationID =' + id, function (result) {
        if (now >= result.startTime) {
            res.json(result);
        } else {
            res.send("fail");
        }
    })
})

router.post('/createDelibration', function (req, res) {

    // var startTime = moment(data.myTime.format(req.body["startTime"])).toISOString();

    var data = {
        "dName": req.body["dName"],
        "startTime": req.body["startTime"],
        "position": req.body["position"],
        "semester": req.body["semester"],
        "period": req.body["period"],
    }

    // myDate = moment(data.myTime.format('YYYY/MM/DD HH:MM:SS')).toISOString();

    db.Insert('delibration', data, function (err, result) {
        if (err) {
            console.log(err);
            res.send({
                create: "fail"
            });
        } else {
            res.send({
                create: "success"
            });
        }
    })
})
module.exports = router;