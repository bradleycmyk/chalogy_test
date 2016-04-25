var router = require('express').Router();
var mongoose = require('mongoose');
var Product = require('./product.model');

module.exports = router;

router.get('/', function(req, res, next){
	Product.find({}, function(err, products){
		if (err) return next(err);
		res.json(products);
	});
});

router.get('/:text', function(req, res, next){
	console.log("req.param in router: ", req.params);
	var text = req.params.text;
	Product.find({}, function(err, result){
		if (err) return next(err);
		res.json(result);
	})
})