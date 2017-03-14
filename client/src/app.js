var kosher = angular.module('kosher', ['ngRoute']);


// kosher.config(['$routeProvider', function($routeProvider) {

//   $routeProvider
//     .when('/question', {
//       templateUrl: 'view/question.html',
//       controller: 'questionCtrl'
//     }).otherwise({
//       redirectTo: '/question'
//     })


// }])

//   .config(['$routeProvider', function($routeProvider, $locationProvider) {
//     $routeProvider
//       .when('/index', {
//         templateUrl: 'question.html',
//         controller: 'questionCtrl'
//       })
//       .otherwise({
//         redirectTo: '/index'
//       });
//   }]);


kosher.controller("questionCtrl", ['$scope', function($scope/*, Questions*/) {

  $scope.data = [{
    text: "Is this a kosher a pickle?  Because I don't think this is a kosher pickle", index: 1, legal: true
  },
  {
    text: "Is it okay to eat milk at two hours forty?", index: 2, legal: false
  },
  {
    text: "My Grandad said I could end Shabbos after the fourth hour.", index: 3, legal: true
  }];


  $scope.addQuestion = function() {
    $scope.data.push({
      text: $scope.query,
      index: 4,
      legal: true
      });
    $scope.query = '';
  }
  $scope.addQuestion();

}]);

