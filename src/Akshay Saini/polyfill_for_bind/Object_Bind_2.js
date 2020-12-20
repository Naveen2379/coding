const user = {
    name: 'John',
    age: 25,
    getInfo() {
        console.log('His name is '+this.name +' and his age is '+this.age);
        //return 'His name is '+this.name +' and his age is '+this.age;
    }
}

//user.getInfo();                             //His name is John and his age is 25


/* The method setTimeout in-browser is a little special: it sets this=window for the function call (for Node.js, this becomes the timer object,
but doesn’t really matter here). So for this.firstName it tries to get window.firstName, which does not exist. In other similar cases,
usually this just becomes undefined.*/
//setTimeout(user.getInfo, 2000);         //His name is undefined and his age is undefined



/*
const newFun = user.getInfo;
console.log(typeof newFun);         //function
newFun();                           //TypeError: Cannot read property 'name' of undefined*/
