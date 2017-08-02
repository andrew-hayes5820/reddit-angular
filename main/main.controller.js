var app = angular.module ('reddit');

app.controller('MainCtrl', function($scope, $http){
// use http service to get data from Reddit (can pick any other URL)
  $http.get('https://www.reddit.com/r/aww/.json')
    .then(function(result){
      // above function effictively stores the resulting http GET request in a variable name.
      // the word 'result' after 'function' can be substitued for just about any word (with the exception
      // of JavaScript keyword)
      // console.log(result);
      $scope.posts = result.data.data.children;
    });
});
