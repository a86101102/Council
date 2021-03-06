var express = require('express');
var router = express.Router();
var db = require('../models/db');

router.get('/', function (req, res) {
    var sql = 'SELECT * FROM delibration'
    db.Query(sql, function (delibration, err) {
        if(err){
            console.log(err);
            res.sendStatus(400);
        } else {
            if (delibration.length == 0) {
                res.status(404).send("Cannnot find.");
            } else {
                res.status(200).send(delibration);
            }
        }
    });
})

router.get('/entry', function (req, res) {
    var id = req.body.delibrationID;
    var now = myDate.toLocaleString();
    db.Query('SELECT semester,period,dName,startTime,position FROM delibration WHERE delibrationID =' + id, function (result) {
        if (now >= result.startTime) {
            res.status(200).send("sucess");
            res.send(result);
        } else {
            res.status(403).send("fail");
        }
    })
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

router.get('/:position', function (req, res) {
    var position = req.params["position"].toString();
    var sql = "SELECT * FROM delibration WHERE position = " + position
    db.Query(sql, function (delibration) {
        if (delibration.length == 0) {
            res.sendStatus(204);
        } else {
            res.status(200).send(delibration);
        }
    });
})

module.exports = router;