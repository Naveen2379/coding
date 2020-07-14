class ArrowClass {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName = function () {
        return this.firstName+" "+this.lastName;
    }

    fullNameArrow = () => {
        return this.firstName+" "+this.lastName;
    }

    fullNameThis = function () {
        let fName = this.firstName;
        let lName = this.lastName;
        function f() {
            console.log(this);                  //undefined
            console.log(fName+" "+lName);
        }
        f();
    }
    fullNameThis1 = function (fName,lName) {
        function f() {
            console.log(this);              //undefined
            console.log(fName+" "+lName);
        }
        f();
    }
    fullNameThis2 = function () {
        console.log(this);                         /*ArrowClass {
                                                      fullName: [Function: fullName],
                                                      fullNameArrow: [Function: fullNameArrow],
                                                      fullNameThis: [Function: fullNameThis],
                                                      fullNameThis1: [Function: fullNameThis1],
                                                      fullNameThis2: [Function: fullNameThis2],
                                                      fullNameThisFinal: [Function: fullNameThisFinal],
                                                      firstName: 'naveen',
                                                      lastName: 'kairamkonda'
                                                    }*/
        function f() {
            console.log(this.firstName+" "+this.lastName);
        }
        f();
    }
    fullNameThisFinal = function () {
        let fun = () => {
            console.log(this.firstName+" "+this.lastName);
        }
        fun();
    }

}

let ar1 = new ArrowClass('naveen','kairamkonda');
//console.log(ar1.fullName());            //naveen kairamkonda
//console.log(ar1.fullNameArrow());       //naveen kairamkonda
//ar1.fullNameThis();        //naveen kairamkonda
//ar1.fullNameThis1('ravi','kuamr');        //ravi kuamr
ar1.fullNameThis2();                        //firstName not defined
//ar1.fullNameThisFinal();                    //naveen kairamkonda
