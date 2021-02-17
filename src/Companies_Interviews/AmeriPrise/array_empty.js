/* best way to empty an array */
/* which way makes it best performance */
let arr = [1,2,3,5,6];

/* making array empty */
//arr.length = 0;

//arr = [];

//arr.splice(0, arr.length);


/*
const len = arr.length;
for (let i=0; i<len; i++) {
    console.log(arr.pop());
}
*/
/* slowest solution */
while (arr.length > 0) {
    arr.pop();
}

console.log(arr);