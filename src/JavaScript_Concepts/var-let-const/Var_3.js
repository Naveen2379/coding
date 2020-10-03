var x = 10;
if(true) {
    //console.log(x);     //10
    x = 100;
    var y = 200;
    //console.log(x);     //100
}
//console.log(x);         //100   ( x is in global scope and assigned a new value later i.e.,100)
//console.log(y);         //200

/*
var a=10;
function f() {
    console.log(a);     //10
    a = 100;                /!* irrespective of functoin scope, value 100 is assigned to the global variable a which was having value of 10 earlier, now assigned with 100 *!/
    console.log(a);     //100
}
f();
console.log('after function execution', a);         //100
*/

/*

var c=1;
if(c===1){
    console.log(c);     //1
    var c = 100;        //block scope, var keyword doesn't respect block scope
    console.log(c);     //100
}
console.log(c);         //100
*/

/*
var b = 20;
function f1() {
    console.log(b);     //undefined
    b = 200;                /!* b is having only functional scope here, can't be the same value outside this function *!/
    console.log(b);     //200
}
console.log(b);         //20
f1();
console.log(b);         //20
*/

/*
var d=10;
function f3() {
    console.log(d);     //undefined     --global var d is not respected here, and function scope of d is available, so it is undefined
    var d = 100;
    var e = 20;
    console.log(d);     //100
    console.log(e);     //20
}
f3();
console.log(d);     //10
console.log(e);     //Refernce Error: e is not defined
*/

var f=10;
function f3() {
    console.log(f);     //10
    f = 100;            //
    var g = 20;
    console.log(f);     //100
    console.log(g);     //20
}
f3();
console.log(f);     //100
console.log(g);     //Refernce Error: e is not defined