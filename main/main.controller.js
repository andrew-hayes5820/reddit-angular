var app = angular.module ('reddit');

app.controller('MainCtrl', function($scope, $timeout, RedditFactory){

  RedditFactory.getPosts()
  .then(function(result){
    $timeout($scope.posts = result);
  })
  .catch(function(error){
    $scope.error = 'there was an error getting posts';
  });
});
