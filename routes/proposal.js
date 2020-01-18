var express = require('express');
var router = express.Router();

router.get('/proposal/:delibrationID',function(req, res){
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