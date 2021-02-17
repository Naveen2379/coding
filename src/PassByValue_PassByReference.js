
/* Function is called by directly passing the value of the variable as the argument.
    Changing the argument inside the function doesn’t affect the variable passed from outside the function.
    Javascript always pass by value so changing the value of the variable never changes the underlying primitive (String or number).
*/
function callByValue(varOne, varTwo) {
    console.log("Inside Call by Value Method");
    varOne = 100;
    varTwo = 200;
    console.log("varOne =" + varOne +"\nvarTwo =" +varTwo);
}
let varOne = 10;
let varTwo = 20;
console.log("Before Call by Value Method");
console.log("varOne =" + varOne + "\nvarTwo =" +varTwo);
callByValue(varOne, varTwo);
console.log("After Call by Value Method");
console.log("varOne =" + varOne +"\nvarTwo =" +varTwo);



/* In Javascript objects and arrays follows pass by reference.
* Function is called by directly passing the reference/address of the variable as the argument.
* Changing the argument inside the function affect the variable passed from outside the function. */
function callByReference(varObj) {
    console.log("Inside Call by Reference Method");
    varObj.a = 100;
    console.log(varObj);
}
let varObj = {a:1};
console.log("Before Call by Reference Method");
console.log(varObj);
callByReference(varObj)
console.log("After Call by Reference Method");
console.log(varObj);