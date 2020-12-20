/* return an array by sorting the below array using name and age<20  -Array of objects problem */
var pets = [
    {name: 'john', age: 21},
    {name: 'tom', age: 19},
    {name: 'meshak', age: 25},
    {name: 'Alice', age: 19},
    {name: 'sam', age: 9},
    {name: 'samuel', age: 18},
    {name: 'Smith', age: 16}
];

const belowAge = pets.filter( (obj) =>  obj.age<20);
console.log(belowAge.sort( (a,b) => {
        if (a.name.toUpperCase() < b.name.toUpperCase()) {
            return -1;
        }
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
            return 1;
        }
        return 0;
    }
 ));







