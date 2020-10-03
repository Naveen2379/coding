for(var i=0;i<10;i++) {
    setTimeout(() => {
        console.log(i);
    },500)
}

//o/p: 10 (10 times)
// /* here, var has function scope and on every iteration, it doesn't create new i variable each time, instead it changes the value of the same i,
//    its a same variable with a different value
//    every time the value changes of the i, then the closure gets updated with the value of the i.
//    first with 0, and then i=1, then first closure and second closure gets the updated i value, so when i=3, loop doesn't get run but i became 3, so
//    closures get updated with new value of i that is 3.
// */


for(let i=0;i<10;i++) {
    setTimeout(() => {
        console.log(i);
    },500)
}

//o/p: 0 to 9       //let has block scope, every time the loop runs it creates a new i variable, first time i=0; and block scope ends, then new i=1, and
                    // block scope ends and then new i=2, block scope ends --> on every iteration setTimeOut function sets the inside function with its
                    // lexical scope(means with the value of the i) in stack,
                    //once the timer ends, starts executing three 3functions, which has i value --> 0 1 2