var express = require('express');
var path = require('path')

var mongoose = require('mongoose');


var app = express();

// connect to mongo database named "shortly"
mongoose.connect('mongodb://localhost/test');

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

//what justifies my expectation that static files sould be served.
var port = process.env.PORT || 8080;

// app.use(express.static(path.join(__dirname, 'client')));

app.use('/static', express.static(__dirname + '/client'));
// start listening to requests on port 8000
app.listen(port, function () {
 console.log('server up on port ' + port);
});

// export our app for testing and flexibility, required by index.js
module.exports = app;