/*
* Spread operator allows an iterable such as an array expression or string to be expanded or an object expression to be expanded
* */

                /* Array & Spread */
function arr_Sum() {
    const arr = [1,2,3];
    console.log(Math.max(...arr));                          //3
    console.log(Math.max.apply(null, arr));          //3

    //function & spread
    function sum(a,b,c) {
        return a+b+c;
    }
    console.log(sum(...arr));              //6
    console.log(sum.apply(null, arr));     //6

}
//arr_Sum();

function mergeArrays_1() {
    const arr1 = [3,5,2,6];           //if arr1 is const, then TypeError: Assignment to constant variable
    const arr2 = [7,4,6,2];

    //arr1 = [...arr1, ...arr2];                //assigning new array to const arr throws error and same for the object too
    console.log(arr1);          //arr1 got changed now
    console.log([...arr1, ...arr2]);    //[3, 5, 2, 6, 7, 4, 6, 2]
    console.log([arr1,arr2]);               //[ [ 3, 5, 2, 6 ], [ 7, 4, 6, 2 ] ]

    arr1[4] = 5;            //can add elements to const arr, and same for the objects too
    console.log(arr1);
}
//mergeArrays_1();

function mergeArrays_2() {
    const arr1 = [3,5,2,6];
    const arr2 = [7,4,6,2];
    const mergeArr = [...arr1, ...arr2];
    console.log(mergeArr);                      //[3, 5, 2, 6, 7, 4, 6, 2]
    const mergeArr_reverse = [...arr2, ...arr1];
    console.log(mergeArr_reverse);              //[7, 4, 6, 2, 3, 5, 2, 6]

//without using Spread
    const mergeArr_concat = arr1.concat(arr2);
    console.log(arr1);                          //[ 3, 5, 2, 6 ]        concat returns new array, doesn't change the original array
    console.log(mergeArr_concat);               //[3, 5, 2, 6, 7, 4, 6, 2]
}
//mergeArrays_2();

                        /*Object & Spread */
function clone_Merger_Objects() {
    let obj1 = {
        carName: 'Volvo',
        model: 2020
    }
    const obj2 = {
        carName: 'Fiat',
        model: 1900
    }

    const objClone = {...obj1};
    //console.log(objClone);                      //{ carName: 'Volvo', model: 2020 }
    objClone.model = 2000;
    //console.log(objClone.model);               //2000           -->cloned object(obj2) can be changed
    //console.log(obj1.model);                   //2020           -->with Spread operator, original object (obj1) can't be changed

    obj1 = {...obj1, obj2};                 //if obj1 is const, then error: atempting to assign to const or readonly variable
   // console.log(obj1);                      //{carName: 'Volvo', model: 2020, obj2: { carName: 'Fiat', model: 1900 }}

    const objMerge1 = {...obj2, ...obj1};
    //console.log(objMerge1);                      //{ carName: 'Volvo', model: 2020 }

    const objMerge2 = {...obj1, ...obj2};
    //console.log(objMerge2);                      //{ carName: 'Fiat', model: 1900 }

    //console.log(...obj1);                     //typeerror: found non-callable @@iterator

    /* Merging objects */
    const mergeObjs = merge(obj1, obj2);        //the spread syntax does not work as one might expect: it spreads an array of arguments into the object literal, due to the rest parameter.

    function merge(...objs) {   //
        console.log(...objs);
        return {...objs};                       //{ carName: 'Volvo', model: 2020 } { carName: 'Fiat', model: 1900 }
    }
    console.log(mergeObjs);                     //{'0': { carName: 'Volvo', model: 2020 }, '1': { carName: 'Fiat', model: 1900 }}

    console.log(Object.assign(obj1, obj2, {name: 'BMW'}));     //{ carName: 'Fiat', model: 1900, name: 'BMW' }
}
clone_Merger_Objects();