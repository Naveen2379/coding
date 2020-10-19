const a = {
    prop1: {
        nested_prop: 'value'
    }
}

const obj = Object.assign({}, a);           //targetObject is obj
a.prop2 = 'value2';
a.prop1.nested_prop = 'value1';
console.log(a);                                 //{ prop1: { nested_prop: 'value1' }, prop2: 'value2' }
console.log(typeof a);                          //object
console.log(obj);                               //{ prop: { nested_prop: 'value1' } }
console.log(typeof obj);                        //object
