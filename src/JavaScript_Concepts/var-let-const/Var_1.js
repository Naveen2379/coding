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


/*
* x & y are declared before any code is executed, but the assignment occur later.
* At the time 'x=y' is evaluated, y exists so no Reference Error is thrown and its value is undefined. So, x is assigned the undefined value
* Then, y is assigned the value 'A'. consequently, after the first line, x === undefined & y === 'A'.
* */
/*
var x = y, y = 'A';
console.log(x+y);       //undefinedA
*/

/*
var m, n =5;
console.log(m);         //undefined     -->m gets hoisted, so m is undefined
console.log(n);         //5
*/

/*
var o=5, var p=10;      //cannot do this
*/

/*
f='F';
var e=f;
console.log(e+f);       //FF
*/

/*
var a=b;                //statement is completed here, but b is not declared by the time 'a=b' is evaluated
b='A';                  //not hoisted as it doesn't declared with var, so b is not assigned a value yet
console.log(a+b);       //Refernce Error: b is not defined
*/

/*
var a=b;
var b='A';
console.log(a+b);       //undefinedA
*/

/*
var c;
var a=c;
c='A';
console.log(a+c);       //undefinedA
*/

var tester = "hey hi";
var hello = 'hello';
function newFunction() {
    var hello = "hello";
    console.log(hello);         //hello
}
console.log(hello);             //hello

var h1 = 'hello';
if(true) {
    var h1 = 'world';
    console.log(h1);        //world
}
console.log(h1);            //world