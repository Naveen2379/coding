/*
* The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
* One of the great things about using promises is chaining
* Chaining: A common need is to execute two or more asynchronous operations back to back,
* where each subsequent operation starts when the previous operation succeeds, with the result from the previous step.
* We accomplish this by creating a promise chain.
* */
/*
* doSomething()
.then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);
* */

/*
* Chaining after a catch
It's possible to chain after a failure, i.e. a catch, which is useful to accomplish new actions even after an action failed in the chain. Read the following example:

new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
.then(() => {
    throw new Error('Something failed');

    console.log('Do this');
})
.catch(() => {
    console.error('Do that');
})
.then(() => {
    console.log('Do this, no matter what happened before');
});
This will output the following text:

Initial
Do that
Do this, no matter what happened before
Note: The text Do this is not displayed because the Something failed error caused a rejection.
* */



/*
let p1 = new Promise((resolve, reject) => {
   resolve(console.log('promise done'));
   reject(console.log('promise rejected'));
});

p1.then(function (response) {
    return response;    //promise done
});
*/

let promiseToCleanRoom = new Promise((resolve, reject) => {
   //cleaning the room
   let isClean = false;
   if(isClean) {
       resolve('Clean');
   }
   else {
       reject('not Clean');
   }
});
promiseToCleanRoom.then(result => console.log(result)).catch(result => console.log(result));
