'use strict';

// Declare app level module which depends on views, and core components
var app = angular.module('SampleApp', [
    'ngRoute',
]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

    $routeProvider.when("/shopcart", {
        controller: "ShopCartController",
        templateUrl: "ShopCart/ShopCart.html",
        allowAnonymous: true
    }).when("/shopcartdetail/:id", {
        controller: "ShopCartDetailController",
        templateUrl: "ShopCartDetail/ShopCartDetail.html",
        allowAnonymous: true
    }).when("/login", {
        controller: "LoginController",
        templateUrl: "Account/Login.html",
        allowAnonymous: true
    }).otherwise({
        redirectTo: "/login"
    });

    //$locationProvider.hashPrefix('!');

    $locationProvider.html5Mode(false); //顯示常規的URL
}]);

app.constant('ngConst', {
    BaseUrl: "http://localhost:3000/"
});


app.filter('toCurrency', function() {

    return function(input, separator) {
        return input + separator;
    };
});