async function fun1() {
    console.log('first statement');
    setTimeout(() => {
        console.log('within async function')
    }, 2000);
    console.log('last statement');
    return Promise.resolve(1).then(res => res);
}
fun1().then(res => console.log(res));
//const prom1 = fun1();
//console.log(prom1);