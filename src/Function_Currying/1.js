/*
* function currying - making a copy of a method and we create more methods out of it by presetting some arguments inside the function
* */

/* implement function currying by using bind method */
let multiply = function (x,y) {
    return x*y;
}

let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(3));          //6

let multiplyBy = multiply.bind(this, 2,5);
console.log(multiplyBy());              //10

let multiplyB = multiply.bind(this);
console.log(multiplyB(10,2));           //20

let multiplyBM = multiply.bind(this, 5, 5);
console.log(multiplyBM(10,2));              //25

/* implement function currying by using closures */
let multiplyUsingClosures = function (x) {
    return function (y) {
        return x*y;
    };
}

let multiplyByTen = multiplyUsingClosures(10);
console.log(multiplyByTen(5));          //50