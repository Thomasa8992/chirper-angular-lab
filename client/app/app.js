var app = angular.module('myApp', ['ngRoute', 'controllers']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/home.html'
        }).when('/list', {
            templateUrl: '../views/list.html'
        }).when('/single', {
            templateUrl: '../views/single.html'
        }).when('/add', {
            templateUrl: '../views/add.html'
        });

    }]);
    
var controlApp = angular.module('controllers', []);
app.controller('chirpReq', function($scope, $http) {
    $http.get('/api/chirps')
    .then(function (response) {
        console.log(response);
      $scope.chirpList = response.data;
      });

    $scope.insertData=function(){
        $http.post('/api/chirps', {'user': $scope.user,'message': $scope.message})
        .success(function(response){
        $scope.chirpList = response.data;
        $scope.user = "";
        $scope.message = "";
        })
        
        
    }
    
});


