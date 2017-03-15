var express = require('express');
var path = require('path')

// var mongoose = require('mongoose');

var app = express();

// connect to mongo database named "shortly"
// mongoose.connect('mongodb://test:test@ds131340.mlab.com:31340/filterimage');

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);



var port = process.env.PORT || 8080;

// start listening to requests on port 8000
app.listen(port, function () {
 console.log('server up on port ' + port);
});

// export our app for testing and flexibility, required by index.js
module.exports = app;