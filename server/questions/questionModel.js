var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    title: {type: String, required: true},
    question: {type: String, required: true},
    author: {type: String, required: false},
    upvote: { type: Number, required: true},
    downvote: {type: Number, required: true}
});

module.exports = mongoose.model('Question', QuestionSchema);