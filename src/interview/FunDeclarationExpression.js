console.log(funD());  //function is available before its declaration
console.log(funE());   //undefined - because function is assigned to a variable here and it is got hoisted  -Cannot access 'funE' before initialization
function funD() {
    console.log('function declaration');
}

let funE = function () {
console.log('function expression');
};
