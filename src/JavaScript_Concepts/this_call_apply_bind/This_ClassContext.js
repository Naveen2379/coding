/* Classes are a template for creating objects. They encapsulate data with code to work on that data.
* */

class Rectangle {
    constructor() {
        const proto = Object.getPrototypeOf(this);
        console.log(Object.getOwnPropertyNames(proto));         //[ 'constructor', 'f1', 'f2' ]
        /* within a class constructor, this is an regular object. All non-static methods within the class are added to the prototype of 'this' */
    }

    f1() {
        console.log('first');
        console.log(this);
        console.log(this.isPrototypeOf(Rectangle));         //false
    }

    f2() {
        console.log('second');
        console.log(this);

    }

    static f3() {
        console.log('third');
        console.log(this);
    }
}

console.log(new Rectangle());           //Reactangle {}
let obj = new Rectangle();
console.log(obj);       //Reactangle {}
obj.f1();               //first
                        // Rectangle {}

//obj.f3();               //Error: obj.f3 is not a function
