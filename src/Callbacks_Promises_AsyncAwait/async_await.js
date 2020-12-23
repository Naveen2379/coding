/* async functions always return a promise. If the return value of an async function is not explicitly a promise,
* it will be implicitly wrapped in a promise, ex below */
/* both are equivalent */
async function foo() {
    return 1;
}
const prom1 = foo();
//console.log(prom1);                             //Promise { 1 }
//foo().then(res => console.log(res));            //1

function boo1() {
    return new Promise((resolve) => resolve(1));
}
/* or */
function boo2() {
    return Promise.resolve(1);
}
const prom2 = boo1();
console.log(prom2);                              //Promise { 1 }
boo1().then(res => console.log(res));                 //1
boo2().then(res => console.log(res));                 //1