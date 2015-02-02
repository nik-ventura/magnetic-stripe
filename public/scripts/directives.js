// - directives.js

// Directive for triggering ng-focused attribute for form validation only on input blur
//app.directive('ngFocus', [function(){
//    var focusClass = 'ng-focused';
//    return {
//        restrict: 'A',
//        require: 'ngModel',
//        link: function(scope, el, attrs, ctrl){
//            ctrl.$focused = false;
//            el.bind('focus', function(evt){
//                el.addClass(focusClass);
//                scope.$apply(function() {ctrl.$focused = true;});
//            }).bind('blur', function(evt){
//                    el.removeClass(focusClass);
//                    scope.$apply(function(){ctrl.$focused = false})
//                })
//        }
//    }
//}]);