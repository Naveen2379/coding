// let has block scope, let variable dies at the end of the block.
//var has function scope, it dies at the end of the function
//var keyword gets hoisted, so consoling it before its declaration, gives undefined whereas let keyword doesn't get hoisted so it gives 'cannot access before initiaization'

/*function x(){
    if(true){
        var v = 10;
        let l = 20;
    }
    console.log(v);
    console.log(l);     //10   console.log(l); ReferenceError: l is not defined
}*/

function x(){
    if(true){
        console.log(v);
        console.log(l);     //undefined console.log(l); ReferenceError: Cannot access 'l' before initialization
        var v = 10;
        let l = 20;
    }
}

//x();

/*
console.log('1' == 1);    //true
console.log('1' === 1);    //false
console.log(1 == '1');      //true
console.log(1==='1');       //false
*/

/*let l = 20;
l = 50;
console.log(l);     //50

const c = 10;
c = 20;
console.log();      //c = 20; TypeError: Assignment to constant variable.*/

/*function variable_definition() {
    let l;
    l = 10;
    console.log(l);

    var v;
    v = 10;
    console.log(v);

    const c;
    c = 10;
    console.log(c);

}
variable_definition();      //const c; SyntaxError: Missing initializer in const declaration*/

/*
// const arr let's you add elements to it as arr is an object
const arr = [1,2];
arr.push(3);
console.log(arr);       //[1,2,3]

let arr1 = [1,2];
arr1 = [3,4];           //allows you to modify the array
console.log(arr1);      //[3,4]

const arr2 = [1,2];
arr2 = [3,4];
console.log(arr2);      //arr2 = [3,4]; TypeError: Assignment to constant variable
*/

/*Difference b/w undefined and null
Both represent empty value,
    you defined a variable, but not assigned a value then  it says undefined,
    null: assinging empty to a variable by myself
we can also assign 'undefined' to a variable, but we shouldn't do this.

console.log(typeof undefined);      //undefined
console.log(typeof null);           //object
*/

//Use of Arrow Functions
/*const profile = {
    firstName: '',
    lastName: '',
    setName: function (name) {
        let splitName = function(name) {
            let splitName = name.split(' ');
            this.firstName = splitName[0];      //this belongs to the window object because it defined inside a function which is inside another function
            this.lastName = splitName[1];
        }
        splitName(name);
    }
}
profile.setName('Naveen Kairamkonda');
console.log(profile.firstName);     //prints nothing
console.log(window.firstName);      //console.log(window.firstName); ReferenceError: window is not defined
*/

/*
const profile = {
    firstName: '',
    lastName: '',
    setName: function (name) {
        let splitName = (name) => {
            let splitName = name.split(' ');
            this.firstName = splitName[0];      //this belongs to the profile object because this is defined in an arrow function which doesn't have its own this so this belongs to profile object            this.lastName = splitName[1];
        }
        splitName(name);
    }
}
profile.setName('Naveen Kairamkonda');
console.log(profile.firstName);     //Naveen
console.log(window.firstName);      //console.log(window.firstName); ReferenceError: window is not defined
*/

/*
//Prototypal Inheritance -basically every object has property called 'prototype', where you can add methods and properties to it. when you create other objects from these objects,
// the newly created object would automatically inherit the property of the parent, but not by including in its own property, but instead it uses from its parent.
let car = function (model) {
    this.model = model;
}
car.prototype.getModel = function (model) {
    return this.model;
}

let toyoto = new car('toyoto');
console.log(toyoto.getModel());
let nissan = new car('nissan');
console.log(nissan.getModel());
*/

/*
//function definition and function declaration
console.log(foo());
console.log(fun());
function foo() {console.log('foo')};        //function definition: function and function name
let fun = function () {console.log('fun')}; //an anonymous function is saved into a variable is function expression
//foo
//console.log(fun()); ReferenceError: Cannot access 'fun' before initialization
*/

//promises -used to handle asynchronous operations -when you make an async call which has to wait for something to happen and then come back and execute some callback function and
// within that callback fun you might do another ajax call which can wait for another result....on success or failure
//Benefits of Promises
// Improves Code Readability, Better handling of asynchronous operations, Better flow of control definition in asynchronous logic, Better Error Handling
let promise = new Promise(function(resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeksss"
    if(x === y) {
        resolve();
    } else {
        reject();
    }
});

promise.
then(function () {
    console.log('Success, You are a GEEK');
}).
catch(function () {
    console.log('Some error has occured');
});






