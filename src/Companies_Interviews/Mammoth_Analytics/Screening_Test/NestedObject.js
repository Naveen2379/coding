const names = [
    {
        name: 'abcd',
        id: 1,
        child: {}
    },
    {
        name: 'nycd',
        id: 2,
        child: {
            name: 'sxcd',
            id: 4,
            child: {
                name: 'dfvcdf',
                id: 5,
                child: {
                    name: 'abcvcsdd',
                    id: 6,
                    child: {}
                }
            }
        }
    },
    {
        name: 'absdd',
        id: 3,
        child: {}
    }
];

let resultArr = [];
for(let i=0; i<names.length;i++ ) {
    function fun(obj) {
        if(obj.name.includes('cd')) {
            //console.log(obj);
            resultArr.push(obj);
            return obj.child.name ? fun(obj.child) : resultArr
        }
    }
    fun(names[i]);
}
console.log(resultArr);

//const filtered = names.filter( (obj) => obj.name.includes('cd'));

//console.log(filtered);