'use strict';

app.controller('ShopCartDetailController', [
    '$scope',
    '$routeParams',
    'ShopCartService',
    function($scope, $routeParams, ShopCartService) {
        $scope.detail = {};

        ShopCartService.getShopCart().then((res) => {
            console.log(res);
            $scope.detail = res.filter((data) => {
                return data.productId === parseInt($routeParams.id);
            })[0];
        });
    }
]);