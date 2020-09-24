const keys = ['Ordinary_Drink', 'Cocktail', 'Shot', 'Coffee / Tea', 'Beer', 'Soft Drink / Soda' ];
const values = [ [1,2],[1,2],[1,2],[1,2],[1,2],[1,2]];


/*const newArr = keys.map( (key, ind) => {
    const newObj = {};
    newObj[key] = values[ind]
    return newObj;
})
console.log(newArr);*/


const newArr1 = keys.map( (key, ind) => {
    const eachArr = [];
    eachArr.push(key, values[ind]);
    return eachArr;
})
console.log(newArr1);


/*for (let each of newArr) {
    console.log(Object.values(each))
}*/


