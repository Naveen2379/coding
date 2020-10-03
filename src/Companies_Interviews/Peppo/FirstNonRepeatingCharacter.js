//const str = 'javascript for junior developers';
//o/p: 'c'

let obj = {};
const str = 'javascript for junior developers';
//const str = 'preddyypres';
for(let i=0;i<str.length;i++) {
    if(obj[str.charAt(i)] === undefined) {
        obj[str.charAt(i)] = 1;
    }
    else {
        obj[str.charAt(i)] = obj[str.charAt(i)]+1;
    }
}
//console.log(obj);
for( key in obj) {
    if(obj[key] === 1) {
        console.log(key);
        break;
    }
}
