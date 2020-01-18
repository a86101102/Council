var express = require('express');
var router = express.Router();
var db = require('../models/db');

router.post('/signup',function (req, res){
    var data = {
        "studentID": req.body["studentID"],
        "department": req.body["department"],
        "grade": req.body["grade"],
        "email": req.body["email"],
        "name": req.body["name"],
        "password": req.body["password"],
        "position": req.body["position"]
    }

    console.log(data);

    db.Insert("user", data, function(err, result){
        if(err) {
            console.log(err);
            res.send({create:"Create fail!"});
        }
        else{
            res.send({create:"Create success!"});
        }
    })
})

router.post('/login',function(req, res){
    var ID = req.body.studentID;
    var pw = req.body.password;
    db.Query('SELECT password FROM `user` WHERE studentID='+ ID ,function(password){
        if(err) {
            console.log(err);
        }
        else{
            if(pw===password){
                res.send({isLogin:"success"});
            }
            else{
                res.send({isLogin:"fail"});
            }
        }
    })

})

module.exports = router;