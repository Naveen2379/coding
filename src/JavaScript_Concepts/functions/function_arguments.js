function args(a,b) {
    console.log(a);         //1
    console.log(b);         //2
    console.log(c);         //ReferenceError: c is not defined
    return arguments.length;                //2, only 2 arguments given when the function invoked
}
console.log(args(1,2,2));