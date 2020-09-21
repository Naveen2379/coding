let obj = { a:1, b:2, a:10, b: 1, c:3, a: 50};
console.log(obj);

/* o/p: { a: 10, b: 2, c: 3 } */
/* last declared key will be considered, if keys are same/duplicates */