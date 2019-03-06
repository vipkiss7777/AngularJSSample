describe('ShopCartController', function() {

    beforeEach(module('SampleApp'));

    var $controller, $scope, ShopCartService, deferred;

    beforeEach(inject(function(_$controller_, _$q_, _$rootScope_, _ShopCartService_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
        ShopCartService = _ShopCartService_;
        deferred = _$q_.defer();

        $controller('ShopCartController', {
            $scope: $scope,
            ShopCartService: ShopCartService
        });

    }));

    describe('ShopCartController =>', function() {
        it('確認初始化後 回傳有資料', function() {

            debugger;
            //Fake Implement findCPC035A API
            spyOn(ShopCartService, "getShopCart").and.returnValue(deferred.promise);

            deferred.resolve([{
                productId: 1,
                productName: "test AngularJS",
                type: "Book",
                author: "Chris Yu",
                price: 200,
                saleDate: "2019/03/23"
            }, {
                productId: 3,
                productName: "test Java Spring",
                type: "Book",
                author: "Chris Yu",
                price: 700,
                saleDate: "2019/03/23"
            }, {
                productId: 2,
                productName: "test Angular6",
                type: "Book",
                author: "Chris Yu",
                price: 400,
                saleDate: "2019/03/23"
            }]);

            $scope.onQuery();
            $scope.$apply();
            console.log('toHaveBeenCalled');
            expect(ShopCartService.getShopCart).toHaveBeenCalled();
            console.log($scope.cart);
            expect($scope.cart.length).toEqual(3);
        });
    });
});