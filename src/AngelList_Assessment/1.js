const a = (function () {
   return parseInt('1.5');
})();

console.log(typeof a);          //number

const b = function () {
    console.log('it is a function');
}

console.log(typeof b);      //function

