/*
console.log(x);     //undefined
x=5;
var x;
*/

/*
a=5;
console.log(a);     //5
var a;
*/

/*
var z;
z=10;
console.log(z);     //10
*/

/*
n='Naveen';
var n;
console.log(n);         //Naveen
*/

/*
// With let, you cannot use a variable before it is declared
y=10;
console.log(y);     //ReferenceError: Cannot access 'y' before initialization
let y;
*/

/*
let o;
console.log(o);     //undefined
o=10;
*/

/*
n='Naveen';
console.log(n);         //ReferenceError: Cannot access 'n' before initialization
let n;
*/

/*
p='Naveen';
//let p;                //if not Let, it consoles   -'Naveen', because variable declared on the window/global object
console.log(p);         //ReferenceError: Cannot access 'p' before initialization
*/

/*
console.log(m);         //ReferenceError: Cannot access 'm' before initialization
let m;
m='Ravi';
*/

/*
let q='ravi';
console.log(q);         //ravi

let r;
r='Naveen';
console.log(r);         //Naveen
*/

/*
console.log(s);
const s;
s='Stringgg';           //SyntaxError: Missing initializer in const declaration
*/

/*
console.log(s);
const s ='Stringgg';    //ReferenceError: Cannot access 's' before initialization
*/

/*
const t;            //SyntaxError: Missing initializer in const declaration
t='Ravi';
console.log(t);
*/


/*
/!* JS initializations are not hoisted, only declarations are hoisted *!/
var u=10;
console.log(u+' '+w);           //10 undefined  ,bcoz var w is hoisted but not the assigned the value by the console.log executes so it is undefined
var w=20;
*/

/*
var v = 10;
var z;
console.log(v+' '+z);           //10 undefined      -string
z=20;
*/

/*
var aa=10;
var bb;
console.log(aa);            //10
console.log(bb);            //undefined
console.log(aa+bb);         //NaN
bb=20;
*/

/*
var cc=10;
var dd;
console.log(cc+' '+dd);     //10 undefined
var dd =100;
*/

/*
/!* No hoisting, but since initialization also causes declaration (if not already declared), variables are available. *!/
rr=100;
ss=200;
console.log(rr+' '+ss);         //100 200
*/

/*
t=100;                          // Initialize x, and if not already declared, declare it - but no hoisting as there is no var in the statement.
console.log(t+' '+uu);          //100 undefined
var uu = 200;                   //// Declare and Initialize y
*/

/*
var cc=10;
var dd=100;
console.log(cc+' '+dd);     //10 100
var dd =200;
console.log(dd);            //200
let dd=500;
console.log(dd);            //SyntaxError: Identifier 'dd' has already been declared
*/

/*
const w;
console.log(w);             //SyntaxError: Missing initializer in const declaration
*/

/*
a=1;
const a;                    //SyntaxError: Missing initializer in const declaration
console.log(a);
*/


/*
console.log(x);             //ReferenceError: Cannot access 'x' before initialization
const x=10;
*/

const ww = 'Naveen';
console.log(ww);            //Naveen

/*
console.log(y);             //ReferenceError: Cannot access 'y' before initialization
let y=10;
*/

/*
z=10;
let z;
console.log(z);             //ReferenceError: Cannot access 'z' before initialization
*/

let zz;
zz=10;
console.log(zz);            //10

let xx=20;
console.log(xx);            //20

