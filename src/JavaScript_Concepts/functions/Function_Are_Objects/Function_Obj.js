/*
* JS functions can be best described as objects
* functions can have both properties and methods as Objects have */


/* arguments.length property returns the no. of arguments received when the function is invoked */
function args(a,b,c) {
    console.log(a);         //1
    console.log(b);         //2
    console.log(c);         //undefined
    return arguments.length;                //2, only 2 arguments given when the function invoked
}
console.log(args(1,2));


function sum(a,b) {
    return a+b;
}
/* toString() method returns function as a string*/
let x = sum.toString();
console.log(x);         /* function sum(a,b) {return a+b;}*/


