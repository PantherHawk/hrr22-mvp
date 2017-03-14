var Q = require('q');
var Question = require('./questionModel');


var createQuestion = Q.nbind(Question.create, Question);
var findAllQuestions = Q.nbind(Question.find, Question);

module.exports = {
  allQuestions: function(request, response, next) {
    findAllQuestions({})
      .exec(function(questions) {
        response.json(questions);
      })
      .fail(function(error) {
        next(error);
      })
  },

  newQuestion: function(request, response, next) {
    console.log(request.body);
    }
  };
