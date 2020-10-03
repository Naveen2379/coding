// sum(1)(2)(3)(4)
//     1  3  7  11

// sum(4)
//     4

// sum(1)(4)
//     1  5

// implement for n no.of number   sum(1)(2)(8)(5)....(n)

function sum(a) {
    //console.log(a);
    return function (b) {
        //console.log(a);
        return b ? a+b : a;
    }
}
//sum(1);       //1
//console.log(sum(1)(2));    //3


function add(a) {
    //console.log(a);
    return function (b) {
        //console.log(b);
        if(b) {
            //console.log('if condition');
            return add(a+b);
        }
        else {
            //console.log('else condition');
            return a;
        }
    }
}

console.log(add(1)(4)(5)());      //10
//[add(1)] should return a function, so that the next parameter can be passed to that returned function as an argument i.e., (4) --> returnedFun(4)

function add1(a) {
    console.log(a);
    return function (b) {
        return b ? add1(a+b) : a;
    }
}
//if there is no parenthesis at last
//add1(1)(4)(5);      //1  5  10


/* shorter syntax */
let sum1 = a => b => b ? sum1(a+b) : a;
//console.log(sum1(5)(10)(5)());              //20