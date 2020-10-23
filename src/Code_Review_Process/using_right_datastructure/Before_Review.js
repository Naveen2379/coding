const customers = [
    {
        name: 'Ram',
        country: 'India'
    },
    {
        name: 'Michael',
        country: 'USA'
    },
    {
        name: 'Raj',
        country: 'India'
    },
    {
        name: 'Symonds',
        country: 'Australia'
    },
    {
        name: 'Nancy',
        country: 'USA'
    },
    {
        name: 'de Cock',
        country: 'SA'
    }
];

let countries = [];
for(let i=0; i<customers.length;i++ ) {
    countries.push(customers[i].country);
}
console.log(countries);


const unique_countries = [];
function remove_duplicates(countries) {
    console.log(countries);
    for(let i=0; i<countries.length;i++) {
        if(!unique_countries.includes(countries[i])) {
            unique_countries.push(countries[i]);
        }
    }
    return unique_countries;
}

console.log(remove_duplicates(countries));