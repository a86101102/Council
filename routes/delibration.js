var express = require('express');
var router = express.Router();
var db = require('../models/db');

router.get('/', function (req, res) {
    var sql = 'SELECT * FROM delibration'
    db.query(sql, function (delibration) {
        if (delibration.length == 0) {
            res.send("fail");
        } else {
            res.send(delibration);
        }
    });
})


router.post('/createDelibration', function (req, res) {

    // var startTime = moment(data.myTime.format(req.body["startTime"])).toISOString();

    if (req.body["dName"] && req.body["startTime"] && req.body["position"] && req.body["semester"] && req.body["period"]) {
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
                res.sendStatus(403)
            } else {
                res.sendStatus(201)
            }
        })
    } else {
        res.sendStatus(400)
    }
})
module.exports = router;