'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var User = require('./user.model');

module.exports = router;

router.post('/', function(req, res, next) {
  var email = req.body.email;
  var password = req.body.passwords;

 User.findOne({
    email: email
  }, function(err, usr) {
    if (err) return next(err);
    //search for user to see if this user already exists
    if (usr == null) {
      console.log("no user data");
     
    } else {
    	console.log("user: ", usr);
    	res.json(usr);	
    }
  });
});
