let obj = {
    firstName: 'Kairamkonda',
    lastName: 'Naveen',
    fun: function () {
        console.log(this.firstName);        //Kairamkonda
        //console.log(firstName);                 //Kairamkonda, ReferenceError: firstName is not defined
        function func() {
            console.log(this.firstName);            //undefined
        }
    },
    fun2: () => {
        return this.firstName+" "+this.lastName;            //undefined undefined
    },
    funFinal: function() {
        fun = () => {
            console.log('in arrow fun');
            console.log(this.firstName+' '+this.lastName);         //Kairamkonda Naveen
        }
        fun();
        return this.firstName+" "+this.lastName;            //Kairamkonda Naveen
    }
}

//console.log(obj.fun());      //Kairamkonda, ReferenceError: firstName is not defined
//console.log(obj.fun2());       //undefined undefined
console.log(obj.funFinal());        //Kairamkonda Naveen, undefined