var dummies = require('./dummies.js')
var Q = require('q');
var Question = require('./questionModel');


var createQuestion = Q.nbind(Question.create, Question);
var findAllQuestions = Q.nbind(Question.find, Question);

module.exports = {
  allQuestions: function(request, response, next) {
    console.log('in all questions');
    findAllQuestions({})
      .exec(function(questions) {
        console.log('questions in allquestion()  ', questions);
        response.json(questions);
      })
      .fail(function(error) {
        next(error);
      })
  },

  newQuestion: function(request, response, next) {
    const query = request.body.text
    let question = new Question({
      question: query
    })
    .save(function(err, savedQuestion) {
      if (err) {
        console.log('err:', err);
      } else {
        console.log('Saved question!');
        response.status(201).send('Good Job');
      }
    })
  }
};
