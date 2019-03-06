'use strict';

app.controller('LoginController', ['$scope', '$location', 'LoginService', function($scope, $location, LoginService) {

    $scope.login = function() {
        LoginService.login().then((res) => {
            if (res) {
                $location.url('shopcart');
            }
        });
    };



}]);