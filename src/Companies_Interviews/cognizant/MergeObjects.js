const obj1 = { a:1, b:2, c:3};
const obj2 = {b: 4, c:6, d:8};


//Object.assign(target, source)


const fin_obj = Object.assign(obj1, obj2);
console.log(obj1);          //{ a: 1, b: 4, c: 6, d: 8 }
console.log(obj2);          //{ b: 4, c: 6, d: 8 }
console.log(fin_obj);       //{ a: 1, b: 4, c: 6, d: 8 }


/* Cloning an object */
const clonedObj = Object.assign({}, obj2);
console.log(clonedObj);        //{ b: 4, c: 6, d: 8 }


/* merging more than one object */
console.log(Object.assign({}, obj1, obj2));             //{ a: 1, b: 4, c: 6, d: 8 }

const obj3 = {d:16, a:2, e:12 };
console.log(Object.assign(obj1, obj2, obj3));                 //{ a: 2, b: 4, c: 6, d: 16, e: 12 }
