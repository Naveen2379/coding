/*
* Math.max() --> returns largest number or Nan(if no number present in argument) or -infinity(nothing provided as parameter)
* under the hood, comparison starts with -infinity
* parameters - numbers
* returns
* */

console.log(Math.max(2,4,63,3,9,0));    //63
console.log(Math.max());                      //-infinity
console.log(Math.max([1,2,42,1,23]));   //Nan   -couldn't find any number
//console.log(Math.max(...arr));          //cannot access 'arr' before initialization



const arr = [1,2,4,9,6,2];
console.log(Math.max(...arr));          //9     ---> Spread operator allows an iterable such as an array expression or string to be expanded
                                                    // or an object expression to be expanded

const str = 'naveen';
console.log(...str);            //n a v e e n