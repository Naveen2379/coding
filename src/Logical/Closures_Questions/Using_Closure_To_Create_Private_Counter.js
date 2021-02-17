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


/*
function counter() {
    var _counter = 0;
    // return an object with several functions that allow you
    // to modify the private _counter variable
    return {
        add: function(increment) { _counter += increment; },
        retrieve: function() { return 'The counter is currently at: ' + _counter; }
    }
}

// error if we try to access the private variable like below
// _counter;

// usage of our counter function
var c = counter();
c.add(5);
c.add(9);

// now we can access the private variable in the following way
c.retrieve(); // => The counter is currently at: 14*/
