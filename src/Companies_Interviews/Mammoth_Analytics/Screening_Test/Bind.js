function list() {
    console.log(arguments);         //[Arguments] { '0': 37 }
    console.log(arguments[0]);      //37
    return [].slice.call(arguments);
}

const leadingThirtySeven = list.bind(null, 37);
const list2 = leadingThirtySeven();
console.log(list2);

/*
function list() {
    return [].slice.call(arguments)
}

let list1 = list(1, 2, 3) // [1, 2, 3]
console.log(list1);
*/
