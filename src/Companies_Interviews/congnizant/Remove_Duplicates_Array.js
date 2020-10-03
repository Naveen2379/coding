let arr =[1, 4, 8, 2, 1, 6, 3, 2, 5, 7, 3, 6];
//let arr =[1, 8, 5, 2, 9, 4, 8, 6, 9, 3, 8];
let newArr1 = [];
for(let i=0;i<arr.length;i++) {
    let count = 0;
    for(let j=i+1;j<arr.length;j++) {
        if(arr[i] === arr[j]) {
            count = count+1;
        }
    }
    if(count === 0) {
        newArr1.push(arr[i]);
    }
}
console.log(newArr1);


let newArr = [arr[0]];
for (let i=1; i<arr.length;i++) {
    if(!newArr.includes(arr[i])) {
        newArr.push(arr[i])
    }
}
console.log(newArr);


const res_arr = arr.filter( (elem, ind) => arr.indexOf(elem)===ind);
console.log(res_arr);



