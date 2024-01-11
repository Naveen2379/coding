let array1 = [10,20];
let array2 = [1,2,3];

//o/p: [10,1,2,3,20]

/* array destructuring && spread operator */
const [a,b] = array1;
console.log( [a, ...array2, b]);            //[ 10, 1, 2, 3, 20 ]

