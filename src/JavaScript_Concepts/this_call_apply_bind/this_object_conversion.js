

function f1(c,d) {
    return this.a+this.b+c+d;
}
let obj = { a: 5, b: 5};


const sumCall = f1.call(obj, 10, 20);
console.log(typeof sumCall);    //number
console.log(sumCall);           //40
const sumApply = f1.apply(obj, [10, 20]);
console.log(typeof sumApply);   //number
console.log(sumApply);          //40

/* dealing with primitives */
function f2() {
    return this;
}
const number = f2.call(7);
console.log(typeof number);         //object
console.log(number);                //[Number: 7]
console.log(f2.call('Bamboo'));     //[String: 'Bamboo']
//console.log(f2.call(undefined));       //refers to global object
/* if the value passed as this to the call function is not an object, then  an attempt will be made to convert it to an object.
* Values null and undefined become the global object and Primitive like 7 or 'foo' will be converted to an object using related constructor,
* so the primitive number 7 is converted to an object as new Number(7) and the string to new String('foo') */

function f() {
    return this.a;
}
const g = f.bind({a: 'azerty'});
console.log(typeof g);      //function
console.log(typeof g());    //string
console.log(g());           //azerty

let h = g.bind({a: 'yoo'});     //bind only works once
console.log(typeof h);      //function
console.log(h());           //azerty

const o = { a: 37, f: f, g: g, h: h};
console.log( o.a, o.f(), o.g(), o.h());     //37 37 azerty azerty
/* ECMAScript 5 introduced Function.prototype.bind(). Calling f.bind(someObject) creates a new function with the same body and scope as 'f',
*  where 'this' occurs in the original function, in the new function it is permanently bound to the first argument of bind, regardless of how the
*  function is being used.
* */


