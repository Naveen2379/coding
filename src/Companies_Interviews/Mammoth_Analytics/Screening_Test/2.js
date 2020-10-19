(function () {
    var a = b = 3;      //here, a has function scope and b has global scope
    console.log(a);     //3
})();

console.log(typeof a);      //undefined
console.log(typeof b);      //number
console.log(b);             //3
console.log(a);             //Reference Error: a is not defined


/*
var a =10;    //typeof a becomes number
(function () {
    var a = b = 3;      //here, a has function scope and b has global scope
})();

console.log(typeof a);      //number
console.log(typeof b);      //number
console.log(b);             //3
console.log(a);             //10
*/
