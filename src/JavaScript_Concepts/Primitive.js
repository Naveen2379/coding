//primitive
var foo = 5;

function fun1(num) {
    console.log(foo);
    num = num +2;
}

function fun2(foo) {
    foo = foo+2;
    console.log(foo);       //copied foo's value, not original foo
}

fun1(foo);
console.log(foo);           //5

fun2(foo);
console.log(foo);           //5

/*
* For both fun1 and fun2 function calls, JS looks up the value for the identifier 'foo'. It correctly finds our variable instantiated with our first statement.
*
* After finding it, the expression is evaluated, 'foo' is replaced by '5' and the JS engine passes that value to the function as an argument.
*
* Before executing the statements inside the function's bodies, JS takes a copy of the original passed argument(which is primitive) and creates a local copy.
* These copies, existing only inside the function's scope, are accessible via the identifiers we specified in the function's definitions (num for fun1, foo for fun2).
*
* Then, the function's statements are executed:
*   in the first function, a local 'num' variable had been created. We are increasing its value by 2, not the original 'foo's value!
*   in the second function, a local 'foo' variable had been created. We are increasing its value by 2, not the original(external) foo's value! Also, in this situation,
*   the external foo variable cannot be accessed directly. This is because of JS's lexical scoping and the resulting variable shadowing. The local 'foo' hides the
*   external 'foo'.
* */

func();
console.log(carName);
function func() {
    var carName = 'Volvo';
    console.log(carName);
}

/*
* Volvo
* ReferenceError: carName is not defined (line: 36)*/