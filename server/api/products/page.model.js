'use strict';
var crypto = require('crypto'),
    mongoose = require('mongoose')

var schema = new mongoose.Schema({
    image: {
        type: [String],
        default: 'drop1.jpg'
    },
    page_title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    keywords: {
        type: [String]
    }
});

schema.index({"$**": "text"}, {"weights": { page_title: 3, description: 2, keywords: 1 }});

schema.pre('save', function(next) {
    next();
});

var Page = mongoose.model('pages', schema);

module.exports = Page;
