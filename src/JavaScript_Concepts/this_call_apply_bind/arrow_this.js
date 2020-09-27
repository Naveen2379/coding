let obj = {
    a: 10,
    b: 20,
    c: function () {
        console.log(this);          //{ a: 10, b: 20, c: [Function: c], d: [Function: d] }
        return this.a+this.b;       //30
    },
    d: () => {
        console.log(this);          //{}
        console.log(this.a);        //undefined
        return this.a+this.b;       //NaN
    },
    /* making this available in an arrow function */
    e: function () {

                      //undefined
    },
    f: function () {
        let a = 50;
        console.log(a+this.b);      //70
        let arrow_fun = () => {
            console.log(a);         //50
            console.log(this.a);    //10
        }
        arrow_fun();
        return this.a + this.b;     //30
    }
}

//console.log(obj.c());
//console.log(obj.d());
//console.log(obj.e());
console.log(obj.f());