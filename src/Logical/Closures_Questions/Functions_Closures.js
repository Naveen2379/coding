/*
var addSix = createBase(6);
addSix(10);
addSix(21);

throw error as this function expression doesn't get hoisted

TypeError: createBase is not a function
*/

var createBase = function(x) {
    return function (y) {
        console.log(x+y);
    }
}

var addSix = createBase(6);
addSix(10);         //16
addSix(21);         //27
