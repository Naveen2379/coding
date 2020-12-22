const arr = ['banana', 'orange', 'apple', 'banana', 'lemon', 'apple', 'mango', 'orange'];

/* using filter */
const finArr1 = arr.filter( (element, index) => arr.indexOf(element)===index);
console.log(finArr1);                   //[ 'banana', 'orange', 'apple', 'lemon', 'mango' ]

/* using Set */
const finArr2 = [...new Set(arr)];
console.log(finArr2);                   //[ 'banana', 'orange', 'apple', 'lemon', 'mango' ]

/* using forEach */
const finArr3 = [];
arr.forEach( (element) => {
    if(!finArr3.includes(element)) {
        finArr3.push(element);
    }
})
console.log(finArr3);                   //[ 'banana', 'orange', 'apple', 'lemon', 'mango' ]

/* using reduce 1st mehtod */
const finArr4 = arr.reduce( (acc, element) => {
    if(acc.indexOf(element) < 0) acc.push(element);
    return acc;
}, [])
console.log(finArr4);                   //[ 'banana', 'orange', 'apple', 'lemon', 'mango' ]

/* using reduce 2nd method */
const finArr5 = arr.reduce( (acc, element) => acc.includes(element) ? acc : [...acc, element], []);
console.log(finArr5);                   //[ 'banana', 'orange', 'apple', 'lemon', 'mango' ]

/* adding a unique method to Array Prototype */
Array.prototype.removeDuplicates = function() {
    console.log(this);
    const finArr6 = [];
    for(let i=0;i<this.length;i++) {
        let current = this[i];
        if(finArr6.indexOf(current)<0) {
            finArr6.push(current);
        }
    }
    return finArr6;
}
console.log(arr.removeDuplicates());        //[ 'banana', 'orange', 'apple', 'lemon', 'mango' ]