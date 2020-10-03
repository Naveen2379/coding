/*
for(let i=0; i<3;i++) {
    const f = () => {
        console.log(i);
    }
    f();            //0 1   2
}
*/


/*for(let i=0;i<3;i++) {
    console.log(`inside loop ${i}`);
    setTimeout(() => {
        console.log(i);
    }, 2000);
}
console.log('after the loop');*/
/* on every iteration, the function in setTimeOut will create a closure which holds the value of i which is having block scope changes with every iteration,
 means -->
* for i=0, new function will be created with closure with value of 0,
* for i=1, new function will be created with closure with value of 1,
* for i=2, new function will be created with closure with value of 2
* after timer ends, these functions will be executed with 0, 1, 2
* */
/*
inside loop 0
inside loop 1
inside loop 2
after the loop
0
1
2
*/

for(var i=0;i<3;i++) {
    console.log(`inside loop ${i}`);
    setTimeout(() => {
        console.log(i);
    }, 2000);
}
console.log('after the loop');

