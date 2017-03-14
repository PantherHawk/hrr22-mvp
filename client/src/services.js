angular.module('kosherService', [])

.factory('Questions', function($http) {
  let addOne = function(question) {
    console.log(question);
  }
  return {
    addOne: addOne
  }
});