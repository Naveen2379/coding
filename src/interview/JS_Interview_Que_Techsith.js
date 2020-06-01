// let has block scope, let variable dies at the end of the block.
//var has function scope, it dies at the end of the function
//var keyword gets hoisted, so consoling it before its declaration, gives undefined whereas let keyword doesn't get hoisted so it gives 'cannot access before initiaization'

/*function x(){
    if(true){
        var v = 10;
        let l = 20;
    }
    console.log(v);
    console.log(l);     //10   console.log(l); ReferenceError: l is not defined
}*/

function x(){
    if(true){
        console.log(v);
        console.log(l);     //undefined console.log(l); ReferenceError: Cannot access 'l' before initialization
        var v = 10;
        let l = 20;
    }
}

//x();

/*
console.log('1' == 1);    //true
console.log('1' === 1);    //false
console.log(1 == '1');      //true
console.log(1==='1');       //false
*/

/*let l = 20;
l = 50;
console.log(l);     //50

const c = 10;
c = 20;
console.log();      //c = 20; TypeError: Assignment to constant variable.*/

/*function variable_definition() {
    let l;
    l = 10;
    console.log(l);

    var v;
    v = 10;
    console.log(v);

    const c;
    c = 10;
    console.log(c);

}
variable_definition();      //const c; SyntaxError: Missing initializer in const declaration*/

/*
// const arr let's you add elements to it as arr is an object
const arr = [1,2];
arr.push(3);
console.log(arr);       //[1,2,3]

let arr1 = [1,2];
arr1 = [3,4];           //allows you to modify the array
console.log(arr1);      //[3,4]

const arr2 = [1,2];
arr2 = [3,4];
console.log(arr2);      //arr2 = [3,4]; TypeError: Assignment to constant variable
*/

/*Difference b/w undefined and null
Both represent empty value,
    you defined a variable, but not assigned a value then  it says undefined,
    null: assinging empty to a variable by myself
we can also assign 'undefined' to a variable, but we shouldn't do this.

console.log(typeof undefined);      //undefined
console.log(typeof null);           //object
*/


