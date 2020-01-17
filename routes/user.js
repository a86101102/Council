var express = require('express');
var router = express.Router();
var db = require('../model/db');

router.post('signup',function (req, res){
    var data = {
        "studentId": req.body.studentId,
        "department": req.body.department,
        "grade": req.body.grade,
        "email": req.body.email,
        "name": req.body.name,
        "password": req.body.password,
        "position": req.body.position
    }

    console.log(data);

    db.Insert("user", data, function(err, result){
        if(err) console.log(err);
    })
    res.send("Create success!")

})

router.post('/login',function(req, res){

})