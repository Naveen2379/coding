function outerFun() {
    let name = 'Naveen';
    function innerFun() {
        console.log(name);
    }
    innerFun();
}
outerFun();     //Naveen

function outerFun1() {
    let name = 'Ravi';
    function innerFun1() {
        function innerFun2() {
            console.log(name);
        }
        innerFun2();
    }
    innerFun1();
}
outerFun1();        //Ravi



/* lexical scoping  -Nested functions have access to variables declared in their outer scope.*/