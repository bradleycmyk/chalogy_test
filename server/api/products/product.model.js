'use strict';
var crypto = require('crypto'),
    mongoose = require('mongoose')
    // unique = require('mongoose-unique-validator'),
    // extend = require('mongoose-schema-extend');

var schema = new mongoose.Schema({
    category : {
        type: String
    },
    image: {
        type: [String],
        // required: true,
        default: 'drop1.jpg'
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
    korean_title: {
      type: String
    },
    price: {
        type: Number,
        required: true
    }, // must be dollar.cent
    size_ml : {
      type: Number
    },
    size_oz : {
      type: Number
    },
    description: {
        type: String,
        required: true
    },
    description2: {
        type: String,
        default: null
    },
    who: {
      type: [String],
      default: null
    },
    how: {
      type: String,
      default: null
    },
    shade: {
      type: String,
      default: null
    },
    recs: {
      type: [{String: String}]
    },
    tags: {
        type: [String]
    }
});

// this line add text index to schema for full-text search !! // weighted seems partially working
// schema.index({"$**": "text"});
schema.index({"$**": "text"}, {"weights": { name: 3, title: 2, tag: 2, description: 1 }});

schema.pre('save', function(next) {
    next();
});

var Product = mongoose.model('products', schema);

module.exports = Product;
