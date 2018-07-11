var app = angular.module('chirpApp', ['ngRoute']);

app.config(function($routeProvider){
$routeProvider
// post feed
.when('/', {
    templateUrl: 'home.html',
    controller: 'appFoundation'
})

.when('/login', {
    templateUrl: 'login.html',
    controller: 'authController'
})

.when('/register', {
    templateUrl: 'register.html',
    controller: 'authController'
})
})
app.controller('appFoundation', function($scope){

    $scope.posts = [];
    $scope.newPost = {created_by: '', text: '', created_at: ''};

    $scope.post = function(){
        $scope.newPost.created_at = Date.now();
        $scope.posts.push($scope.newPost);
        $scope.newPost = {created_by: '', text: '', created_at: ''};

    }
});

// setting up front authentication for backend
app.controller('authController', function($scope){
    $scope.user = {username: '', password: ''};
    $scope.error_message = '';

    $scope.newUser = {username: '', password: '', confirmPassword: ''}

    postService.getAll().success(function(data){
        $scope.posts = data;
    });

    $scope.login =function(){
        // space for authentication
        $scope.error_message = `login request for ${$scope.user.username}`;
    };
    $scope.register = function(){
        // for authentication
        $scope.error_message = `registration request for ${$scope.user.username}`;
    }
});