angular.module("kosher", [])

.controller("questionCtrl", function($scope) {
  $scope.data = [{
    text: "Is this a kosher a pickle?  Because I don't think this is a kosher pickle", index: 1, legal: true
  },
  {
    text: "Is it okay to eat milk at two hours forty?", index: 2, legal: false
  },
  {
    text: "My Grandad said I could end Shabbos after the fourth hour.", index: 3, legal: true
  }];
});


