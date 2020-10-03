const a = {
    prop: {
        nested_prop: 'value'
    }
}

const obj = Object.assign({}, a);
a.prop.nested_prop = 'value1';


function fun(){
    for (let property in a) {
        let obj ={};
        if(a.prop) {
            return fun()
        }
        else {
            obj[property] = a.prop
        }
    }
}

