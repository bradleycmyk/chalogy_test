'use strict';
var crypto = require('crypto'),
    mongoose = require('mongoose')
    // unique = require('mongoose-unique-validator'),
    // extend = require('mongoose-schema-extend');

var schema = new mongoose.Schema({
    image: {
        type: [String],
        required: true,
        default: '/images/placeHolder.jpg'
    },
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    }, // must be dollar.cent
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tag: {
        type: [String]
    },
    category: {
        type: String
    }
});

// this line add text index to schema for full-text search !! // weighted seems partially working 
// schema.index({"$**": "text"});
schema.index({"$**": "text"}, {"weights": { name: 3, title: 2, tag: 2, description: 1 }});

schema.pre('save', function(next) {
    next();
});

var Aurous = mongoose.model('aurous', schema);

module.exports = Aurous;
