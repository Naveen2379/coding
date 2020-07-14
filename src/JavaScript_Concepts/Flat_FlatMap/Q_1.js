/*
let ar = ["It's sunny in", "", "California"].map(x=>x.split(" "));
let arr = [1,2,[3,4,5,[6,7]],8,9];
//console.log(arr.flat(2));
console.log(ar);

console.log(ar.flat());
*/

/*console.log(["It's sunny in", "", "California"].flatMap(x=>x.split(" ")));*/


let arr1 = [1,2,3];
//console.log(arr.flat(2));
let str1 = ['i am', 'an', 'engineer'];
//console.log(arr1.flatMap((val, ind) => {console.log(val); return [val, str1[ind]]} , []));

console.log(arr1.map((val, ind) => {return [val, str1[ind]]}).flat(1));