var router = require('express').Router();
var mongoose = require('mongoose');
var Aurous = require('./aurous.model');

module.exports = router;

// remove item 
router.post('/remove', function(req, res, next){
    var title = req.body.title;
    Aurous.findOneAndRemove({ title: title }, function(err, prod){
        console.log("product removed in aurous product route");
        res.send(prod);
    });
})