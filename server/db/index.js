var Promise = require('bluebird');
var chalk = require('chalk');

var dbName = "chalogy"
var DATABASE_URI = "mongodb://localhost:27017/" + dbName;
// var DATABASE_URI = "mongodb://sean0723:CHLtpghks10@ds015194.mlab.com:15194/heroku_rdfcwkb7";
var mongoose = require('mongoose');
var db = mongoose.connect(DATABASE_URI).connection;

// Require our models -- these should register the model into mongoose
// so the rest of the application can simply call mongoose.model('Product')
// anywhere the Product model needs to be used.


require('../api/products/product.model');
require('../api/user/user.model');

var startDbPromise = new Promise(function (resolve, reject) {    
    db.on('open', resolve);    
    db.on('error', reject);
});

console.log('Starting MongoDB...');

startDbPromise.then(function () {
    console.log(chalk.green('MongoDB connection opened! dbName:'), chalk.magenta(dbName));
});

module.exports = startDbPromise;
