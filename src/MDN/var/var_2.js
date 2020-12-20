/* variable a & b declared in global scope and undefined, then assigned values 1 to a & 10 to b in one statement */
/*
var a=1, b=10;
console.log(a);     //1
console.log(b);     //10
*/

/*
var x=y, y='A';
console.log(x+y);       //undefinedA
*/

/* in intellij, it doesn't console correct output as it runs in strict mode, try in chrome devtools */
/*
var x = 1;
function foo() {
    var x = y = 10;     /!* declares x locally & declares y globally *!/
    console.log(x);     //10
    console.log(y);     //10
}
foo();
console.log(x);     //1
console.log(y);     //10
*/

/*
var a=10;
console.log(a);     //10
a=20;
console.log(a);     //20
*/

