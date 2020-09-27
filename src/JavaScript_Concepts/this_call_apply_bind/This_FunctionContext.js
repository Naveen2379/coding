//Global context
/*
window === this           //true
*/

/*
a = 37;
console.log(window.a);          //37
this.b="MDN";
console.log(window.b);          //MDN
console.log(b);                 //MDN
c='Naveen';
console.log(c);                 //Naveen
console.log(this.c);            //Naveen
console.log(window.c);          //Naveen
*/


            /* Function Context */
/* inside a function, the value of this depends on how the function is called
* since the function is not in strict mode, and because the value of this is not set by the call(), this will be default to the global object,
* which is window in a browser.
* */
function f1() {
    return this;
}
//console.log(f1());      //this refers to the global object
//console.log(f1() === window);           //true  -'window' object only works in browser, not here


function f2() {
    'use strict';
    return this;
}
console.log(f2() === undefined);            //true

let myFunction = function () {
    console.log(typeof this);             //object
    //console.log(this);                  //refers to object
}

myFunction();

/* The 'this' keyword has nothing to do with the function itself, how the function is called determines the this's value
* this keyword refers to the global object whether in strict mode or not
*
*
* ES5 introduced the bind() method to set the value of a function's this regardless of how it's called, and
* ES2015 introduced arrow functions which don't provide their own this binding (it retains the this value of the enclosing lexical context).*/
