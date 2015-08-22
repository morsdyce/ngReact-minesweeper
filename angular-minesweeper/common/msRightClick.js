import angular from 'angular';

export default angular.module('msRightClick', [])
  .directive('msRightClick', function ($parse) {
    return function (scope, element, attrs) {
      let fn = $parse(attrs.msRightClick);

      element.bind('contextmenu', function (event) {
        scope.$apply(function () {
          event.preventDefault();
          fn(scope, {$event: event});
        });
      });
    };
  });