const obj = { a:1, b:2, c:3 };


/* using an array */
const arr = [];
for (const key in obj) {
    arr.push(key);
}
console.log(arr.length);

/* using count variable */
let count = 0;
for (const key in obj) {
    count += 1;
}
console.log(`obj length ${count}`);


/* using in-built methods on Object*/
console.log(Object.entries(obj).length);
console.log(Object.keys(obj).length);
console.log(Object.values(obj).length);
