var path = require('path');
var bodyParser = require('body-parser');
var questionController = require('../questions/questionController.js')

module.exports = function (app, express) {

  app.get('/api/test', function (req, res) {
     res.send('Hello, World!');

   });

  app.use(express.static(__dirname + '/client'));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../client/index_1.html'));
   });
  app.get('/api/questions', questionController.allQuestions);
  app.post('/api/questions', questionController.newQuestion);
  };
 // app.get('*', function(req, res) {
 //   res.sendFile(path.join(__dirname, '../../client/index.html'));
 // });

 // If a request is sent somewhere other than the routes above,
 // send it through our custom error handler
