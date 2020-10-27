//this.x = 9;    // 'this' refers to global 'window' object here in a browser
const obj = {
    x: 81,
    getX: function() { return this.x; }
};

//console.log(x);                 //TypeError: Cannot set property 'x' of undefined
console.log(obj.getX());        // 81

const retrieveX = obj.getX;
console.log(retrieveX());       //undefined