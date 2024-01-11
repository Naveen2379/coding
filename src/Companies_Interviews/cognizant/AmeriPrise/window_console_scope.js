/* why not window.console.log */

function myFn() {
    var foo = 'peekaboo!';
    bar = 'cow';
    console.log('1', foo);
}
myFn();

console.log('2', bar);
console.log('3', foo);

/* o/p */
/*
* 1 peekaboo!
* 2 cow
* Uncaught ReferenceError: foo is not defined
* */