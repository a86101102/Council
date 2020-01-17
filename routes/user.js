var express = require('express');
var router = express.Router();
var db = require('../model/db');

router.post('/signup',function (req, res){
    
})

router.post('/login',function(req, res){
    var id = req.body.studentId;
    var pw = req.body.password;
    db.Query('SELECT password FROM `user` WHERE studentID='+ id ,function(password){
        if(pw===password){
            res.send({isLogin:"success"});
        }
        else{
            res.send({isLogin:"fail"});
        }
    })

})

module.exports = router;