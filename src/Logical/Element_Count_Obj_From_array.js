const arr = ['Droid', 'Wookie', 'Droid', 'Rodian', 'Hutt', 'Rodian', 'Hutt', 'Droid'];

let obj={};

arr.map( (element) => {
    if( element in obj) {
        let count=obj[element];
        //obj = {...obj, [element]: parseInt([count])+1};
        obj[element] = count + 1;
    }
    else {
        //obj = { ...obj, [element]: 1};
        obj[element] = 1;
    }
})

console.log(obj);