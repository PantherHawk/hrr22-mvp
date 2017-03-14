var express = require('express');
var path = require('path');
var questionsController = require('../questions/questionController.js');
var dummyData = require('/client/src/data/questions.json');

var app = express()

var port = process.env.PORT || 3000;

// path.join(__dirname, '/');
app.use(express.static(path.join(__dirname, '../')))

app.get('/index', dummyData)
// app.get('/index', questionController.allQuestions);
// app.post('/index', questionController.newQuestion);

app.listen(port, function () {
  console.log('Express listening on port 3000. . .')
})
a
module.exports = app;