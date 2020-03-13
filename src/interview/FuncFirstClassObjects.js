console.log((function(){}).constructor === Function);
console.log(function () {});

let obj1 = {
    a: 'abc',
    b: 10,
    c: function () {
        console.log(this);
        console.log(this.a);
    }
};
console.log(obj1.a);
console.log(obj1.b);
obj1.c();
