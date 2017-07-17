var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        }).when('/list', {
            templateUrl: 'views/list.html'
        }).when('/single', {
            templateUrl: 'views/single.html'
        }).when('/add', {
            templateUrl: 'views/add.html'
        });

        }]);
        

