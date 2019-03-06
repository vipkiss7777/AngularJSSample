'use strict';

app.factory('LoginService', ['$http', '$q', 'ngConst', function($http, $q, ngConst) {
    var factory = {};
    var login = function() {

        var deferred = $q.defer();

        $http({
            url: ngConst.BaseUrl + "login",
            method: "POST" // can be GET or POST based on your API
        }).then((response, status, headers, config) => {
                var auth = response.data[0].auth;
                deferred.resolve(auth);
            },
            (response, status, headers, config) => {
                deferred.reject(response.data);
            });

        return deferred.promise;
    };


    factory.login = login;

    return factory;
}]);