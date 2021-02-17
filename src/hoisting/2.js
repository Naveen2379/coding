/*alert(a());             //3
function a() {
    var b = function() {
        return 3;
    };
    return b();
    var b = function() {
        return 8;
    };
}*/
/*
* When function a is invoked,
* var b is undefined
* var b assigned a function
* return b() --> function b is invoked
* function b returns value 3;
* the next function expression b --> not going to be considered as function expression didn't get hoisted,
* */

/*alert(a());             //8
function a() {
    function b() {
        return 3;
    }
    return b();
    function b() {
        return 8;
    }
}*/
/* turns into
* function a() {
  function b() {
    return 3;
  }
//Function Hoisting
  function b() {
    return 8;
  }
  return b();
}
alert(a()); // 8
* */
/* when function a is invoked
* declaration inside function a get hoisted &
* the last defined function i.e., b gets precedence
* function b returns value 8
*/

//var a = 1;
/*
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);
*/
/*
* This is because the function a() {} statement has now created a local a that has a functional/local scope.
* This new a now gets hoisted to the top of its enclosing function b() with it’s declaration and definition.
* This is what is happening behind the scenes:
* var a = 1;
* function b() {
*   // Hoisted
*   function a() {}
*       a = 10;
*       return;
* }
* b();
* console.log(a);
*
* Therefore, the statement a = 10; is no longer changing the value of the global a which remains to be 1,
* but rather it is changing the local a from a function to an integer value of 10. Since we are logging the global a, the output is 1.
* Had the statement function a() {} not been there, the output would have been 10.
* */



/*
function parent() {
    var hoisted = "I'm a variable";
    function hoisted() {
        return "I'm a function";
    }
    return hoisted();
}
console.log(parent());          //TypeError: hoisted is not a function
*/
/*
* We know that when it comes to variable hoisting, only the declaration(with a value of “undefined”) is hoisted, not the definition!

In the case of function declarations, the definitions are hoisted as well!

Now, in such a case of multiple declarations(variable and function in the same scope) with the same identifier,
* the hoisting of variables is simply IGNORED. The the interpreter comes across the function declaration and hoists it.
Finally, the statement of variable assignment (which was not hoisted) is executed and “I’m a variable” is assigned to hoisted,
* which is a simple string value and not a function. Hence the error!
* */
/*
* function parent() {
* //Function declaration hoisted with the definition
* function hoisted() {
*       return "I'm a function";
* }
*   // Declaration ignored, assignment of a string
*   hoisted = "I'm a variable";
*   return hoisted();
* }
* console.log(parent());
* */


/*
Original value was: undefined
New value is: bar
*/

/*greeting()
var greeting = function() {
    console.log('Good morning')
}
greeting()

function greeting() {
    console.log('Good evening')
}
greeting()*/
/*
* Good evening
* Good morning
* Good morning
* */


