/*setTimeout(function () {    //it executes at the last as it is consider as an async operation,
    console.log('a');
}, 0);
console.log('b');
console.log('c');
//b c a*/


const s = new Date().getSeconds();

setTimeout(function() {
    // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
    console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500);

while (true) {
    console.log('true');
    if (new Date().getSeconds() - s >= 2) {
        console.log("Good, looped for 2 seconds");
        break;
    }
}

