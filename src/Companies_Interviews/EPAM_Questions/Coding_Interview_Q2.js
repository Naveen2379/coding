//finding the largest from the array which consists of all types.
const arr = ['1','12',54,'abc', true, 12, 6, 70];

arr.findLargest = (n) => {
    const filt_arr = arr.filter( (each) => {
        if(typeof each === 'number'){
            return each;
        }
    });
    filt_arr.push(100);
    filt_arr.sort((a,b) => a-b);
    switch (n) {
        case 1: {
            return filt_arr[filt_arr.length-1];
        }
        case 2: {
            return filt_arr[filt_arr.length-2];
        }
        default: {
            return 0;
        }
    }
}
const largest = arr.findLargest(2);
console.log(largest);

/*
let str = 'this is a string';
console.log(`The character code ${str.charCodeAt(1)} is equal to ${str.charAt(1)}`);
*/

