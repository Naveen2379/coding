/* async fun always returns a promise*/
async function asyncFun1() {
    return 1;
}

//asyncFun1().then((result) => console.log(result));              //1

async function asyncFun2() {
    return Promise.resolve('Success!');
}
//asyncFun2().then((result) => console.log(result));              //Success!


/* await keyword only works inside async functions
* The keyword await makes JavaScript wait until that promise settles & returns its result
* */
/* async await*/
//function which returns promise after 2 seconds of delay
function resolveAfter2Seconds() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000)
    });
}
//async function which is asynchronous which uses await to make all statements below to wait while resolveAfter2Seconds
//function gets executed and returns new promise using resolve('resolved') as 'resolved'
async function asyncFunWithAwait() {
    console.log('before promise called');
    let promiseResult = await resolveAfter2Seconds();
    console.log(promiseResult);
    console.log('after promise');
}
//asyncFunWithAwait();
/*
before promise called
Done!
after promise
*/


/* directly calling Promise inside of async*/
async function asyncFunWithAwait1() {
    console.log('before promise');
    let promise = new Promise( (resolve, reject) => {
        console.log('promise call starts');
        setTimeout( () => {
            resolve('Promise returned after 2 seconds');
        }, 2000);
    });

    let result = await promise;
    console.log(result);
    console.log('after promise');
}
asyncFunWithAwait1();
/*
before promise
Promise returned after 2 seconds
after promise
*/


