/*
            JS Primitives 5
A primitive value is a value that has no properties or methods.
A primitive data type is data that has a primitive value.

JavaScript defines 5 types of primitive data types:
string
number
boolean
null
undefined
Primitive values are immutable (they are hardcoded and therefore cannot be changed)
*/

/*
*           Objects
* A JavaScript object is a collection of named values, called properties.
* Methods are actions that can be performed on objects.
* Object properties can be both primitive values, other objects, and functions.
* An object method is an object property containing a function definition.
*               Creating an Object
* An object literal is a list of name:value pairs (like age:50) inside curly braces {}.
* var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
*
* Using the JavaScript Keyword new -
* var Person = new Object();
* Person.name = 'John'; Person.age = 50
* */

var Person = new Object();
Person.name = 'John'; Person.age = 50
console.log(Person);
/*
Mutable is a type of variable that can be changed. In JavaScript, only objects and arrays are mutable, not primitive values.
A mutable object is an object whose state can be modified after it is created.
Immutables are the objects whose state cannot be changed once the object is created.
Strings and Numbers are Immutable
all primitive types (Undefined, Null, Boolean, Number, BigInt, String, Symbol) are immutable, but custom objects are generally mutable.
*/

/*
//Immutable
let imString = 'Hello';
imString = 'World!'

console.log(imString);  //World!*/
/*
On appending the "immutableString" with a string value, following events occur:

Existing value of "immutableString" is retrieved
"World" is appended to the existing value of "immutableString"
The resultant value is then allocated to a new block of memory
"immutableString" object now points to the newly created memory space
Previously created memory space is now available for garbage collection.
*/

function foo(x) {
    x = 'new string';
}
let x = 'string';
foo(x);
console.log(x);


