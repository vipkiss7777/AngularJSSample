'use strict';

app.controller('ShopCartController', [
    '$q',
    '$scope',
    'ShopCartService',
    function($q, $scope, ShopCartService) {
        $scope.cart = [];
        $scope.isHighlight = true;

        $scope.dropDownString = null;
        $scope.defaultDropdownString = [
            'Book1',
            'Book2',
            'Book3'
        ]

        $scope.defaultDropdownObjects = [{
            text: 'Book1',
            value: 'Book1',
            id: 0
        }, {
            text: 'Book2',
            value: 'Book2',
            id: 1
        }, {
            text: 'Book3',
            value: 'Book3',
            id: 2
        }];



        $scope.filterStringList = function(userInput) {
            var filter = $q.defer();
            var normalisedInput = userInput.toLowerCase();

            var filteredArray = self.defaultDropdownStrings.filter(function(country) {
                return country.toLowerCase().indexOf(normalisedInput) === 0;
            });
            filter.resolve(filteredArray);
            return filter.promise;
        };

        $scope.filterObjectList = function(userInput) {
            var filter = $q.defer();
            var normalisedInput = userInput.toLowerCase();

            var filteredArray = $scope.defaultDropdownObjects.filter(function(d) {
                var matchText = d.text.toLowerCase().indexOf(normalisedInput) === 0;
                var matchValue = d.value.toLowerCase().indexOf(normalisedInput) === 0;
                return matchText || matchValue;
            });
            filteredArray = filteredArray.map((x) => {
                return x.text;
            });
            filteredArray = filteredArray.filter(onlyUnique);
            filter.resolve(filteredArray);
            return filter.promise;
        };

        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }

        $scope.itemStringSelected = function(item) {
            console.log('Handle item string selected in controller:', item);
            $scope.stringMessage = 'String item selected: ' + item;
        };

        $scope.itemObjectSelected = function(item) {
            console.log('Handle item object selected in controller:', item);
            $scope.objectMessage = 'Object item selected: ' + item;
        };



        $scope.highlight = function() {
            $scope.isHighlight = !$scope.isHighlight;
        };

        $scope.onQuery = function() {
            ShopCartService.getShopCart().then((res) => {
                console.log(res);

                $scope.cart = res;
            });

        }


    }
]);