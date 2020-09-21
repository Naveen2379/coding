const obj1 = { a:1, b:2, c:3};
const obj2 = {c:5, d:6};

const fin_obj = Object.assign(obj1, obj2);      //Object.assign(target, source)
console.log(obj1);          //{ a: 1, b: 2, c: 5, d: 6 }
console.log(obj2);          //{ c: 5, d: 6 }
console.log(fin_obj);       //{ a: 1, b: 2, c: 5, d: 6 }


/* Cloning an object */
const clonedObj = Object.assign({}, obj2);
console.log(clonedObj);        //{ c: 5, d: 6 }
