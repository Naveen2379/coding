/*
* The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
* */

const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
    /*resolutionFunc(777);*/
    rejectionFunc();
});
// At this point, "promiseA" is already settled.
promiseA
    .then( (val) => console.log("asynchronous logging has val:",val) )
    .catch((err) => console.log('error: ', err))
console.log("immediate logging");

// produces output in this order:
// immediate logging
// asynchronous logging has val: 777

/*
*                           Promise.resolve()
* returns a new Promise object that is resolved with the given value. If the value is a thenable(i.e. has a then method), the returned promise will "follow" that thenable,
* adopting its eventual state; otherwise returned promise will be fulfilled with the value.
* */
