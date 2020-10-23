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

const unique_countries = new Set();

for(let i=0;i<customers.length; i++) {
    unique_countries.add(customers[i]['country']);
}
console.log(unique_countries);
console.log(unique_countries.size);
