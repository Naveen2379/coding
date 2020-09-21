let obj = { a:1, b:2, c:3};
/* o/p: [{a:1}, {b:2}, {c:3}] */



const arr1=[];
for ( const [key,value] of Object.entries(obj) ) {
    const newObj = {};
    newObj[key] = value;
    arr1.push(newObj);
    //console.log(`${key} : ${value}`);
}
console.log(arr1);

const arr2 = [];
for (const key in obj) {
    const newObj = {};
    newObj[key] = obj[key];
    //const newObj = {key: obj[key]}      /*key is the string here, key will be there in newObj {key: 1}, etc*/
    arr2.push(newObj);
    //console.log(`${key}: ${obj[key]}`);
}
//console.log(arr2);

/*const arr1 = Object.entries(obj);
const finalArr = arr1.map( (each) => {
    const obj1 = {};
    obj1[each[0]] = each[1];
    return obj1;
})
console.log(finalArr)*/

