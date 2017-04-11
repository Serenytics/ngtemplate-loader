var testTemplateUrl = require('./test.html')

angular.module('testModule', [])
    .directive('testDirective', function () {
      return {
        restrict: 'E',
        templateUrl: testTemplateUrl
      }
    })
