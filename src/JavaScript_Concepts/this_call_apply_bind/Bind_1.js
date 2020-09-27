const obj = {
    x: 42,
    getX: function () {
        let x = 40;
        return this.x;
    }
}

const unBoundGetX = obj.getX;   //function assigned to a variable which is having global scope
console.log(unBoundGetX());     //undefined -the function gets invoked at the global scope

//resolving -use bind   -bind() method creates a new function that, when called, has its 'this' keyword set to the provided value, with a given sequence of arguments
// preceding any provided when the new function is called.

const boundGetX = unBoundGetX.bind(obj);
console.log(boundGetX());           //42


/* clarification example */
const obj1 = {
    x: 10,
    getX: function () {
        let x=20;
        return this.x;
    }
}
console.log(obj1.getX());           //10