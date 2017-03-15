var kosher = angular.module('kosher', []);

kosher.factory('Questions', ['$http', function($http) {
  return {
    get: function() {
      return $http.get('/api/questions')
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
      $scope.data = allTheQuestions.data;
    })
    .catch(function(error) {
      console.log('error: ', error);
    })
  }
    $scope.data = '';

    $scope.addQuestion = function() {
      console.log("query")
      Questions.create($scope.query)
      .then(function(newAnswer) {
        console.log("Added a query", newAnswer);
        $scope.answer = newAnswer.answer ? "Huzzah! It's Kosher!!!" : "Fuhgetaboutit! That's Treif!";
      })
      .catch(function(error) {
        console.log('error: ', error);
      });
    }

  $scope.getQuestions();
}]);

