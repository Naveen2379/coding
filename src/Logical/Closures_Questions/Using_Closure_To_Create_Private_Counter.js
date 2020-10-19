var func = function () {
    var counter = 0;
    return function () {
        counter++;
        console.log(counter);
    }
}

/* we can't access counter variable from outside, which has function scope which means it became a private counter */
//console.log(counter);           //ReferenceError: counter is not defined
var counterFun = func();
counterFun();               //1

console.log(counterFun.prototype.scope);