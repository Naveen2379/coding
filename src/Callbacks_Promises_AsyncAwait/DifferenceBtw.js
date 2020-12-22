/* problem with async operations */
function printFun(str) {
    setTimeout( () => {
        console.log(str);
    }, Math.floor(Math.random()*100)+1);
}

function printAll() {
    printFun('A');
    printFun('B');
    printFun('C');
}
//printAll();     /* everytime it prints different order of the strings, even they invoked in the order */


            /* solving the above problem    -->using callbacks
*  creates a callback hell  --> nesting functions, hard to read the code
* */
function printFun_Callback(str, callback) {
    setTimeout(() => {
        console.log(str);
        callback();
    }, Math.floor(Math.random()*100)+1);
}

function printAll_Callback() {
    printFun_Callback('A', () => {
        printFun_Callback('B', () => {
            printFun_Callback('C', () => {
                printFun_Callback('D', () => {})
            })
        })
    });
}
//printAll_Callback();            /* it prints in the order */


        /* solving the above problem    -->using promises
        * it creates a Promise chain, the code is no longer nested but looks messy
        * */
function printFun_Promise(str) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log(str);
            resolve(str);
        }, Math.floor(Math.random()*100)+1)
    })
}


function printAll_Promise() {
    printFun_Promise('A')
        .then( () => printFun_Promise('B'))
        .then( () => printFun_Promise('C'))
        .then( () => printFun_Promise('D'))
            .catch(err => console.log(err))
}
//printAll_Promise(); // A B C D      --> in order



                /* solving the above problem    -->using async-await
                * syntactic sugar for Promises, It makes your async code look more like sync code
                * */
async function printAll_Await() {
    await printFun_Promise('A');
    await printFun_Promise('B');
    await printFun_Promise('C');
    await printFun_Promise('D');
    await printFun_Promise('E');
    await printFun_Promise('F');
}
printAll_Await();

