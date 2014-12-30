'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'loginModule',
  'dogModule'
])
.config(['$httpProvider','$routeProvider',function($httpProvider,$routeProvider){
    $httpProvider.interceptors.push('TokenInterceptor');
        $routeProvider.when('/listDog', {
            templateUrl: 'dog/view/listDog.html'
        }).when('/login', {
            templateUrl: 'login/view/login.html'
        }).when('/create',{
            templateUrl: 'dog/view/addDog.html'
        })
}])
    .run(function($cookieStore, $location){
       if($cookieStore.get('uerLoginStatus')!=true){
           $location.path('/login');
       }
    });

angular.module('loginModule', ['ngRoute','ngCookies']);
angular.module('dogModule', ['ngRoute','ngCookies'])


