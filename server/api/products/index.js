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

// performing mongoDB full-text search 
router.get('/:text', function(req, res, next){
	var text = req.params.text;
	Product.find(
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
router.get('/saturday/:name', function(req, res, next){
	var name = req.params.name;
	Product.findOne({name: name}, function(err, products){
		if (err) return next(err);
		res.json(products);
	});
});

// recommendation - get all except itself 
router.get('/recommendation/:product', function(req, res, next){
	var product = req.params.product;
	Product.find( {name: { $ne: product } }, function(err, recommendations){
		if (err) return next(err);
		res.json(recommendations);
	});

});