//const newString = 'hello'.repeat(3);
//console.log(newString);           //hellohellohello


/* polyfill */
String.prototype.repeat = function(n) {
    console.log(arguments.length);
    return Array(n+1).join(this);
}
console.log('test'.repeat(3));      //testtesttest

'test'.repeat(3)
'hello'.repeat(2);
/*function repeat(s,n) {
    /!*let newStr = '';
    for(let i=0;i<n;i++) {
        newStr = s + newStr;
    }
    return newStr;*!/
    /!*let arr = [];
    for(let i=0;i<n;i++) {
        arr.push(s);
    }
    return arr.join('');*!/
}
const result = repeat('test', 3);
console.log(result);*/


