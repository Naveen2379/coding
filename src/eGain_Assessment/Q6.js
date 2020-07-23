function Base4(num) {
    this.num = num;
}

Base4.prototype = {
    num: 4
}

function Derived4() {
    Base4.apply(this, arguments);
}

let d = new Derived4(2);
console.log(d.num);