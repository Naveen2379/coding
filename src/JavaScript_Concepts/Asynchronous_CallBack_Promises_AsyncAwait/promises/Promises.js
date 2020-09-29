/*
* The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
* A Promise is in one of these states:
* pending: initial state, neither fulfilled nor rejected.
* fulfilled: meaning that the operation completed successfully.
* rejected: meaning that the operation failed.
* */

let prom = new Promise((resolve, reject) => {
    reject('Failed!');
    //resolve('Success!');
});

prom.then( (result) => console.log(result)).catch((err) => console.log(err + ' error'));

