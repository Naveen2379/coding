let obj = { a:1, b:2, c:4};
/* o/p: 7 */


let sum1 = 0;
for (const key in obj) {
    sum1 = sum1 + obj[key];
}
console.log(sum1);

const keys = Object.keys(obj);
console.log(keys.reduce( (acc, key) => obj[key]+acc , 0));



const values = Object.values(obj);
console.log(values.reduce( (acc, val) => acc+val, 0));

const entries = Object.entries(obj);
console.log(entries.reduce( (acc,each) => acc+each[1], 0));

