function func(x) {
    if(x===5) {
        var x=10;
        var x=15;
        console.log('its ',x);
    }
    else {
        console.log(x);
    }
}
//func(5);    //its 15

function func1(x) {
    var y=6;
    if(x===5) {
       let y=10;
       console.log(y);
    }
    else {
        console.log('not ',x)
    }
}
//func1(5);   //10

z=10;
console.log(z); //10

let s;
console.log(s); //undefined
s=10;

/*
console.log(m); //var keyword definition gets hoisted, so it doesn't give error and it gave undefined
console.log(n); //let keyword doesn't get hoisted, so it gives error: cannot access 'n' before initialization
var m=10;
let n=5;
*/


//function scope-var & block scope-let
function f() {
    if(true) {
        var l=5;
        let k=10;
    }
    console.log(l); //5 var keyword has function scope
    console.log(k); //k is not defined  let doesn't have function scope
}
//f();

/*
* var keyword has function scope
* let keyword has block scope, it dies at the end of the block
* */

//let and const keywords
function letConst() {
    let a=10;
    a=20;
    console.log(a);     //20

    const b=5;
    b=15;
    console.log(b);     //assignment to constant variable
}
//letConst();

const c=[1,2];
c.push(3);
console.log(c); //[1,2,3]

/*const d;
d=10;
console.log(d); //missing initialized in const declaration*/

/*let g=[1,2];
g=[3,4,5,6];
console.log(g); //[3,4,5,6]*/

/*const e=[1,2];
e=[1,2,3,4];
console.log(e); //assignment to const variable*/

let h=null;
console.log(h);

console.log(typeof(undefined));     //undefined
console.log(typeof(null));          //object
