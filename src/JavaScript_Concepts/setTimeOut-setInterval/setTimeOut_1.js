/* A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution. */
/*
const timerID = setTimeout( () => {
    console.log('function inside setTimeOut');
}, 2000);
*/


/*
const timerInterval = setInterval( () => {
    console.log('In setInterval');
}, 2000);

console.log(timerInterval);

setTimeout( () => {
    clearInterval(timerInterval);
}, 5000);
*/

//console.log(timerID);

const delay = 2000;
let i=1;
let innnerTimer = 0;
const timer = setTimeout( function tick() {
    console.log(`after`+ i*delay +`seconds...`);
    i = i+1;
    innnerTimer = setTimeout(tick, delay);
}, delay);

setTimeout(() => {
    clearTimeout(innnerTimer);
}, 20000);

