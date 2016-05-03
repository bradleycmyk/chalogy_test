var router = require('express').Router();
var mongoose = require('mongoose');
var Aurous = require('./aurous.model');

module.exports = router;

router.get('/', function(req, res, next){
	Aurous.find({}, function(err, products){
		if (err) return next(err);
		res.json(products);
	});
});

// performing mongoDB full-text search 
router.get('/search/:text', function(req, res, next){
	var text = req.params.text;
	console.log("aurous search !!!!");
	Aurous.find(
        { $text : { $search : req.params.text } }, 
        { score : { $meta: "textScore" } }
    )
    .sort({ score : { $meta : 'textScore' } })
    .exec(function(err, results) {
        if(err) return next(err);
		res.json(results);
    });
});

// Product detail
router.get('/products/:name', function(req, res, next){
	var name = req.params.name;
	Aurous.findOne({name: name}, function(err, product){
		if (err) return next(err);
		res.json(product);
	});
});

// recommendation - get all except itself 
router.get('/recommendation/:product', function(req, res, next){
	var product = req.params.product;
	Aurous.find( {name: { $ne: product } }, function(err, recommendations){
		if (err) return next(err);
		res.json(recommendations);
	});

});