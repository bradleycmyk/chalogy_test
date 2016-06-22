var router = require('express').Router();
var mongoose = require('mongoose');
var Product = require('./product.model');

module.exports = router;

// Product factory 
// get saturday skin products 
router.get('/saturday', function(req, res, next){
    Product.find({category: 'saturday-skin'}, function(err, products){
        if (err) return next(err);
        res.json(products);
    });
});

// get entire aurous products 
router.get('/aurous', function(req, res, next){
    Product.find({category: 'aurous'}, function(err, products){
        if (err) return next(err);
        res.json(products);
    });
});

// get one item - for product detail page 
router.get('/:name', function(req, res, next){
    var name = req.params.name;
    Product.findOne({name: name}, function(err, product){
        if (err) return next(err);
        res.json(product);
    });
});

// performing mongoDB full-text search 
router.get('/search/:text', function(req, res, next){
	var text = req.params.text;
    console.log("Text in route: ", text);
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


// adding product 
router.post('/add', function(req, res, next) {
	console.log("req.body in route: ", req.body);
	var title = req.body.title;
	var tags = req.body.tags.split(",");
	console.log("tags in route: ", tags);
	Product.findOne({
        title: title
    }, function(err, prod) {
        if (err) return next(err);
        if (prod === null) {
            Product.create({
            	'name': req.body.name,
                'title': req.body.title,
                'description': req.body.description,
                'price': req.body.price,
                'tag': tags,
                'size': req.body.size
            });
            res.send(title);
        } else {
            res.send('Err: That product already exists!');
        }
    });
})


// remove product
router.post('/prodremove', function(req, res, next){
    console.log("yes3");
    var title = req.body.title;
    Product.findOneAndRemove({ title: title }, function(err, prod){
        console.log("product removed in product route");
        res.send(prod);
    });
})





