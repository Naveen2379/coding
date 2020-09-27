/* with setTimeOut */
/*
* By default within window.setTimeout(), the this keyword will be set to the window (or global) object.
* When working with class methods that require this to refer to class instances, you may explicitly bind this to the callback function,
* in order to maintain the instance.
* */


function LateBloom() {
    this.petalCount = Math.floor(Math.random()*12)+1;
}

LateBloom.prototype.declare = function () {
    console.log('declare fun');
    console.log(this);
    console.log(`I am beautiful flower with ${this.petalCount} petals!`);
}


//declare bloom after a delay of 1 second
LateBloom.prototype.bloom = function (outerFun) {
    setTimeout(() => {
        console.log('setTimeOut');
        console.log(this.declare());

       /* const boundFun = this.declare.bind(this);    /!*this.declare --> this keyword will be set on the global/window object,
                                                      we used 'this' to bind the declare callback function to the LateBloom class instance using
                                                      this.declare.bind(this)*!/
        boundFun();*/

    }, 1000);
    /*setTimeout( () => {
        console.log('setTimeOut');
        outerFun();
    }, 1000);*/
}

function outerFun() {
    console.log('this is an outer function');
}




let flower = new LateBloom();
flower.bloom();
flower.declare();
// flower.bloom(outerFun);