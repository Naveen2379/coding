/* Closure gives you access to an outer function's scope from an inner function. In JS, closures are created every time a function is created,
*  at function creation time.
*  */

/*
* functions in JavaScript form closures. A closure is the combination of a function and the lexical environment within which that function was declared.
* This environment consists of any local variables that were in-scope at the time the closure was created.*/

/* Same example as Lexical_Scoping.js and returns the same result */
function outerFun() {
    let name = 'Naveen';
    return function () {
        console.log(name);
    };
}

let myFun = outerFun();
myFun();                //Naveen

/* another example */
/* makeAdder is a function factory here,
* add5 & add10 are both closures, they share the same function body definition, but store different lexical environments
* In add5's lexical environment,s x is 5 and in add10's it is 10 */
function makeAdder(x) {
    console.log(x);
    return function (y) {
        return x+y;
    }
}


let add5 = makeAdder(5);
console.log(add5(2));       //7
let add10 = makeAdder(10);
console.log(add10(2))       //12


