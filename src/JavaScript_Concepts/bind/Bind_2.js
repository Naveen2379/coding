this.x = 9;    // 'this' refers to global 'window' object here in a browser
const obj = {
    x: 81,
    getX: function() { return this.x; }
};

console.log(obj.getX());
//  returns 81

const retrieveX = obj.getX;
console.log(retrieveX());       //undefined