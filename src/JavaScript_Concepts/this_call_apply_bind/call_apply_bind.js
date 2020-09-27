/*
* creating a method separately and using that common method on the various objects using call,apply and bind
* Call(), Apply() and Bind() methods can come in handy when setting the “this” value
* */

                    /* CALL METHOD */
const obj = {
    number: 2
}

const addToThis = function (a) {
    return this.number + a;
}
//console.log(addToThis.call(obj, 3));         //5             ---> format: function name.call(object, function_arguments)
//'addToThis' function was called for the 'obj' object and the property 'number' was accessed using this.number and the function argument 3 was added to the number

                    /* >1 argument to the function */
const addToThisWithArguments = function (a,b,c) {
    return this.number + a+b+c;
}
//console.log(addToThisWithArguments.call(obj, 1, 2, 3));     //8

                    /* APPLY METHOD -parameter must be placed in an array */
const addToThisApply = function (a,b,c) {
    return this.number +a+b+c;
}
const arr = [1,2,3];
const obj2 = {
    number: 5
}
//console.log(addToThisApply.apply(obj, arr));         //8        (2+6)
//console.log(addToThisApply.apply(obj2, arr));         //11      (5+6)

                    /* BIND METHOD */
console.log(addToThis.bind(obj));       //[Function: bound addToThis] function bounded, but not invoked/called
const bound = addToThis.bind(obj);
console.log(bound(5));                  //7     function executed with 5 as argument as input and added with this.number
const bound1 = addToThisWithArguments.bind(obj);
console.log(bound1(1,2,3));             //8     function executed with 3 arguments as input and added with this.number
