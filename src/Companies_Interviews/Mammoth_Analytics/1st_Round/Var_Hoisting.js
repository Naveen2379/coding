/* Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function). */

/*
console.log(num); //undefined
var num;
num = 6;
*/


/*
console.log(num); 	//undefined
var num = 7;
num = 6;
*/

/*
console.log(num); 	//ReferenceError: num is not defined
num = 7;
*/

/*
num=10;
console.log(num);       //10
*/



