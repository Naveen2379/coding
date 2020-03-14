funD();  //function is available before its declaration
funE();   //Cannot access 'funE' before initialization - because function is assigned to a variable here and it behaves like a variable
function funD() {
    console.log('function declaration');
}

let funE = function () {
console.log('function expression');
};

/*console.log(b); //Cannot access 'b' before initialization
let b=10;*/

/*let a;
console.log(a); //undefined*/
