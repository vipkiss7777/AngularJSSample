'use strict';

//建立一個名稱為ngHighlight的directive
app.directive('ngHighlight', function() {
    return {
        replace: true,
        //restrict可以定義directive是A(屬性)或E(元素)或C(類別)或M(備註)，此範例是定義為屬性
        restrict: 'A',
        //link是這個directive 一被執行就做的事情
        //scope和$scope一樣，element 就是你這個 directive 標籤本身物件，attr 就是 標籤內的 屬性
        link: function(scope, element, attr) {
            //用$watch去即時監看ngShow2
            scope.$watch(attr.ngHighlight, function(value) {
                //element.css('background-color', value ? '' : 'yellow');
                if (!value) {
                    //addClass之後，如果沒有remove掉，再加別的class、它會蓋上去
                    element.removeClass('highlight');
                } else {
                    element.addClass('highlight');
                }
            });
        }
    };
});