/* The const declaration creates a read-only reference to a value. It does not mean the value it holds immutable -just that the variable
* identifier cannot be reassigned. For instance, in the case where the content is an object, this means the object's contents(properties)
*  can be changed/altered */

/* array -const declaration */
const arr1 = [0,1,2];           //creates a read-only reference to a value, that's it
const arr2 = [3,4,5];

arr1[1] = 20;           //array content can be changed
console.log(arr1);      //[ 0, 20, 2 ]

//arr1 = [...arr1, ...arr2];      //TypeError: Assignment to constant variable.
const arr1 = [2,3,4];               //SyntaxError: Identifier 'arr1' has already been declared

/* object const declaration */
const obj1 = {
    name: 'Naveen',
    age: 27
}
const obj2 = {
    name: 'Ravi',
    age: 29
}
obj1.name = 'Sravan'            //object content can be altered
console.log(obj1);              //{ name: 'Sravan', age: 27 }

//obj1 = {...obj2}              ////TypeError: Assignment to constant variable.
