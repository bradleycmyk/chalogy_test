// 'use strict';
// var crypto = require('crypto'),
//     mongoose = require('mongoose')
//     // unique = require('mongoose-unique-validator'),
//     // extend = require('mongoose-schema-extend');

// var schema = new mongoose.Schema({
//     image: {
//         type: String,
//         required: true,
//         default: '/images/placeHolder.jpg'
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     title: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     price: {
//         type: Number,
//         required: true
//     }, // must be dollar.cent
//     description: {
//         type: String,
//         required: true
//     },
//     category: {
//         type: String,
//         required: true
//     },
//     tag: {
//         type: [String]
//     }
// });


// schema.pre('save', function(next) {
//     next();
// });

// module.exports = mongoose.model('Product', schema);
