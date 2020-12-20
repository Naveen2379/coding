/* shallow copy, holds the same reference*/
const animals = [
    {name: 'ant', place:'India'} ,
    {name: 'bison', place:'USA'},
    {name: 'camel', place:'Dubai'},
    {name: 'duck', place:'India'},
    {name: 'elephant', place:'Africa'}
];


const animalsCopy = animals.slice();
console.log(animalsCopy);

animalsCopy[0].name = "Lion";
//console.log(animalsCopy);       //changed
//console.log(animals);           //changed

animals[1].name = 'Rhino';
console.log(animals);               //changed
console.log(animalsCopy);           //changed