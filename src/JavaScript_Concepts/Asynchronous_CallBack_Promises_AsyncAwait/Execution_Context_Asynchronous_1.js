/*
*
*
* */

const networkRequest = () => {
    setTimeout(()=> {                       //used setTimeOut to simulate a network request
        console.log('async code');
    }, 2000);
}
console.log('executed before network request');
networkRequest();
console.log('this also executed before the network request');

/*
* executed before network request
* this also executed before the network request
* async code
*/