/* different ways to make an array empty */
const arr1 = [1,2,3,524,235,24];
arr1.length = 0;
console.log(arr1);

const arr2 = [1,2,3,524,235,24];
arr2.splice(0, arr2.length);
console.log(arr2);

let arr3 = [1,2,3,524,235,24];
arr3 = [];
console.log(arr3);

let arr4 = [1,2,3,524,235,24];
while (arr4.length > 0) {
    arr4.pop();
}
console.log(arr4);