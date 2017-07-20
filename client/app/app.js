var app = angular.module('myApp', ['ngRoute', 'controllers']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/home.html'
        }).when('/list', {
            templateUrl: '../views/list.html'
        }).when('/single/:id', {
            templateUrl: '../views/single.html'
        }).when('/add', {
            templateUrl: '../views/add.html'
        });

    }]);
    
var controlApp = angular.module('controllers', []);
controlApp.controller('chirpReq', function($scope, $http, $location, $routeParams) {
    $http.get('/api/chirps')
    .then(function (response) {
      $scope.chirpList = response.data;
    });

$scope.insertData = function(){
        $http.post('/api/chirps', {'user': $scope.user,'message': $scope.message})
            .success(function(response){
            $scope.chirpList = 
            console.log("sent post");
            $scope.user = "";
            $scope.message = "";
            $http.get('/api/chirps')
                .then(function (response) {
                console.log(response);
                $scope.chirpList = response.data;
            });
        });
    }
    id = $routeParams.id
    console.log(id);
$scope.goToSingle = function(id){
        $location.path("/single/" + id);
    }   
    
});

// $location.path("/single/" + id);
//     