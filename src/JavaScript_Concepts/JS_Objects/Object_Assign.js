const obj = {
    name: 'Naveen'
}

//making obj immutable, copying object working on new obj
const obj2 = Object.assign({}, obj, {country: 'India'});

console.log(obj);
console.log(obj2);