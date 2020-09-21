let arr = [1, 8, 5, 2, 9, 4, 8, 6, 9, 3, 8];


//console.log(arr.pop());     // 8    removes the last element and returns the removed element
//console.log(arr);

/*
/!* using splice method*!/
arr.splice(arr.length/2, 1);
console.log(arr);
*/


/* using slice method */
const newArr1 = arr.slice(0, arr.length/2);
const newArr2 = arr.slice(arr.length/2+1, arr.length);
console.log(newArr1);
console.log(newArr2);
let finalArr = newArr1.concat(newArr2);
console.log(newArr1);
console.log(finalArr);


