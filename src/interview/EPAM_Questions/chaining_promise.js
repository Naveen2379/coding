class Sum {
    constructor() {
        this.value = 10;
    }
    add(x) {
        //this.value = this.value+x;
        return new Promise((resolve, reject) => {
            this.value = this.value+x;
            resolve('kpkkpkpp');
            reject('in reject');
        });
        //return this;
    }

    temp() {
        setTimeout(()=> {console.log('in settimeout')}, 5000);
        return this;
    }
}

let sum1 = new Sum();
let c = sum1.add(10).then((res) => {
    console.log('in then');
    console.log(res);
    res.temp();
});
//.add(20).add(30);

//console.log(c); 