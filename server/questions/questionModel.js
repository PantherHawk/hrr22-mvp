
var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Zoinks! Keep trying:  '));
db.once('open', function(){
  console.log('Huzzah!!!  YOU DID IT!!! YOU Made a Data Base!')
})


var QuestionSchema = mongoose.Schema({
    question: String
});

var Question = mongoose.model('Question', QuestionSchema);

var Kugel = new Question({
  question: "kugel",
  legal: true
})

var gifelteFish = new Question({
  question: "gifelte fish",
  legal: true
})

Kugel.save(function(err, kugel) {
  if (err) return console.err('Zoinks!,  ', err);
  else {
  console.log(kugel);
  }
})

module.exports = Question;