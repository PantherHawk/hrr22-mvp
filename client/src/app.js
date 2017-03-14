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
      return $http.post('/api/questions', question)
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


    $scope.addQuestion = function(query) {
      Questions.create(query)
      .then(function(addedQuestion) {
        console.log(addedQuestion);
        $scope.query = {
          text: addedQuestion,
          legal: true
          };
        $scope.query = '';
      })
      .catch(function(error) {
        console.log('error: ', error);
      });
    }
  }
  $scope.getQuestions();
}]);

