let arrOfObj= [{a:1},{a:2},{a:3}];

let arrOfObj1= [{a:1},{b:2},{c:3}];

/* using object destructuring */
const sum1 = arrOfObj.reduce( (acc, {a} ) => acc+a, 0);
console.log(sum1);

const sum2 = arrOfObj1.reduce( (acc, {a} ) => acc+a, 0);
console.log(sum2);                                                  //NaN


const {a} = {a:1, b:2, c:3};
console.log(a);                 //1

const {d,e,f} = {a:1, b:2, c:3};
console.log(d, e, f);           //undefined undefined undefined
const {b} = {b:5};
console.log(b);                 //5


