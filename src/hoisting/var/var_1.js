function foo() {
    var x = 1;
    function bar() {
        var y = 2;
        console.log(x);     //1
        console.log(y);     //2
    }
    bar();
    console.log(x);         //1
    console.log(y);         //ReferenceError: y is not defined              -->y is scoped to function bar
}
//foo();

function foo1() {
    var x = 1;
    function bar() {
        var y = 2;
        var x = 10;         //x is scoped in function bar here, var x is in function scope(bar)
        console.log(x);     //10
        console.log(y);     //2
    }
    bar();
    console.log(x);         //1
    console.log(y);         //ReferenceError: y is not defined              -->y is scoped to function bar
}
//foo1();

function foo2() {
    var x = 1;
    function bar() {
        var y = 2;
        x = 100;            //
        console.log(x);
        console.log(y);
    }
    console.log(x);         //1
    bar();                  //100
                            //2
    console.log(x);         //100
    //console.log(y);         //ReferenceError: y is not defined              -->y is scoped to function bar
}
foo2();
