/*
* Callbacks will be placed in message queue, and event loop checks if the call stack is empty, then it pushes the callback to top of the call stack
* and gets executed adn popped off from the call stack. This all happens after job queue/micro-task queue completed executing.
* */
setTimeout(()=> {
    console.log('prints after 2 seconds, callback')
}, 2000);

setTimeout(()=> {
    console.log('prints after 0 seconds, callback')
}, 0);

/*
* Promises will have higher priority than message queue, Promises will be placed in job queue/micro-task queue, so executes before the callbacks in message queue
* */
new Promise((resolve, reject) => {
    resolve("Promise is resolved first");
}).then((result) => console.log(result));


console.log('prints first');


/*
* prints first
* Promise is resolved first
* prints after 0 seconds, callback
* prints after 2 seconds, callback
* */
