/* Spread syntax(...) allows an iterable such as an array expression or string to be expanded in places where 0 or more arguments (for function calls)
* or elements (for array literals) are expected, or an object expression to be expanded in places where 0 or more key-value pairs (for object literals) are
* expected */

function sum(x,y,z) {
    return x+y+z;
}

const arr = [1,2,3];
console.log(sum(...arr));           //6

console.log(sum.apply(null, arr));          //6


/* Rest parameters  -Spread syntax "expands" an array into its elements,
while rest syntax collects multiple elements and "condenses" them into a single element
rest parameter syntax allows us to represent an indefinite no. of arguments as an array
Rest syntax looks exactly like spread syntax. In a way, rest syntax is the opposite of spread syntax.
*/
function reduce_sum(...args) {
    return args.reduce((acc, element) => acc+element);
}

//console.log(reduce_sum(1,2,3,4,5));         //15

/* only the last parameter can be a 'rest parameter' and there can only be one ...restParam,
which will cause all remaining supplied arguments to be place within a 'standard' JS array */
function myFun(a,b, ...manyArgs) {
    console.log(a);             //10
    console.log(b);             //20
    console.log(manyArgs);      //[ 30, 40, 50 ]

}

myFun(10,20, 30,40,50);



