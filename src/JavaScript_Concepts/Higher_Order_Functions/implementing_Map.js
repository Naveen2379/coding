/*
* Higher-Order function is a function that receives a function as an argument or returns the function as output.
* */

const strArr = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

/* USING HIGHER ORDER FUCNTION*/
function mapForEach(arr, lengthFun) {
    let arr1 = [];
    for (let i=0;i<strArr.length;i++) {
        arr1.push(
            lengthFun(strArr[i])
        )
    }
    return arr1;
}

let lenArr = mapForEach(strArr, function(item) {
    return item.length;
});
console.log(lenArr);                        //[ 10, 6, 3, 4, 1 ]


/* USING MAP FUNCTION*/
const newArrUsingMap = strArr.map( (item) => item.length);
console.log(newArrUsingMap);                //[ 10, 6, 3, 4, 1 ]

/*WITHOUT MAP & HIGHER ORDER FUNCTION*/
let res_arr = [];
for(let i=0;i<strArr.length;i++){
    res_arr.push(strArr[i].length);
}
console.log(res_arr);               //[ 10, 6, 3, 4, 1 ]


/* HIGHER ORDER Function which returns a function*/
function firstFun() {
    console.log('first function');
    return secondFun();
    function secondFun() {
        console.log('second function');
    }
}
/*
//firstFun();
console.log(firstFun());                    /!*first function
                                              [Function: secondFun]
                                            *!/
*/

console.log(firstFun);                      //[Function: firstFun]
firstFun();         /*
                        first function
                        second function
                    */