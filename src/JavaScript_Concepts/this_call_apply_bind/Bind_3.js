let obj  = {name: 'Naveen'};

let greeting = function (a, b) {
    return a + ' '+ this.name +', '+b;
}

const boundFun =  greeting.bind(obj);
console.log(boundFun('Greetings', 'You are Welcome.'));
