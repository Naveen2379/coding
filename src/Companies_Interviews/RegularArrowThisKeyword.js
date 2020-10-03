/*
let profile = {
    firstName: '',
    lastName: '',
    setName: function (name) {
        let splitName = function(n) {
            let nameArray = n.split(' ');
            console.log(this.firstName);    //undefined
            console.log(this.lastName);     //undefined
            this.firstName = nameArray[0];      //it sets to window object as it has its own this
            this.lastName = nameArray[1];       //it sets to window object as it has its own this
        };
        splitName(name);
        console.log('first name: ', firstName); //Rana
        console.log('last name: ', lastName);   //Daggubati
        console.log('first name: ', this.firstName);    //first name: (nothing)
        console.log('last name: ', this.lastName);      //last name:  (nothing)
    }
};
profile.setName('Rana Daggubati');
console.log('first name: ',profile.firstName); //first name: (nothing)
console.log(window.firstName);              //Rana (as it's not in browser, it throwing error saying 'window is not defined')
*/
let profile = {
    firstName: '',
    lastName: '',
    setName: function (name) {
        let splitName = (n) => {
            let nameArray = n.split(' ');
            console.log(this.firstName);    //''
            console.log(this.lastName);     //''
            console.log(this);
            this.firstName = nameArray[0];
            this.lastName = nameArray[1];
            console.log(this.firstName);    //''
            console.log(this.lastName);     //''
        };
        splitName(name);
        //console.log('first name: ', firstName); //firstName is not defined  -error
        //console.log('last name: ', lastName);   //lastName is not defined  -error
        console.log('first name: ', this.firstName);    //first name: Rana
        console.log('last name: ', this.lastName);      //last name: Daggubati
    }
};
console.log('firstName: '+ typeof profile.firstName);  //empty string
profile.setName('Rana Daggubati');
console.log('first name: ', profile.firstName); //first name: Rana
