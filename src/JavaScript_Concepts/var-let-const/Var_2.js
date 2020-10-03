/*var x = 10;
var y = 100;*/
function foo() {
    var x = 1;
    function bar() {
        var y = 20;
        console.log(x);         //1
        console.log(y);         //20
    }
    bar();
    console.log(x);             //1
    console.log(y);             //ReferenceError: y is not defined
}
foo();