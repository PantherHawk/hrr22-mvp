var kosher = angular.module('kosher', []);

kosher.factory('Questions', ['$http', function($http) {
  return {
    get: function() {
      return $http({
        method: 'GET',
        url: '/api/questions'
      })
        .then(function(resp) {
          return resp.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    create: function(question) {
      console.log("Question here: ", question)
      return $http({
        method: 'POST',
        url: '/api/questions',
        data: JSON.stringify({text: question})
      })
      .then(function(resp) {
        console.log(resp.data);
        console.log('You had to ask a question, didn\'t you');
        return resp.data;
      })
      .catch(function(err) {
        console.log('uh-oh: ', err);
      });
    }
  }
}]);

// // kosher.config(['$routeProvider', function($routeProvider) {

// //   $routeProvider
// //     .when('/question', {
// //       templateUrl: 'view/question.html',
// //       controller: 'questionCtrl'
// //     }).otherwise({
// //       redirectTo: '/question'
// //     })


// // }])

// //   .config(['$routeProvider', function($routeProvider, $locationProvider) {
// //     $routeProvider
// //       .when('/index', {
// //         templateUrl: 'question.html',
// //         controller: 'questionCtrl'
// //       })
// //       .otherwise({
// //         redirectTo: '/index'
// //       });
// //   }]);


kosher.controller("questionCtrl", ['$scope','$http', 'Questions', function($scope, $http, Questions) {

  $scope.data = {};
  // $scope.addQuestion = function() {
  //   $scope.data.question = {
  //     text: $scope.query,
  //     index: 4,
  //     legal: true
  //     };
  //   $scope.query = '';
  // }
  // $scope.addQuestion();

  $scope.getQuestions = function() {
    Questions.get()
    .then(function(allTheQuestions) {
      $scope.answers = allTheQuestions.data;
    })
    .catch(function(error) {
      console.log('error: ', error);
    })
  }
    console.log('input   :', $scope.query)
    $scope.addQuestion = function() {
      console.log("query", $scope.query)
      Questions.create($scope.query)
      .then(function(newAnswer) {
        console.log("Added a query", newAnswer.answer);
        let answer = newAnswer.answer ? "Huzzah! It's Kosher!!!" : "Fuhgetaboutit! That's Treif!";
        $scope.answers = [];
        console.log($scope.answers);
        $scope.answers.push(answer);
        $scope.query = '';
      })
      .catch(function(error) {
        console.log('error: ', error);
      });
    }

  $scope.getQuestions();
}]);

