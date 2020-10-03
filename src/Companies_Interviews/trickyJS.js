/*
console.log(2 + '2');   //22 concatenation
console.log(2-'2');     //0, bcoz there is no - for strings, so it converts '2' to number 2 and subtract
*/

/*
let arr1=[3,4];
let arr2=[1,2];
let arr=arr1+arr2;
console.log(arr);   //3,41,2
console.log(arr1+arr2); //3,41,2
console.log(arr2.concat(arr1));     //[1,2,3,4]
*/

/*let arr3=[3];
let arr4=[4];
console.log(arr3-arr4); //  -1
let arr5=[10];
let arr6=[5];
console.log(arr5-arr6); //5
let arr9 = [2];
let arr10 = [2];
console.log(arr9-arr10);
let arr7 = [1,2];
let arr8=[1,1];
console.log(arr7-arr8); //NaN*/

/*//difference b/w arrays -element which is present only in one array
let arr11 = [1,2,3];
let arr12 = [1,2,3,4];
let newArr1 = arr11.filter((item) => !arr12.includes(item));
//console.log(newArr1);
let newArr2 = arr12.filter((item) => !arr11.includes(item));
//console.log(newArr2);
let resArr = newArr1.concat(newArr2);
console.log(resArr);*/

/*
//remove duplicates
let nums = [1,2,2,3,4,3];
console.log(new Set(nums)); //Set {1, 2, 3, 4}
console.log([...new Set(nums)]);    // [1, 2, 3, 4]
*/

/*function func() {
    {
        let l = 'let';
        var v = 'var';
    }
    console.log(v);
    console.log(l);
}
func(); //var   Reference Error: l is not defined*/

/*
console.log(5<6<7); //true  -->(5<6<7) -->(true<7) --> (1<7) -->true
console.log(7>6>5); //false -->(7>6>5) -->(true>5)  --> (1>5) -->false
*/

/*
let arg = function fun(){ return arguments};
console.log(arg('hi'));                 //[Arguments] { '0': 'hi' }
let a = () => arguments;
console.log(a('hi'));   //[Arguments] {'0': {}, ................    -->arrow function doesn't show arguments
let args = (...n) => n;
console.log(args('hi'));        //[ 'hi' ]  -->array of arguments
*/

/*let profile = {
    name: 'naveen'
};
profile.age = 5;
console.log(profile);
Object.freeze(profile); //freeze doesn't let you add new prop's, remove & modify to object
profile.native = 'hyd';
profile.age = 10;
delete profile.name;
console.log(profile);*/
/*
let prof = {
    name: 'naveen',
    age: 10
};
Object.seal(prof);  //seal doesn't let you add and remove, but can modify
prof.name = 'ravi';
delete prof.age;
prof.native = 'US';
console.log(prof);
*/

/*let obj = {
    name: 'raju',
};
Object.defineProperty(obj, 'age', {
    value: 5,
    writable: false
});                                 //can't change the property if writable is false

obj.age = 10;
obj.name = 'rani';
console.log(obj);       //{name: 'rani'}*/

/*
let obj1 = {
    name: 'raju',
};
Object.defineProperty(obj1, 'age1', {
    value: 5,
    writable: true
});                                 //can change the property value if writable is true
obj1.age1 = 10;
obj1.name = 'rani';
console.log(obj1);              //{ name: 'rani' }
console.log(obj1.age1);       //10
*/

/*console.log(Math.max());    //-Infinity     --> the lowest value is -infinity in Math, if we give 1,2, then it compares 1>-infinity --> 1 & then 2>1 --> 2(max)
console.log(Math.max(1,3,2));      //3
console.log(Math.max([1,3,2])); //NaN
console.log(Math.max(...[1,3,2]));      //3*/
