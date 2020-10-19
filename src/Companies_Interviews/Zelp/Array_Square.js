let arr=[2,3,4,5,6];

/* if it is a sorted array  -using for loop */
let res_arr=[];
for(let i=0;i<arr.length;i++) {
    if(arr[i]<5) {
        res_arr.push(arr[i]*arr[i]);
    }
    else {
        break;
    }
}
console.log(res_arr);           //[ 4, 9, 16 ]

const res_arr_map_filter = arr.map( (elem) => {
    if(elem<5) {
        return elem*elem;
    }
}).filter((elem) => elem!==undefined);
console.log(res_arr_map_filter);           //[ 4, 9, 16 ]