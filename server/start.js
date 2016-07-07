// Transpile ES6 to ES5
require('babel/register');

var chalk = require('chalk');

// Returns a promise from ./db/index.js
var startDb = require('./db');
var port = (process.env.PORT || 5959);
var app;
  
// Start the server
startDb
  .then(function() {
    app = require('./app');
    app.listen(port, function() {
      console.log('The server is listening on port', chalk.green.bold(port), 'it is so nice out there.');
    });
  })
  .catch(function(err) {
    console.log('Problem starting up!', chalk.red(err.message));
    console.log('I\'m out!');
    process.kill(1);
  });

// Start the server
// startDb
//   .then(function() {
//     app = require('./app');
//     app.listen(process.env.PORT || 5959, function(){
//       console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
//     });
//   })
//   .catch(function(err) {
//     console.log('Problem starting up!', chalk.red(err.message));
//     console.log('I\'m out!');
//     process.kill(1);
//   });

