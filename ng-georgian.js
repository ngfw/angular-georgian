/* ng-georgian.js
 * http://tbilisi.io
 * Copyright (c) 2015 Nick Gejadze
 * Version 0.1
 * Licensed under GPL:
 * http://www.gnu.org/licenses/gpl.html 
 */
(function(angular) {
    'use strict';
    angular.module('georgian', []).directive('georgian', function($parse) {
        return {
            require: 'ngModel',
            scope: false,
            link: function(scope, element, attrs, modelCtrl) {
                var converted = function(inputValue) {
                    if (inputValue === undefined) {
                        inputValue = '';
                    }
                    var e = "aAbBgGdDeEvVzTiIkKlLmMnNoOpPJrstuUfFqQRyYSCcZwWxjhH".split("");
                    var g = "\u10d0\u10d0\u10d1\u10d1\u10d2\u10d2\u10d3\u10d3\u10d4\u10d4\u10d5\u10d5\u10d6\u10d7\u10d8\u10d8\u10d9\u10d9\u10daL\u10db\u10db\u10dc\u10dc\u10dd\u10dd\u10de\u10de\u10df\u10e0\u10e1\u10e2\u10e3\u10e3\u10e4\u10e4\u10e5\u10e5\u10e6\u10e7\u10e7\u10e8\u10e9\u10ea\u10eb\u10ec\u10ed\u10ee\u10ef\u10f0\u10f0".split("");
                    var regex, val = inputValue;
                    for (var i = 0; i < e.length; i++) {
                        regex = new RegExp(e[i], "g");
                        if (0 < val.length) {
                            val = val.replace(regex, g[i]);
                        }
                    }
                    if (val !== inputValue) {
                        modelCtrl.$setViewValue(val);
                        modelCtrl.$render();
                    }
                    return val;
                };
                modelCtrl.$parsers.push(converted);
                converted(scope[attrs.ngModel]);
            }
        };
    });
})(angular);