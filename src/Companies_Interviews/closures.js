function fun1() {
    let a = 1;
    function fun2() {
        console.log('fun2', a);
    }
    fun2();
}

fun1(); //fun2  1
/*Closures are created whenever a variable that is defined outside the current scope is accessed from within some inner scope.
It gives you access to an outer function’s scope from an inner function.
In JavaScript, closures are created every time a function is created.
To use a closure, simply define a function inside another function and expose it.*/
