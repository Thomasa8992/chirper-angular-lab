var app = angular.module('myApp', ['ngRoute', 'controllers']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/home.html'
        }).when('/list', {
            templateUrl: '../views/list.html'
        }).when('/single/one/:id', {
            templateUrl: '../views/single.html'
        }).when('/add', {
            templateUrl: '../views/add.html'
        }).when('/users', {
            templateUrl: '../views/users.html'
        }).when('/user/:user', {
            templateUrl: '../views/user.html'
        })

    }]);
    
var controlApp = angular.module('controllers', []);
controlApp.controller('chirpReq', function($scope, $http, $location, $routeParams) {
    $scope.goToSingle = function(id){
        $location.path("/single/one/" + id);           
    } 
    $scope.goToUser = function(users){
        $location.path("/user/" + users);           
    }
    $http.get('/api/chirps')
    .then(function (response) {
      $scope.chirpList = response.data;
    });

    $scope.deleteData = function(id){
        $http.delete("/api/chirps/one/" + id)
            .success(function(response){
                $http.get('/api/chirps')
                .then(function (response) {
                console.log(response);
                $scope.chirpList = response.data;
            });
        });    
    }
});    


controlApp.controller('postReq', function($scope, $http, $location, $routeParams) {
$scope.insertData = function(){
        $http.post('/api/chirps', {'user': $scope.user,'message': $scope.message})
            .success(function(response){
            console.log("sent post");
            $scope.user = "";
            $scope.message = "";
            $location.path("/list/");           
            $http.get('/api/chirps')
                .then(function (response) {
                console.log(response);
                $scope.chirpList = response.data;
            });
        });
    }
});

controlApp.controller("singleController", function($scope, $routeParams, $http, $location){
    var myId = $routeParams.id;    
    $http.get("/api/chirps/one/" + myId)
       .then(function (response) {
            $scope.singleChirp = response.data;
    });
    $scope.deleteData = function(id){
        $http.delete("/api/chirps/one/" + id)
            .success(function(response){
                $http.get('/api/chirps')
                .then(function (response) {
                console.log(response);
                $location.path("/list/"); 
            });
        });    
    }
}); 

controlApp.controller("userControl", function($scope, $http){ 
    $http.get('/api/users')
       .then(function (response) {
            $scope.userList = response.data;
            $http.get('/api/chirps')
                .then(function (response) {
            });
    });
});
    
controlApp.controller("singleUser", function($scope, $http, $routeParams){ 
    $http.get('/api/chirps/user/' + $routeParams.user)
       .then(function (response) {
            $scope.oneUser = response.data;
            console.log($scope.oneUser)
        });
         $scope.goToUser = function(users){
            $location.path("/user/" + users);           
        }
    
});