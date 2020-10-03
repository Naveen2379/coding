// i may not be available all the time, if function is defined in one scope and invoked from some other scope like setTimeOut, promises
let i=1;
function f() {
    // i is automatically available here
    console.log(i);
}
//f();        //1

//function declarations are moved to the top with lexical scope, so i is available when it is called
if(true) {
    let i=1;
    function f() {
        console.log(i);
    }
}
//f();            //1

/* f is not defined here, as it is defined in block scope */
if(true) {
    let i=1;
    const f = () => {
        console.log(i);
    }
}
//f();        //ReferenceError: f is not defined

/* function declarations are hoisted to top of the script */
/*for(let i=0;i<3;i++) {
    console.log('loop: ', i);
    function f2() {
        console.log('inside function', i);
    }
}*/
//f2();           //2

/* function expressions are not available outside the block scope */
/*for(let i=0;i<3;i++) {
    console.log('loop: ', i);
    const f3 = () => {
        console.log('inside function', i);
    }
}*/
//f3();           // ReferenceError: f3 is not defined
/*
/!* solving the above problem - defining the function outside of the scope and function definition is inside the scope *!/
let f4;
for(let i=0;i<3;i++) {
    console.log('loop: ', i);
    f4 = () => {
        console.log('inside function', i);
    }
}
f4();           // inside function 2
*/


/*let f5;
if(true) {
    let i = 1;
    f5 = () => {
        console.log(i);
    }
}
//console.log(i);         //i is not available here as it block scoped.   -i is not defined
f5();                     //1       holding i value inside block scope  -similar to closure
console.dir(f5);            //[Function: f5]*/


/* closure implementation */
function fun() {
    let i=1;
    let j=2;
    return () => {
        console.log(i);         //i is available not j
        console.log(j);         //j is also available if we use this in closure for future use
    }
}
console.log(fun());         //returned function will have only 1 closure that contains variable i =1,
fun()();                    //1