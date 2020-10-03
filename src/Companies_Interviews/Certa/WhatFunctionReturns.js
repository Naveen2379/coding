function sum1() {
    console.log('sum1 function');        //sum1 function
}
//console.log(sum1());         //undefined

function sum2() {
    console.log('sum2 function');        //sum2 function
    return undefined;
}
//console.log(sum2());         //undefined

function sum3() {
    console.log('sum3 function');        //sum3 function
    return null;
}
//console.log(sum3());            //null

function sum4() {
    console.log('sum4 function');        //sum4 function
    return function() {
        console.log('returned function');
        return 'returned function';
    };
}
console.log(sum4());            //[Function (anonymous)]
let newFun = sum4();
newFun();                       //returned function
