const name  = {
    fName: 'Naveen',
    lName: 'Kairamkonda',
    fullName : function () {
        console.log(fName + " " + lName);
    }
}
//name.fullName();            //ReferenceError: fName is not defined

const name1  = {
    firstName: 'Naveen',
    lastName: 'Kairamkonda',
    fullName : function () {
        console.log(this);                                  /* {
                                                                  firstName: 'Naveen',
                                                                  lastName: 'Kairamkonda',
                                                                  fullName: [Function: fullName]
                                                                }
                                                            */
        console.log(this.firstName + " " + this.lastName);
    }
}

name1.fullName();            //Naveen Kairamkonda
