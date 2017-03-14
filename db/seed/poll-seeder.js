

module.exports = mongoose.model('Poll', pollSchema);

var polls = [

   new Poll ({
    title: 'Bacon?',
    question: 'I saw my friend eating bacon and it smelled delicious. Is bacon kosher?!!!',
    author: 'Mikey Schwartz',
    upvote: 0,
    downvote: 0
  }),

  new Poll ({
    title: 'Bacon?',
    question: 'I saw my friend eating bacon and it smelled delicious. Is bacon kosher?!!!',
    author: 'Mikey Schwartz',
    upvote: 0,
    downvote: 0
  }),

  new Poll ({
    title: 'Bacon?',
    question: 'I saw my friend eating bacon and it smelled delicious. Is bacon kosher?!!!',
    author: 'Mikey Schwartz',
    upvote: 0,
    downvote: 0
  }),

  new Poll ({
    title: 'Bacon?',
    question: 'I saw my friend eating bacon and it smelled delicious. Is bacon kosher?!!!',
    author: 'Mikey Schwartz',
    upvote: 0,
    downvote: 0
  })
  ];

  var done = 0;
  for (var i = 0; i < polls.length; i++) {
    polls[i].save(function(err, result) {
      done++;
      if (done === polls.length) {
        exit();
      }
    });
  }

  function exit() {
    mongoose.disconnect();
  }