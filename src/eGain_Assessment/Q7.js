/*
* If a JavaScript object o is of type class X, and there is a method m on class X, and you run this let f = o.m; f(); What will the value of this be inside m?
Pick the closest option
This code will not work, it will give an error
The value of this will be o
The value of this will be X (the class)
The value of this will be the global object (i.e. window in a browser)
None of the above
*/

class X {
    constructor() {
        this.m = this.m.bind(this);
    }

    m() {
        console.log(this);
    }
}

let o = new X();
let f = o.m;
console.log(f);                 //[Function: bound m]
console.log(f());                   //X { m: [Function: bound m] }

/*

let f = o.m();
console.log(f);                 //X {}
console.log(f());               //f is not a function*/
