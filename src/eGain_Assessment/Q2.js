"use strict";
x = 1;
(function () {
    x = 2;
    if (true) {
        var x = 3;
    }
    function f1() {
        x = 4;
    }
    f1();
})();

console.log(x);