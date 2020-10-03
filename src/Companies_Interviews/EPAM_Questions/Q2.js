/*
//Different scopes -sending TWO parameters
let a=2;        //immutable
let b = 'naveen';   //immutable
let c = {a:2, b:3}; //mutable
function alter(a,c) {
    a=10;
    b = 'ravi';
    c.a=10;
    console.log(a);     //10, here function gets a copy
    console.log(b);     //ravi
    console.log(c.a);   //10
}
//alter function not yet called, so logs the initially assigned values
console.log(a);     //2
console.log(b);   //naveen
console.log(c.a);     //2
//alter function called here
alter(a,c);
console.log(a);     //2
console.log(b);   //ravi       -we have not passed 'b' as a parameter to the alter function, so 'ravi' is assigned to the initially declared variable
console.log(c.a);     //10
*/

//Different scopes -sending THREE parameters
let a=2;        //immutable
let b = 'naveen';   //immutable
let c = {a:2, b:3}; //mutable
console.log('alter1 function');
function alter1(a,b,c) {
    a=10;
    b = 'ravi';
    c.a=10;
    console.log(a);     //10, here function gets a copy
    console.log(b);     //ravi
    console.log(c.a);   //10
}
alter1(a,b,c);
console.log(a);     //2
console.log(b);   //naveen       -we have passed 'b' as a parameter, so function gets a copy of b in its own scope and prints the initially assigned 'naveen' outside that function scope.
console.log(c.a);     //10  -as objects are mutable, can be altered anywhere

