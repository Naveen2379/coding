class Sum {
    constructor(){
        this.sum = 10;
    }
    add(x) {
        this.sum = this.sum + x;
        //return this.value;          //returns a value which doesn't reference to any object, so sum1.add().add() receive a value, and throws an error
                                    //const result1 = sum1.add(10).add(20).add(10);  TypeError: Cannot read property 'add' of undefined

        return this;              //'this' returns an object, and references the same object to the next add() method, so it gives you the desired result.
    }
}

const sum1 = new Sum();
const result = sum1.add(10);
console.log(result);                            //Sum { sum: 20 }
const result1 = sum1.add(10).add(20).add(10);
console.log(result1);                           //Sum { sum: 60 }



/*//how to make an array or object -readOnly???
const arr = [2,1];
arr.push(5);
console.log(arr);   //[2,1,5]*/
/*

myArr.findLargest(1);
myArr.findLargest(2);

const myArr3 = ['1','12','abc', true, 54, 6, '70'];
function findLargest(n){

    let arr = [];
    for(let i=0; i<myArr3.length;i++) {
        if(typeof (myArr3[i]) === 'number' || typeof myArr3[i] === 'string') {
            arr.push(myArr3[i]);
        }
    }
    console.log(arr);}
findLargest();
*/


