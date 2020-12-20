const arr_obj = [
    {name: 'naveen', age: 27},
    {name: 'ravi', age: 29},
    {name: 'naveen', age: 27},
    {name: 'sravan', age: 28},
    {name: 'naresh', age: 27},
    {name: 'preddy', age: 27},
    {name: 'naveen', age: 27},
    {name: 'preddy', age: 27},
    {name: 'sumanth', age: 27},
    {name: 'sazzu', age: 28},
    {name: 'sumanth', age: 27},
];

const fin_arr1 = arr_obj.filter((v,i,a)=>a.findIndex(t=>(t.name===v.name))===i)
console.log(fin_arr1);

const fin_arr = arr_obj.reduce( (acc, obj) => {
    if(!acc.includes(obj)) {
        acc.push(obj)
    }
    return acc;
}, [])
//console.log(fin_arr);