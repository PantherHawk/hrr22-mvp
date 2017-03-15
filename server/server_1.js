var express = require('express');
var path = require('path')
var methodOverride = require('method-override');
// var mongoose = require('mongoose');

var app = express();

// connect to mongo database named "shortly"
// mongoose.connect('mongodb://test:test@ds131340.mlab.com:31340/filterimage');

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(function (req, res, next) {
 res.header('Access-Control-Allow-Origin', '*');
 res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
 res.header('Access-Control-Allow-Headers', 'Content-Type');
 next();
});

var port = process.env.PORT || 8080;

// start listening to requests on port 8000
app.listen(port, function () {
 console.log('server up on port ' + port);
});

// export our app for testing and flexibility, required by index.js
module.exports = app;