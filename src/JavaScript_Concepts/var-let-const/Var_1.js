/* var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value */
var v = 10;
function fun() {
    /* v is in function scope now */
    console.log(v);             //undefined
    var v = 20;
    console.log(v);             //20
}
console.log(v);                 //10
fun();
console.log(v);                 //10
/* x & y are declared before any code is executed, but the assignment occur later.
* At the time 'x=y' is evaluated, y exists so no Reference Error is thrown and its value is undefined. So, x is assigned the undefined value
* Then, y is assigned the value 'A'. consequently, after the first line, x === undefined & y === 'A'.
* */
var x = y, y = 'A';
console.log(x+y);       //undefinedA

var a=b;
b='A';
console.log(a+b);       //Refernce Error: b is not defined




