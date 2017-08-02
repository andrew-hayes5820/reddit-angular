var app = angular.module('reddit');
app.factory('RedditFactory', function($http){
  var postData;

  return{
    getPosts: getPosts
  };
  function getPosts(){
      if(postData){
        return Promise.resolve(postData);
      }
      // if we dont have data, user a script service below to get the data from the URL provided below
    // use http service to get data from Reddit (can pick any other URL)
      return $http.get('https://www.reddit.com/r/aww/.json')
        .then(function(result){
          // above function effictively stores the resulting http GET request in a variable name.
          // the word 'result' after 'function' can be substitued for just about any word
          // (with the exception of JavaScript keywords)
          // console.log(result);
          $scope.posts = result.data.data.children;
          return postData;
        });
      };
  });
