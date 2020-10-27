//const newString = 'hello'.repeat(3);
//console.log(newString);           //hellohellohello


/* polyfill */
String.prototype.repeat = function(n) {
    return Array(n+1).join(this);
}
console.log('test'.repeat(3));

