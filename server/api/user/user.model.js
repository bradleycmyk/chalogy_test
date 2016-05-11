'use strict';
var crypto = require('crypto'),
    mongoose = require('mongoose')
    // unique = require('mongoose-unique-validator'),
    // extend = require('mongoose-schema-extend');

var schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});


schema.pre('save', function(next) {
    next();
});

var User = mongoose.model('users', schema);

module.exports = User;
