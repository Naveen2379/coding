let arr =[1, 2, 2, 3, 4, 4, 4, 5, 5, 6, 7, 7, 8, 8, 8];

/* if Array is already sorted */
let newArr = [arr[0]];
for(let i=1;i<arr.length-1;i++) {
    if(newArr[newArr.length-1]!==arr[i]) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);
/*  Algorithm   -if Array is sorted
* initialize newArr with arr[0]
* start a loop from 1 to arr.length
*       compare if last element in the newArr is equals to arr[i]
*       if not, then push arr[i] into newArr
*       repeat the loop until it reaches arr.length
*
* take the last element of the newArr everytime to compare with arr[i], because it compares with latest pushed item
* */



/*  using filter - either sorted or unsorted array  */
/*const originalArr = arr.filter( (elem, ind) => arr.indexOf(elem)===ind);
console.log(originalArr);*/


