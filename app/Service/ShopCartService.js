'use strict';

app.service('ShopCartService', ['$http', '$q', 'ngConst', function($http, $q, ngConst) {

    this.getShopCart = function() {

        var deferred = $q.defer();

        $http({
            url: ngConst.BaseUrl + "getProducts",
            method: "POST" // can be GET or POST based on your API
        }).then((response, status, headers, config) => {
                deferred.resolve(response.data);
            },
            (response, status, headers, config) => {
                deferred.reject(response.data);
            });

        return deferred.promise;
    };

}]);