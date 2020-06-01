function classmarker_ques1() {
    /*function foo() {};
var foo = 10;
console.log(foo);   //10
console.log( typeof foo);   //number*/

    /*
    var foo = 10;
    function foo() {};
    console.log(foo);   //10*/

    /*let foo = 10;
    function foo() {};
    console.log(foo);   //function foo() {}; SyntaxError: Identifier 'foo' has already been declared*/

    /*
    function foo() {};
    let foo = 10;
    console.log(foo);   //let foo = 10; SyntaxError: Identifier 'foo' has already been declared*/
}

//classmarker_ques1();  //execute removing classmarker function



//classmarker_ques2();
function classmarker_ques2() {
    /*for (let i=0; i<3;i++) {
        var log = function (){ console.log(console.log(i));}
        setTimeout(log, 100);
    }*/

    for (var i=0; i<3;i++) {
        var log = function (){ console.log(console.log(i));}
        //console.log(log());                       //0 1 2
        setTimeout(log, 5000);              //3 3 3
    }
}

/*
for (var i=0;i<5;i++) {
    setTimeout(function (){console.log(i)}, 500);       // 5 5 5 5 5
}
*/

/*for (let i=0;i<5;i++) {     ////using the ES6 let keyword inside the for loop. The let keyword creates a separate scope for each iteration making it possible to print the consecutive variable value
    setTimeout(function (){console.log(i)}, 500);
}*/                           // 0 1 2 3 4

/*for(var i=0;i<5;i++) {
    (function(i) {
        setTimeout(function(){console.log(i);}, 1000);      // You can use IIFE(immediately invoked function expression) to create a new scope for each setTimeout callback without polluting the global scope. Simply wrap up the setTimeout code inside a IIFE
    })(i);      //self-invoking function
} */         //0 1 2 3 4
