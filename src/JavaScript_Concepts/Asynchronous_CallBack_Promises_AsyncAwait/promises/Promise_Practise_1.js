let promise1 = new Promise((resolve, reject) => {
    //resolve('its resolved...');
    reject('its rejected');
});

promise1.then( result => console.log(result))
.catch(err => console.log(err + ' -error'));


let promise2 = new Promise( reject=>console.log('rejected'))
promise2.then(result => console.log(result));