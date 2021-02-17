/*
console.log(y);
y = 10;*/
// RefernceError: y is not defined


/*
console.log(y);         //undefined
var y = 10;
*/
/* turns into
var y = undefined;
console.log(y);
y = 2;
*/



/*
y=3;
console.log(y);     //3
var y;
*/
/*
//turns into
var y = undefined;
y = 3;
console.log(y);
*/

/*
var a = 1;
console.log(a);     //1
var a = 2;
console.log(a);     //2
*/

/*
var z = 1;
let z;
console.log(z);
//SyntaxError: Identifier 'z' has already been declared
*/

/*
console.log(z);
let z = 1;
//ReferenceError: Cannot access 'z' before initialization
*/
//turns into
/*
    let z;
    console.log(z);     //ReferenceError: Cannot access 'z' before initialization
    z = 1;
*/

/*function hoistExample1() {
    var a;
    console.log("Before: ", a);
    a = 10;
    console.log("After: ", a);
}*/
//hoistExample1();
/*
* Before: undefined
* After: 10
* */


/*function hoistingExample2() {
    console.log("Value of a in local scope: ", a);
}
console.log("Value of a in global scope: ", a);
var a = 1;*/
//hoistingExample2();
/*
* Value of a in global scope: undefined
* Value of a in local scope: 1
* */


/*function hoistingExample3() {
    a = 1;                  //Variables which are assigned without a var declaration are considered to be global variables
}
hoistingExample3();
console.log(a);*/
/*
* 1
* */

/*function hoistingExample4() {
    var a = 1;                  //var a is defined inside local scope., var has function scope here
}
hoistingExample4();
console.log(a);*/
/*
* ReferenceError: a is not defined
* */


/* JavaScript supports overriding not overloading, meaning, that if you define two functions with the same name,
the last one defined will override the previously defined version and every time a call will be made to the function,
the last defined one will get executed.
*/
/*function a(){
    console.log("1")
}
a();
function a(){
    console.log("2")
}
a();*/
/* o/p
* 2
* 2
* */
/*
//turns into
function a(){
  console.log("1")
}
function a(){
  console.log("2")
}
a(); // 2
a(); // 2
*/


var test = 1;
function functionHoisting() {
    //if function name & variable are with same name
    // function declaration and variable declaration get hoisted, and function declaration takes precedence over variable declaration,
    // unless variable is assigned a value.
    test = 10;
    console.log(test);
    return;
    function test() {}

}
functionHoisting();
console.log(test);          //1
/*
* //turns into
*   var test = 1;
    function functionHoisting() {
        //function Hoisting, test is re-defined and re-declared
        function test() {}
        test = 10;
        return;
    }
    functionHoisting();
    console.log(test); // 1
* */

/* Function Declaration Overrides Variable Declaration When Hoisted

First you declare a variable:

var a; // value of a is undefined
Second, the value of a is a function because function declaration takes precedence over variable declarations (but not over variable assignment):

function a(x) {
  return x * 2;
}
And that is what you get when you call alert(a);.

But, if instead of declaring a variable you make variable assignment: var a = 4; then the assigned value 4 will prevail.
* */

